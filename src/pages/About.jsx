export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-32 px-4 selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            I'm a passionate Full Stack Developer specializing in building robust, scalable web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by powerful server-side architecture.
          </p>
        </div>

        {/* Journey Section */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span> My Journey
          </h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-gray-950 bg-gray-900 text-gray-400 group-hover:text-white group-hover:bg-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 relative z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-colors duration-500">
                <h3 className="text-xl font-bold text-white mb-1">MSc Physics</h3>
                <p className="text-purple-400 font-medium text-sm mb-4">Educational Foundation</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Started with a strong foundation in Physics and scientific thinking. This analytical mindset has been crucial in problem-solving and understanding complex system architectures.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-gray-950 bg-gray-900 text-gray-400 group-hover:text-white group-hover:bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 relative z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors duration-500">
                <h3 className="text-xl font-bold text-white mb-1">Web Development</h3>
                <p className="text-blue-400 font-medium text-sm mb-4">Self-Learning & Growth</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Transitioned to web development through self-study and online courses. Quickly grasped JavaScript fundamentals, React.js, and Node.js. Built multiple projects to strengthen skills.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-gray-950 bg-gray-900 text-gray-400 group-hover:text-white group-hover:bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 relative z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 transition-colors duration-500">
                <h3 className="text-xl font-bold text-white mb-1">Caxita Tech Solutions</h3>
                <p className="text-emerald-400 font-medium text-sm mb-4">Professional Experience (2023 - Present)</p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Started as a Full Stack Developer working on travel tech solutions. Developed expertise in handling complex travel modules including flights, hotels, trains, cars, packages, and transfers.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Breakdown */}
        <section className="mb-32 relative">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span> Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: "Frontend",
                color: "group-hover:border-blue-500/50 group-hover:bg-blue-500/5",
                iconColor: "text-blue-400",
                skills: ["React with Hooks", "JavaScript (ES6+)", "Tailwind CSS", "Redux & State Management", "Responsive Design", "Component Architecture"]
              },
              {
                category: "Backend",
                color: "group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5",
                iconColor: "text-emerald-400",
                skills: ["Node.js & Express.js", "RESTful APIs", "Authentication & Authorization", "Middleware Development", "Scalable Architecture", "Error Handling"]
              },
              {
                category: "Databases",
                color: "group-hover:border-purple-500/50 group-hover:bg-purple-500/5",
                iconColor: "text-purple-400",
                skills: ["MongoDB & Mongoose", "PostgreSQL", "MySQL", "Firebase Realtime DB", "Data Modeling", "Query Optimization"]
              },
              {
                category: "Tools & Practices",
                color: "group-hover:border-pink-500/50 group-hover:bg-pink-500/5",
                iconColor: "text-pink-400",
                skills: ["Git & GitHub", "RESTful Design", "Payment Integration", "Google Maps API", "Testing & Debugging", "DevTools Profiling"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className={`bg-gray-900/50 p-8 rounded-3xl border border-gray-800 transition-all duration-500 group ${skillGroup.color}`}>
                <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${skillGroup.iconColor}`}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-current transition-colors"></span>
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-8 h-1 bg-pink-500 rounded-full"></span> My Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Code",
                description: "Writing maintainable, well-documented code that's easy for teams to understand and extend."
              },
              {
                title: "User-Centric",
                description: "Building interfaces and experiences that delight users and solve real problems effectively."
              },
              {
                title: "Continuous Learning",
                description: "Always exploring new technologies and best practices to stay ahead in this rapidly evolving field."
              }
            ].map((philosophy, index) => (
              <div key={index} className="p-8 bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">{philosophy.title}</h3>
                <p className="text-gray-400 leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
