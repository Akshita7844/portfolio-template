import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for nav styling
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'identity', 'journey', 'projects', 'skills', 'achievements', 'testimonials', 'education']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop - 100
          const height = element.offsetHeight
          return window.scrollY >= top && window.scrollY < top + height
        }
        return false
      })
      if (current) setActiveSection(current)

      // Reveal elements on scroll
      const elements = document.querySelectorAll('.reveal-on-scroll')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleElements(prev => new Set([...prev, el.id]))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  {/* ======= BEGIN_DATA_BLOCK (experiences, projects, skills) ======= */}
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "AIRMAN Aeronautics",
      period: "Jul 2025 - Present",
      location: "Remote",
      achievements: [
        "Spearheaded AI copilots and digital preflight systems, reducing pilot workload by ~50% per flight",
        "Delivered AI-powered Flight Planner (Python, FastAPI, LangChain, Hugging Face) integrating ICAO codes, NOTAMs, METAR/TAF, Tomorrow.io weather",
        "Built AIRMAN Maverick — Intelligent Flight Planner & Logger; also built a GenAI copilot for student pilots combining LLMs with RAG pipelines (LangChain, ChromaDB) enabling natural-language queries of SOPs with 95%+ reliability",
        "Engineered safety-critical modules (Weight & Balance, Fuel Planning, Altitude Optimization, Navigation Logs) cutting preflight prep from 30 mins to <5 mins",
        "Embedded Responsible AI safeguards (SHAP explainability, AIF360 fairness checks, hallucination detection), reducing unsafe responses by 30%",
        "Authored audit-ready documentation, evaluation protocols, and CI/CD workflows (Docker, GitHub Actions, ONNX) for regulatory alignment",
        "Collaborated with instructors, ops staff, and engineers to ensure domain-aligned, pilot-friendly, safety-compliant solutions"
      ],
      technologies: ["Python", "FastAPI", "LangChain", "Hugging Face", "ICAO", "NOTAMs", "Tomorrow.io", "ChromaDB", "RAG", "Docker", "GitHub Actions", "ONNX"]
    },
    {
      title: "Associate Analyst - Technology Consulting",
      company: "Deloitte USI",
      period: "Jul 2021 - Sept 2023",
      location: "Bengaluru, India",
      achievements: [
        "Designed and deployed 15+ Power BI dashboards to monitor KPIs, churn risk, and operational metrics",
        "Automated reporting workflows, reducing manual effort by 40% while improving data quality and auditability",
        "Applied statistical models (forecasting, variance analysis, hypothesis testing) for quarterly planning and anomaly detection",
        "Developed data pipelines to ingest and transform large-scale CRM and ERP data",
        "Created explainable segmentation models for 100K+ customer records",
        "Standardized analytical templates and trained cross-functional teams on dashboard adoption",
        "Collaborated with IT, data engineering, and compliance teams, improving performance by 15%",
        "Won Deloitte Spot Award twice for outstanding performance"
      ],
      technologies: ["Python", "SQL", "Power BI", "Statistical Modeling", "CRM", "ERP", "Data Visualization", "Forecasting"]
    }
  ]

  const projects = [
    {
      name: "AIRMAN Maverick - Intelligent Flight Planner & Logger",
      description: "Production-ready digital flight planner and logger automating fuel calculation, weight & balance, altitude optimization, and navigation logs under FAA/ICAO standards. Integrated real-time aviation data (METAR/TAF weather, NOTAMs, ICAO codes), reducing preflight preparation from 30 minutes to under 5 minutes. Delivered auditable, modular backend and pilot-facing interface, replacing manual workflows with safe, transparent automation.",
      technologies: ["Python", "FastAPI", "React", "Tomorrow.io", "ICAO", "NOTAM APIs", "Aviation Data"],
      link: null,
      isCompanyProject: true,
      gradient: "from-cyan-500 to-teal-600",
      impact: "Aviation Safety Automation"
    },
    {
      name: "AIRMAN GenAI Copilot for Student Pilots",
      description: "Developed a GenAI learning copilot for student pilots, enabling natural-language queries of SOPs, checklists, and training manuals during ground school and preflight. Combined RAG pipelines, multimodal AI (image captioning with BLIP-2, OCR, voice-to-text with Whisper), and prompt safety layers, achieving 95%+ reliability in domain testing. Enhanced learning outcomes and decision support by embedding real-time context checks and safety prompts.",
      technologies: ["LangChain", "ChromaDB", "Hugging Face", "BLIP-2", "Whisper", "OCR", "RAG"],
      link: null,
      isCompanyProject: true,
      gradient: "from-teal-500 to-cyan-600",
      impact: "GenAI for Aviation"
    },
    {
      name: "FairDeploy - Responsible AI Monitoring Framework",
      description: "Designed a compliance and monitoring dashboard for deployed ML systems, tracking fairness, drift, and explainability. Integrated SHAP explainability, AIF360 bias analysis, and ONNX model export into CI/CD pipelines, ensuring scalable, transparent deployment. Applied as a Responsible AI layer across aviation copilots and planners to maintain trust and regulatory compliance.",
      technologies: ["Python", "SHAP", "AIF360", "ONNX", "Docker", "GitHub Actions", "Model Observability"],
      link: "https://github.com/Akshita7844/FairDeploy-AI-Model-Deployment-Monitoring-Dashboard",
      isCompanyProject: false,
      gradient: "from-pink-500 to-red-600",
      impact: "Responsible AI & Fairness"
    },
    {
      name: "Automated ETL Agent for Fraud Detection",
      description: "Built a real-time anomaly detection pipeline for fraud scenarios, combining rule-based checks with unsupervised clustering (DBSCAN). Automated ingestion, risk scoring, and alerting with explainable dashboards to support compliance. Demonstrated ability to design domain-agnostic AI pipelines, later applied to aviation safety use cases.",
      technologies: ["Python", "ETL", "DBSCAN", "Anomaly Detection", "Risk Monitoring", "Streamlit"],
      link: "https://github.com/Akshita7844/Automated-ETL-Agent-for-Fraud-Detection",
      isCompanyProject: false,
      gradient: "from-cyan-500 to-teal-600",
      impact: "Fraud Detection & Risk"
    },
    {
      name: "Stock Forecasting via News Sentiment (FinBERT)",
      description: "Dual-pipeline combining BERT-based sentiment analysis + time series forecasting for stock prediction. Leverages FinBERT to analyze financial news headlines and predict stock price movements using Natural Language Processing and Machine Learning.",
      technologies: ["Python", "FinBERT", "LSTM", "yFinance", "BERT", "NLP", "Time Series"],
      link: "https://github.com/Akshita7844/Financial-News-Stock-Prediction",
      isCompanyProject: false,
      gradient: "from-green-500 to-teal-600",
      impact: "Financial AI"
    },
    {
      name: "🛰️ Lunar Lander - RL Agent",
      description: "Trained a deep Q-learning agent to land spacecraft in simulated environments using Gymnasium & Box2D. Demonstrates core RL concepts including reward optimization, exploration vs exploitation, and policy learning with Q-Learning and Deep Q-Networks (DQN). Watch as a rocket autonomously navigates physics-based terrain to land safely.",
      technologies: ["Python", "Reinforcement Learning", "OpenAI Gym", "DQN", "PyTorch"],
      link: "https://github.com/Akshita7844/Lunar-Lander",
      isCompanyProject: false,
      gradient: "from-orange-500 to-red-600",
      impact: "Reinforcement Learning"
    }
  ]

  const skills = [
    // Programming Languages & Core
    { name: "Python", color: "from-yellow-500 to-yellow-600", category: "Programming" },
    { name: "SQL", color: "from-blue-500 to-blue-600", category: "Programming" },
    { name: "TypeScript", color: "from-cyan-500 to-cyan-600", category: "Programming" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-500", category: "Programming" },
    
    // AI/ML Frameworks & Tools
    { name: "LangChain", color: "from-purple-500 to-purple-600", category: "AI/ML" },
    { name: "RAG Pipelines", color: "from-cyan-500 to-cyan-600", category: "AI/ML" },
    { name: "Hugging Face", color: "from-blue-500 to-blue-600", category: "AI/ML" },
    { name: "PyTorch", color: "from-orange-500 to-orange-600", category: "AI/ML" },
    { name: "TensorFlow", color: "from-orange-600 to-red-600", category: "AI/ML" },
    { name: "Scikit-learn", color: "from-yellow-500 to-yellow-600", category: "AI/ML" },
    { name: "OpenAI API", color: "from-green-500 to-green-600", category: "AI/ML" },
    { name: "GenAI & LLMs", color: "from-purple-500 to-pink-600", category: "AI/ML" },
    { name: "Machine Learning", color: "from-indigo-500 to-indigo-600", category: "AI/ML" },
    { name: "Deep Learning", color: "from-red-500 to-red-600", category: "AI/ML" },
    { name: "Reinforcement Learning", color: "from-pink-500 to-pink-600", category: "AI/ML" },
    { name: "OpenAI Gym", color: "from-blue-500 to-cyan-600", category: "AI/ML" },
    { name: "DQN", color: "from-purple-500 to-purple-600", category: "AI/ML" },
    { name: "BLIP-2", color: "from-cyan-500 to-teal-600", category: "AI/ML" },
    { name: "Whisper", color: "from-blue-500 to-indigo-600", category: "AI/ML" },
    { name: "ChromaDB", color: "from-green-500 to-teal-600", category: "AI/ML" },
    { name: "NLP", color: "from-purple-500 to-cyan-600", category: "AI/ML" },
    { name: "FinBERT", color: "from-indigo-500 to-purple-600", category: "AI/ML" },
    { name: "BERT", color: "from-blue-500 to-purple-600", category: "AI/ML" },
    
    // Responsible AI & MLOps
    { name: "SHAP", color: "from-orange-500 to-red-600", category: "ResponsibleAI" },
    { name: "AIF360", color: "from-pink-500 to-pink-600", category: "ResponsibleAI" },
    { name: "Model Explainability", color: "from-purple-500 to-purple-600", category: "ResponsibleAI" },
    { name: "Fairness Auditing", color: "from-red-500 to-pink-600", category: "ResponsibleAI" },
    { name: "Hallucination Detection", color: "from-orange-500 to-orange-600", category: "ResponsibleAI" },
    { name: "Bias Mitigation", color: "from-pink-500 to-red-600", category: "ResponsibleAI" },
    { name: "Model Monitoring", color: "from-purple-500 to-purple-600", category: "ResponsibleAI" },
    { name: "Safety Protocols", color: "from-red-500 to-red-600", category: "ResponsibleAI" },
    { name: "Audit Logging", color: "from-orange-500 to-orange-600", category: "ResponsibleAI" },
    { name: "Factual Grounding", color: "from-pink-500 to-pink-600", category: "ResponsibleAI" },
    { name: "ONNX", color: "from-cyan-500 to-cyan-600", category: "MLOps" },
    { name: "Docker", color: "from-blue-500 to-blue-600", category: "MLOps" },
    { name: "GitHub Actions", color: "from-gray-400 to-gray-500", category: "MLOps" },
    { name: "CI/CD Pipelines", color: "from-cyan-500 to-teal-600", category: "MLOps" },
    { name: "Model Deployment", color: "from-green-500 to-green-600", category: "MLOps" },
    
  // ======= END_DATA_BLOCK =======

  // Backend & APIs
    { name: "FastAPI", color: "from-green-500 to-green-600", category: "Backend" },
    { name: "REST APIs", color: "from-blue-500 to-blue-600", category: "Backend" },
    { name: "Flask", color: "from-yellow-500 to-yellow-600", category: "Backend" },
    { name: "Microservices", color: "from-cyan-500 to-cyan-600", category: "Backend" },
    { name: "API Integration", color: "from-teal-500 to-teal-600", category: "Backend" },
    
    // Frontend
    { name: "React", color: "from-cyan-500 to-cyan-600", category: "Frontend" },
    { name: "HTML/CSS", color: "from-orange-500 to-orange-600", category: "Frontend" },
    { name: "Streamlit", color: "from-red-500 to-red-600", category: "Frontend" },
    
    // Data Science & Analytics
    { name: "Pandas", color: "from-yellow-500 to-yellow-600", category: "Analytics" },
    { name: "NumPy", color: "from-blue-500 to-blue-600", category: "Analytics" },
    { name: "Statistical Modeling", color: "from-purple-500 to-purple-600", category: "Analytics" },
    { name: "Forecasting", color: "from-green-500 to-green-600", category: "Analytics" },
    { name: "Anomaly Detection", color: "from-orange-500 to-orange-600", category: "Analytics" },
    { name: "DBSCAN", color: "from-cyan-500 to-cyan-600", category: "Analytics" },
    { name: "Hypothesis Testing", color: "from-indigo-500 to-indigo-600", category: "Analytics" },
    { name: "Variance Analysis", color: "from-pink-500 to-pink-600", category: "Analytics" },
    { name: "Power BI", color: "from-yellow-500 to-yellow-600", category: "Analytics" },
    { name: "Tableau", color: "from-blue-500 to-blue-600", category: "Analytics" },
    { name: "Plotly", color: "from-purple-500 to-purple-600", category: "Analytics" },
    { name: "Matplotlib", color: "from-green-500 to-green-600", category: "Analytics" },
    { name: "Seaborn", color: "from-orange-500 to-orange-600", category: "Analytics" },
    
    // Domain Specific
    { name: "Aviation AI Systems", color: "from-indigo-500 to-indigo-600", category: "Domain" },
    { name: "ICAO", color: "from-cyan-500 to-cyan-600", category: "Domain" },
    { name: "NOTAMs", color: "from-teal-500 to-teal-600", category: "Domain" },
    { name: "Tomorrow.io", color: "from-blue-500 to-blue-600", category: "Domain" },
    { name: "Flight Planning", color: "from-purple-500 to-purple-600", category: "Domain" },
    { name: "SOPs & Checklists", color: "from-green-500 to-green-600", category: "Domain" },
    { name: "METAR/TAF", color: "from-blue-500 to-cyan-600", category: "Domain" },
    { name: "Weather Intelligence", color: "from-cyan-500 to-teal-600", category: "Domain" },
    { name: "Fuel Planning", color: "from-indigo-500 to-indigo-600", category: "Domain" },
    { name: "Weight & Balance", color: "from-purple-500 to-purple-600", category: "Domain" },
    { name: "Navigation Logs", color: "from-blue-500 to-blue-600", category: "Domain" },
    { name: "Alt Optimization", color: "from-green-500 to-teal-600", category: "Domain" },
    
    // Data Engineering
    { name: "ETL", color: "from-yellow-500 to-yellow-600", category: "DataEngineering" },
    { name: "Data Pipelines", color: "from-blue-500 to-blue-600", category: "DataEngineering" },
    { name: "CRM Integration", color: "from-cyan-500 to-cyan-600", category: "DataEngineering" },
    { name: "ERP Systems", color: "from-green-500 to-green-600", category: "DataEngineering" },
    { name: "MySQL", color: "from-orange-500 to-orange-600", category: "DataEngineering" },
    { name: "PostgreSQL", color: "from-indigo-500 to-indigo-600", category: "DataEngineering" },
    { name: "Excel", color: "from-green-400 to-green-500", category: "DataEngineering" },
    
    // Product & Strategy
    { name: "Product Strategy", color: "from-teal-500 to-teal-600", category: "Product" },
    { name: "System Design", color: "from-cyan-500 to-cyan-600", category: "Product" },
    { name: "Architecture", color: "from-blue-500 to-blue-600", category: "Product" },
    { name: "Requirements Engineering", color: "from-purple-500 to-purple-600", category: "Product" },
    
    // Other
    { name: "OCR", color: "from-gray-400 to-gray-500", category: "AI/ML" },
    { name: "yFinance", color: "from-green-500 to-green-600", category: "Analytics" },
    { name: "LSTM", color: "from-purple-500 to-purple-600", category: "AI/ML" },
    { name: "Time Series", color: "from-cyan-500 to-cyan-600", category: "Analytics" },
    { name: "Audio-to-Text", color: "from-blue-500 to-blue-600", category: "AI/ML" },
    { name: "Image Captioning", color: "from-indigo-500 to-indigo-600", category: "AI/ML" }
  ]

  const awards = [
    {
      title: "Deloitte Spot Award – D&R Project Excellence",
      issuer: "Deloitte",
      date: "Jun 2022",
      description: "Earned for impactful contributions by rapidly understanding project scope, managing SMEs effectively, and delivering results under pressure. Highlighted for team spirit and client-first mindset."
    },
    {
      title: "Deloitte Spot Award",
      issuer: "Deloitte", 
      date: "Dec 2021",
      description: "Received for outstanding performance in a U.S. client project—translating complex, evolving requirements into actionable leadership insights. Demonstrated analytical thinking, adaptability, and strong first-time execution."
    }
  ]

  const testimonials = [
    {
      name: "Sudersan GB",
      role: "Founder & CEO, AIRMAN Aeronautics",
      text: "I've worked with one of the most remarkable AI/ML engineers I've met. She doesn't just 'do the job,' but owns the mission. From day one, she stood out as a builder committed to understanding why we're creating what we do. When our team didn't have a front-end developer, she learned and built. She independently developed the first MVP of the Maverick App. Her work is proof that great engineers don't just write code; they craft experiences that change how people interact with technology.",
    },
    {
      name: "Ashwini Reddy",
      role: "Project Associate at AIRMAN Aeronautics",
      text: "Collaborating with Akshita never felt transactional—it felt like creating something that actually mattered, with someone fully invested in the outcome. She brings clarity, ownership, and genuine care into everything she does. What I admire most is her calm reliability. Even under pressure, she maintains focus and brings balance to the team. Her work reflects thought, intention, and pride—qualities that are rare.",
    },
    {
      name: "Praveenkumar G",
      role: "COO, AIRMAN Aeronautics",
      text: "Akshita has been an incredible AI/ML Engineer at AIRMAN Aeronautics. From day one, she brought not just strong technical skills, but genuine curiosity and willingness to jump in wherever needed. She played a big part in identifying the right AI models for our flight intelligence systems and showed impressive initiative by learning frontend and backend development on the go. Her adaptability, problem-solving skills, and positive energy make her invaluable.",
    },
    {
      name: "Subhash Nainappagari",
      role: "Marketing Strategist & Trainer, AIRMAN Aeronautics",
      text: "Akshitha makes every project smoother and every challenge easier to handle. She's always ready to help no matter how big or small the task and brings calm, solution-driven mindset to everything she does. What truly stands out about Akshitha is her ability to find different and effective ways to get things done. Never limits herself to what's expected—she goes beyond, takes initiative, and ensures the job gets completed with quality. Her reliability, positive attitude, and genuine team spirit makes her an invaluable colleague and someone you can always count on.",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-900/20 to-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/98 backdrop-blur-xl shadow-2xl' 
          : 'bg-gray-900/40'
      }`}>
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Larger */}
            <button 
              onClick={() => scrollTo('home')}
              className="text-3xl font-bold text-white hover:opacity-80 transition-opacity"
            >
              Akshita Mishra
            </button>

            {/* Desktop Navigation - Larger text, spread to corners */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'identity', label: 'About' },
                { id: 'journey', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'achievements', label: 'Awards' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`px-6 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${
                    activeSection === section.id
                      ? 'text-cyan-400 bg-cyan-500/20 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 py-4 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'identity', label: 'About' },
                { id: 'journey', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'achievements', label: 'Awards' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full px-4 py-3 text-left text-base font-semibold rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Simple solid dark background */}
        <div className="absolute inset-0 bg-gray-900"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fadeInUp">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-80 h-80 group">
                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Your Name - Portfolio Photo" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* ======= BEGIN_HERO_BLOCK (name, title, bio, email) ======= */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Hi, I'm</span>
              <br />
              <span className="text-white">Akshita Mishra</span>
            </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-300">
                <span className="gradient-text">AI/ML Engineer and Product Strategist</span>
              </p>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems at the intersection of AI, aviation, and responsible innovation
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <a
                href="mailto:akshitamishra027@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass-effect rounded-full hover:bg-white/20 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
            {/* ======= END_HERO_BLOCK ======= */}

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
              <a 
                href="https://github.com/Akshita7844" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center text-2xl hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/akshita-mishra-294076170/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center text-2xl hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/akshita_mishra_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center text-2xl hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
                aria-label="Twitter/X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="mailto:akshitamishra027@gmail.com" 
                className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center text-2xl hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section id="identity" className="py-32 px-6 bg-gradient-to-b from-cyan-900/30 via-cyan-900/40 to-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Statement */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Who I Am
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              An unconventional builder who turns problems into solutions, ideas into production systems, and challenges into opportunities
            </p>
          </div>

          {/* Core Identity with Philosophy */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Left Side - Stacked Cards */}
            <div className="space-y-6 flex flex-col">
              {/* Full Stack Builder */}
              <div className="glass-effect rounded-3xl p-10 border border-cyan-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                    <span className="text-4xl">🛠️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Full-Stack Builder</h3>
                    <p className="text-sm text-gray-400">End-to-End Tech Team in One Person</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  From backend architecture to intelligent frontends, from research to deployment—I own the entire product lifecycle.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>✓ Built AIRMAN's frontend in React (self-taught)</div>
                  <div>✓ Architected RAG pipelines for AI copilots</div>
                  <div>✓ Deployed production systems end-to-end</div>
                </div>
              </div>

              {/* Innovation Strategist */}
              <div className="glass-effect rounded-3xl p-10 border border-cyan-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
                    <span className="text-4xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Innovation Strategist</h3>
                    <p className="text-sm text-gray-400">Unconventional Problem Solver</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I thrive where imagination meets engineering. Every system I build questions assumptions and finds solutions others haven't considered.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>✓ Reduced pilot workload by 50% through AI</div>
                  <div>✓ Cut preflight prep from 30min to 5min</div>
                  <div>✓ 95%+ reliability in production systems</div>
                </div>
              </div>
            </div>

            {/* Right Side - Philosophy Column */}
            <div className="glass-effect rounded-3xl px-10 pt-10 pb-8 border border-cyan-500/20 flex flex-col h-full">
              <div className="mb-7 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">My Philosophy</h3>
                <p className="text-sm text-gray-400">Core beliefs that guide my work</p>
              </div>
              <div className="space-y-2.5 flex-1 justify-between">
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">🎯</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Build What Matters</h4>
                    <p className="text-gray-400 text-sm">My work is less about what I can build and more about what's worth building.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">🔬</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Research First</h4>
                    <p className="text-gray-400 text-sm">Thriving where imagination meets engineering, solving problems with no map.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">🛡️</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Responsible AI</h4>
                    <p className="text-gray-400 text-sm">Focus on explainability, fairness, and safety in every system I design.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">💡</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Question Assumptions</h4>
                    <p className="text-gray-400 text-sm">Every system I build explores unconventional approaches and challenges the status quo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">🚀</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">End-to-End Ownership</h4>
                    <p className="text-gray-400 text-sm">From research to deployment, I own the full lifecycle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-2.5 border-b border-white/5">
                  <span className="text-3xl flex-shrink-0">⚡</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Problem Solver</h4>
                    <p className="text-gray-400 text-sm">Solving one problem at a time while heavily multi-tasking.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">🤝</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Enable Others</h4>
                    <p className="text-gray-400 text-sm">Mentoring others in data, AI, and product building.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section id="journey" className="py-32 px-6 bg-gradient-to-b from-gray-900/30 via-gray-900/40 to-gray-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Deloitte's precision to AIRMAN's startup journey, building solutions when the path wasn't clear
            </p>
          </div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="glass-effect rounded-3xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <div className="text-sm text-cyan-400 mb-2">{exp.period}</div>
                      <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-xl text-cyan-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-cyan-900/30 via-cyan-900/40 to-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Production systems, research projects, and innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="glass-effect rounded-3xl p-8 card-hover relative overflow-hidden group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="text-sm text-cyan-400 mb-2">{project.impact}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {project.isCompanyProject ? (
                      <div className="w-full text-center px-6 py-3 glass-effect rounded-full text-gray-400 font-semibold">
                        Company Project (Confidential)
                      </div>
                    ) : project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
                      >
                        View Project
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-gray-900/30 via-gray-900/40 to-gray-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies, frameworks, and tools I work with
            </p>
          </div>
          
          {/* Major Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">AI/ML & GenAI</h3>
              <p className="text-gray-400 text-sm mb-4">Advanced AI frameworks and generative models</p>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => s.category === "AI/ML").map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg text-sm font-medium border border-cyan-500/30"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Development & DevOps</h3>
              <p className="text-gray-400 text-sm mb-4">Backend, frontend, and deployment infrastructure</p>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => ['Programming', 'Backend', 'Frontend', 'MLOps'].includes(s.category)).map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg text-sm font-medium border border-cyan-500/30"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Analytics & Visualization</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => s.category === "Analytics").map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Responsible AI & Ethics</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => s.category === "ResponsibleAI").map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Domain & Additional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Aviation & Domain Expertise</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => s.category === "Domain").map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Data Engineering & Strategy</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.filter(s => ['DataEngineering', 'Product'].includes(s.category)).map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 rounded-lg text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-6 bg-gradient-to-b from-cyan-900/30 via-cyan-900/40 to-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition for outstanding performance and contributions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <div className="text-sm text-cyan-400 mb-1">{award.issuer} • {award.date}</div>
                    <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                    <p className="text-gray-300">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-gray-900/30 via-gray-900/40 to-gray-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights from colleagues, leaders, and collaborators
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-effect rounded-3xl p-8 card-hover flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4 flex-1">"{testimonial.text}"</p>
                <a 
                  href="https://www.linkedin.com/in/akshita-mishra-294076170/details/recommendations/?detailScreenTabIndex=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors inline-flex items-center gap-1 mt-2"
                >
                  Read full recommendation →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-32 px-6 bg-gradient-to-b from-cyan-900/30 via-cyan-900/40 to-cyan-900/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic background and continuous learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-3xl p-8 card-hover">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Post Graduate Diploma, Data Science & Machine Learning</h3>
                  <p className="text-xl text-cyan-400 mb-2">University of Liverpool</p>
                  <p className="text-gray-400">September 2023 - December 2024</p>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-3xl p-8 card-hover">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Business Administration, Business Analytics</h3>
                  <p className="text-xl text-cyan-400 mb-2">Christ University</p>
                  <p className="text-gray-400">June 2018 - May 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/Akshita7844"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
              title="GitHub"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akshita-mishra-294076170/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/akshita_mishra_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
              title="Twitter/X"
              aria-label="Twitter/X"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="mailto:akshitamishra027@gmail.com"
              className="w-12 h-12 rounded-full glass-effect border border-cyan-500/20 flex items-center justify-center hover:border-cyan-500/40 hover:scale-110 transition-all duration-300"
              title="Email"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400">© 2024 Akshita Mishra. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
