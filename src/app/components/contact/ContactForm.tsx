'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppData } from '@/app/data';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = () => {};

  return (
    <main className="flex-grow max-w-lg mx-auto py-12">
      <Card className="overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground pb-8">
          <CardTitle className="text-2xl font-bold text-center">
            Contact Us
          </CardTitle>
          <p className="text-sm text-primary-foreground/80 text-center mt-2">
            {AppData.contactForm.message}
          </p>
        </CardHeader>

        <CardContent className="p-8 -mt-4 bg-background rounded-t-xl relative">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  className="rounded-lg transition-shadow duration-200 focus:shadow-md"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg transition-shadow duration-200 focus:shadow-md"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="rounded-lg transition-shadow duration-200 focus:shadow-md"
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                className="rounded-lg transition-shadow duration-200 focus:shadow-md"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                className="min-h-[120px] rounded-lg resize-none transition-shadow duration-200 focus:shadow-md"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg py-6 text-base font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default ContactForm;
