import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">8+</div>
              <p className="text-gray-700 font-semibold">Travel Domain Projects</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">1.3+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Full Stack Expertise</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">∞</div>
              <p className="text-gray-700 font-semibold">Always Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Featured Skills</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Expertise in modern web technologies and travel domain solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white hover:shadow-2xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-3">Frontend</h3>
              <p className="mb-4">Expert in React with hooks, state management, and building interactive user interfaces</p>
              <p className="text-sm opacity-90">React • JavaScript • Tailwind CSS • Redux</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl shadow-lg text-white hover:shadow-2xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-3">Backend</h3>
              <p className="mb-4">Proficient in Node.js and Express for building scalable server-side applications</p>
              <p className="text-sm opacity-90">Node.js • Express • APIs • Authentication</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-xl shadow-lg text-white hover:shadow-2xl transition transform hover:scale-105">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-3">Databases</h3>
              <p className="mb-4">Experience with MongoDB, PostgreSQL, MySQL, and Firebase for data persistence</p>
              <p className="text-sm opacity-90">MongoDB • PostgreSQL • MySQL • Firebase</p>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🚀', name: 'Deployment' },
                { icon: '🔧', name: 'RESTful APIs' },
                { icon: '📱', name: 'Responsive Design' },
                { icon: '🗺️', name: 'Google Maps' },
                { icon: '💳', name: 'Payment Systems' },
                { icon: '⚡', name: 'Real-time Updates' },
                { icon: '📊', name: 'Data Visualization' },
                { icon: '🔐', name: 'Security & Auth' }
              ].map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-semibold text-gray-800 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center mb-16">What Others Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Project Manager",
                company: "Caxita Tech Solutions",
                text: "Athul consistently delivers high-quality code and takes ownership of complex travel tech modules. A reliable and skilled developer.",
                avatar: "👨‍💼"
              },
              {
                name: "Team Lead",
                company: "Development Team",
                text: "Great at problem-solving and very quick to learn new technologies. Always ready to help team members and mentor junior developers.",
                avatar: "👨‍🏫"
              },
              {
                name: "Client Feedback",
                company: "Travel Industry",
                text: "The solutions built are scalable, maintainable, and perform excellently under load. Highly recommended for travel tech projects.",
                avatar: "⭐"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl mb-8 opacity-90">Let's collaborate on your next travel tech project or any web application</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
