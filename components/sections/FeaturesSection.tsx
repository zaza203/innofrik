'use client';

import { useState } from 'react';
import { Rocket, Zap, Shield, Users, Clock, Brain, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Rocket,
    title: 'Fast & Reliable Delivery',
    description:
      'We deliver most websites in 2–3 weeks and mobile apps within 3–5 weeks depending on complexity. No delays. No excuses.',
  },
  {
    icon: Zap,
    title: 'Affordable Without Compromise',
    description:
      'We build high-quality websites starting at just $200 and mobile apps from $400 — pricing built to help you start strong without breaking the bank.',
  },
  {
    icon: Users,
    title: 'Dedicated Team on Every Project',
    description:
      'You get a team that focuses on your project only — designers, developers, and project managers aligned to your goals.',
  },
  {
    icon: Clock,
    title: 'Real-Time Progress & Support',
    description:
      'Track your project live, get regular updates, and reach us anytime. Transparency and communication you can count on.',
  },
  {
    icon: Shield,
    title: 'Secure & Future-Proof Code',
    description:
      'We use industry-standard security and write clean, scalable code so your product stays reliable, safe, and ready to grow.',
  },
  {
    icon: Brain,
    title: 'Smarter Development with AI',
    description:
      'Our AI-assisted tools help us plan better, deliver faster, and catch issues early — giving you better outcomes at lower costs.',
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Innofrik?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're launching a startup or scaling a growing business, Innofrik delivers
            premium digital solutions — on time, on budget, and always with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-blue-50 border-blue-200 shadow-md'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          activeFeature === index ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            activeFeature === index ? 'text-white' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                      {activeFeature === index && (
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Rocket className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Innovation That Delivers
                  </h3>
                  <p className="text-gray-600">
                    Practical solutions. Predictable timelines. Powerful outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
