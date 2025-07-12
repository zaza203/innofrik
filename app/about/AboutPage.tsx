'use client';

import { useState } from 'react';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const values = [
  {
    icon: Target,
    title: 'Excellence First',
    description: 'We pursue perfection in every project, never settling for good enough.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Your success is our success. We build lasting relationships, not just software.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating solutions that make a difference worldwide, one project at a time.',
  },
  {
    icon: Award,
    title: 'Innovation Drive',
    description: 'Constantly pushing boundaries with cutting-edge technology and creative solutions.',
  },
];

const milestones = [
  { year: '2020', title: 'Company Founded', description: 'Started with a vision to revolutionize outsourcing' },
  { year: '2021', title: 'AI Integration', description: 'Launched proprietary AI-powered project management' },
  { year: '2022', title: '100 Projects', description: 'Celebrated 100 successful project deliveries' },
  { year: '2023', title: 'Global Expansion', description: 'Had client in 4 different continents' },
  { year: '2024', title: '500+ Projects', description: 'Reached 200+ projects with 99% success rate' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innofrik</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're not just another outsourcing company. We're your technology partners, 
              committed to transforming your vision into digital reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize the outsourcing industry by combining cutting-edge technology, 
                exceptional talent, and unwavering commitment to client success. We believe 
                technology should empower businesses, not complicate them.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Deliver projects 40% faster than industry average</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Maintain 99% client satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Provide 100% transparency throughout projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-900 mb-2">4+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global technology partner, here's how we've grown.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <Card className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle>{milestone.title}</CardTitle>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10 flex-shrink-0"></div>
                  
                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}