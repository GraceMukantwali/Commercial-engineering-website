import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-secondary min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
            Engineering Solutions for Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-balance max-w-3xl mx-auto">
            Delivering comprehensive engineering expertise across civil, structural, mechanical, electrical, and consulting services for commercial and industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
          <div>
            <p className="text-4xl font-bold">150+</p>
            <p className="text-white/80 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold">25+</p>
            <p className="text-white/80 mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">98%</p>
            <p className="text-white/80 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
