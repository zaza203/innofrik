'use client';

import { useState } from 'react';
import { Code, Smartphone, Palette, Server, Users, Shield, Brain, Cloud, TestTube } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const services = [
  {
    icon: Users,
    title: 'Dedicated Development Teams',
    description: 'Scale your development capacity instantly with our dedicated teams. Full-time developers who integrate seamlessly with your workflow and culture.',
    features: ['Staff Augmentation', 'Managed Teams', 'Offshore Development', 'Team Extension'],
    color: 'from-blue-500 to-blue-600',
    highlight: 'Most Popular',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'End-to-end software development tailored to your business needs. From MVPs to enterprise solutions, we deliver scalable and maintainable code.',
    features: ['React/Next.js', 'Node.js/Python', 'Full Stack', 'API Development'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms.',
    features: ['iOS/Android Native', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Modernize your infrastructure with cloud migration, containerization, and CI/CD pipelines. AWS, Azure, and GCP certified team.',
    features: ['AWS/Azure/GCP', 'Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that converts. We create intuitive interfaces backed by research, testing, and iterative improvement.',
    features: ['User Research', 'Wireframing', 'Design Systems', 'Prototyping'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI to automate processes, gain insights, and create competitive advantages for your business.',
    features: ['ChatGPT Integration', 'Predictive Analytics', 'Computer Vision', 'NLP Solutions'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TestTube,
    title: 'QA & Testing',
    description: 'Comprehensive quality assurance services including manual testing, automation, performance, and security testing.',
    features: ['Test Automation', 'Performance Testing', 'Security Audits', 'QA Consulting'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with enterprise-grade security solutions, vulnerability assessments, and compliance consulting.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    color: 'from-red-500 to-red-600',
  },
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            IT Outsourcing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From dedicated development teams to complete digital transformation,
            we provide end-to-end outsourcing solutions that drive business growth
            and reduce operational costs by up to 60%.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`relative overflow-hidden transition-all duration-300 cursor-pointer group border-0 shadow-sm hover:shadow-xl ${
                  hoveredCard === index ? 'scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.highlight && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-blue-600 text-white text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs font-normal bg-gray-100"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-sm text-gray-600 hover:text-gray-900 group-hover:text-blue-600 transition-colors"
                    asChild
                  >
                    <Link href="/services">
                      Learn more →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8"
              asChild
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 px-8"
              asChild
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
