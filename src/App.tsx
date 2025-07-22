import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Sun,
  Moon,
  Home,
  User,
  Code,
  Award,
  MessageCircle,
  Github,
  Linkedin,
  Send,
  ChevronDown,
  Cloud,
  Globe,
  Briefcase,
  GraduationCap
} from 'lucide-react';

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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Skills data
  const skillsData = [
    // Cloud
    { name: 'AWS', category: 'Cloud', proficiency: 90, icon: <Cloud className="w-6 h-6 text-purple-600" /> },
    
    // Programming
    { name: 'JavaScript', category: 'Programming', proficiency: 95, icon: <Code className="w-6 h-6 text-purple-600" /> },
    { name: 'TypeScript', category: 'Programming', proficiency: 90, icon: <Code className="w-6 h-6 text-purple-600" /> },
    { name: 'Python', category: 'Programming', proficiency: 85, icon: <Code className="w-6 h-6 text-purple-600" /> },
    { name: 'Java', category: 'Programming', proficiency: 80, icon: <Code className="w-6 h-6 text-purple-600" /> },
    { name: 'HTML/CSS', category: 'Programming', proficiency: 95, icon: <Code className="w-6 h-6 text-purple-600" /> },
    
    // Web Development
    { name: 'React', category: 'Web Dev', proficiency: 95, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'Node.js', category: 'Web Dev', proficiency: 90, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'Express.js', category: 'Web Dev', proficiency: 85, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'Next.js', category: 'Web Dev', proficiency: 80, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'MongoDB', category: 'Web Dev', proficiency: 85, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'Docker', category: 'Web Dev', proficiency: 75, icon: <Globe className="w-6 h-6 text-purple-600" /> },
    { name: 'Git', category: 'Web Dev', proficiency: 90, icon: <Globe className="w-6 h-6 text-purple-600" /> }
  ];

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
      <div className={`fixed inset-0 transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]' 
          : 'bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1]'
      }`} />
      
      {/* Particles */}
      <Particles />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-purple-400">RC</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-lg text-gray-300 hover:text-purple-400 transition-all duration-300 hover:bg-purple-400 hover:bg-opacity-10"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left lg:pr-8">
              <p className="text-purple-300 text-xl mb-4 fade-in font-light tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-8xl font-bold hero-name mb-8 fade-in fade-in-delay-1 tracking-wide">
              RAJANI
            </h1>
            <p className="text-2xl text-purple-200 mb-4 fade-in fade-in-delay-2 font-semibold">
              Building seamless digital experiences for the modern web.
            </p>
              <p className="text-2xl text-purple-300 mb-6 fade-in fade-in-delay-2 font-medium">
                I'm a Full Stack Developer
              </p>
              <p className="text-gray-300 max-w-lg mb-12 fade-in fade-in-delay-3 text-lg leading-relaxed">
                Passionate about creating modern web applications with cutting-edge technologies. I specialize in React, Node.js, and full-stack development, turning innovative ideas into powerful digital solutions that make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 fade-in fade-in-delay-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-10 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View My Work
                </button>
              <button
                onClick={() => scrollToSection('contact')}
                  className="px-10 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
            </div>

            {/* Right Side - Photo */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                <div className="w-96 h-96 rounded-2xl border-4 border-purple-400 overflow-hidden shadow-2xl photo-frame transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                  {/* Your actual photo */}
                  <img 
                    src="/src/rajani-photo.jpg" 
                    alt="Rajani Choudhary" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="text-center mt-20 fade-in fade-in-delay-4">
            <p className="text-purple-300 text-sm mb-3 font-medium">Scroll Down</p>
            <ChevronDown className="w-6 h-6 text-purple-300 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-400 mb-2">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-300 font-medium">A quick introduction to who I am and what I do</p>
          </div>
          <div className="bg-white bg-opacity-5 rounded-2xl shadow-xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 border border-purple-400 border-opacity-20">
            {/* Profile Photo (optional) */}
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <img
                src="/src/rajani-photo.jpg"
                alt="Rajani profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-purple-300 shadow-lg"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            </div>
            {/* About Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Hi, I'm Rajani</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer dedicated to building modern, scalable, and user-friendly web applications. My expertise lies in React, Node.js, and the JavaScript ecosystem, and I thrive on turning ideas into impactful digital solutions.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Strong problem-solving and analytical skills</li>
                <li>Focus on clean, maintainable code and best practices</li>
                <li>Skilled in building responsive and interactive web applications</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Continuous learner, always exploring new tech trends</li>
              </ul>
              <p className="text-md text-purple-300 font-medium">
                Let's connect and create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-4 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-300">My technical expertise and tools</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'Cloud', 'Programming', 'Web Dev'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="glass p-1 rounded-lg flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                List View
              </button>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {skillsData
                .filter(skill => selectedCategory === 'All' || skill.category === selectedCategory)
                .map((skill, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-3 group-hover:text-purple-600 transition-colors duration-300">{skill.name}</h3>
                    <p className="text-sm text-gray-500 text-center mb-6 font-medium">{skill.category}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 font-medium">Proficiency</span>
                        <span className="text-purple-600 font-bold text-lg">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm" 
                          style={{width: `${skill.proficiency}%`}}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400 text-center mt-2">
                        {skill.proficiency >= 90 ? 'Expert' : 
                         skill.proficiency >= 80 ? 'Advanced' : 
                         skill.proficiency >= 70 ? 'Intermediate' : 'Beginner'}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-4">
              {skillsData
                .filter(skill => selectedCategory === 'All' || skill.category === selectedCategory)
                .map((skill, index) => (
                  <div key={index} className="glass p-6 rounded-2xl flex items-center justify-between hover:bg-white hover:bg-opacity-15 transition-all duration-300 group">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{skill.name}</h3>
                        <p className="text-sm text-gray-300 font-medium">{skill.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-300 font-medium">Proficiency</div>
                        <div className="text-2xl font-bold text-purple-400">{skill.proficiency}%</div>
                        <div className="text-xs text-gray-400">
                          {skill.proficiency >= 90 ? 'Expert' : 
                           skill.proficiency >= 80 ? 'Advanced' : 
                           skill.proficiency >= 70 ? 'Intermediate' : 'Beginner'}
                        </div>
                      </div>
                      <div className="w-32 bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm" 
                          style={{width: `${skill.proficiency}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* My Journey Section */}
      <section id="experience" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-xl text-gray-300">Professional experience, education, and certifications</p>
          </div>
          
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl mr-6 shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
              
              <div className="space-y-8">
                <div className="relative">
                  <div className="flex items-start space-x-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl border-4 border-purple-900">
                        <span className="text-white font-bold text-lg">LW</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 glass p-8 rounded-3xl border border-purple-400 border-opacity-30 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-white">Technical Intern</h4>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                          June 2025 - August 2025
                    </span>
                      </div>
                      <p className="text-xl text-purple-300 mb-6 font-semibold">LinuxWorld Informatics Pvt. Ltd.</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">Developed and maintained full-stack web applications using React, Node.js, and TypeScript</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">Implemented cloud solutions using AWS services for scalable infrastructure</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">Utilized modern development practices including Git version control and Docker containerization</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">Worked with MongoDB for database management and Express.js for backend API development</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300">Applied responsive design principles using HTML/CSS and modern JavaScript frameworks</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-purple-400 border-opacity-30">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">React</span>
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">Node.js</span>
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">TypeScript</span>
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">AWS</span>
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">MongoDB</span>
                          <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">Docker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl mr-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white">Education</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border border-green-400 border-opacity-30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-green-900">
                      <span className="text-white font-bold text-xl">RIS</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">Higher Secondary School</h4>
                    <p className="text-xl text-green-300 mb-2 font-semibold">Rana International School Degana</p>
                    <p className="text-purple-300 mb-4">Science Stream with Mathematics</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-sm font-medium">Physics</span>
                      <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-sm font-medium">Chemistry</span>
                      <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-sm font-medium">Mathematics</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass p-8 rounded-3xl border border-blue-400 border-opacity-30 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg border-4 border-blue-900">
                      <span className="text-white font-bold text-xl">JEC</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">Bachelor of Technology</h4>
                    <p className="text-xl text-blue-300 mb-2 font-semibold">Jaipur Engineering College and Research Centre</p>
                    <p className="text-purple-300 mb-4">Electronics and Communication Engineering</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">Electronics</span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">Communication</span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm font-medium">Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl mr-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IS</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Programming with Python</h4>
                  <p className="text-lg text-yellow-300 mb-1">Internshala</p>
                  <p className="text-purple-300 mb-4">2024</p>
                  
                  <button 
                    onClick={() => {
                      try {
                        window.open('/certificate.pdf', '_blank');
                      } catch (error) {
                        console.error('Error opening certificate:', error);
                        alert('Certificate file not found. Please check if certificate.pdf is in the public folder.');
                      }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Award className="w-5 h-5 mr-2" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-xl text-gray-300">My Recent Work</p>
          </div>
          <div className="grid md:grid-cols-1 gap-8 mb-8">
            <div className="glass p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start md:space-x-8">
              {/* Project Image */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                  alt="Gemini-PyCoder Project" 
                  className="w-64 h-40 object-cover rounded-xl shadow-lg border-2 border-purple-400 bg-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                </div>
              {/* Project Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Gemini-PyCoder</h3>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-purple-400">Gemini-PyCoder</span> is an advanced Python notebook project that leverages Google Gemini AI to generate, explain, and debug code. It features a clean Jupyter Notebook interface, interactive code cells, and seamless integration with Gemini's powerful language model. Ideal for students, developers, and anyone looking to supercharge their Python coding workflow with AI assistance.
                </p>
                <a
                  href="https://github.com/Rajani02704/Gemini-PyCoder/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Blog</h2>
            <p className="text-xl text-gray-300">Insights & Articles</p>
          </div>
          <article className="glass p-8 rounded-2xl shadow-xl border border-purple-400 border-opacity-30">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Generative AI: My Thoughts</h3>
            <p className="text-gray-300 mb-4">
              Generative AI is a new technology that can create things like text, images, and even music. I find it really interesting because it helps people work faster and be more creative. With tools like ChatGPT and Gemini, you can get help with coding, writing, and learning new things. I think generative AI will change the way we solve problems and make projects. It’s not just for big companies—anyone can use it to try new ideas. I’m excited to see how it grows and what we can build with it in the future.
            </p>
            <p className="text-gray-400 text-sm mt-4">July 2025</p>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-xl text-gray-300">Let's work together</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass p-8 rounded-lg">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>
                <button type="submit" className="w-full neon-button">
                  <Send className="w-4 h-4 inline mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Rajani</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    <span>rajanichoudhary027@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-purple-400" />
                    <span>+91 6376589390</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Jaipur, India</span>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rajani-choudhary-405062295/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/Rajani02704"
                    className="p-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-full hover:scale-110 transition-transform"
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
            <p className="mb-4">© 2024 Rajani Choudhary. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Project Code</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;