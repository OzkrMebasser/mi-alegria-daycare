"use client";
import Link from "next/link";

import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);

  // Schema de validación con yup usando tus mensajes de traducción
  const schema = yup.object().shape({
    name: yup.string().required(t("contact.form.validation.name")),
    email: yup
      .string()
      .required(t("contact.form.validation.email"))
      .email(t("contact.form.validation.email")),
    subject: yup.string().required(t("contact.form.validation.subject")),
    message: yup.string().required(t("contact.form.validation.message")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const canSendEmail = () => {
    const lastSent = localStorage.getItem("lastEmailSent");
    if (!lastSent) return true;
    const now = Date.now();
    const diff = now - parseInt(lastSent, 10);
    return diff > 2 * 60 * 1000; // 2 minutos
  };

  const onSubmit = async (data: FormValues) => {
    if (!canSendEmail()) {
      setError(t("contact.form.rateLimit"));
      return;
    }

    setError("");
    setSuccess("");

    try {
      await emailjs.send(
        "service_qa0g9xz",
        "template_02ypadr",
        {
          from_name: data.name,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        },
        "rZ6_7d53He4pfv50b"
      );

      setSuccess(t("contact.form.success") || "Message sent successfully!");
      localStorage.setItem("lastEmailSent", Date.now().toString());
      reset();
    } catch (err) {
      console.error(err);
      setError(t("contact.form.error") || "Failed to send message.");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 6000); // 6 segundos

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-medium text-center text-gray-800 mb-2">
          {t("contact.title")}
        </h1>

        <h3 className="text-xl font-medium text-center text-gray-800 mb-12">
          {t("contact.subtitle")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="order-2 md:order-1  relative py-3 sm:max-w-xl sm:mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-blue-500 shadow-lg transform -rotate-[5deg] rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-yellow-500 shadow-lg transform rotate-[5deg] rounded-3xl" />
            <div className="text-white relative px-4 py-10 bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-3xl sm:p-10">
              <div className="text-center pb-6">
                <h2 className="text-3xl">{t("contact.formTitle")}</h2>
                <p className="text-gray-300">{t("contact.formSubtitle")}</p>
              </div>

              {error && (
                <p className="bg-red-500  text-center mb-4 font-semibold rounded-lg p-2 text-white">
                  {error}
                </p>
              )}

              {success && (
                <p className="bg-green-500 text-center mb-4 font-semibold rounded-lg py-3 text-white">
                  {success}
                </p>
              )}
              {/*Validation name */}

              {errors.name && (
                <p className="bg-red-400 text-center mb-4 font-semibold rounded-lg py-3 text-white">
                  {errors.name.message}
                </p>
              )}
              <form onSubmit={handleSubmit(onSubmit)} ref={formRef} noValidate>
                <input
                  {...register("name")}
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  aria-invalid={!!errors.name}
                />

                {/*Validation email */}
                {errors.email && (
                  <p className="bg-red-400 text-center mb-4 font-semibold rounded-lg py-3 text-white">
                    {errors.email.message}
                  </p>
                )}
                <input
                  {...register("email")}
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  aria-invalid={!!errors.email}
                />
                {/*Validation subject */}
                {errors.subject && (
                  <p className="bg-red-400 text-center mb-4 font-semibold rounded-lg py-3 text-white">
                    {errors.subject.message}
                  </p>
                )}
                <input
                  {...register("subject")}
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  name="subject"
                  placeholder={t("contact.form.subject")}
                  aria-invalid={!!errors.subject}
                />

                {/*Validation message */}
                {errors.message && (
                  <p className="bg-red-400 text-center mb-4 font-semibold rounded-lg py-3 text-white">
                    {errors.message.message}
                  </p>
                )}
                <textarea
                  {...register("message")}
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  name="message"
                  placeholder={t("contact.form.message")}
                  style={{ height: "121px" }}
                  aria-invalid={!!errors.message}
                ></textarea>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white hover:bg-purple-800 text-purple-800  hover:text-white font-medium py-3 px-6 rounded-full shadow-lg"
                  >
                    {t("contact.form.submit")} ➤
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2  flex justify-center">
            <img
              src="https://images.pexels.com/photos/4959712/pexels-photo-4959712.jpeg"
              alt="Contact us"
              className="rounded-3xl relative shadow-lg w-full object-cover max-h-[480px] lg:max-h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
