export default function ProjectCard({ title, description, tags, link, category, featured, image }) {
  const categoryColors = {
    'Travel': 'from-blue-500 to-cyan-500',
    'E-commerce': 'from-green-500 to-emerald-500',
    'SaaS': 'from-purple-500 to-pink-500'
  };

  return (
    <div className="group relative">
      {featured && (
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
          Featured
        </div>
      )}
      
      <div className={`h-full bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-800 flex flex-col group/card ${featured ? 'ring-1 ring-purple-500/50' : ''}`}>
        {/* Project Image */}
        <div className={`h-48 bg-gray-200 relative overflow-hidden`}>
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category] || 'from-blue-400 to-indigo-600'}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition duration-300">
                  {category === 'Travel' ? '✈️' : category === 'E-commerce' ? '🛍️' : '🚀'}
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm font-bold bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover/card:text-purple-400 transition-colors flex-1">{title}</h3>
            <span className="ml-3 text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 whitespace-nowrap">{category}</span>
          </div>
          
          <p className="text-gray-400 mb-6 line-clamp-2 flex-grow leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {link !== '#' ? (
              <>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-white font-bold hover:bg-white/20 transition-colors bg-white/10 py-3 rounded-xl border border-white/10"
                >
                  Demo →
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-gray-400 font-bold hover:text-white transition-colors bg-transparent border border-gray-700 hover:border-gray-500 py-3 rounded-xl"
                >
                  Code
                </a>
              </>
            ) : (
              <a
                href={link}
                className="w-full text-center text-white font-bold hover:bg-white transition-colors hover:text-black bg-white/10 border border-white/10 py-3 rounded-xl"
              >
                View Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
