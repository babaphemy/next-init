'use client';
import { FC } from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Gmap from '../../components/contact/Gmap';

const ContactPage: FC = () => {
  // const handleDirections = () => {
  //   window.open(
  //     `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(AppData.address)}`,
  //   );
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Gmap />
        </div>
        <div className="lg:col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
