'use client';

import { useEffect, useState } from 'react';
import { Trophy, Users, Rocket, Clock } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: 200,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-blue-600',
  },
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Happy Clients',
    color: 'text-green-600',
  },
  {
    icon: Rocket,
    value: 99,
    suffix: '%',
    label: 'Success Rate',
    color: 'text-purple-600',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    color: 'text-orange-600',
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
    <section id="stats-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ${stat.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    delay={index * 100}
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ 
  value, 
  suffix, 
  isVisible, 
  delay 
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

  return <span>{currentValue}{suffix}</span>;
}