import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Trophy, Award, Medal } from "lucide-react";

export const DATA = {
  name: "Raqeeb Rameez",
  initials: "RR",
  url: "https://raqeeb-rameez.me",
  location: "Mount-Lavinia, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/Colombo",
  description:
    "Full Stack Developer & Co-Founder of VisuaLit — building accessible AI-powered reading experiences",
  description2:
    "Passionate about leveraging AI to solve real-world problems for neurodivergent communities",
  description3:
    "Award-winning hackathon competitor | IEEE RAS Member | CS @ University of Westminster",
  summary:
    "I'm a Computer Science student at the University of Westminster (IIT, Sri Lanka) and Co-Founder of **VisuaLit**, an AI-powered eBook reader designed for accessibility—helping individuals with dyslexia, ADHD, and aphantasia through intelligent text-to-speech, visual storytelling, and summarization. I've led and contributed to impactful projects across web apps, AI systems, and backend automation, recently deploying VisuaLit using CI/CD pipelines on GCP. With multiple hackathon wins including **1st Runners Up at CodeSprint X** and **Investor's Choice at SLIIT CODEFEST 2025**, I'm driven to build technology that creates meaningful impact.",
  avatarUrl: "/cropped2.jpg",

  // Categorized skills
  skillCategories: [
    {
      name: "Languages",
      skills: ["Python", "Java", "TypeScript", "C++", "C", "SQL"],
    },
    {
      name: "Frameworks",
      skills: ["Next.js", "React", "Angular", "Spring Boot", "FastAPI", "Flask"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["GCP", "AWS", "Docker", "Git", "CI/CD", "Vercel"],
    },
    {
      name: "AI & Data",
      skills: ["Scikit-learn", "Pandas", "NumPy", "spaCy", "LlamaIndex", "OpenAI"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis"],
    },
    {
      name: "Design",
      skills: ["TailwindCSS", "Figma", "Shadcn UI", "Framer Motion"],
    },
  ],

  // Legacy flat skills array for backwards compatibility
  skills: [
    "Python",
    "Java",
    "C++",
    "C",
    "Spring Boot",
    "Angular",
    "FastAPI",
    "Flask",
    "React",
    "Next.js",
    "Typescript",
    "MySQL",
    "MongoDB",
    "Docker",
    "GCP",
    "AWS",
    "Git",
    "TailwindCSS",
    "Figma",
    "Scikit-learn",
    "Pandas",
    "spaCy",
    "Numpy",
  ],

  // Achievements & Awards
  achievements: [
    {
      title: "1st Runners Up",
      event: "CodeSprint X",
      description: "Competed against 500+ teams in Sri Lanka's premier hackathon",
      date: "2025",
      icon: "medal-silver",
      color: "from-slate-300 to-slate-500",
    },
    {
      title: "3rd Place",
      event: "Cutting Edge '25",
      description: "National-level tech innovation competition",
      date: "2025",
      icon: "medal-bronze",
      color: "from-amber-600 to-amber-800",
    },
    {
      title: "Investor's Choice Award",
      event: "SLIIT CODEFEST 2025",
      description: "Recognized for VisuaLit's market potential and innovation",
      date: "2025",
      icon: "trophy",
      color: "from-yellow-400 to-amber-500",
    },
    {
      title: "NBQSA 2025 Nominee",
      event: "National ICT Awards",
      description: "Representing IIT at Sri Lanka's prestigious ICT awards",
      date: "2025",
      icon: "award",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Intellihack 2023 Finalist",
      event: "Intellihack",
      description: "Developed ML-based crop recommendation and banking chatbot",
      date: "2023",
      icon: "award",
      color: "from-blue-400 to-cyan-500",
    },
  ],

  // Certifications
  certifications: [
    {
      name: "NVIDIA Deep Learning Fundamentals",
      issuer: "NVIDIA",
      date: "2024",
      logoUrl: "/nvidia.png",
    },
    {
      name: "Splunk Core Certified User",
      issuer: "Splunk",
      date: "2024",
      logoUrl: "/splunk.svg",
    },
    {
      name: "Google Cloud Program",
      issuer: "Google",
      date: "2024",
      logoUrl: "/lime.svg",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "raqeebmr3@gmail.com",
    tel: "+94775277495",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Walapalam",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raqeeb-rameez/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Walapalam",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:raqeebmr3@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VisuaLit",
      href: "https://visualit.live",
      badges: ["Co-Founder"],
      location: "Sri Lanka",
      title: "Co-Founder & Lead Developer",
      logoUrl: "/visualit.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Building an AI-powered eBook reader for neurodivergent individuals. Features include text-to-speech, visual storytelling, summarization, and translation. Deployed on GCP with CI/CD pipelines.",
    },
    {
      company: "Santani Hotels",
      href: "https://santani.lk",
      badges: [],
      location: "Remote",
      title: "Data Engineering & Automation (Freelance)",
      logoUrl: "/santani_logo.jpg",
      start: "Jan 2025",
      end: "June 2025",
      description:
        "Developed Python ETL scripts for ingesting marketing analytics from Google Ads, Meta Ads; Designed efficient database schemas for BI tools; Integrated APIs and handled token-based authentication and data validation",
    },
  ],

  education: [
    {
      school: "University of Westminster",
      href: "https://www.westminster.ac.uk/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/westminster.png",
      start: "2024",
      end: "Present",
      description: "Maintaining an average of 80% in all modules. Lead and contributed to multiple projects and events, being part of IEEE clubs like Robotics Automation Society",
    },
    {
      school: "Informatics Institute of Technology",
      href: "https://www.iit.ac.lk/",
      degree: "Foundation Certificate in Computer Science",
      logoUrl: "/IIT.png",
      start: "2023",
      end: "2023",
      description: "Passed with Distinction. Was one of the leading students in the batch",
    },
    {
      school: "D.S. Senanayake College",
      href: "https://dssc.lk",
      degree: "GCE Advanced Level",
      logoUrl: "/dssc.jpg",
      start: "2020",
      end: "2022",
      description: "Senior Scout and Volunteer in Prefects Guild. Lead and Managed a number of clubs and societies.",
    },
  ],

  // Leadership & Activities
  leadership: [
    {
      role: "Editor",
      organization: "Rotaract Club of Cinnamon Gardens",
      period: "2025/26",
      description: "Leading editorial and communications for the club",
    },
    {
      role: "Member",
      organization: "IEEE Robotics & Automation Society",
      period: "2024 - Present",
      description: "Active participant in robotics and automation initiatives",
    },
  ],

  projects: [
    {
      title: "VisuaLit",
      href: "https://play.google.com/store/apps/details?id=com.visualit.app.visualit",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Interactive literature visualization platform transforming text into immersive reading experiences via BookNLP & GenAI. Monorepo architecture featuring a Flutter frontend and a split FastAPI backend (Lean/Worker) optimized for Cloud Run.",
      technologies: [
        "Flutter",
        "FastAPI",
        "Vertex AI",
        "BookNLP",
        "Firebase",
        "Riverpod",
        "Cloud Run"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.visualit.app.visualit",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Landing",
          href: "https://github.com/Walapalam/VisuaLit-Landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/visualit.png",
      video: "",
    },
    {
      title: "Vision IPTV",
      href: "https://github.com/Walapalam/vision_iptv",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Premium glassmorphic IPTV client for Mobile & Android TV. Built for performance with custom blur shaders, Xtream Codes support, and a unified cross-platform UI.",
      technologies: ["Flutter", "Riverpod", "MediaKit", "GoRouter", "Glassmorphism"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Walapalam/vision_iptv",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/vision_iptv.png",
      video: "",
    },
    {
      title: "Aurum - Restaurant ERP",
      href: "",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Comprehensive Odoo-based ERP for high-end dining. Custom module development for table management, real-time kitchen display systems (KDS), and inventory tracking.",
      technologies: ["Odoo", "Python", "PostgreSQL", "XML", "JavaScript"],
      links: [],
      image: "/restaurant_erp.png",
      video: "",
    },
    {
      title: "Apex Sales Intelligence",
      href: "",
      dates: "June 2025 - Present",
      active: true,
      description:
        "B2B sales enablement platform. Orchestrating the 'middle layer' between CRM and outreach tools. Features lead scoring pipelines and conversion analytics.",
      technologies: ["Next.js", "Supabase", "Edge Functions", "Tremor UI"],
      links: [],
      image: "/sales_platform.png",
      video: "",
    },
    {
      title: "Antigravity Mobile Bridge",
      href: "",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "Technical infrastructure enabling AI agents to autonomously inspect and debug running Flutter apps. Features Semantic Tree extraction and high-fidelity screenshot capture.",
      technologies: ["Dart", "Node.js", "JSON-RPC", "MCP", "WebSockets"],
      links: [],
      image: "/mobile_bridge.png",
      video: "",
    },
    {
      title: "Ticketr",
      href: "https://github.com/Walapalam/Ticketr-Backend",
      dates: "Dec 2023",
      active: true,
      description:
        "Real-time event ticketing system handling concurrent transactions. Implements producer-consumer pattern for massive scale.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Java"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Walapalam/Ticketr-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ticketr.png",
      video: "",
    },
    {
      title: "Agent AI",
      href: "https://github.com/Walapalam/agent-ai",
      dates: "Nov 2025",
      active: true,
      description:
        "Agentic AI system with extensive tool-calling capabilities and a dedicated web interface for interaction and monitoring.",
      technologies: ["Python", "Flask", "Gemini API", "HTML/CSS"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Walapalam/agent-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agent_ai.png",
      video: "",
    },
    {
      title: "Stock Portfolio Management",
      href: "https://github.com/Walapalam",
      dates: "2023",
      active: false,
      description:
        "Flask-based extension of CS50x stock app with real-time updates and SQL CRUD functionality.",
      technologies: ["Flask", "Python", "SQL", "Jinja2"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Walapalam",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cs50.png",
      video: "",
      featured: false,
    },
  ],

  hackathons: [
    {
      title: "CodeSprint X",
      dates: "2025",
      location: "Sri Lanka",
      description: "1st Runners Up among 500+ teams. Built VisuaLit accessibility features.",
      image: "/visualit.png",
      links: [],
    },
    {
      title: "Cutting Edge '25",
      dates: "2025",
      location: "Sri Lanka",
      description: "3rd Place in national tech innovation competition.",
      image: "/visualit.png",
      links: [],
    },
    {
      title: "SLIIT CODEFEST 2025",
      dates: "2025",
      location: "Sri Lanka",
      description: "Won Investor's Choice Award for VisuaLit.",
      image: "/visualit.png",
      links: [],
    },
  ],
} as const;
