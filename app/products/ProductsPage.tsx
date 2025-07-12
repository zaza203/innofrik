'use client';

import { useState } from 'react';
import { Code, Smartphone, Database, Cloud, Shield, Zap, ArrowRight, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 'project-manager-ai',
    name: 'ProjectManager AI',
    category: 'Project Management',
    description: 'AI-powered project management platform that predicts timelines, identifies risks, and optimizes resource allocation.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'AI-powered timeline prediction',
      'Automated risk assessment',
      'Resource optimization',
      'Real-time collaboration',
      'Advanced analytics dashboard',
      'Integration with 50+ tools'
    ],
    pricing: 'Starting at $99/month',
    status: 'Available',
    rating: 4.9,
    users: '10,000+',
    icon: Zap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'secure-vault',
    name: 'SecureVault Enterprise',
    category: 'Security',
    description: 'Enterprise-grade security platform with zero-trust architecture and advanced threat detection.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'Zero-trust architecture',
      'AI threat detection',
      'End-to-end encryption',
      'Multi-factor authentication',
      'Compliance reporting',
      'Real-time monitoring'
    ],
    pricing: 'Starting at $199/month',
    status: 'Available',
    rating: 4.8,
    users: '5,000+',
    icon: Shield,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'data-insights-pro',
    name: 'DataInsights Pro',
    category: 'Analytics',
    description: 'Advanced data analytics platform that transforms raw data into actionable business insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Machine learning models',
      'API integrations',
      'Automated reporting'
    ],
    pricing: 'Starting at $149/month',
    status: 'Available',
    rating: 4.7,
    users: '8,000+',
    icon: Database,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'cloud-deploy',
    name: 'CloudDeploy Suite',
    category: 'DevOps',
    description: 'Automated deployment and infrastructure management platform for modern applications.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'Automated CI/CD pipelines',
      'Infrastructure as code',
      'Multi-cloud support',
      'Container orchestration',
      'Performance monitoring',
      'Cost optimization'
    ],
    pricing: 'Starting at $79/month',
    status: 'Available',
    rating: 4.6,
    users: '12,000+',
    icon: Cloud,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'mobile-builder',
    name: 'MobileBuilder Pro',
    category: 'Development',
    description: 'No-code mobile app builder with native performance and advanced customization options.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'Drag-and-drop interface',
      'Native performance',
      'Custom integrations',
      'App store deployment',
      'Real-time preview',
      'Template library'
    ],
    pricing: 'Starting at $59/month',
    status: 'Beta',
    rating: 4.5,
    users: '3,000+',
    icon: Smartphone,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'code-assistant',
    name: 'CodeAssistant AI',
    category: 'Development',
    description: 'AI-powered coding assistant that helps developers write better code faster.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2',
    features: [
      'Real-time code suggestions',
      'Bug detection & fixes',
      'Code optimization',
      'Multi-language support',
      'IDE integrations',
      'Learning recommendations'
    ],
    pricing: 'Starting at $29/month',
    status: 'Coming Soon',
    rating: 0,
    users: 'Pre-launch',
    icon: Code,
    color: 'from-teal-500 to-teal-600',
  },
];

const categories = ['All', 'Project Management', 'Security', 'Analytics', 'DevOps', 'Development'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Innovative software solutions designed to transform your business operations 
              and accelerate digital transformation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={product.status === 'Available' ? 'default' : product.status === 'Beta' ? 'secondary' : 'outline'}
                        className={
                          product.status === 'Available' ? 'bg-green-600' :
                          product.status === 'Beta' ? 'bg-orange-600' : 'bg-gray-600'
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{product.category}</Badge>
                      {product.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{product.users} users</span>
                        <span className="font-semibold text-blue-600">{product.pricing}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1" disabled={product.status === 'Coming Soon'}>
                          {product.status === 'Coming Soon' ? 'Notify Me' : 'Learn More'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        {product.status === 'Available' && (
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our innovative products can streamline your operations 
            and accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <a href="/contact">Contact Sales</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}