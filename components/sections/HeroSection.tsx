'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Globe, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    title: "World-Class IT Outsourcing",
    subtitle: "Your Strategic Technology Partner",
    description: "Scale your team with dedicated developers. Reduce costs by 60% while accessing premium talent from our offshore development center.",
    backgroundImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "60%", label: "Cost Savings" }
  },
  {
    title: "Dedicated Development Teams",
    subtitle: "Your Extension, Not Just a Vendor",
    description: "Get a fully dedicated team of senior developers who work exclusively on your projects. Full transparency, daily standups, and seamless collaboration across time zones.",
    backgroundImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "150+", label: "Happy Clients" }
  },
  {
    title: "Custom Software Development",
    subtitle: "From Vision to Production",
    description: "End-to-end software development with agile methodology. We turn your ideas into scalable, secure, and high-performance digital products.",
    backgroundImage: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "200+", label: "Projects Delivered" }
  },
  {
    title: "Mobile App Development",
    subtitle: "iOS & Android Excellence",
    description: "Native and cross-platform mobile applications that users love. From startup MVPs to enterprise solutions, delivered on time and on budget.",
    backgroundImage: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "99%", label: "Client Satisfaction" }
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Scalable Infrastructure Solutions",
    description: "AWS, Azure, and GCP certified team. We architect, migrate, and manage cloud infrastructure that scales with your business needs.",
    backgroundImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "24/7", label: "Support Available" }
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent Solutions for Growth",
    description: "Leverage cutting-edge AI to automate processes, gain insights, and create competitive advantages. From chatbots to predictive analytics.",
    backgroundImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    stats: { value: "10x", label: "Faster Delivery with AI" }
  },
];

const trustBadges = [
  { icon: Users, text: "150+ Global Clients" },
  { icon: Globe, text: "Serving 20+ Countries" },
  { icon: Zap, text: "2-Week Sprint Cycles" },
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
    }, 5000);

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
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-sm text-white/90 font-medium">Trusted by 150+ Companies Worldwide</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 tracking-tight">
              <span
                key={`title-${currentSlide}`}
                className="block animate-fade-in-up"
              >
                {slides[currentSlide].title}
              </span>
            </h1>

            <h2
              key={`subtitle-${currentSlide}`}
              className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-blue-200 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              {slides[currentSlide].subtitle}
            </h2>

            <p
              key={`description-${currentSlide}`}
              className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl font-medium"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="default"
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>

            {/* Stats Highlight */}
            <div
              key={`stats-${currentSlide}`}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-3xl sm:text-4xl font-bold text-white">
                {slides[currentSlide].stats.value}
              </span>
              <span className="text-sm sm:text-base text-gray-300">
                {slides[currentSlide].stats.label}
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-wrap justify-center gap-6 mt-16 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/80"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
