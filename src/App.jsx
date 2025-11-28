import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Code2, Terminal,
  ArrowUpRight, Moon, Sun, Smartphone, TrendingUp,
  MapPin, Briefcase, PenTool, Database, Layers, Instagram
} from 'lucide-react';

// --- CONFIGURATION ---
const USER_DATA = {
  common: {
    name: "Ekta Saraf",
    location: "Bengaluru, India",
  },
  engineer: {
    email: "eksaraf19@gmail.com",
    socials: {
      github: "https://github.com/ekta-1-9",
      linkedin: "https://www.linkedin.com/in/ektasaraf/",
      instagram: null // Hidden for engineer
    },
    role: "Data Engineer & Full Stack Dev",
    tagline: "Optimizing data at scale.",
    bio: "I am a Data Engineer at ExxonMobil and a CS Engineer from VIT Chennai (9.11 CGPA). I specialize in building scalable data models on Databricks, optimizing PySpark pipelines, and developing full-stack applications.",
    skills: ["Python", "PySpark", "Databricks", "SQL", "React.js", "Django", "TypeScript", "AWS", "Power BI", "Spotfire"],
    experience: [
      {
        id: 1,
        role: "Data Engineer 1",
        company: "ExxonMobil",
        period: "June '25 - Present",
        desc: "Developing scalable data models on Databricks using PySpark. Ingesting and validating data from Kepler and Snowflake. Building BI dashboards (Spotfire/Power BI) to drive decision-making across teams."
      },
      {
        id: 2,
        role: "Full Stack & Strategy Intern",
        company: "Cuebo.ai",
        period: "Dec '24 - May '25",
        desc: "Built end-to-end features using Django and React/TypeScript. Simultaneously led the Prompt Engineering strategy to refine AI-driven customer personas. Bridged the gap between technical implementation (code) and business logic (growth) by leading customer interactions."
      },
      {
        id: 3,
        role: "Data Analyst Intern",
        company: "ExxonMobil",
        period: "Jun '24 - Jul '24",
        desc: "Built 'LERN' dashboard to visualize and optimize Non-Productive Time (NPT). Leveraged Databricks and PySpark to structure and transform complex WellView data for analytical use. Built an interactive Spotfire dashboard with Snowflake writeback capabilities, enabling real-time NPT tracking and data adjustments."
      },
      {
        id: 4,
        role: "Software Dev Intern",
        company: "Samsung R&D",
        period: "Oct '23 - Jul '24",
        desc: "Benchmarked Android GPU performance and AOSP builds, identifying bottlenecks to enhance responsiveness by 30%. Implemented OTPEE security features for mobile apps."
      }
    ],
    stats: [
      { label: "VIT Chennai", value: "9.11 CGPA", icon: <Terminal size={16} />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
      { label: "Internships", value: "4 Roles", icon: <Code2 size={16} />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" }
    ]
  },
  creative: {
    email: "lilmisstalks@gmail.com",
    socials: {
      github: null, // Hidden for creative
      linkedin: null, // Hidden for creative
      instagram: "https://www.instagram.com/lilmisstalks/"
    },
    role: "Digital Strategist & Creator",
    tagline: "Growth strategy meets creative design.",
    bio: "I build brands and content ecosystems. From managing millions of followers to optimizing e-commerce conversions, I leverage data to drive creative growth.",
    skills: ["Growth Strategy", "Distribution Systems", "Brand Building", "SEO", "Content Writing", "Social Analytics", "Team Management"],
    experience: [
      {
        id: 0,
        role: "Content Creator",
        company: "Personal Brand",
        period: "Present",
        desc: "Built a personal brand on Instagram reaching 50K followers through consistent, engaging content creation."
      },
      {
        id: 1,
        role: "Social Media Strategist",
        company: "Brands Built Right- Keystone Builds (Minecraft)",
        period: "Project",
        desc: "Created the entire social media distribution strategy across Twitter, Instagram, and Pinterest for Keystone Builds. Positioned the brand within the gaming/Minecraft ecosystem to drive community growth."
      },
      {
        id: 2,
        role: "Social Media Manager",
        company: "BuzzDaddy",
        period: "Aug '24",
        desc: "Handled various small clients, developing bespoke strategies for growth across multiple platforms."
      },
      {
        id: 3,
        role: "Senior Associate",
        company: "Pageaters",
        period: "Dec '23 - Jan '24",
        desc: "Worked for an online bookstore handling holistic branding, social media, and influencer outreach. Also managed store backend operations to streamline day-to-day sales."
      },
      {
        id: 4,
        role: "Social Media Assistant",
        company: "Engage Digital Partners",
        period: "Freelance",
        desc: "Handled sports social media pages with over 2.8 Million followers on Instagram and 800k on Twitter. Executed high-traffic content strategies."
      },
      {
        id: 5,
        role: "Digital Entrepreneur",
        company: "Shopify & Content",
        period: "2019 - 2021",
        desc: "Leveraged personal social media accounts (10M+ monthly impressions) to drive traffic to a dropshipping Shopify store, generating revenue."
      }
    ],
    stats: [
      { label: "Pinterest Reach", value: "10M/mo", icon: <TrendingUp size={16} />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
      { label: "lilmisstalks", value: "50K Followers", icon: <Instagram size={16} />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" }
    ]
  }
};

// --- COMPONENTS ---

// 1. NEURAL NETWORK BACKGROUND
const InteractiveBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 40 : 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          const push = force * 0.5;
          p.x -= Math.cos(angle) * push;
          p.y -= Math.sin(angle) * push;
        }

        ctx.fillStyle = darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distX = p.x - p2.x;
          const distY = p.y - p2.y;
          const dist = Math.sqrt(distX * distX + distY * distY);

          if (dist < 120) {
            ctx.strokeStyle = darkMode
              ? `rgba(255, 255, 255, ${0.15 - dist / 800})`
              : `rgba(0, 0, 0, ${0.15 - dist / 1200})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (distance < 150) {
          ctx.strokeStyle = darkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.25)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// 2. Custom Cursor
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setHovered(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      );
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:flex items-center justify-center mix-blend-difference"
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    >
      <div className={`relative flex items-center justify-center transition-all duration-300 ${hovered ? 'scale-150' : 'scale-100'}`}>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeProfile, setActiveProfile] = useState('engineer');

  const currentData = USER_DATA[activeProfile];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>

      <InteractiveBackground darkMode={darkMode} />
      <CustomCursor />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20">

        {/* --- HEADER --- */}
        <header className="flex flex-col gap-8 mb-16">
          <div className="flex justify-between items-start">
            <div className="relative group">

              {/* FIXED NAME STYLE (SPOTLIGHT) */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 w-fit cursor-pointer group/name text-zinc-900 dark:text-white">
                {USER_DATA.common.name}
                <span className={`block max-w-0 group-hover/name:max-w-full transition-all duration-500 h-1.5 rounded-full mt-1 ${activeProfile === 'engineer' ? 'bg-indigo-500' : 'bg-pink-500'}`}></span>
              </h1>

              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium mt-2">
                <MapPin size={16} /> {USER_DATA.common.location}
              </div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:scale-105 transition-transform text-zinc-700 dark:text-zinc-300 z-20"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* TOGGLE SWITCH */}
          <div className="p-1 bg-zinc-200 dark:bg-zinc-900 rounded-xl inline-flex w-full md:w-fit relative z-20">
            <button
              onClick={() => setActiveProfile('engineer')}
              className={`flex-1 md:flex-none px-8 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${activeProfile === 'engineer' ? 'bg-white dark:bg-zinc-800 shadow-sm text-indigo-700 dark:text-indigo-400' : 'text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300'}`}
            >
              <Terminal size={16} className={activeProfile === 'engineer' ? 'animate-pulse' : ''} /> Engineer
            </button>
            <button
              onClick={() => setActiveProfile('creative')}
              className={`flex-1 md:flex-none px-8 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${activeProfile === 'creative' ? 'bg-white dark:bg-zinc-800 shadow-sm text-pink-700 dark:text-pink-400' : 'text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300'}`}
            >
              <PenTool size={16} className={activeProfile === 'creative' ? 'animate-pulse' : ''} /> Creator
            </button>
          </div>
        </header>

        {/* --- BENTO GRID --- */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 animate-fade-in-up">

          {/* Bio Card */}
          <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <h2 className={`text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2 ${activeProfile === 'engineer' ? 'text-indigo-600 dark:text-indigo-400' : 'text-pink-600 dark:text-pink-400'}`}>
              {activeProfile === 'engineer' ? <Database size={16} className="group-hover:rotate-12 transition-transform" /> : <Layers size={16} className="group-hover:rotate-12 transition-transform" />}
              {currentData.role}
            </h2>
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{currentData.tagline}</h3>
            <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-lg font-medium">
              {currentData.bio}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-500 z-20 relative">

              {/* DYNAMIC SOCIALS LOGIC */}
              {currentData.socials.linkedin && (
                <a href={currentData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 hover:underline"><Linkedin size={16} /> LinkedIn</a>
              )}

              <a href={`mailto:${currentData.email}`} className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 hover:underline"><Mail size={16} /> Email</a>

              {currentData.socials.github && (
                <a href={currentData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 hover:underline"><Github size={16} /> Github</a>
              )}

              {currentData.socials.instagram && (
                <a href={currentData.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 hover:underline"><Instagram size={16} /> Instagram</a>
              )}

            </div>
          </div>

          {/* Highlights Card */}
          <div className="row-span-2 p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-500 mb-6 flex items-center gap-2">
              <TrendingUp size={16} /> Highlights
            </h2>
            <div className="space-y-4">
              {currentData.stats.map((stat, i) => (
                <div key={i} className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-100 dark:border-zinc-700/50">
                  <div className="flex justify-between items-start mb-2">
                    <div className={`p-2 rounded-lg ${stat.color} group-hover:scale-110 transition-transform`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="font-bold text-xl mb-1 text-zinc-900 dark:text-zinc-100">{stat.value}</div>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Card */}
          <div className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-500 mb-4 flex items-center gap-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {currentData.skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Hire Me CTA Card - UPDATED TO MAILTO LINK */}
          <a
            href={`mailto:${currentData.email}?subject=${activeProfile === 'engineer' ? 'Engineering Inquiry' : 'Strategy Collaboration'}`}
            className={`p-6 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${activeProfile === 'engineer' ? 'bg-indigo-50 border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-900/50 hover:bg-indigo-100 dark:hover:bg-indigo-900' : 'bg-pink-50 border-pink-100 dark:bg-pink-900/20 dark:border-pink-900/50 hover:bg-pink-100 dark:hover:bg-pink-900'}`}
          >
            <div className="text-center group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
              <div className="font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
                {activeProfile === 'engineer' ? 'Hire me for Code' : 'Hire me for Strategy'} <ArrowUpRight size={18} />
              </div>
              <div className="text-sm opacity-70 text-zinc-700 dark:text-zinc-400">Open to collaborations</div>
            </div>
          </a>

        </main>

        {/* --- TIMELINE --- */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <Briefcase className="text-zinc-400" size={20} />
            {activeProfile === 'engineer' ? 'Engineering Experience' : 'Creative Journey'}
          </h2>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-12">
            {currentData.experience.map((job) => (
              <div key={job.id} className="relative pl-8 group animate-fade-in-up">
                {/* Timeline Dot */}
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full transition-all duration-300 ring-4 ring-zinc-50 dark:ring-zinc-950 group-hover:scale-150 ${activeProfile === 'engineer' ? 'bg-indigo-400 dark:bg-indigo-300 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500' : 'bg-pink-400 dark:bg-pink-300 group-hover:bg-pink-600 dark:group-hover:bg-pink-500'}`}></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className={`text-lg font-bold text-zinc-900 dark:text-zinc-100 transition-colors ${activeProfile === 'engineer' ? 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400' : 'group-hover:text-pink-600 dark:group-hover:text-pink-400'}`}>{job.role}</h3>
                  <span className="text-sm font-mono text-zinc-500">{job.period}</span>
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 font-medium mb-2">{job.company}</div>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm max-w-xl">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 font-bold text-lg cursor-default text-zinc-900 dark:text-zinc-100">
            Ekta<span className={activeProfile === 'engineer' ? 'text-indigo-600 dark:text-indigo-500' : 'text-pink-600 dark:text-pink-500'}>.</span>
          </div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Ekta Saraf
          </div>
        </footer>

      </div>
    </div>
  );
}