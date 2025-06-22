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
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Set initial active section
  useEffect(() => {
    const handleInitialScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Check if we're at the bottom of the page
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }
      
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    handleInitialScroll();
  }, []);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're currently navigating
      if (isNavigating) {
        return;
      }
      
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page (very aggressive threshold)
      if (window.scrollY + windowHeight >= documentHeight - 200) {
        console.log('Setting contact as active - at bottom of page');
        setActiveSection('contact');
        return;
      }
      
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          // For contact section, be very aggressive and check if we're past skills
          if (section === 'contact') {
            const skillsElement = document.getElementById('skills');
            if (skillsElement && scrollPosition >= skillsElement.offsetTop + skillsElement.offsetHeight - 100) {
              currentSection = section;
              console.log('Setting active section to contact - past skills section');
              break;
            }
          } else {
            if (scrollPosition >= offsetTop) {
              currentSection = section;
              console.log('Setting active section to:', section);
              break;
            }
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isNavigating) {
      handleScroll();
    }
  }, [isNavigating]);

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
      type: "Internship · Remote",
      description: [
        "Conducted in-depth data analysis, identifying insights that led to 15% increase in user retention and optimization of customer acquisition strategies, contributing directly to business growth",
        "Created interactive dashboards providing real-time analytics and visualizations, empowering stakeholders to make informed, data-driven decisions that positively impacted operational efficiency and strategic planning",
        "Engineered cross-functional data-driven solutions with the Data Science team, boosted team efficiency by 30% through predictive analytics, and facilitated innovation in marketing strategies"
      ],
      skills: ["Tableau", "SQL", "Microsoft Excel", "Python Programming", "Data Analysis", "Data Visualization", "Business Intelligence", "Predictive Analytics", "User Retention Analysis", "Customer Acquisition", "Cross-functional Collaboration", "Data-driven Decision Making"]
    },
    {
      company: "University of Colorado Denver – Computational Robotics Lab",
      position: "Graduate Research Assistant",
      period: "Jan 2024 - May 2024",
      location: "Denver, Colorado, United States",
      type: "Research · On-site",
      description: [
        "Conducted research and development of RoboMapper, a PyBullet-based simulation, achieving 95% obstacle avoidance accuracy for autonomous robots",
        "Contributed to the enhancement of obstacle detection algorithms, resulting in a 20% faster response time for adapting to new obstacles",
        "Led systematic simulations, running over 200 iterations to refine computational motor control, boosting navigational efficiency by 25%",
        "Documented research findings and methodologies, contributing to knowledge sharing and the advancement of robotics research"
      ],
      skills: ["Pybullet", "TensorFlow", "Keras", "Machine Learning", "Robotics", "Computer Vision", "Obstacle Detection", "Autonomous Systems", "Simulation Development", "Algorithm Optimization", "Research Documentation", "Computational Motor Control"]
    },
    {
      company: "University of Colorado Denver – International Student's office",
      position: "Software Developer – Team Lead",
      period: "Sep 2022 - May 2024",
      location: "Denver, Colorado, United States",
      type: "Full-time · On-site",
      description: [
        "Led a team of developers in designing a software management system to enhance the efficiency and user experience, utilizing Python for backend development and Django for API integration",
        "Managed a MySQL database of 10,000+ student records for efficient data storage and retrieval, ensuring accuracy and accessibility to support student services and administrative functions",
        "Spearheaded the implementation of data visualization, achieving a 30% efficiency increase in workflows, providing actionable insights into student data and administrative processes",
        "Conducted 10 technical training sessions, achieving an 80% proficiency rate among team members, enhancing team capabilities in data analysis and visualization for improved decision-making"
      ],
      skills: ["Team Leadership", "Django", "MySQL", "Python", "Creative Problem Solving", "Database management", "Microsoft Office", "Phone Etiquette", "Data Visualization", "API Integration", "Technical Training", "Workflow Optimization", "Student Information Systems"]
    },
    {
      company: "Snap Inc.",
      position: "JavaScript Developer",
      period: "Mar 2024 - Apr 2024",
      location: "United States",
      type: "Internship · Remote",
      description: [
        "Developed interactive augmented reality experiences using Snap AR Lens Studio, incorporating Hand Tracking, face masks, and background changes for enhanced user engagement",
        "Collaborated with cross-functional teams to integrate AR elements seamlessly into marketing campaigns, increasing brand visibility and user interaction on Snapchat",
        "Contributed to a 30% increase in brand mentions and impressions, highlighting improved brand visibility",
        "Participated in training sessions and feedback sessions, refining skills in AR development, digital storytelling, and GenZ marketing strategies"
      ],
      skills: ["JavaScript", "Snap AR lens studio", "Canva", "Blender", "React.js", "Augmented Reality (AR)", "Hand Tracking", "Face Masks", "Digital Storytelling", "GenZ Marketing", "Cross-functional Collaboration", "Brand Visibility", "User Engagement"]
    },
    {
      company: "Cognizant",
      position: "Software Engineer",
      period: "Feb 2022 - Jul 2022",
      location: "Remote",
      type: "Internship · Remote",
      description: [
        "Developed scalable software solutions using Python and JavaScript, achieving a 20% improvement in application performance and adherence to coding standards",
        "Collaborated closely with cross-functional teams to analyze requirements, design system architectures, and implement RESTful APIs, enhancing integration and functionality across platforms",
        "Led database design and optimization efforts using SQL, improving data storage efficiency by 30% and ensuring seamless data retrieval for critical business processes",
        "Implemented comprehensive testing strategies, including unit testing with pytest and integration testing with Selenium, resulting in a 95% test pass rate and ensuring robustness and reliability of software before deployment"
      ],
      skills: ["AWS Cloud Computing", "Microsoft Azure", "Selenium WebDriver", "Java", "NoSQL", "Node.js", "Jenkins", "TestNG", "Python", "JavaScript", "RESTful APIs", "Database Design", "Unit Testing", "Integration Testing", "System Architecture", "Performance Optimization"]
    },
    {
      company: "KriSemi Design Technologies Pvt Ltd",
      position: "Software Design Engineer Intern",
      period: "Apr 2021 - May 2021",
      location: "India",
      type: "Internship",
      description: [
        "Designed and optimized an Asynchronous 4-bit ripple counter using Verilog HDL, achieving a notable 15% reduction in power consumption",
        "Implemented the counter in Xilinx Vivado, effectively reducing clock skew by 8 nanoseconds and enhancing system reliability",
        "Conducted thorough testing and successfully resolved 90% of critical issues, ensuring a robust and error-free counter design",
        "Collaborated with team members to meet project milestones and deliverables within specified timelines"
      ],
      skills: ["Xilinx Vivado", "Verilog HDL", "Digital Design", "Power Optimization", "Clock Skew Reduction", "Hardware Testing", "FPGA Design", "Asynchronous Circuits", "Ripple Counter Design", "System Reliability", "Project Management"]
    },
    {
      company: "Microchip Technology Inc.",
      position: "Software Designer Intern",
      period: "Jun 2020 - Jul 2020",
      location: "India",
      type: "Internship",
      description: [
        "Developed an electronic voting system using PIC18 microcontroller and MPLABx software",
        "Achieved a remarkable 50% reduction in voting time and improved accuracy by 20% compared to traditional paper-based systems",
        "Gained hands-on experience and training with Arduino Boards and PIC18 Microcontrollers, enhancing proficiency in MPLABx IDE and C programming language"
      ],
      skills: ["MPLABx IDE", "C (Programming Language)", "PIC18 Microcontroller", "Arduino", "Embedded Systems", "Electronic Voting Systems", "Hardware Programming", "System Optimization", "Accuracy Improvement", "Microcontroller Programming"]
    }
  ];

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId);
    setIsNavigating(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - offset;
      console.log('Element position:', elementPosition, 'offsetTop:', element.offsetTop);
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId); // Immediately set active section
      setMobileMenuOpen(false);
      
      // Reset navigation flag after scroll animation
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg ${darkMode ? 'bg-gray-900/70' : 'bg-white/70'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-500 ${
                    activeSection === section ? 'text-purple-500 font-semibold' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-800/20 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg`}>
            <div className="px-4 py-6 space-y-4">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize py-2 transition-colors hover:text-purple-500 ${
                    activeSection === section ? 'text-purple-500 font-semibold' : ''
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Laasya Anumakonda
            </span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 h-8">
            <span className="font-mono">I'm {typedText}</span>
            <span className="animate-blink">|</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I'm a software developer who loves building things that work well. I like making apps faster and creating interfaces that people enjoy using. With my Master's in Computer Science, I've learned to solve real problems with good code.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/laasya2005"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/laasyalata/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:laasyalata20@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-white hover:bg-purple-600 text-gray-800'
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>New Brunswick, NJ</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>laasyalata20@gmail.com</span>
            </div>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About
            </span>
          </h2>
          
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          } backdrop-blur-sm border ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <img src="profile.jpeg" alt="Laasya Lata Anumakonda" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg mb-6 leading-relaxed">
                I'm a software developer who also creates content and builds automation tools. I love using AI to make things work better and faster.

                I got my Master's in Computer Science from the University of Colorado. I like finding ways to use AI to solve real problems and make everyday tasks easier.

                When I'm not coding, I create content about tech and share what I learn with others. I enjoy building tools that help people get things done without all the hassle.

                I want to build software that actually helps people and makes their lives a bit easier.
                </p>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Interests
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                  } backdrop-blur-sm border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  } hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="flex justify-center mb-4" style={{ color: interest.color }}>
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold">{interest.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
        
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-white border-4 border-purple-500 flex items-center justify-center">
                  <img src={edu.image} alt={`${edu.school} logo`} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{edu.school}</h3>
                <p className="text-purple-500 text-center mb-2">{edu.degree}</p>
                <p className="text-gray-400 text-center mb-4">{edu.period}</p>
                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <ul className="space-y-1">
                    {edu.courses.map((course, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Online Certifications
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl ${
                    darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                  } backdrop-blur-sm border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  } hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between`}
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center relative">
                    <img src={cert.image} alt={cert.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex justify-center mb-2">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-purple-500 transition-colors">{cert.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative overflow-hidden">
        {/* Symmetric Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
        
        {/* Symmetric Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Symmetric Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block" />
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden lg:block timeline-dot group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className={`lg:ml-16 relative experience-card ${
                    darkMode ? 'bg-gray-800/60' : 'bg-white/90'
                  } backdrop-blur-lg rounded-2xl hover-lift overflow-hidden border ${
                    darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                  } shadow-xl`}>
                    
                    {/* Card gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                              {exp.company}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              exp.type.includes('Full-time') ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                              exp.type.includes('Internship') ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                              exp.type.includes('Part-time') ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                              exp.type.includes('Research') ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                              'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                            }`}>
                              {exp.type}
                            </span>
                          </div>
                          <p className={`text-xl font-semibold mb-2 ${
                            darkMode ? 'text-gray-300' : 'text-gray-800'
                          }`}>{exp.position}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Concise Description */}
                      <div className="mb-6">
                        <div className="grid gap-3">
                          {exp.description.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 group-hover/item:scale-150 transition-transform duration-300" />
                              <p className={`leading-relaxed text-sm group-hover/item:text-gray-200 transition-colors duration-300 ${
                                darkMode ? 'text-gray-300' : 'text-gray-800'
                              }`}>
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Tags */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="border-t border-gray-700/30 pt-4">
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                                  darkMode 
                                    ? 'bg-gray-700/40 text-gray-300 border border-gray-600/40' 
                                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                                } hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 cursor-default`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
        
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white'
                } backdrop-blur-sm border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                } cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'Web App' ? 'bg-blue-500/20 text-blue-400' :
                      project.category === 'AI/ML' ? 'bg-green-500/20 text-green-400' :
                      project.category === 'Data Science' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {project.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs ${
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
                  {category === 'Languages and Databases' && <Code className="w-5 h-5 mr-2 text-blue-500" />}
                  {category === 'Frameworks' && <Layers className="w-5 h-5 mr-2 text-green-500" />}
                  {category === 'Tools' && <Terminal className="w-5 h-5 mr-2 text-purple-500" />}
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