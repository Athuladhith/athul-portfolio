import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Create a FormData object to send to Web3Forms
      const submissionData = new FormData();
      submissionData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("subject", formData.subject);
      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again later.');
        console.error("Web3Forms Error:", data);
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.');
      console.error("Submission Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-32 px-4 selection:bg-purple-500/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'd love to hear from you. Let's discuss your next project, explore opportunities, or just have a chat about web development.
          </p>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:bg-gray-900 hover:border-blue-500/50 transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a href="mailto:athuladhith49@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium break-all">
              athuladhith49@gmail.com
            </a>
            <p className="text-gray-500 text-sm mt-3">I'll reply within 24 hours</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:bg-gray-900 hover:border-purple-500/50 transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <a href="tel:+919544317586" className="text-purple-400 hover:text-purple-300 font-medium">
              +91 95443 17586
            </a>
            <p className="text-gray-500 text-sm mt-3">Mon - Fri, 9 AM - 6 PM IST</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:bg-gray-900 hover:border-emerald-500/50 transition-all duration-500 group">
            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-xl font-bold text-white mb-2">Role</h3>
            <p className="text-emerald-400 font-medium">Full Stack Developer</p>
            <p className="text-gray-500 text-sm mt-3">Caxita Tech Solutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-3 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Send a Message</h2>
            
            {submitted && (
              <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl relative z-10">
                <p className="text-emerald-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl relative z-10">
                <p className="text-red-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 font-medium mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-950/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-medium mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-950/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 font-medium mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-950/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-gray-600"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 font-medium mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 bg-gray-950/50 border border-gray-800 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project, ideas, or how I can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold transition-transform active:scale-[0.98] flex items-center justify-center gap-2 ${
                  isSubmitting ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Connect Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/20 rounded-3xl p-8 border border-indigo-500/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Why Work Together?</h3>
              <ul className="space-y-4">
                {[
                  "1.3+ years professional experience",
                  "8+ successful travel tech projects",
                  "Full stack mastery (React, Node, DBs)",
                  "Fast learner and problem solver",
                  "Responsive and clear communication"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Social Connections</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/athul-a-93b6b6332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950/50 hover:bg-gray-800 border border-gray-800 hover:border-blue-500/50 rounded-2xl transition-all group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">💼</div>
                  <div>
                    <p className="font-bold text-white">LinkedIn</p>
                    <p className="text-gray-500 text-xs">View professional profile</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950/50 hover:bg-gray-800 border border-gray-800 hover:border-white/50 rounded-2xl transition-all group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">💻</div>
                  <div>
                    <p className="font-bold text-white">GitHub</p>
                    <p className="text-gray-500 text-xs">Explore repositories</p>
                  </div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950/50 hover:bg-gray-800 border border-gray-800 hover:border-sky-500/50 rounded-2xl transition-all group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">🐦</div>
                  <div>
                    <p className="font-bold text-white">Twitter</p>
                    <p className="text-gray-500 text-xs">Follow for tech insights</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What's your typical response time?",
                a: "I try to respond to all inquiries within 24 hours. For urgent matters, feel free to call directly."
              },
              {
                q: "Do you offer freelance work?",
                a: "Yes! I'm open to freelance projects. Let's discuss your requirements, scope, and timeline."
              },
              {
                q: "What technologies do you specialize in?",
                a: "React, Node.js, MongoDB, PostgreSQL, and the entire modern JS stack. Travel tech architectures are my specialty."
              },
              {
                q: "Can you help with existing codebases?",
                a: "Absolutely. I can help debug, optimize performance, refactor, or add new features to your existing applications."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h4 className="font-bold text-white mb-3 text-lg flex items-start gap-3">
                  <span className="text-purple-500 mt-1">Q.</span> {faq.q}
                </h4>
                <p className="text-gray-400 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
