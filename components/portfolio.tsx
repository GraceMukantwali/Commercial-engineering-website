'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Metro Transit Center',
    category: 'Civil Engineering',
    description: 'Design and construction of a 200,000 sq ft transit center with 15 bus bays and underground parking.',
    image: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop',
    year: '2023',
  },
  {
    id: 2,
    title: 'Tech Office Complex',
    category: 'Structural Engineering',
    description: '32-story mixed-use commercial building with advanced seismic design and green systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    year: '2023',
  },
  {
    id: 3,
    title: 'Industrial Manufacturing Facility',
    category: 'Mechanical Engineering',
    description: 'Complete HVAC and mechanical systems design for a state-of-the-art manufacturing plant.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    year: '2022',
  },
  {
    id: 4,
    title: 'Smart Energy Grid System',
    category: 'Electrical Engineering',
    description: 'Design of microgrid electrical infrastructure with solar integration and battery storage.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
    year: '2023',
  },
  {
    id: 5,
    title: 'Sustainable Campus Development',
    category: 'Green Building',
    description: 'LEED Platinum certified campus with net-zero energy design and green infrastructure.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    year: '2022',
  },
  {
    id: 6,
    title: 'Water Treatment Facility',
    category: 'Civil Engineering',
    description: 'Advanced wastewater treatment plant design serving 500,000+ residents.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    year: '2021',
  },
]

const categories = ['All', 'Civil Engineering', 'Structural Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Green Building']

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of our most impactful engineering solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-primary text-primary-foreground' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-primary font-semibold">{project.category}</CardDescription>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="link" className="mt-4 p-0 text-primary">
                  View Case Study →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
