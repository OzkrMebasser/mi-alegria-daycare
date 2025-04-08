'use client';

import { useTranslation } from 'react-i18next';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-center text-gray-800 mb-12">
          {t('contact.title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-primary-light focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 text-gray-600">
                <FaMapMarkerAlt className="w-6 h-6 text-primary-dark" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 text-gray-600">
                <FaPhone className="w-6 h-6 text-primary-dark" />
                <span>{t('footer.phone')}</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4 text-gray-600">
                <FaEnvelope className="w-6 h-6 text-primary-dark" />
                <span>info@mialegria.ca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}