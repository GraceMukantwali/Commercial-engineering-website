import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how Apex Engineering can help bring your vision to life with expert engineering solutions.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 flex-1"
          />
          <Button
            type="submit"
            className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <p className="text-sm text-white/70">
          Or call us at <span className="font-semibold">1-800-APEX-ENG</span>
        </p>
      </div>
    </section>
  )
}
