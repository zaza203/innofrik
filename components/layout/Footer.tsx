import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const footerLinks = {
  services: [
    { name: 'Dedicated Teams', href: '/services' },
    { name: 'Custom Software', href: '/services' },
    { name: 'Mobile Development', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'Cloud & DevOps', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'How It Works', href: '/about' },
    { name: 'Technologies', href: '/services' },
    { name: 'Industries', href: '/services' },
    { name: 'FAQ', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61574243676919' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/innofrik' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                  Ready to Scale Your Development Team?
                </h3>
                <p className="text-blue-100 text-lg">
                  Get a free consultation and project estimate within 24 hours.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 whitespace-nowrap"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/icons/icon.svg"
                alt="Innofrik Logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-xl font-semibold tracking-tight">Innofrik</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              World-class IT outsourcing company delivering dedicated development teams,
              custom software solutions, and digital transformation services to businesses worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@innofrik.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@innofrik.com</span>
              </a>
              <a
                href="https://wa.me/15162186691?text=Hello%20I%20would%20like%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+1 (516) 218-6691 (US)</span>
              </a>
              <a
                href="tel:+237691715866"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+237 691 71 58 66 (CM)</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Innofrik Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Your trusted IT outsourcing partner</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-500 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
