'use client';

import { useState } from 'react';
import { Code, Smartphone, Palette, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Professional websites that grow your business from day one.',
    longDescription:
      'We build fast, responsive, and SEO-friendly websites tailored to your brand. Whether you need a business landing page or a dynamic web app, we’ve got you covered.',
    features: [
      'Custom UI Design',
      'SEO Optimization',
      'CMS or Admin Panel (on demand)',
      'Mobile Responsiveness',
      'Contact Forms & Integrations',
      'Deployment & Hosting Support',
    ],
    technologies: ['HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'Express', 'Django', 'Others'],
    pricing: 'Starting from $200',
    timeline: '2–3 weeks',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Launch powerful mobile apps across iOS and Android with ease.',
    longDescription:
      'We create native and cross-platform apps that are fast, scalable, and user-friendly. Ideal for startups, services, and e-commerce platforms.',
    features: [
      'Cross-platform (React Native, Flutter)',
      'Push Notifications',
      'User Authentication',
      'Payment Integration (optional)',
      'Play Store & App Store Support',
      'Ongoing Maintenance',
    ],
    technologies: ['Java', 'Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'Others'],
    pricing: 'Starting from $400',
    timeline: '3–5 weeks',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful interfaces that keep users coming back.',
    longDescription:
      'From mobile-first layouts to high-fidelity mockups, we craft designs that are both functional and visually stunning.',
    features: [
      'Wireframes & Mockups',
      'User Journey Mapping',
      'Design Prototypes',
      'Branding Assets',
      'Mobile & Web Layouts',
      'Handoff for Developers',
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer'],
    pricing: 'Starting from $150',
    timeline: '1–2 weeks',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'seo-marketing',
    icon: Zap,
    title: 'SEO & Digital Marketing',
    description: 'Grow your online presence and turn traffic into paying customers.',
    longDescription:
      'From ranking on Google to managing ad campaigns and social media, we help your business get discovered and trusted.',
    features: [
      'Search Engine Optimization (SEO)',
      'Google Ads & Meta Ads',
      'Social Media Marketing',
      'Email Campaigns',
      'Performance Analytics',
      'Marketing Strategy & Branding',
    ],
    technologies: ['Google Analytics', 'Meta Ads', 'Ahrefs', 'Canva'],
    pricing: 'Starting from $150',
    timeline: '1–3 weeks (setup)',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'devops-cloud',
    icon: Server,
    title: 'DevOps & Cloud Setup',
    description: 'Deploy your product the right way — fast, secure, and scalable.',
    longDescription:
      'We handle server setup, deployments, backups, and monitoring so you can focus on building your business.',
    features: [
      'Domain & SSL Setup',
      'CI/CD Automation',
      'Cloud Hosting (AWS, Vercel, etc.)',
      'Docker & Containerization',
      'Monitoring & Alerts',
      'Backup & Rollback Strategies',
    ],
    technologies: ['Vercel', 'AWS', 'Docker', 'DigitalOcean'],
    pricing: 'Starting from $250',
    timeline: '1–2 weeks',
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Protect your digital assets with enterprise-grade security.',
    longDescription:
      'We assess, secure, and monitor your digital platforms to ensure data privacy and client trust.',
    features: [
      'Security Audits',
      'Vulnerability Fixing',
      'Authentication Setup',
      'Firewall Configuration',
      'Basic Compliance Consulting',
      'Monitoring & Maintenance',
    ],
    technologies: ['OWASP', 'JWT', 'SSL', 'Cloudflare'],
    pricing: 'Starting from $300',
    timeline: '1–2 weeks',
    color: 'from-red-500 to-red-600',
  },
];


export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('web-development');

  const currentService = services.find(s => s.id === selectedService) || services[0];
  const Icon = currentService.icon;

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions 
              that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedService === service.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <ServiceIcon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${currentService.color} flex items-center justify-center mr-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                  <p className="text-gray-600">{currentService.description}</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {currentService.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Starting Price</h4>
                    <p className="text-2xl font-bold text-blue-600">{currentService.pricing}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                    <p className="text-2xl font-bold text-green-600">{currentService.timeline}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {currentService.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technologies We Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered 
              on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building with regular check-ins' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and support' },
            ].map((phase, index) => (
              <Card key={phase.step} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and provide a free consultation and detailed proposal.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <a href="/contact">Schedule Free Consultation</a>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}