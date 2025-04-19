"use client";

import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import HeroImgSlider from '@/components/HeroImgSlider';
import Image from 'next/image';



const images = [
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-1.jpg?alt=media&token=eb044a76-2304-4b50-b949-edcb215f3a1a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-2.jpeg?alt=media&token=d98bebe1-5b80-47a5-84e2-088ace5fac96",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-3.jpeg?alt=media&token=5b88fcc5-d81a-4e76-98a8-864e5a50c255",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-4.jpeg?alt=media&token=65c17769-9763-4976-bba4-b012c9e4d953",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-5.jpeg?alt=media&token=c2259dc9-6fac-4675-bf32-9194c192ecd7",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-6.jpeg?alt=media&token=9dfb06b9-57cf-497a-99ec-31d648b654c9",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-7.jpeg?alt=media&token=eac98b4a-1452-48ec-bdf0-b75ebe6913b2",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-8.jpeg?alt=media&token=3fe17e6f-11c4-4ccc-9444-94ee41abfb78",
];

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FaShieldAlt,
      title: t('home.features.safe.title'),
      description: t('home.features.safe.description'),
    },
    {
      icon: FaGraduationCap,
      title: t('home.features.educational.title'),
      description: t('home.features.educational.description'),
    },
    {
      icon: FaLanguage,
      title: t('home.features.bilingual.title'),
      description: t('home.features.bilingual.description'),
    },
  ];

  return (
    <>
     <Navbar />
     <div className="min-h-screen">
      {/* Hero Section */}
    <HeroImgSlider images={images} />

      {/* <section className="relative h-[600px]">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/mi-alegria-daycare.jpeg?alt=media&token=1d16cd45-e788-45cd-a0b0-9049da9fdc92"
          alt="Happy children playing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl text-white mb-8">
                {t('home.hero.subtitle')}
              </p>
              <button className="bg-accent hover:bg-accent-dark text-gray-800 font-bold py-3 px-6 rounded-full transition-colors">
                {t('home.hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-center text-gray-800 mb-12">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary-light rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto text-secondary-dark mb-4" />
                <h3 className="font-display text-xl text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
   
  );
}