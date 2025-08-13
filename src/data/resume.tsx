import { Icons } from "@/components/icons";
import { Baby, BabyIcon, BadgeAlert, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raqeeb Rameez",
  initials: "RR",
  url: "https://raqeeb-rameez.me",
  location: "Mount-Lavinia, Sri Lanka",
  locationLink: "https://www.google.com/maps/place/Colombo",
  description:
    "Computer Science Undergraduate, engaged in Freelance Data Engineering and Automation as well as Video Editing  ",
  description2:
    "Looking for internships in Software Engineering and Machine Learning to break into the industry.",
  description3:
    "Currently working on VisuaLit, an AI powered E-Book Reader",
  summary:
    "I'm a Computer Science student at the University of Westminster (IIT, Sri Lanka) with experience in full-stack development, scripting, and data pipelines. I’ve led and contributed to impactful projects across web apps, AI systems, and backend automation—recently building VisuaLit, an AI-powered eBook reader deployed using CI/CD pipelines on GCP. I’m passionate about leveraging technology to solve real-world problems and am eager to learn and grow in the field of software engineering and data science.",
  avatarUrl: "/cropped2.jpg",
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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "raqeebmr3@gmail.com",
    tel: "+194775277495",
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
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Santani Hotels",
      href: "https://santani.lk",
      badges: [],
      location: "Remote",
      title: "Data Engineering and Automation (Freelance)",
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
      description: "Maintaing an average of 80% in all modules. Lead and contributed to multiple projects and events, being part of IEEE clubs like Robotics Automation Society",
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
      href: "https://ibo.org",
      degree: "GCE Advanced Level",
      logoUrl: "/dssc.jpg",
      start: "2020",
      end: "2022",
      description: "Senior Scout and Volunteer in Prefects Guild. Lead and Managed a number of clubs and societies, while successfully completing multiple high profile events.",
    },
    {
      school: "D.S. Senanayake College",
      href: "https://ibo.org",
      degree: "GCE Ordinary Level",
      logoUrl: "/dssc.jpg",
      start: "2018",
      end: "2019",
      description: "Was part of the football and swimming teams. Volunteered for a number of clubs and societies",
    },
  ],
  projects: [
    {
      title: "VisuaLit",
      href: "https://visualit.live",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Building an app to promote reading for cognitively disabled individuals and non-readers through AI features like text-to-speech, summarization, and translation.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://visualit.live",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visualit.png",
      video:
        "",
    },
    {
      title: "Ticketr – Event Ticketing System",
      href: "",
      dates: "Dec 2023",
      active: true,
      description:
        "Developed a real-time ticketing system using Angular and Spring Boot. Used MySQL with Spring Data JPA, implemented producer-consumer pattern, and REST APIs for full CRUD and concurrency handling.",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Walapalam/Ticketr-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ticketr.png",
      video:
        "",
    },
    {
      title: "AI-Powered Solutions – Intellihack 2023 Finalist",
      href: "",
      dates: "2023",
      active: false,
      description:
        "Developed ML-based crop recommendation (Random Forest), intent classification (SVM), and a banking chatbot using LlamaIndex. Implemented preprocessing, pipelining, tuning, and metric-based evaluation.",
      technologies: ["Python", "Scikit-learn", "LlamaIndex", "Pandas", "Joblib"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Walapalam/ChatBot-RAG-IntellihackRaccoons",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AI_ML.png",
      video:
        "",
    },
    {
      title: "Stock Portfolio Management Web App",
      href: "",
      dates: "2023",
      active: false,
      description:
        "Flask-based extension of CS50x stock app with real-time updates and SQL CRUD functionality.",
      technologies: ["Flask", "Python", "SQL"],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cs50.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
