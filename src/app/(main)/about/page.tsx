import Image from 'next/image';
import { FC } from 'react';
import { AppData } from '@/app/data';

const About: FC = () => {
  return (
    <div className="border-b bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {AppData.name}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              About us
            </h1>
            <p className="text-muted-foreground">
              We are a team of professionals with a passion for education. Our
              goal is to empower individuals to achieve their full potential
              through learning.
            </p>
            <p className="text-muted-foreground">
              We are dedicated to making high-quality learning accessible to
              all, regardless of their background or location.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              src="/images/about.png"
              alt="About us"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
