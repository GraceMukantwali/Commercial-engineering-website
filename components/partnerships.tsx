'use client';

import { Building2, Zap, Leaf, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const partnerships = [
  {
    icon: Building2,
    title: 'AISC Member',
    organization: 'American Institute of Steel Construction',
    description: 'Active member advancing steel construction industry standards.',
  },
  {
    icon: Zap,
    title: 'IEEE Partnership',
    organization: 'Institute of Electrical and Electronics Engineers',
    description: 'Collaborating on electrical engineering innovation and research.',
  },
  {
    icon: Leaf,
    title: 'LEED Accredited',
    organization: 'U.S. Green Building Council',
    description: 'Certified professionals leading sustainable building practices.',
  },
  {
    icon: Users,
    title: 'ASME Affiliation',
    organization: 'American Society of Mechanical Engineers',
    description: 'Committed to mechanical engineering excellence and professional development.',
  },
];

export function Partnerships() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Memberships and partnerships with leading professional organizations.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {partnerships.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.title}
                className={`p-8 rounded-lg border border-border bg-muted/50 hover:border-primary hover:shadow-lg transition-all ${
                  isVisible ? 'translate-y-0' : 'translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{partner.title}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{partner.organization}</p>
                    <p className="text-muted-foreground mt-3">{partner.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
