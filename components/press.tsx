'use client';

import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-animations';

const pressItems = [
  {
    date: 'March 2024',
    outlet: 'Engineering Today Magazine',
    title: 'Apex Engineering Completes Record-Breaking Commercial Complex',
    excerpt: 'The firm successfully delivered a mixed-use development project setting new standards in sustainable design.',
  },
  {
    date: 'January 2024',
    outlet: 'Construction Weekly',
    title: 'Innovation in Structural Solutions Wins Industry Recognition',
    excerpt: 'New engineering methodology for seismic-resistant design receives acclaim from industry experts.',
  },
  {
    date: 'November 2023',
    outlet: 'Business Infrastructure',
    title: 'Leading Engineering Firm Expands Global Operations',
    excerpt: 'Apex Engineering announces expansion to three new international markets, doubling team size.',
  },
  {
    date: 'September 2023',
    outlet: 'Sustainability Review',
    title: 'Green Building Initiatives Transform Urban Landscape',
    excerpt: 'Case study highlights how innovative engineering practices reduce environmental impact by 40%.',
  },
];

export function Press() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">In the News</h2>
          <p className="text-lg text-muted-foreground">
            Recent media coverage and industry recognition.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {pressItems.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-lg transition-all cursor-pointer group ${
                isVisible ? 'translate-x-0' : '-translate-x-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-muted-foreground">{item.date}</p>
                  <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-2">{item.outlet}</p>
                  <p className="text-muted-foreground mt-3">{item.excerpt}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
