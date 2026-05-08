import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">I'd love to hear from you. Let's discuss your next project or opportunity!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <a href="mailto:athuladhith49@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
              athuladhith49@gmail.com
            </a>
            <p className="text-gray-600 text-sm mt-2">I'll reply within 24 hours</p>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <a href="tel:+919544317586" className="text-blue-600 hover:text-blue-700 font-semibold">
              +91 95443 17586
            </a>
            <p className="text-gray-600 text-sm mt-2">Mon - Fri, 9 AM - 6 PM IST</p>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Role</h3>
            <p className="text-gray-700 font-semibold">Full Stack Developer</p>
            <p className="text-gray-600 text-sm mt-2">Caxita Tech Solutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">✓ Thank you! Your message has been received. I'll get back to you soon!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                  placeholder="Tell me about your project, ideas, or how I can help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-10 text-white mb-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6">Why Work Together?</h3>
              <ul className="space-y-4">
                {[
                  "✓ 1.3+ years of professional experience",
                  "✓ 8+ successful travel tech projects",
                  "✓ Full stack expertise (Frontend, Backend, Databases)",
                  "✓ Fast learner and problem solver",
                  "✓ Available for freelance & full-time roles",
                  "✓ Responsive and professional communication"
                ].map((item, index) => (
                  <li key={index} className="text-lg opacity-95">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect on Social Media</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/athul-a-93b6b6332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
                >
                  <div className="text-3xl">💼</div>
                  <div>
                    <p className="font-bold text-gray-800">LinkedIn</p>
                    <p className="text-gray-600 text-sm">View my professional profile</p>
                  </div>
                  <span className="ml-auto text-blue-600">→</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                >
                  <div className="text-3xl">💻</div>
                  <div>
                    <p className="font-bold text-gray-800">GitHub</p>
                    <p className="text-gray-600 text-sm">Check out my projects and code</p>
                  </div>
                  <span className="ml-auto text-gray-600">→</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-sky-50 hover:bg-sky-100 rounded-lg transition"
                >
                  <div className="text-3xl">🐦</div>
                  <div>
                    <p className="font-bold text-gray-800">Twitter</p>
                    <p className="text-gray-600 text-sm">Follow for web dev insights</p>
                  </div>
                  <span className="ml-auto text-sky-600">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What's your typical response time?",
                a: "I try to respond to all inquiries within 24 hours. For urgent matters, feel free to call."
              },
              {
                q: "Do you offer freelance work?",
                a: "Yes! I'm open to freelance projects. Let's discuss your requirements and timeline."
              },
              {
                q: "What technologies do you specialize in?",
                a: "React, Node.js, MongoDB, PostgreSQL, and the entire MERN/MEAN stack. Travel tech is my specialty."
              },
              {
                q: "Can you help with existing projects?",
                a: "Absolutely! I can help debug, optimize, or add new features to existing applications."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-200 transition">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
