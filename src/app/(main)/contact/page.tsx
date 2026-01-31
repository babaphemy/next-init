'use client';

import { FC } from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Gmap from '../../components/contact/Gmap';
import { AppData } from '@/app/data';

const ContactPage: FC = () => {
  return (
    <div className="border-b bg-background">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 text-muted-foreground">
            {AppData.contactForm.message}
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Gmap />
          </div>
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
