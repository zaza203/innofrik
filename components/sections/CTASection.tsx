import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Start Your Project?
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Let's Build Something
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Extraordinary
          </span>
          Together
        </h2>

        <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join hundreds of successful companies who trust Innofrik 
          to deliver world-class digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact" className="flex items-center">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-gray-600 border-white/30 hover:bg-white/10">
            <Link href="/products">
              View Our Work
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-blue-200">
          <p className="text-sm">
            ✓ Free consultation  ✓ No hidden fees  ✓ 100% satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
}