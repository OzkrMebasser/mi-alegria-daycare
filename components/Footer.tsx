'use client';

import { useTranslation } from 'react-i18next';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl text-primary-dark mb-4">Mi Alegría</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaMapMarkerAlt />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mt-2">
              <FaPhone />
              <span>{t('footer.phone')}</span>
            </div>
          </div>
          
          <div className="md:col-span-2 flex justify-end items-end">
            <p className="text-gray-600">
              © {currentYear} Mi Alegría Daycare. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;