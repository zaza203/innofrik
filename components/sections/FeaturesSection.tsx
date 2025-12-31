'use client';

import { useState } from 'react';
import {
  DollarSign,
  Clock,
  Users,
  Shield,
  Zap,
  HeadphonesIcon,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: DollarSign,
    title: 'Save Up to 60% on Costs',
    description:
      'Reduce development expenses significantly compared to in-house teams in US/EU while maintaining top-tier quality and expertise.',
    metric: '60%',
    metricLabel: 'Cost Reduction',
  },
  {
    icon: Clock,
    title: 'Rapid Time-to-Market',
    description:
      'Launch faster with our streamlined processes. We deliver MVPs in 4-6 weeks and full products in 2-4 months with agile sprints.',
    metric: '2x',
    metricLabel: 'Faster Delivery',
  },
  {
    icon: Users,
    title: 'Access Global Talent',
    description:
      'Tap into a pool of 50+ senior developers, designers, and architects with expertise across modern tech stacks and industries.',
    metric: '50+',
    metricLabel: 'Expert Developers',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'ISO 27001 practices, NDA protection, secure code reviews, and GDPR compliance ensure your intellectual property stays protected.',
    metric: '100%',
    metricLabel: 'Data Protection',
  },
  {
    icon: Zap,
    title: 'Seamless Collaboration',
    description:
      'Work in your timezone with overlapping hours. Daily standups, transparent communication, and tools you already use (Slack, Jira, GitHub).',
    metric: '8h+',
    metricLabel: 'Timezone Overlap',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support & Maintenance',
    description:
      'Round-the-clock technical support, proactive monitoring, and continuous maintenance to keep your systems running smoothly.',
    metric: '24/7',
    metricLabel: 'Availability',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery Call', description: 'Understand your needs and goals' },
  { step: '02', title: 'Team Assembly', description: 'Match you with the right experts' },
  { step: '03', title: 'Kickoff', description: 'Start development within 2 weeks' },
  { step: '04', title: 'Delivery', description: 'Iterative delivery with full transparency' },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Outsource With Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            The Innofrik Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another outsourcing company. We're a strategic technology partner
            committed to your success with transparent processes and measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className={`cursor-pointer transition-all duration-300 border-0 shadow-sm hover:shadow-lg ${
                  activeFeature === index
                    ? 'bg-gray-900 text-white shadow-xl'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        activeFeature === index
                          ? 'bg-white/10'
                          : 'bg-blue-50'
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          activeFeature === index ? 'text-white' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${
                          activeFeature === index ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {feature.metric}
                      </div>
                      <div
                        className={`text-xs ${
                          activeFeature === index ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {feature.metricLabel}
                      </div>
                    </div>
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      activeFeature === index ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeFeature === index ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              How It Works
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Getting started is simple. Our streamlined onboarding process gets your
              dedicated team up and running in as little as two weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/10" />
                )}
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-white font-medium">2-Week Risk-Free Trial</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span className="text-white font-medium">Flexible Scaling</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-purple-400" />
                <span className="text-white font-medium">NDA & IP Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
