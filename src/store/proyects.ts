import type { Project } from "../types/proyect";

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dynamic Json Validator',
    description: 'A Node.js + TypeScript API that dynamically infers JSON schemas, validates incoming data, and generates TypeScript types automatically. Perfect for developers who want to enforce data integrity without writing schemas manually.',
    images: ['/portfolio/projects/dynamic-json-validator/image01.png', '/portfolio/projects/dynamic-json-validator/image02.png'],
    tags: ['Node.js', 'TypeScript', 'JSON Schema', 'API Development'],
    github: 'https://github.com/altmoket/dynamic-json-validator'
  },
  {
    id: 2,
    title: 'Solving Hidatos',
    description: 'Hidato is a logic puzzle game where players fill a grid with consecutive numbers that connect in various directions. Developed in Haskell, this project emphasizes critical thinking and problem-solving skills.',
    images: ['/portfolio/projects/solving-hidatos/image01.jpeg', '/portfolio/projects/solving-hidatos/image02.jpeg'],
    tags: ['Haskell', 'Logic Puzzles', 'Problem Solving'],
    github: 'https://github.com/altmoket/solving_hidatos'
  },
  {
    id: 3,
    title: 'Natural Ecosystem Simulator',
    description: 'A simulation project modeling a natural ecosystem, exploring the evolution of various species and their interactions within distinct habitats.',
    images: ['/portfolio/projects/natural-ecosystem-simulation/image01.png'],
    tags: ['Python', 'pytest', 'Problem Solving', 'Simulation', 'scipy'],
    github: 'https://github.com/altmoket/sim_natural_ecosystem_dev'
  },
  {
    id: 4,
    title: 'Draw DSL',
    description: 'Domain-Specific Language about painting flat shapes, fractals and trees.',
    images: ['/portfolio/projects/draw-dsl/image01.png', '/portfolio/projects/draw-dsl/image02.png', '/portfolio/projects/draw-dsl/image03.png', '/portfolio/projects/draw-dsl/image04.png', '/portfolio/projects/draw-dsl/image05.png'],
    tags: ['Python', 'pytest', 'Problem Solving', 'DSL', 'turtle'],
    github: 'https://github.com/jordipynb/draw_dsl'
  },
]

const featuredProject: Project = projects.find(p => p.featured) || projects[0]

export { featuredProject }