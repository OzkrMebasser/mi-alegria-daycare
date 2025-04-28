'use client';

import { useTranslation } from 'react-i18next';
import { FaBaby, FaChild, FaGraduationCap } from 'react-icons/fa';
import ServicesSection from '@/components/ServicesSection';
import Image from 'next/image';

export default function Services() {
  const { t } = useTranslation();

  const programs = [
    {
      icon: FaBaby,
      title: t('services.programs.infants.title'),
      age: t('services.programs.infants.age'),
      description: t('services.programs.infants.description'),
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      icon: FaChild,
      title: t('services.programs.toddlers.title'),
      age: t('services.programs.toddlers.age'),
      description: t('services.programs.toddlers.description'),
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      icon: FaGraduationCap,
      title: t('services.programs.preschool.title'),
      age: t('services.programs.preschool.age'),
      description: t('services.programs.preschool.description'),
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <>
    <ServicesSection />
    </>
    // <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h1 className="font-display text-4xl md:text-5xl text-center text-gray-800 mb-12">
    //       {t('services.title')}
    //     </h1>

    //     <div className="space-y-16">
    //       {programs.map((program, index) => (
    //         <div 
    //           key={index}
    //           className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
    //         >
    //           <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
    //             <Image
    //               src={program.image}
    //               alt={program.title}
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <div className="w-full md:w-1/2 space-y-4">
    //             <div className="flex items-center gap-4">
    //               <program.icon className="w-8 h-8 text-primary-dark" />
    //               <h2 className="font-display text-3xl text-gray-800">
    //                 {program.title}
    //               </h2>
    //             </div>
    //             <p className="text-lg font-semibold text-secondary-dark">
    //               {program.age}
    //             </p>
    //             <p className="text-gray-600 text-lg">
    //               {program.description}
    //             </p>
    //             <button className="bg-accent hover:bg-accent-dark text-gray-800 font-bold py-2 px-6 rounded-full transition-colors">
    //               {t('home.hero.cta')}
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}