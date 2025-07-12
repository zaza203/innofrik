'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    title: "Welcome to Innofrik",
    subtitle: "Where Innovation Meets Excellence in Digital Transformation",
    description: "Experience the future of outsourcing with AI-powered solutions and world-class expertise",
    backgroundImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "Mobile Development",
    subtitle: "Crafting Exceptional Mobile Experiences",
    description: "We build sleek, high-performance iOS and Android apps tailored to your brand — delivering user-centric experiences that fuel growth",
    backgroundImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "Web Development",
    subtitle: "Building the Future of Web Applications",
    description: "From stunning corporate sites to robust web applications, Innofrik delivers secure, scalable, and lightning-fast digital platforms that convert",
    backgroundImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Solutions for Tomorrow's Challenges",
    description: "Transform your business with intelligent automation, predictive insights, and customized AI models — all built to give you a competitive edge",
    backgroundImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "Cloud Solutions",
    subtitle: "Scalable Infrastructure for Global Success",
    description: "We architect and manage reliable, cost-efficient cloud infrastructure — empowering you to scale globally without compromising performance or security",
    backgroundImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "UI/UX Design",
    subtitle: "Designing Experiences That Inspire",
    description: "Our human-centered design approach delivers intuitive, visually striking interfaces that keep users engaged and coming back",
    backgroundImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  },
  {
    title: "SEO & Digital Marketing",
    subtitle: "Visibility That Drives Real Growth.",
    description: "From search engine optimization to performance marketing campaigns, Innofrik helps you dominate your niche and turn clicks into customers",
    backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images with Sliding Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span 
                key={`title-${currentSlide}`}
                className="block animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {slides[currentSlide].title}
              </span>
            </h1>

            <h2 
              key={`subtitle-${currentSlide}`}
              className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-blue-200 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {slides[currentSlide].subtitle}
            </h2>

            <p 
              key={`description-${currentSlide}`}
              className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Button */}
          <div 
            className="mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}