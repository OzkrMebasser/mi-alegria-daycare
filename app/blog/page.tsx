'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: 'The Importance of Early Childhood Education',
      excerpt: 'Discover why the first years of education are crucial for your child\'s development...',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: '2024-03-15',
    },
    {
      title: 'Benefits of Bilingual Learning',
      excerpt: 'How learning multiple languages at an early age enhances cognitive development...',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: '2024-03-10',
    },
    {
      title: 'Creative Activities for Toddlers',
      excerpt: 'Fun and educational activities to try with your little ones at home...',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: '2024-03-05',
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-center text-gray-800 mb-12">
          {t('nav.blog')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <h2 className="font-display text-xl text-gray-800 mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="text-primary-dark hover:text-primary font-semibold"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}