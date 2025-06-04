"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCirclePlay, FaCirclePause, FaCircleStop } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";

import { BiSolidQuoteRight } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

import Link from "next/link";
import { useTranslation } from "react-i18next";

// const isMobile =
//   typeof window !== "undefined" &&
//   /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const isMobile =
  typeof window !== "undefined" &&
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

interface Reference {
  text: string;
  url: string;
}

interface ArticleCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  author: string;
  paragraph_1: string;
  paragraph_2?: string;
  paragraph_3?: string;
  paragraph_4?: string;
  paragraph_5?: string;
  paragraph_6?: string;
  quoteBg: string;
  quote: string;
  quoteColor: string;
  quoteBorder: string;
  references?: Reference[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  subtitle,
  imageUrl,
  author,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
  paragraph_5,
  paragraph_6,
  quoteBg,
  quote,
  quoteColor,
  quoteBorder,
  references = [],
}) => {
  const { t, i18n } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);
  const estimatedDurationRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = () => {
    // Si ya está hablando y está pausado, reanudar
    if (isSpeaking && isPaused) {
      handleResume();
      return;
    }

    // Si ya está hablando, detener antes de comenzar de nuevo
    if (isSpeaking) {
      handleStop();
    }

    const textToRead = [
      t(title),
      subtitle ? t(subtitle) : "",
      t(paragraph_1),
      paragraph_2 ? t(paragraph_2) : "",
      paragraph_3 ? t(paragraph_3) : "",
      paragraph_4 ? t(paragraph_4) : "",
      paragraph_5 ? t(paragraph_5) : "",
      paragraph_6 ? t(paragraph_6) : "",
      quote ? t(quote) : "",
    ].join(". ");

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = i18n.language === "es" ? "es-MX" : "en-US";
    utterance.volume = 1.0; // Asegura volumen máximo
    utterance.rate = 1.0; // Velocidad normal
    utterance.pitch = 1.0; // Tono medio
    utteranceRef.current = utterance;

    // Configuramos eventos para manejar el final de la reproducción
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setProgress(100);
      // Resetear después de un breve tiempo
      setTimeout(() => setProgress(0), 500);
      accumulatedTimeRef.current = 0;
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setProgress(0);
      accumulatedTimeRef.current = 0;
    };

    // Cancelar cualquier reproducción en curso
    speechSynthesis.cancel();
    setTimeout(() => {
      speechSynthesis.speak(utterance);
    }, 100);
    speechSynthesis.speak(utterance);

    // Estimación de duración en base a número de palabras (400ms por palabra)
    const wordCount = textToRead.split(/\s+/).length;
    estimatedDurationRef.current = wordCount * 400;

    startTimeRef.current = Date.now();
    // Limpiar intervalo previo si existe
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsSpeaking(true);
    setIsPaused(false);
    setProgress(0);
    accumulatedTimeRef.current = 0;

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min(
        (elapsed / estimatedDurationRef.current) * 100,
        100
      );

      setProgress(percent);
      currentProgressRef.current = percent;

      // Detener automáticamente al completar
      if (percent >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 100);
  };

  const handlePause = () => {
    if (!isSpeaking) return;

    speechSynthesis.pause();
    setIsPaused(true);

    // Guardar el tiempo acumulado
    accumulatedTimeRef.current += Date.now() - startTimeRef.current;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleResume = () => {
    if (!isSpeaking || !isPaused) return;

    speechSynthesis.resume();
    setIsPaused(false);

    startTimeRef.current = Date.now();

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const elapsed =
        accumulatedTimeRef.current + (Date.now() - startTimeRef.current);
      const percent = Math.min(
        (elapsed / estimatedDurationRef.current) * 100,
        100
      );

      setProgress(percent);
      currentProgressRef.current = percent;

      if (percent >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 100);
  };

  const handleStop = () => {
    setIsSpeaking(false);
    setIsPaused(false);
    speechSynthesis.cancel();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setProgress(0);
    accumulatedTimeRef.current = 0;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden rounded-lg shadow-xl"
        style={{
          minHeight: "500px",
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        title={title}
      ></div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal shadow-lg">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10 rounded-lg">
            <h1 className="text-gray-900 font-medium text-4xl mb-3">
              {t(title)}
            </h1>
            {subtitle && (
              <h2 className="text-gray-600 text-xl font-medium mb-4">
                {t(subtitle)}
              </h2>
            )}

            {/* Botones de control de voz */}
            <p className="text-gray-600 text-sm mb-2">
              {t("blog.listen")} <HiSpeakerWave className="inline h-8 " />{" "}
            </p>
            <div className="flex flex-wrap gap-3 mb-2">
              <button
                onClick={handleSpeak}
                disabled={isSpeaking && !isPaused}
                className={`flex items-center  ${
                  isSpeaking && !isPaused
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium py-2 px-4 rounded-full shadow transition-all`}
              >
                {isPaused ? (
                  <>
                    <FaCirclePlay />
                    {/* {t("Reanudar")} */}
                  </>
                ) : (
                  <>
                    {/* {t("Escuchar artículo")} */}
                    <FaCirclePlay />
                  </>
                )}
              </button>

              {/* <button
                onClick={handlePause}
                disabled={!isSpeaking || isPaused}
                className={`flex items-center  ${
                  !isSpeaking || isPaused
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium py-2 px-4 rounded-full shadow transition-all`}
              >
                <FaCirclePause />
                {/* {t("Pausar")} */}
              {/* </button> */}
              {!isMobile && (
                <button
                  onClick={handlePause}
                  disabled={!isSpeaking || isPaused}
                  className={`flex items-center  ${
                    !isSpeaking || isPaused
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white font-medium py-2 px-4 rounded-full shadow transition-all`}
                  title={t("Pausar")}
                  aria-label={t("Pausar")}
                >
                  <FaCirclePause />
                  <span className="sr-only">{t("Pausar")}</span>
                </button>
              )}

              <button
                onClick={handleStop}
                disabled={!isSpeaking}
                className={`flex items-center  ${
                  !isSpeaking
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                } text-white font-medium py-2 px-4 rounded-full shadow transition-all`}
              >
                <FaCircleStop />

                {/* {t("Detener")} */}
              </button>
            </div>

            {/* Barra de progreso con indicador */}
            <div className="mb-6 ">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{Math.round(progress)}%</span>
                <span>
                  {isSpeaking
                    ? isPaused
                      ? t("blog.paused")
                      : t("blog.playing")
                    : t("blog.readyToPlay")}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="text-justify">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="rounded-xl w-16 h-16"
                    src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/priscila-spahn.jpg?alt=media&token=25570c91-d733-49b7-89d8-5ec05e20aff3"
                    alt="Priscila Spahn"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    {t("blog.writtenBy")}:{" "}
                    <span className="text-indigo-600">{author}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{t("blog.autorRole")}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                {t(paragraph_1)}
              </p>

              {quote && (
                <blockquote
                  className={`border-l-4  ${quoteBg} text-lg italic leading-relaxed my-6 p-5 text-gray-700 rounded-r-lg ${quoteBorder}`}
                >
                  {/* <svg
                    className="w-8 h-8 mb-4 text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg> */}
                  <BiSolidQuoteRight
                    className={`w-8 h-8 mb-4 ${quoteColor} `}
                  />
                  {t(quote)}
                </blockquote>
              )}

              {paragraph_2 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_2)}
                </p>
              )}

              {paragraph_3 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_3)}
                </p>
              )}

              {paragraph_4 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_4)}
                </p>
              )}

              {paragraph_5 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_5)}
                </p>
              )}

              {paragraph_6 && (
                <p className="text-gray-700 leading-relaxed mb-5 text-lg">
                  {t(paragraph_6)}
                </p>
              )}
            </div>

            {/* Referencias */}
            {references && references.length > 0 && (
              <div className="mt-10 border-t pt-5">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t("Referencias")}
                </h3>
                <ul className="space-y-3">
                  {references.map((ref, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline transition-colors"
                      >
                        {t(ref.text)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Botones finales */}
      <div className="flex justify-center space-x-4 mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full shadow-lg">
          <Link href="/contact">
            {t("homeSection.callToAction.contactButton")}
          </Link>
        </button>
        <button className="bg-primary-dark hover:bg-pink-500 text-white font-medium py-3 px-6 rounded-full shadow-lg">
          <Link href="/blog">{t("blog.moreBlogs")}</Link>
        </button>
      </div>

      {/* Indicador de estado */}
      {isSpeaking && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 bg-white shadow-lg rounded-lg p-3 flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isPaused ? "bg-yellow-400" : "bg-green-500"
            } animate-pulse`}
          ></div>
          <span className="text-gray-700 font-medium text-sm">
            {isPaused ? t("blog.playingPaused") : t("blog.playingArticle")}
          </span>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
