import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Sun,
  Moon,
  Languages,
  Home,
  User,
  Code,
  Award,
  MessageCircle,
  Github,
  Linkedin,
  Send
} from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' }
];

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
      resume: 'Resume'
    },
    hero: {
      role: 'Full Stack Developer',
      status: 'Currently doing B.Tech',
      intro: 'Passionate about creating digital solutions that make a difference'
    },
    about: {
      title: 'About Me',
      subtitle: 'What I Offer',
      services: [
        'Web App Development',
        'Responsive Front-End Design',
        'API Integration',
        'Data Visualization using Python & Streamlit'
      ]
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Technologies I work with'
    },
    projects: {
      title: 'Projects',
      subtitle: 'My Recent Work',
      comingSoon: 'More real projects coming soon!',
      items: [
        {
          title: 'Portfolio Website',
          description: 'A modern, responsive portfolio website built with React and TypeScript',
          tags: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          title: 'Data Dashboard',
          description: 'Interactive data visualization dashboard using Python and Streamlit',
          tags: ['Python', 'Streamlit', 'Data Viz']
        }
      ]
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'My Achievements',
      items: [
        'Internshala Python Programming',
        'Devtown'
      ]
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Let\'s work together',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        name: 'Rajani Choudhary',
        email: 'rajani123@gmail.com',
        phone: '+91-XXXXXXXXXX',
        location: 'Jaipur, India'
      }
    },
    footer: {
      copyright: '© 2024 Rajani Choudhary. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'मेरे बारे में',
      projects: 'प्रोजेक्ट्स',
      certificates: 'प्रमाणपत्र',
      contact: 'संपर्क',
      resume: 'रिज्यूमे'
    },
    hero: {
      role: 'फुल स्टैक डेवलपर',
      status: 'वर्तमान में B.Tech कर रहे हैं',
      intro: 'डिजिटल समाधान बनाने में जुनूनी जो बदलाव लाते हैं'
    },
    about: {
      title: 'मेरे बारे में',
      subtitle: 'मैं क्या ऑफर करता हूं',
      services: [
        'वेब ऐप डेवलपमेंट',
        'रेस्पॉन्सिव फ्रंट-एंड डिज़ाइन',
        'API इंटीग्रेशन',
        'Python और Streamlit का उपयोग करके डेटा विज़ुअलाइज़ेशन'
      ]
    },
    tech: {
      title: 'टेक स्टैक',
      subtitle: 'तकनीकें जिनके साथ मैं काम करता हूं'
    },
    projects: {
      title: 'प्रोजेक्ट्स',
      subtitle: 'मेरे हाल के काम',
      comingSoon: 'और भी वास्तविक प्रोजेक्ट्स जल्द आ रहे हैं!',
      items: [
        {
          title: 'पोर्टफोलियो वेबसाइट',
          description: 'React और TypeScript के साथ बनाई गई एक आधुनिक, रेस्पॉन्सिव पोर्टफोलियो वेबसाइट',
          tags: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          title: 'डेटा डैशबोर्ड',
          description: 'Python और Streamlit का उपयोग करके इंटरैक्टिव डेटा विज़ुअलाइज़ेशन डैशबोर्ड',
          tags: ['Python', 'Streamlit', 'Data Viz']
        }
      ]
    },
    certificates: {
      title: 'प्रमाणपत्र',
      subtitle: 'मेरी उपलब्धियां',
      items: [
        'इंटर्नशाला पाइथन प्रोग्रामिंग',
        'देवटाउन'
      ]
    },
    contact: {
      title: 'संपर्क करें',
      subtitle: 'आइए मिलकर काम करते हैं',
      form: {
        name: 'नाम',
        email: 'ईमेल',
        message: 'संदेश',
        send: 'संदेश भेजें'
      },
      info: {
        name: 'रजनी चौधरी',
        email: 'rajani123@gmail.com',
        phone: '+91-XXXXXXXXXX',
        location: 'जयपुर, भारत'
      }
    },
    footer: {
      copyright: '© 2024 रजनी चौधरी। सभी अधिकार सुरक्षित।',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें'
    }
  }
};

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'hi'>('en');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const t = translations[currentLang];

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'hi' : 'en');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Streamlit', 'NumPy', 'React', 'TypeScript'
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#101130] via-[#1c1f73] to-[#101130] dark:opacity-100 light:opacity-20" />
      
      {/* Particles */}
      <Particles />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-cyan-400">RC</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Home className="w-4 h-4 inline mr-1" />
                  {t.nav.home}
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <User className="w-4 h-4 inline mr-1" />
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Code className="w-4 h-4 inline mr-1" />
                  {t.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Award className="w-4 h-4 inline mr-1" />
                  {t.nav.certificates}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 inline mr-1" />
                  {t.nav.contact}
                </button>
                <button className="neon-button">
                  <Download className="w-4 h-4 inline mr-1" />
                  {t.nav.resume}
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-md text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white neon-text mb-4 fade-in">
              RAJANI
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-2 fade-in fade-in-delay-1">
              {t.hero.role}
            </h2>
            <p className="text-lg text-purple-300 mb-6 fade-in fade-in-delay-2">
              {t.hero.status}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 fade-in fade-in-delay-3">
              {t.hero.intro}
            </p>
            <div className="flex justify-center space-x-4 fade-in fade-in-delay-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="neon-button"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-300">{t.about.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.services.map((service, index) => (
              <div key={index} className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="text-cyan-400 mb-4">
                  <Code className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-white font-semibold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative z-10 py-20 px-4 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.tech.title}</h2>
            <p className="text-xl text-gray-300">{t.tech.subtitle}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
            <p className="text-xl text-gray-300">{t.projects.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className="glass p-6 rounded-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-400 bg-opacity-20 text-cyan-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="w-4 h-4 inline mr-1" />
                  View Project
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-purple-300 text-lg">{t.projects.comingSoon}</p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative z-10 py-20 px-4 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.certificates.title}</h2>
            <p className="text-xl text-gray-300">{t.certificates.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.certificates.items.map((cert, index) => (
              <div key={index} className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="text-cyan-400 mb-4">
                  <Award className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-white font-semibold">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-300">{t.contact.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass p-8 rounded-lg">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
                <button type="submit" className="w-full neon-button">
                  <Send className="w-4 h-4 inline mr-2" />
                  {t.contact.form.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{t.contact.info.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{t.contact.info.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{t.contact.info.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{t.contact.info.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rajani-choudhary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 bg-black bg-opacity-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-300">
            <p className="mb-4">{t.footer.copyright}</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Project Code</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Notice */}
      {showCookieNotice && (
        <div className="fixed bottom-4 left-4 right-4 z-50 glass p-4 rounded-lg max-w-sm mx-auto">
          <p className="text-gray-300 text-sm mb-3">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowCookieNotice(false)}
              className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-md text-sm font-medium hover:bg-cyan-300 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setShowCookieNotice(false)}
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md text-sm hover:border-gray-500 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;