import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Flight Booking System',
      description: 'Complete flight search, comparison, and booking platform with real-time flight availability and dynamic pricing',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      link: '#',
      category: 'Travel'
    },
    {
      id: 2,
      title: 'Hotel Reservation Platform',
      description: 'Hotel search and booking system with room availability, ratings, reviews, and property management',
      tags: ['React', 'Express.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      category: 'Travel'
    },
    {
      id: 3,
      title: 'Train Ticketing Module',
      description: 'Train booking application with seat selection, schedule management, and ticket generation',
      tags: ['React', 'Node.js', 'MySQL', 'PDF Generation'],
      link: '#',
      category: 'Travel'
    },
    {
      id: 4,
      title: 'Car Rental Management',
      description: 'Car rental platform with fleet management, booking, and maintenance tracking',
      tags: ['React', 'Node.js', 'MongoDB', 'Real-time Updates'],
      link: '#',
      category: 'Travel'
    },
    {
      id: 5,
      title: 'Travel Packages System',
      description: 'Curated travel packages with customization options, itinerary planning, and group bookings',
      tags: ['React', 'Node.js', 'Firebase', 'Calendar Integration'],
      link: '#',
      category: 'Travel'
    },
    {
      id: 6,
      title: 'Transfer Services Platform',
      description: 'Airport and city transfer booking system with driver tracking and real-time updates',
      tags: ['React', 'Node.js', 'Google Maps API', 'WebSocket'],
      link: '#',
      category: 'Travel'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative travel tech solutions and full-stack applications I've built using cutting-edge technologies. Each project demonstrates expertise in scalability, user experience, and modern development practices.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{projects.length}</div>
            <p className="text-gray-700 text-sm mt-2 font-semibold">Production Projects</p>
          </div>
          <div className="text-center border-l border-r border-blue-200">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">8+</div>
            <p className="text-gray-700 text-sm mt-2 font-semibold">Travel Modules</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
            <p className="text-gray-700 text-sm mt-2 font-semibold">Success Rate</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              {...project}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Expertise Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 text-center mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">My Travel Tech Expertise</h2>
          <p className="text-lg opacity-90 mb-8">Specialized knowledge across all major travel and tourism modules</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['✈️ Flights', '🏨 Hotels', '🚂 Trains', '🚗 Cars', '📦 Packages', '🚐 Transfers'].map((module) => (
              <div key={module} className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                {module}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested in a Similar Project?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how I can help build your travel, e-commerce, or any web application</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105">
              Start a Conversation
            </a>
            <a href="https://www.linkedin.com/in/athul-a-93b6b6332/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-50 text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-100 transition border border-blue-200">
              View on LinkedIn
            </a>
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Stripe', 'Google Maps', 'WebSocket', 'Redux', 'Tailwind CSS', 'REST APIs', 'JWT', 'PDF Generation'].map((tech) => (
              <span key={tech} className="bg-white border border-gray-300 px-5 py-2 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
