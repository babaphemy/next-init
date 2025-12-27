import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ReachAILanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <Badge className="bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 border-none px-3 py-1">
                Just Launched
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Build Your Website in{' '}
                <span className="text-blue-300">Seconds</span>, Not Months
              </h1>
              <p className="text-lg text-blue-100 md:pr-8">
                ReachAI uses advanced AI to generate stunning,
                conversion-optimized websites instantly. No coding, no design
                skills, no waiting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700/20"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-sm opacity-75"></div>
                <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-blue-400/30">
                  <Image
                    src="/api/placeholder/800/500"
                    alt="ReachAI Dashboard Preview"
                    className="w-full h-auto"
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How ReachAI Works
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Generate a complete, customized website in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Describe Your Business',
                description:
                  'Tell us about your business, goals, and target audience in plain language.',
              },
              {
                step: '2',
                title: 'AI Generates Your Site',
                description:
                  'Our AI creates a fully functional website with optimized copy, images, and structure.',
              },
              {
                step: '3',
                title: 'Publish & Customize',
                description:
                  'Go live instantly or fine-tune any element to make it perfectly yours.',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative border-none shadow-lg bg-white"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything You Need
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Powerful features that make ReachAI the smartest way to create
              your web presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Driven Content',
                description:
                  'Automatically generate SEO-optimized copy that converts visitors to customers.',
              },
              {
                title: 'Responsive Design',
                description:
                  'Every site looks perfect on all devices from mobile phones to desktop computers.',
              },
              {
                title: 'Built-in SEO',
                description:
                  'Rank higher on Google with our search engine optimization best practices.',
              },
              {
                title: 'Analytics Dashboard',
                description:
                  'Track visitors, engagement, and conversions with easy-to-understand metrics.',
              },
              {
                title: 'Custom Domain',
                description:
                  'Connect your own domain or purchase one directly through our platform.',
              },
              {
                title: 'Regular Updates',
                description:
                  'AI continuously improves your site based on performance data and trends.',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose the plan that&apos;s right for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$19',
                description:
                  'Perfect for solo entrepreneurs and small businesses',
                features: [
                  '1 website',
                  'AI content generation',
                  'Basic analytics',
                  'Custom domain',
                  'Email support',
                ],
              },
              {
                name: 'Professional',
                price: '$49',
                description: 'Ideal for growing businesses with more needs',
                features: [
                  '3 websites',
                  'Advanced AI content',
                  'Full analytics suite',
                  'Custom domains',
                  'Priority support',
                  'A/B testing',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '$99',
                description: 'For businesses with advanced requirements',
                features: [
                  '10 websites',
                  'Premium AI content',
                  'Advanced analytics',
                  'Custom domains',
                  '24/7 phone support',
                  'A/B testing',
                  'White labeling',
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`border ${plan.highlighted ? 'border-blue-500 shadow-xl shadow-blue-100' : 'border-gray-200 shadow-sm'}`}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <Badge className="w-fit mb-2">Most Popular</Badge>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied businesses who have transformed their
              online presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'ReachAI built me a better website in 2 minutes than my previous developer did in 2 months.',
                author: 'Sarah Johnson',
                company: 'Bloom Boutique',
              },
              {
                quote:
                  'Our conversion rate increased by 43% after switching to a ReachAI-generated website.',
                author: 'Michael Chen',
                company: 'TechStart Solutions',
              },
              {
                quote:
                  'I was skeptical about AI-generated websites until I tried ReachAI. The results speak for themselves.',
                author: 'Emma Rodriguez',
                company: 'Wellness Studio',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-gray-700 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join the thousands of businesses saving time and money with
            ReachAI&apos;s instant website generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700/20"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ReachAI</h3>
              <p className="text-sm">
                Build stunning websites in seconds with the power of artificial
                intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>
              © {new Date().getFullYear()} ReachAI, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
