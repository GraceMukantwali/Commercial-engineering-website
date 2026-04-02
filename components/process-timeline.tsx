'use client';

import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const processSteps = [
  {
    number: '01',
    title: 'Project Assessment',
    description: 'Comprehensive analysis of project requirements, scope, and objectives to establish clear foundations.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Development of detailed engineering designs with innovative solutions and regulatory compliance.',
  },
  {
    number: '03',
    title: 'Team Collaboration',
    description: 'Cross-functional coordination with clients, contractors, and stakeholders throughout execution.',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Professional oversight and management of construction and installation processes on-site.',
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description: 'Rigorous testing and inspection protocols ensuring all work meets highest industry standards.',
  },
  {
    number: '06',
    title: 'Project Completion',
    description: 'Final handover with comprehensive documentation and ongoing support for all deliverables.',
  },
];

export function ProcessTimeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six-phase methodology ensuring quality, collaboration, and success at every step.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all ${
                isVisible ? 'translate-y-0' : 'translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}

              {/* Card */}
              <div className="p-6 rounded-lg border border-border bg-muted/50 hover:border-primary hover:shadow-lg transition-all relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <CheckCircle className="h-6 w-6 text-primary hidden sm:block" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
