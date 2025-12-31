'use client';

import { useEffect, useState } from 'react';
import { Trophy, Users, Rocket, Clock, Globe, Star, Building, Code } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: 200,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful project completions',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Companies trust our services',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Globe,
    value: 20,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach and expertise',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Code,
    value: 50,
    suffix: '+',
    label: 'Expert Developers',
    description: 'Senior-level talent pool',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Star,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on client feedback',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our track record speaks for itself. Here's why companies worldwide choose Innofrik
            as their technology outsourcing partner.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    delay={index * 100}
                  />
                </div>
                <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Ready to become our next success story?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Start Your Project
            <Rocket className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  suffix,
  isVisible,
  delay,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
  delay: number;
}) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(counter);
        } else {
          setCurrentValue(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <span>
      {currentValue}
      {suffix}
    </span>
  );
}
