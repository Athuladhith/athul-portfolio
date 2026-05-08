import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 auto-rows-auto">
          
          {/* Card 1: Main Intro (Spans 2 columns, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800 relative overflow-hidden group hover:border-gray-700 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">Available for work</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Athul A.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md leading-relaxed">
                A Full Stack Developer specializing in crafting high-performance scalable travel tech solutions and modern web applications.
              </p>
              <div className="flex gap-4 mt-auto">
                <Link to="/projects" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-transform active:scale-95">
                  View Projects
                </Link>
                <Link to="/contact" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 font-semibold hover:bg-white/20 transition-colors">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Tech Stack Marquee (Spans 2 columns) */}
          <div className="md:col-span-2 bg-gray-900/50 p-8 rounded-3xl border border-gray-800 flex flex-col justify-center overflow-hidden group hover:bg-gray-900 transition-colors duration-500">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Redux', 'Firebase'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Experience */}
          <div className="bg-gradient-to-br from-indigo-950/50 to-gray-900 p-8 rounded-3xl border border-gray-800 flex flex-col items-center justify-center text-center group hover:border-indigo-500/50 transition-colors duration-500">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-500">1.3+</div>
            <p className="text-gray-400 font-medium">Years Experience</p>
          </div>

          {/* Card 4: Projects Count */}
          <div className="bg-gradient-to-br from-purple-950/50 to-gray-900 p-8 rounded-3xl border border-gray-800 flex flex-col items-center justify-center text-center group hover:border-purple-500/50 transition-colors duration-500">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 mb-2 group-hover:scale-110 transition-transform duration-500">8+</div>
            <p className="text-gray-400 font-medium">Domain Projects</p>
          </div>

          {/* Card 5: Domain Specialization (Spans 3 columns) */}
          <div className="md:col-span-3 bg-gray-900/40 p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-gray-900/60 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity group-hover:opacity-10 transition-opacity duration-1000"></div>
            <div className="relative z-10 md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Travel Tech Specialist</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep expertise in building robust flight booking systems, hotel reservation platforms, and complex itinerary planners. Transforming travel experiences through seamless digital solutions.
              </p>
            </div>
            <div className="relative z-10 md:w-1/3 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-xl absolute animate-pulse opacity-50"></div>
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm relative z-10">
                <span className="text-4xl">✈️</span>
              </div>
            </div>
          </div>

          {/* Card 6: Connect */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-gray-800 flex flex-col justify-between group hover:border-gray-700 transition-colors duration-500">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/athul-a-93b6b6332/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>Email Me</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
