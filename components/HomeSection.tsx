import React from "react";
import { FaHome, FaChild, FaHeart, FaBiking } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const whatsappUrlEs = `https://wa.me/12508843091?text=Hola%20Mi%20Alegria%20Daycare!%20Quisiera%20agendar%20una%20visita%20de%20ser%20posible.`;
  const whatsappUrlEn = `https://wa.me/12508843091?text=Hello%20Mi%20Alegria%20Daycare!%20I%20would%20like%20to%20schedule%20a%20visit%20if%20possible.`;

  const whatsappUrl = i18n.language.startsWith("es")
    ? whatsappUrlEs
    : whatsappUrlEn;

  const emailSubjectEs = "Consulta sobre servicios";
  const emailSubjectEn = "Inquiry about services";
  const emailBodyEs =
    "Hola, me gustaría obtener más información sobre sus servicios.";
  const emailBodyEn = "Hello, I would like to know more about your services.";

  // Verifica el idioma actual y ajusta el contenido del correo
  const emailSubject = i18n.language.startsWith("es")
    ? emailSubjectEs
    : emailSubjectEn;
  const emailBody = i18n.language.startsWith("es") ? emailBodyEs : emailBodyEn;

  // Crea el enlace mailto con el asunto y cuerpo adecuados
  const mailtoLink = `mailto:contacto@tuhotel.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("homeSection.hero.title")}
              </h1>
              <p className="text-xl mb-6">{t("homeSection.hero.subtitle")}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("homeSection.hero.cta")}
                </Link>
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white  rounded-lg shadow-xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-4.jpeg?alt=media&token=65c17769-9763-4976-bba4-b012c9e4d953"
                  alt={t("homeSection.hero.altImage")}
                  className="rounded-lg mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {t("homeSection.features.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaHome className="text-blue-500" />}
            title={t("homeSection.features.safe.title")}
            description={t("homeSection.features.safe.description")}
            bgColor="bg-blue-200/30"
          />
          <FeatureCard
            icon={<FaChild className="text-purple-500" />}
            title={t("homeSection.features.learning.title")}
            description={t("homeSection.features.learning.description")}
            bgColor="bg-purple-200/30"
          />
          <FeatureCard
            icon={<FaHeart className="text-red-500" />}
            title={t("homeSection.features.caring.title")}
            description={t("homeSection.features.caring.description")}
            bgColor="bg-red-200/30"
          />
          <FeatureCard
            icon={<FaBiking className="text-green-500" />}
            title={t("homeSection.features.active.title")}
            description={t("homeSection.features.active.description")}
            bgColor="bg-green-200/30"
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("homeSection.mission.title")}
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            {t("homeSection.mission.description")}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          {t("homeSection.callToAction.title")}
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          {t("homeSection.callToAction.subtitle")}
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            <Link href={mailtoLink} target="_blank" rel="noopener noreferrer">
              {t("homeSection.callToAction.contactButton")}
            </Link>
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            <Link href="/about">
              {t("homeSection.callToAction.learnMoreButton")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} bg-white p-6 rounded-lg shadow-lg text-center`}>
      <div className="text-4xl mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomeSection;
