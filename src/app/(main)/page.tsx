import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AppData } from '@/app/data';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative border-b bg-muted/30">
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {AppData.name}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Quality learning, built for growth
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              A modern foundation for education and training. Customize this
              template to launch your courses, programs, or institution.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="min-w-[160px]">
                <Link href="/contact">Get in touch</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="min-w-[160px]"
              >
                <Link href="/about">About us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Simple, focused structure
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three clear steps to get you from idea to launch
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Define your goals',
                description:
                  'Clarify your audience, outcomes, and how you want to deliver content.',
              },
              {
                step: '2',
                title: 'Configure the template',
                description:
                  'Use this codebase as a starting point. Customize copy, routes, and branding.',
              },
              {
                step: '3',
                title: 'Launch and iterate',
                description:
                  'Go live and improve over time with feedback and analytics.',
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                    {item.step}
                  </span>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              What’s included
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to run a professional site
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Next.js app router',
                desc: 'File-based routing and layouts.',
              },
              {
                title: 'Authentication',
                desc: 'NextAuth integration ready to configure.',
              },
              {
                title: 'Responsive layout',
                desc: 'Works on mobile, tablet, and desktop.',
              },
              {
                title: 'Contact & forms',
                desc: 'Contact page and form components.',
              },
              {
                title: 'Dashboard shell',
                desc: 'Protected dashboard layout and roles.',
              },
              {
                title: 'Design system',
                desc: 'Consistent typography, colors, and components.',
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="border-border bg-card shadow-sm"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Check className="h-4 w-4 shrink-0 text-foreground" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser + CTA */}
      <section className="border-b bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Built for educators and teams
              </h2>
              <p className="mt-4 text-muted-foreground">
                {AppData.footer.message1}
              </p>
              <p className="mt-4 text-muted-foreground">
                {AppData.footer.message2}
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/about.png"
                alt="About"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Trusted by teams
            </h2>
            <p className="mt-3 text-muted-foreground">
              A flexible base for courses, academies, and training
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  'Clean structure and easy to customize. We had our site live in a week.',
                author: 'Sarah J.',
                role: 'Learning lead',
              },
              {
                quote:
                  'The auth and dashboard setup saved us a lot of time. Solid foundation.',
                author: 'Michael C.',
                role: 'Tech lead',
              },
              {
                quote:
                  'Professional look out of the box. We only tweaked copy and colors.',
                author: 'Emma R.',
                role: 'Product owner',
              },
            ].map((t) => (
              <Card key={t.author} className="border-border bg-card shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
            Reach out with questions or start customizing this template for your
            project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="min-w-[160px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/user/register">Create account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
