import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Flight Booking System',
      description: 'Complete flight search, comparison, and booking platform with real-time flight availability and dynamic pricing',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Hotel Reservation Platform',
      description: 'Hotel search and booking system with room availability, ratings, reviews, and property management',
      tags: ['React', 'Express.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Train Ticketing Module',
      description: 'Train booking application with seat selection, schedule management, and ticket generation',
      tags: ['React', 'Node.js', 'MySQL', 'PDF Generation'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Car Rental Management',
      description: 'Car rental platform with fleet management, booking, and maintenance tracking',
      tags: ['React', 'Node.js', 'MongoDB', 'Real-time Updates'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Travel Packages System',
      description: 'Curated travel packages with customization options, itinerary planning, and group bookings',
      tags: ['React', 'Node.js', 'Firebase', 'Calendar Integration'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Transfer Services Platform',
      description: 'Airport and city transfer booking system with driver tracking and real-time updates',
      tags: ['React', 'Node.js', 'Google Maps API', 'WebSocket'],
      link: '#',
      category: 'Travel',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-32 px-4 selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Selected Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
            A showcase of enterprise-level travel tech solutions and scalable architectures built with modern web technologies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:bg-gray-900 transition-colors">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-2">{projects.length}</div>
            <p className="text-gray-400 font-medium">Production Projects</p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:bg-gray-900 transition-colors">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-2">6+</div>
            <p className="text-gray-400 font-medium">Core Travel Modules</p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 text-center hover:bg-gray-900 transition-colors">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">100%</div>
            <p className="text-gray-400 font-medium">Delivery Success</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Bottom CTA Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-950/50 to-gray-900 p-10 md:p-16 rounded-3xl border border-gray-800 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Start a new project?</h2>
            <p className="text-gray-400 mb-8 max-w-sm">Let's discuss how my expertise in scalable architectures can help bring your vision to life.</p>
            <a href="/contact" className="w-fit px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-xl">
              Let's Talk
            </a>
          </div>
          <div className="bg-gray-900 p-10 md:p-16 rounded-3xl border border-gray-800 flex flex-col justify-center overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'Stripe', 'Google Maps', 'WebSockets', 'Redux', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-blue-500/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
