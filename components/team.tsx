import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    id: 1,
    name: 'James Chen',
    title: 'Chief Executive Officer',
    role: 'Strategic Leadership',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: 'Business Strategy, Project Management',
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    title: 'Chief Technical Officer',
    role: 'Engineering Excellence',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    expertise: 'Structural Design, Innovation',
  },
  {
    id: 3,
    name: 'David Patel',
    title: 'Director of Civil Engineering',
    role: 'Infrastructure Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    expertise: 'Transportation, Water Systems',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    title: 'Director of Electrical Systems',
    role: 'Power & Energy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    expertise: 'Power Systems, Renewable Energy',
  },
  {
    id: 5,
    name: 'Michael Thompson',
    title: 'Director of Mechanical Engineering',
    role: 'Systems Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: 'HVAC, Equipment Design',
  },
  {
    id: 6,
    name: 'Lisa Wong',
    title: 'Sustainability Lead',
    role: 'Green Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    expertise: 'LEED Certification, Green Building',
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert engineers and leaders with decades of combined experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-3">
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{member.name}</CardTitle>
                <CardDescription className="font-semibold text-foreground">{member.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Expertise:</span> {member.expertise}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
