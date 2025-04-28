import React from 'react';
import { FaHome, FaChild, FaHeart, FaBiking } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('homeSection.hero.title')}</h1>
              <p className="text-xl mb-6">{t('homeSection.hero.subtitle')}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                {t('homeSection.hero.cta')}
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white  rounded-lg shadow-xl">
                <img src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-4.jpeg?alt=media&token=65c17769-9763-4976-bba4-b012c9e4d953" alt={t('homeSection.hero.altImage')} className="rounded-lg mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('homeSection.features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<FaHome className="text-blue-500" />}
            title={t('homeSection.features.safe.title')}
            description={t('homeSection.features.safe.description')}
          />
          <FeatureCard 
            icon={<FaChild className="text-purple-500" />}
            title={t('homeSection.features.learning.title')}
            description={t('homeSection.features.learning.description')}
          />
          <FeatureCard 
            icon={<FaHeart className="text-red-500" />}
            title={t('homeSection.features.caring.title')}
            description={t('homeSection.features.caring.description')}
          />
          <FeatureCard 
            icon={<FaBiking className="text-green-500" />}
            title={t('homeSection.features.active.title')}
            description={t('homeSection.features.active.description')}
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('homeSection.mission.title')}</h2>
          <p className="text-xl max-w-3xl mx-auto">
            {t('homeSection.mission.description')}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('homeSection.callToAction.title')}</h2>
        <p className="text-xl mb-8 text-gray-600">{t('homeSection.callToAction.subtitle')}</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            {t('homeSection.callToAction.contactButton')}
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            {t('homeSection.callToAction.learnMoreButton')}
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
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomeSection;
