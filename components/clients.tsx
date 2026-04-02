'use client';

import { useScrollAnimation } from '@/hooks/use-animations';

const clients = [
  { name: 'Global Construction Corp', initials: 'GCC' },
  { name: 'TechBuild Industries', initials: 'TBI' },
  { name: 'Metropolitan Development', initials: 'MD' },
  { name: 'Infrastructure Solutions', initials: 'IS' },
  { name: 'Sustainable Energy Group', initials: 'SEG' },
  { name: 'Urban Planning Associates', initials: 'UPA' },
];

export function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-muted-foreground">
            Partnering with industry leaders on transformative projects.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`flex items-center justify-center p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-md transition-all ${
                isVisible ? 'translate-y-0' : 'translate-y-4'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              }}
              title={client.name}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center px-1">
                  {client.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
