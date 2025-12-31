'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechVentures Inc.',
    industry: 'SaaS',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    quote: "Innofrik's dedicated team became an extension of our engineering department. They delivered our platform 3 months ahead of schedule, saving us over $200K in development costs.",
    metric: '$200K+ saved',
  },
  {
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'StartupFlow',
    industry: 'FinTech',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    quote: "The transparency was incredible. Daily standups, real-time progress tracking, and instant communication. It felt like working with an in-house team, not an outsourcing partner.",
    metric: '2x faster delivery',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Product',
    company: 'HealthFirst Technologies',
    industry: 'Healthcare',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    quote: "Security and compliance were our top concerns for our HIPAA-compliant platform. Innofrik exceeded all requirements and their security protocols gave us complete confidence.",
    metric: '100% compliant',
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    company: 'TradeSync Global',
    industry: 'Trading & Finance',
    image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
    rating: 5,
    quote: "We scaled from 2 to 12 developers in just 3 weeks. Innofrik's talent pool and onboarding process is incredibly efficient. Our trading platform handles $10M+ daily transactions flawlessly.",
    metric: '6x team scaling',
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how companies worldwide have transformed their development
            capabilities and achieved exceptional results with Innofrik.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-12">
                <Quote className="absolute top-6 left-6 h-10 w-10 text-white/10" />

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-center mb-8 text-gray-100">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Metric Badge */}
                  <div className="flex justify-center mb-8">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-sm px-4 py-1">
                      {testimonials[currentTestimonial].metric}
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentTestimonial].role},{' '}
                        {testimonials[currentTestimonial].company}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                        <Building2 className="h-3 w-3" />
                        {testimonials[currentTestimonial].industry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gray-900 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div
                    className={`font-medium text-sm ${
                      index === currentTestimonial
                        ? 'text-white'
                        : 'text-gray-900'
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-xs ${
                      index === currentTestimonial
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <div
                className={`text-xs ${
                  index === currentTestimonial
                    ? 'text-green-400'
                    : 'text-green-600'
                }`}
              >
                {testimonial.metric}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
