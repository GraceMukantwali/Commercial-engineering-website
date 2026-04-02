'use client';

import { Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const awards = [
  {
    year: '2023',
    title: 'Engineering Excellence Award',
    organization: 'American Society of Civil Engineers',
    description: 'Recognition for outstanding contributions to structural design innovation.',
  },
  {
    year: '2023',
    title: 'Sustainability Leadership',
    organization: 'Green Building Council',
    description: 'Award for sustainable engineering practices and green building initiatives.',
  },
  {
    year: '2022',
    title: 'Project of the Year',
    organization: 'National Engineering Association',
    description: 'Best commercial engineering project for innovative design solutions.',
  },
  {
    year: '2022',
    title: 'ISO 9001:2015 Certified',
    organization: 'International Organization for Standardization',
    description: 'Quality management system certification demonstrating commitment to excellence.',
  },
];

export function Awards() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Awards & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry recognition and professional certifications validating our commitment to excellence.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={`p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all ${
                isVisible ? 'translate-y-0' : 'translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-primary mt-1" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground">{award.year}</p>
                  <h3 className="text-xl font-bold text-foreground mt-1">{award.title}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{award.organization}</p>
                  <p className="text-muted-foreground mt-3">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
