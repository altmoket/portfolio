import type { Project } from "../types/proyect";

export const projects: Project[] = [
  {
    id: 0,
    title: 'Price Comparator',
    description:
      'Tool to compare supermarket prices and optimize shopping decisions based on real data.',
    images: ['🏪'],
    tags: ['React', 'Node.js', 'PostgreSQL'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    images: ['🛍️'],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    live: 'https://example.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.',
    images: ['✅'],
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool integrated with GPT API for creating marketing copy, blog posts, and more.',
    images: ['🤖'],
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Vercel'],
    live: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, custom reports, and user behavior tracking.',
    images: ['📊'],
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'Social Network',
    description: 'Feature-rich social network platform with messaging, notifications, and community feeds.',
    images: ['👥'],
    tags: ['React Native', 'Node.js', 'WebSocket', 'GraphQL'],
    live: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 6,
    title: 'Video Streaming Service',
    description: 'Streaming platform with adaptive bitrate, live streaming, and content recommendation system.',
    images: ['▶️'],
    tags: ['React', 'AWS', 'FFmpeg', 'Node.js'],
    github: 'https://github.com'
  }
]

const featuredProject: Project = projects.find(p => p.featured) || projects[0]

export { featuredProject }