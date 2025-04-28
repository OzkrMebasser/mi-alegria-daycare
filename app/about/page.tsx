'use client';

import { useTranslation } from 'react-i18next';
import { FaHeart, FaStar, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import Image from 'next/image';
import AboutUsSection from '@/components/AboutUsSection';

export default function About() {
  const { t } = useTranslation();

  // const values = [
  //   { icon: FaHeart, value: t('about.values.items.0') },
  //   { icon: FaStar, value: t('about.values.items.1') },
  //   { icon: FaGlobe, value: t('about.values.items.2') },
  //   { icon: FaHandsHelping, value: t('about.values.items.3') },
  // ];

  return (
    <>
    <AboutUsSection />
    </>
    // <div className="min-h-screen">
    //   {/* Hero Section */}
    //   <section className="relative h-[400px]">
    //     <Image
    //       src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    //       alt="Children playing together"
    //       fill
    //       className="object-cover"
    //       priority
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    //         <div className="max-w-2xl">
    //           <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
    //             {t('about.title')}
    //           </h1>
    //           <p className="text-xl text-white">
    //             {t('about.mission')}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Values Section */}
    //   <section className="py-16 bg-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="font-display text-3xl text-center text-gray-800 mb-12">
    //         {t('about.values.title')}
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {values.map((item, index) => (
    //           <div
    //             key={index}
    //             className="bg-secondary-light rounded-lg p-6 text-center hover:transform hover:-translate-y-1 transition-transform duration-300"
    //           >
    //             <item.icon className="w-12 h-12 mx-auto text-secondary-dark mb-4" />
    //             <p className="text-gray-800 font-semibold">{item.value}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Team Photos */}
    //   <section className="py-16 bg-primary-light/10">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="relative h-[300px] rounded-lg overflow-hidden">
    //           <Image
    //             src="https://images.unsplash.com/photo-1544140708-514b7837e6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    //             alt="Teacher with children"
    //             fill
    //             className="object-cover"
    //           />
    //         </div>
    //         <div className="relative h-[300px] rounded-lg overflow-hidden">
    //           <Image
    //             src="https://images.unsplash.com/photo-1602001313216-95c9f42a1207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    //             alt="Children playing"
    //             fill
    //             className="object-cover"
    //           />
    //         </div>
    //         <div className="relative h-[300px] rounded-lg overflow-hidden">
    //           <Image
    //             src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    //             alt="Art activity"
    //             fill
    //             className="object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}