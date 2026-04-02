import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Zap, Wrench, DraftingCompass, Briefcase, TreePine } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Civil Engineering',
    description: 'Infrastructure design and construction management for roads, bridges, and utilities.',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Structural Engineering',
    description: 'Advanced structural analysis and design for residential, commercial, and industrial buildings.',
    icon: DraftingCompass,
  },
  {
    id: 3,
    title: 'Mechanical Engineering',
    description: 'HVAC, mechanical systems design, and equipment engineering for optimal performance.',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'Electrical Engineering',
    description: 'Power systems, lighting design, and electrical infrastructure for all project scales.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Engineering Consulting',
    description: 'Expert consultation on complex projects, feasibility studies, and technical assessments.',
    icon: Briefcase,
  },
  {
    id: 6,
    title: 'Sustainability & Green',
    description: 'LEED certification, green building design, and sustainable engineering solutions.',
    icon: TreePine,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
