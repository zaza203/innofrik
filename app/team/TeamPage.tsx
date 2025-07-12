'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Github, Mail, Award, Users, Star, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Ihimbru Ongum',
    role: 'CEO & Founder',
    bio: 'Visionary leader with experience in technology and business strategy.',
    image: null,
    skills: ['Strategy', 'Leadership', 'AI/ML', 'Business Development', 'DevOp'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'ongum@innofrik.com'
    }
  },
  {
    name: 'Charles Lima',
    role: 'CTO',
    bio: 'Technical genius with expertise in scalable architectures and emerging technologies.',
    image: null,
    skills: ['Data Science', 'Cloud Computing', 'DevOps', 'Security'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'lima@innofrik.com'
    }
  },
  {
    name: 'Che Kassina',
    role: 'VP of Operations',
    bio: 'Operations expert who ensures smooth project delivery and client satisfaction.',
    image: null,
    skills: ['Project Management', 'Client Relations', 'Process Optimization', 'Quality Assurance'],
    social: {
      linkedin: '#',
      email: 'chekassy@innofrik.com'
    }
  },
  {
    name: 'Nfoua Eugene',
    role: 'Data Science Lead',
    bio: 'AI/ML specialist who transforms data into actionable insights.',
    image: null,
    skills: ['Machine Learning', 'Data Analytics', 'Python', 'Research'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'nfoua@innofrik.com'
    }
  },
];

const stats = [
  { icon: Users, value: '15+', label: 'Team Members' },
  { icon: Award, value: '5+', label: 'Industry Awards' },
  { icon: Star, value: '99%', label: 'Client Satisfaction' },
  { icon: Code, value: '200+', label: 'Projects Delivered' },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming your ideas into 
              exceptional digital experiences. Our diverse team brings together 
              creativity, technical expertise, and business acumen.
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts who lead Innofrik's mission to 
              deliver exceptional outsourcing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  selectedMember === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || '/images/img_placeholder.png'}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-blue-200">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that great teams create great products. Our culture is built 
              on collaboration, innovation, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We encourage experimentation and embrace new technologies to stay ahead of the curve.',
                icon: '🚀'
              },
              {
                title: 'Collaborative Spirit',
                description: 'We work together, share knowledge, and support each other to achieve common goals.',
                icon: '🤝'
              },
              {
                title: 'Client Focus',
                description: 'Every decision we make is guided by what\'s best for our clients and their success.',
                icon: '🎯'
              },
              {
                title: 'Continuous Learning',
                description: 'We invest in our team\'s growth through training, conferences, and skill development.',
                icon: '📚'
              }
            ].map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented individuals who share our passion 
            for creating exceptional digital experiences.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
}