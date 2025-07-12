'use client';

import { useState } from 'react';
import { Code, Smartphone, Palette, Server, Database, Shield, Zap, Globe, Megaphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build custom, high-performance websites and web apps that are fast, scalable, and optimized for business growth.',
    features: ['React/Next.js', 'Node.js/Python', 'Cloud Native', 'API Integration'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Deliver flawless mobile experiences with native and cross-platform apps that engage users and drive conversions.',
    features: ['iOS/Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'We create intuitive, visually captivating designs that boost engagement and convert clicks into loyal customers.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    description: 'Empower your digital products with robust cloud infrastructure, automation, and continuous delivery pipelines.',
    features: ['AWS/Azure', 'CI/CD', 'Docker', 'Monitoring'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your systems, data, and reputation with enterprise-grade security solutions and proactive threat defense.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Megaphone,
    title: 'SEO & Digital Marketing',
    description: 'Boost visibility, attract qualified traffic, and grow your brand with strategic SEO and results-driven digital campaigns.',
    features: ['Search Engine Optimization (SEO)', 'Content & Email Marketing', 'Google Ads & Meta Campaigns', 'Analytics & ROI Tracking'],
    color: 'from-yellow-500 to-yellow-600',
  },
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end solutions
            that drive business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={`relative overflow-hidden transition-all duration-300 cursor-pointer group ${hoveredCard === index ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <a href="/services">View All Services</a>
          </Button>
        </div>

      </div>
    </section>
  );
}