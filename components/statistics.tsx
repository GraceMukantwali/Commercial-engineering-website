'use client';

import { useScrollAnimation, useCountUp } from '@/hooks/use-animations';

const stats = [
  { label: 'Projects Delivered', target: 500, suffix: '+' },
  { label: 'Active Clients', target: 150, suffix: '+' },
  { label: 'Team Members', target: 85, suffix: '+' },
  { label: 'Years in Industry', target: 25, suffix: '+' },
];

export function Statistics() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  target,
  suffix,
  isVisible,
}: {
  label: string;
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const { count } = useCountUp(target, 2000);

  if (isVisible && count === 0) {
    // Trigger count-up when visible
  }

  return (
    <div className="text-center p-6 rounded-lg bg-background hover:shadow-lg transition-shadow">
      <p className={`text-4xl md:text-5xl font-bold text-primary transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {isVisible ? count : 0}
        {suffix}
      </p>
      <p className="text-muted-foreground mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
}
