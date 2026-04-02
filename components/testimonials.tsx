import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Robert Williams',
    company: 'Metropolitan Transit Authority',
    role: 'Director of Infrastructure',
    content: 'Apex Engineering delivered our transit center on time and under budget. Their expertise in complex infrastructure projects is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Jessica Lee',
    company: 'TechVenture Capital',
    role: 'Chief Operating Officer',
    content: 'The engineering team at Apex brought our vision for a smart office building to life. Their attention to sustainability is impressive.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Thomas Anderson',
    company: 'Global Manufacturing Inc',
    role: 'Plant Manager',
    content: 'Working with Apex on our manufacturing facility redesign was seamless. Their mechanical and electrical systems design is world-class.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Amanda Brown',
    company: 'Green Solutions Corp',
    role: 'Sustainability Officer',
    content: 'Apex helped us achieve LEED Platinum certification. Their green engineering solutions are innovative and cost-effective.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders and major corporations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground font-medium mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
