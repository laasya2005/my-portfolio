import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Terminal, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ExternalLink,
  Globe,
  Database,
  Camera,
  Brain,
  Code,
  BarChart3,
  FileText,
  Image,
  Layers
} from 'lucide-react';

const Portfolio = () => {
  const fullText = "Software Developer | Content Creator | AI Enthusiast | Automation Builder";
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleScroll = () => {
    if (isNavigating) return;
    
    const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
      if (typedText === fullText) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [typedText, fullText]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsNavigating(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
      
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Fractal Analysis of Financial Markets",
      category: "Research & ML",
      description: "Advanced research project analyzing financial markets using fractal analysis and machine learning. Implements Mandelbrot fractal analysis to predict future stock prices by identifying self-similarity patterns in financial time series data.",
      tech: ["Python", "Jupyter Notebook", "SciPy", "MSM Model", "Time Series Analysis", "Statistical Analysis", "Pandas", "NumPy", "Matplotlib", "Financial Modeling", "Data Visualization", "Machine Learning"],
      metrics: "Published research paper",
      github: "https://github.com/laasya2005/Fractal-Analysis",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%238b5cf6'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='white' font-size='18'%3EFractal Analysis%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='white' font-size='14'%3EFinancial Markets%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      title: "Home Automation Using Packet Tracer",
      category: "Research & IoT",
      description: "Published research paper on smart home automation system simulation using Cisco Packet Tracer. The system integrates IoT devices, sensors, actuators, and microcontrollers to create an automated smart home environment.",
      tech: ["Cisco Packet Tracer", "Internet of Things (IoT)", "Network Simulation", "Smart Home Systems", "Wireless Networks", "Sensor Integration", "Actuator Control", "Microcontrollers", "Network Configuration", "IoT Commands", "Virtual Network Design"],
      metrics: "Published in Springer Conference Proceedings",
      github: "https://link.springer.com/chapter/10.1007/978-981-19-2004-2_56",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%230ea5e9'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='white' font-size='16'%3EHome Automation%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='white' font-size='14'%3EPacket Tracer%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "Tetra Bot—A Multi-purpose Robot",
      category: "Research & Robotics",
      description: "Published research paper on autonomous multi-purpose robot design integrating embedded systems, IoT, and image processing. The robot performs tasks like grass cutting, waste management, water serving, and rain detection using various sensors.",
      tech: ["Embedded Systems", "WeMoS D1 Microcontroller", "Internet of Things (IoT)", "Image Processing", "Haar Cascade Algorithms", "Ultrasonic Sensors", "Rain Sensors", "Face Detection", "MIT App Inventor", "Mechanical Design", "Autonomous Systems", "Database Integration"],
      metrics: "Published in Springer Conference Proceedings",
      github: "https://link.springer.com/chapter/10.1007/978-981-19-2004-2_50",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2310b981'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' dy='.3em' fill='white' font-size='18'%3ETetra Bot%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' fill='white' font-size='14'%3EMulti-purpose Robot%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      title: "Gardening Wizard",
      category: "Web App",
      description: "An intelligent gardening assistant that helps users identify plants, provides care instructions, and tracks garden progress using computer vision and machine learning.",
      tech: ["Python", "TensorFlow", "OpenCV", "React", "Flask", "Computer Vision", "Machine Learning", "Image Processing", "REST API", "Database Design", "User Interface Design", "Plant Recognition"],
      metrics: "Plant identification with 95% accuracy",
      github: "https://github.com/laasya2005/GardeningWizard",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2328a745'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24'%3EGardening Wizard%3C/text%3E%3C/svg%3E"
    },
    {
      id: 5,
      title: "Sorting Visualizer",
      category: "Web App",
      description: "Interactive web application that visualizes various sorting algorithms in real-time, helping users understand how different algorithms work.",
      tech: ["JavaScript", "HTML5", "CSS3", "D3.js", "Algorithm Visualization", "Interactive Design", "Data Structures", "Sorting Algorithms", "Real-time Animation", "Educational Technology", "Frontend Development", "User Experience"],
      metrics: "Real-time algorithm visualization",
      github: "https://github.com/laasya2005/Sorting-Visualizer",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2306b6d4'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24'%3ESorting Visualizer%3C/text%3E%3C/svg%3E"
    },
    {
      id: 6,
      title: "Cuisine Detector",
      category: "AI/ML",
      description: "Machine learning model that identifies different cuisines from food images using computer vision and deep learning techniques.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing", "Deep Learning", "Convolutional Neural Networks", "Computer Vision", "Food Recognition", "Machine Learning", "Data Preprocessing", "Model Training"],
      metrics: "Cuisine classification with 90% accuracy",
      github: "https://github.com/laasya2005/Cuisine-Detection-Using-Convolutional-Neural-Networks",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24'%3ECuisine Detector%3C/text%3E%3C/svg%3E"
    }
  ];

  const interests = [
    { name: "Software Development", icon: <Globe className="w-8 h-8" />, color: "#ffbb2c" },
    { name: "Programming for Everybody", icon: <Database className="w-8 h-8" />, color: "#5578ff" },
    { name: "Computer Vision", icon: <Camera className="w-8 h-8" />, color: "#e80368" },
    { name: "Natural Language Processing", icon: <Brain className="w-8 h-8" />, color: "#1c7d32" },
    { name: "Software Engineering", icon: <Code className="w-8 h-8" />, color: "#28a745" },
    { name: "Visualization", icon: <BarChart3 className="w-8 h-8" />, color: "#f1081f" },
    { name: "Algorithms", icon: <FileText className="w-8 h-8" />, color: "#47aeff" },
    { name: "Image Processing", icon: <Image className="w-8 h-8" />, color: "#ffc107" }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "C++", "Java"],
    "Front End Development": ["ReactJs", "NextJs", "jQuery", "Bootstrap", "HTML 5", "CSS 3", "JSON", "XML"],
    "Back End Development": ["Flask", "Django", "Strapi", "REST API", "SQL", "PostgreSQL", "MongoDB"],
    "Libraries/Frameworks": ["Pandas", "NumPy", "Scikit learn", "SciPy", "TensorFlow", "PyTorch", "Keras", "PyBullet", "OpenCV", "AWS", "NodeJS", "PyUnit", "Selenium", "PyTest"],
    "Tools & Methodologies": ["CI/CD", "Jenkins", "Scrum", "Agile", "Jira", "Domo", "Git", "GitHub"]
  };

  const education = [
    {
      school: "University of Colorado Denver",
      degree: "MS in Computer Science",
      period: "August 2022 - May 2024",
      courses: ["Theory of Automata", "Algorithms", "Advanced Computer Architecture", "Mobile Computing and Programming", "Software Project Management", "Computer Vision", "Computational Motor Control", "Cyber Infrastructure and Defense"],
      image: "Education/CU.png"
    },
    {
      school: "SNIST",
      degree: "B.Tech. in Electronics and Communication",
      period: "Aug 2018 - July 2022",
      courses: ["Database Management Systems", "Data Structures & Operating system", "Artificial Intelligence", "Digital Signal Processing", "Computer Networks", "Microprocessors & Microcontrollers", "Communication Systems", "VLSI Design"],
      image: "Education/snist.png"
    }
  ];

  const certifications = [
    {
      name: "Machine Learning by Andrew Ng",
      issuer: "Stanford University",
      image: "https://pbs.twimg.com/media/FMqBIm-VUAICbT5.jpg:large",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9SR32ALY22K9"
    },
    {
      name: "Applied AI professional Certificate",
      issuer: "IBM",
      image: "https://www.ibm.com/design/language/dce3f5b8db2c0ff04296123f424b3d41/core_blue50_on_black.svg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HEM3DGKZT8TN"
    },
    {
      name: "Cloud foundations",
      issuer: "AWS",
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125559383%2F317212851579%2F1%2Foriginal.20210208-232017?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2246%2C2246&s=40aa0fb13fe40ce86241ae7b8fc8caea",
      link: "https://www.coursera.org/account/accomplishments/certificate/22BMY59HGCWP"
    },
    {
      name: "Cisco Certified Network Associate",
      issuer: "CISCO",
      image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
      link: "https://www.credly.com/badges/1ea8c608-b03b-4954-9eed-9224c2b0deb3?source=linked_in_profile"
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      image: "https://images.credly.com/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png",
      link: "https://www.credly.com/badges/378fa22d-2afd-4d77-809e-71fa1aebc510?source=linked_in_profile"
    },
    {
      name: "Algorithmic Toolbox",
      issuer: "University of San Diego",
      image: "https://download.logo.wine/logo/University_of_California%2C_San_Diego/University_of_California%2C_San_Diego-Logo.wine.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/SSNZPX4PRGLU"
    },
    {
      name: "Programming for Everybody",
      issuer: "University of Michigan",
      image: "https://1000logos.net/wp-content/uploads/2018/08/University-of-Michigan-Logo.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/5PKAYKFECR3A"
    }
  ];

  const experience = [
    {
      company: "Helix Wireless",
      position: "Software Developer",
      period: "Sep 2024 - Present",
      location: "New Jersey, United States",
      type: "Full-time · On-site",
      description: [
        "Created and maintained clear, client-facing API documentation to support external integration",
        "Built and updated UI components using React, JavaScript, and TypeScript to improve usability and maintain visual consistency",
        "Written Python scripts for data cleaning, formatting, and automation to streamline daily operations",
        "Participated in code reviews and sprint planning sessions, following Agile methodologies to deliver features on schedule",
        "Helped troubleshoot issues across the app, whether they were on the frontend, backend, or related to data flow"
      ],
      skills: ["JavaScript", "React.js", "Next.js", "TypeScript", "Python", "Strapi", "Jenkins", "Amazon Web Services (AWS)", "API Documentation", "Agile Methodologies", "Code Review", "Frontend Development", "Backend Development"]
    },
    {
      company: "Asian Community Development Center",
      position: "Web Developer",
      period: "Jul 2024 - Sep 2024",
      location: "United States",
      type: "Volunteering · Remote",
      description: [
        "Developed and maintained the organization's website, ensuring it reflects current events, news, and resources for the community",
        "Implemented user-friendly features and optimized website performance to enhance accessibility and user experience",
        "Improved the site's SEO to boost visibility and engagement within the community",
        "Provided technical support and training to staff for effective website management and content updates"
      ],
      skills: ["Web Development", "Website Maintenance", "User Experience (UX)", "Search Engine Optimization (SEO)", "Technical Training", "Content Management", "Community Outreach", "Performance Optimization", "Accessibility", "Staff Training", "Website Management"]
    },
    {
      company: "JibChain",
      position: "Software Developer",
      period: "Aug 2024 - Oct 2024",
      location: "North Carolina, United States",
      type: "Full-time · Remote",
      description: [
        "Designed the layout for the company's MVP, using data insights to create a clear, user-friendly interface",
        "Improved the company website's design and structure for a better user experience",
        "Organized and managed website content to enhance SEO performance",
        "Increased organic website traffic by 30% within three months through effective SEO strategies",
        "Helped the website rank in the top 10 search results for key industry-related keywords"
      ],
      skills: ["Web Engineering", "Software Design", "UI/UX Design", "Domo", "Search Engine Optimization (SEO)", "SEO Audits", "Google Analytics", "Content Management", "Data Analysis", "MVP Development", "Website Optimization", "Digital Marketing"]
    },
    {
      company: "1CloudHub",
      position: "Software Engineer Intern",
      period: "Jul 2024 - Aug 2024",
      location: "Frisco, Texas, United States",
      type: "Part-time · Remote",
      description: [
        "Developed a strong foundational understanding of AWS infrastructure and GenAI tools, focusing on how these technologies support scalable AI solutions",
        "Gained insight into the functionality of transformer models, including Anthropic, to understand how they address specific customer queries with minimized hallucinations",
        "Learned about the architecture of platforms for tone-based voice predictions, understanding the requirements for model specialization and accuracy",
        "Familiarized with various tools used to streamline AI applications, gaining a theoretical grasp of their roles in improving model performance and reliability"
      ],
      skills: ["AWS (Amazon Web Services)", "Generative AI (GenAI)", "Transformer Models", "Anthropic Models", "Natural Language Processing (NLP)", "Voice Prediction Systems", "Machine Learning (ML)", "AI Model Optimization", "Cloud Infrastructure", "AI Architecture", "Model Training", "Performance Optimization"]
    },
    {
      company: "Mobalytics",
      position: "Software Developer",
      period: "Apr 2024 - May 2024",
      location: "United States",
      type: "Full-time · Remote",
      description: [
        "Developed and maintained web applications using React.js, ensuring responsive design and optimal user experience",
        "Implemented RESTful APIs and integrated third-party services to enhance application functionality",
        "Collaborated with cross-functional teams to deliver high-quality software solutions within deadlines",
        "Participated in code reviews and contributed to improving code quality and best practices"
      ],
      skills: ["React.js", "JavaScript", "RESTful APIs", "Web Development", "Responsive Design", "Cross-functional Collaboration", "Code Review", "Software Development", "Third-party Integration", "User Experience", "Code Quality", "Best Practices"]
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
      } border-b ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Laasya Lata
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-purple-500 font-semibold'
                      : 'hover:text-purple-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${
            darkMode ? 'border-gray-700 bg-gray-900/95' : 'border-gray-200 bg-white/95'
          } backdrop-blur-md`}>
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-3 py-2 rounded-lg capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'bg-purple-500 text-white'
                      : 'hover:bg-gray-700/20'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/profile.jpeg"
              alt="Laasya Lata"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Laasya Lata
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate software developer with expertise in AI/ML, web development, and automation. 
            I love building innovative solutions that make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/laasya2005"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
              }`}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/laasyalata/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white/80'
          } backdrop-blur-sm border ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a Master's degree in Computer Science from the University of Colorado Denver. 
              My journey in technology has been driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in AI/ML, web development, and automation, with experience in both frontend and backend technologies. 
              I love working on projects that challenge me to learn new technologies and solve complex problems.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through content creation. I believe in continuous learning and staying updated 
              with the latest industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Areas of Interest
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="mb-4 flex justify-center">
                  <div style={{ color: interest.color }}>
                    {interest.icon}
                  </div>
                </div>
                <h3 className="font-semibold">{interest.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                    <p className="text-purple-500 font-semibold mb-2">{edu.degree}</p>
                    <p className="text-gray-400 mb-4">{edu.period}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className={`px-2 py-1 rounded-full text-xs ${
                              darkMode ? 'bg-gray-700' : 'bg-gray-200'
                            }`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-purple-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                    <p className="text-sm text-gray-500">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects & Research
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer group ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } rounded-xl overflow-hidden backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.category.includes('Research') ? 'bg-blue-500/20 text-blue-400' :
                      project.category.includes('Web') ? 'bg-green-500/20 text-green-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-purple-500 font-semibold">
                    {project.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  {category === 'Programming Languages' && <Code className="w-5 h-5 mr-2 text-blue-500" />}
                  {category === 'Front End Development' && <Layers className="w-5 h-5 mr-2 text-green-500" />}
                  {category === 'Back End Development' && <Database className="w-5 h-5 mr-2 text-purple-500" />}
                  {category === 'Libraries/Frameworks' && <Terminal className="w-5 h-5 mr-2 text-orange-500" />}
                  {category === 'Tools & Methodologies' && <FileText className="w-5 h-5 mr-2 text-red-500" />}
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <div className={`px-3 py-2 ${
                        darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                      }`}>
                        <span className="relative z-10">{skill}</span>
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                          style={{
                            width: `${80 + Math.random() * 20}%`,
                            animation: `slideIn 1s ease-out ${index * 0.1}s both`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold mb-1">{cert.name}</h3>
                    <p className="text-purple-500 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white/80'
          } backdrop-blur-sm border ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-400 mb-6">
                  I'm always interested in new opportunities and collaborations. 
                  Feel free to reach out if you'd like to connect!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-500" />
                    <span>laasyalata20@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span>New Brunswick, NJ</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <a
                  href="https://github.com/laasya2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
                  }`}
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/laasyalata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
                  }`}
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } p-6`}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-700/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-purple-500 font-semibold mb-4">{selectedProject.metrics}</p>
            <div className="flex space-x-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {selectedProject.category.includes('Research') ? (
                  <>
                    <FileText className="w-5 h-5" />
                    <span>View Paper</span>
                  </>
                ) : (
                  <>
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </>
                )}
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;