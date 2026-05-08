import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-32 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <div className="animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Athul A</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl mb-4 opacity-95 font-medium animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Full Stack Developer | React & Node.js Specialist
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-85 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Crafting scalable travel tech solutions with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 shadow-lg hover:shadow-2xl transition transform hover:scale-105 active:scale-95"
          >
            View My Work
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-white/20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="text-sm md:text-base opacity-75 mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Firebase'].map((tech, i) => (
              <span 
                key={tech} 
                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition transform hover:scale-110 cursor-default"
                style={{animationDelay: `${1 + i * 0.1}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
