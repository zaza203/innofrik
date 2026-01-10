'use client';

import { ArrowRight, CheckCircle, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  'Free 30-minute consultation',
  'Project estimate within 24 hours',
  '2-week risk-free trial',
  'No hidden fees',
];

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Call Today
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight leading-tight">
            Ready to Build Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Dream Development Team?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 150+ companies worldwide who trust Innofrik as their strategic
            technology partner. Start with a free consultation.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 font-medium"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="default"
              className="text-lg px-8 py-6 border-gray-600 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/products" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by companies from
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="text-lg font-medium">USA</span>
              <span className="text-gray-600">•</span>
              <span className="text-lg font-medium">Canada</span>
              <span className="text-gray-600">•</span>
              <span className="text-lg font-medium">UK</span>
              <span className="text-gray-600">•</span>
              <span className="text-lg font-medium">Germany</span>
              <span className="text-gray-600">•</span>
              <span className="text-lg font-medium">France</span>
              <span className="text-gray-600">•</span>
              <span className="text-lg font-medium">Australia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
