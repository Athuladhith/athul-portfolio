export default function ProjectCard({ title, description, tags, link, category, featured }) {
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
      
      <div className={`h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100 flex flex-col ${featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
        {/* Image Placeholder */}
        <div className={`h-48 bg-gradient-to-br ${categoryColors[category] || 'from-blue-400 to-indigo-600'} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30 group-hover:opacity-50 transition duration-300">
              {category === 'Travel' ? '✈️' : category === 'E-commerce' ? '🛍️' : '🚀'}
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm font-bold">View Details</span>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition flex-1">{title}</h3>
            <span className="ml-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">{category}</span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold hover:from-blue-100 hover:to-indigo-100 transition cursor-default border border-blue-200"
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
                  className="flex-1 text-center text-blue-600 font-bold hover:text-blue-800 group-hover:translate-x-1 transition bg-blue-50 hover:bg-blue-100 py-2 rounded-lg"
                >
                  Demo →
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-gray-600 font-bold hover:text-gray-800 transition bg-gray-50 hover:bg-gray-100 py-2 rounded-lg"
                >
                  Code
                </a>
              </>
            ) : (
              <button
                className="w-full text-center text-blue-600 font-bold hover:text-blue-800 transition bg-blue-50 hover:bg-blue-100 py-2 rounded-lg cursor-not-allowed opacity-50"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
