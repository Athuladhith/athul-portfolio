export default function About() {
  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">About Me</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer specializing in building robust, scalable web applications in the travel and tourism domain. With a strong foundation in both frontend and backend technologies, I create seamless user experiences backed by powerful server-side architecture.
          </p>
        </div>

        {/* Journey Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">My Journey</h2>
          
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Completed MSc Physics</h3>
                <p className="text-blue-600 font-semibold mb-3">Educational Foundation</p>
                <p className="text-gray-600 leading-relaxed">
                  Started with a strong foundation in Physics and scientific thinking. This analytical mindset has been crucial in problem-solving and understanding complex system architectures.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Started Web Development</h3>
                <p className="text-blue-600 font-semibold mb-3">Self-Learning & Growth</p>
                <p className="text-gray-600 leading-relaxed">
                  Transitioned to web development through self-study and online courses. Quickly grasped JavaScript fundamentals, React.js, and Node.js. Built multiple projects to strengthen skills.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-green-600 to-transparent mt-4"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Joined Caxita Tech Solutions</h3>
                <p className="text-green-600 font-semibold mb-3">Professional Experience (2023 - Present)</p>
                <p className="text-gray-600 leading-relaxed">
                  Started as a Full Stack Developer working on travel tech solutions. Developed expertise in handling complex travel modules including flights, hotels, trains, cars, packages, and transfers. Worked with 8+ production projects serving thousands of users.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Continuous Learning & Growth</h3>
                <p className="text-purple-600 font-semibold mb-3">Ongoing Evolution</p>
                <p className="text-gray-600 leading-relaxed">
                  Constantly exploring new technologies and best practices. Committed to mastering modern web development, improving code quality, and mentoring junior developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Breakdown */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Frontend",
                icon: "⚛️",
                color: "from-blue-500 to-cyan-500",
                skills: ["React with Hooks", "JavaScript (ES6+)", "Tailwind CSS", "Redux & State Management", "Responsive Design", "Component Architecture"]
              },
              {
                category: "Backend",
                icon: "⚙️",
                color: "from-green-500 to-emerald-500",
                skills: ["Node.js & Express.js", "RESTful APIs", "Authentication & Authorization", "Middleware Development", "Scalable Architecture", "Error Handling"]
              },
              {
                category: "Databases",
                icon: "💾",
                color: "from-purple-500 to-pink-500",
                skills: ["MongoDB & Mongoose", "PostgreSQL", "MySQL", "Firebase Realtime DB", "Data Modeling", "Query Optimization"]
              },
              {
                category: "Tools & Practices",
                icon: "🛠️",
                color: "from-orange-500 to-red-500",
                skills: ["Git & GitHub", "RESTful Design", "Payment Integration", "Google Maps API", "Testing & Debugging", "DevTools Profiling"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className={`bg-gradient-to-br ${skillGroup.color} p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1`}>
                <div className="text-5xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-white/90">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experience Highlights</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-xl border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">8+</div>
                <p className="text-gray-700 font-semibold">Travel Domain Projects</p>
                <p className="text-gray-600 text-sm">Flights, Hotels, Trains, Cars, Packages, Transfers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">1.3+</div>
                <p className="text-gray-700 font-semibold">Years Professional Experience</p>
                <p className="text-gray-600 text-sm">Full Stack Development at Caxita Tech</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700 font-semibold">Full Stack Capability</p>
                <p className="text-gray-600 text-sm">Frontend • Backend • Databases</p>
              </div>
            </div>

            <div className="border-t border-blue-200 pt-8">
              <p className="text-gray-700 leading-relaxed">
                Currently working at <strong>Caxita Tech Solutions Private Limited</strong> where I develop and maintain production applications in the travel and tourism sector. Specializing in creating scalable architectures that handle high traffic, implementing real-time features, integrating payment gateways, and optimizing performance for enterprise-level applications.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-gray-800">My Philosophy</h2>
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
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{philosophy.title}</h3>
                <p className="text-gray-600">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
