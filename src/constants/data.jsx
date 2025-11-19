import {Linkedin, Twitter, Briefcase } from "lucide-react";

export const personalInfo = {
  name: "Nitin Singh Pundir",
  role: "Graphics Designer",
  bio: "I'm a Graphic Designer graduate seeking an entry-level design position to apply visual design for branding, digital media and print projects.",
  email: "nitinpundir146@gmail.com",
  location: "India",
};

export const projects = [1, 2, 3, 4, 5, 6];

export const socialLinks = [
  {
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/nitin-pundir-7085412a6/",
    color: "hover:text-white",
  },
  {
    name: "Beehance",
    icon: Briefcase,
    link: "https://www.behance.net/nitinpundir2",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: Twitter,
    link: "https://www.instagram.com/nitin__pundir__00/",
    color: "hover:text-sky-400",
  },
];

export const experiences = [
  {
    title: "Graphic Designer",
    company: "Freelance",
    period: "2023 — Present",
    desc: "Building fast, accessible, and visually engaging web apps using React, Next.js, and Tailwind CSS. Collaborating with clients to turn design ideas into responsive, high-performance websites.",
    color: "violet",
  },
  {
    title: "Web Developer Intern",
    company: "Freelance",
    period: "2021 — 2023",
    desc: "Developed internal dashboards and small-scale SaaS tools with React and Node.js. Improved UI performance and introduced reusable component systems for faster development.",
    color: "cyan",
  },
];

export const tools = [
  "Figma – UI/UX Design",
  "Adobe After Effects – Motion Graphics",
  "Adobe Photoshop – Poster & Campaign Designing",
  "Adobe Illustrator – Vector Graphics",
];

export const goals = [
  "Launch my own design agency",
  "Start a design tutor Youtube channel",
  "Learn new tools and designing psychology",
];

export const achievements = [
  {
    title: "Projects Completed",
    value: "40+",
    desc: "Designed 40+ interactive motion and graphics projects for personal clients.",
    color: "yellow",
  },
  {
    title: "Served High Valued Clients",
    value: "5+",
    desc: "Completed end-to-end poster design projects from clients like including concept development, layout, typography and art work delivery. ",
    color: "cyan",
  },
  {
    title: "Logo Designs",
    value: "2+",
    desc: "Designed the official logo for multiple startups and personal brands, focusing on brand identity and visual impact.",
    color: "pink",
  },
  {
    title: "Recognition",
    value: "3+",
    desc: "Spring Villa for and designed poster for BrentWood (Mussorie Based Client) ",
    color: "violet",
  },
];

export const skills = [
  {
    category: "UI & UX",
    skills: ["React / Next.js", "Tailwind CSS / CSS Animations", "Framer Motion", "HTML / CSS / JS"],
  },
  {
    category: "Adobe Xd",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Figma",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Canva",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Lightroom",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "CoralDraw",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Adobe Photoshop",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Adobe Illustrator",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Adobe Indesign",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Adobe Premier Pro",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Adobe After Effects",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Typography",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma / Motion Design", "Docker / Git", "Notion / VS Code"],
  },
  {
    category: "Advertisement & Branding Campaigns",
    skills: ["Agile / Scrum", "SEO Basics", "Performance Optimization"],
  },
  {
    category: "Communication",
    skills: ["Agile / Scrum", "SEO Basics", "Performance Optimization"],
  },
];
export const certificates = [
  {
    title: "Great Learning : Intro to Graphic Design with Photoshop",
    url: "https://www.mygreatlearning.com/academy/learn/intro-to-graphic-design"
  },
  {
    title: "ITRC : Diploma in Computer Applications",
    url: "https://www.itrc.ac.in/"
  },
  {
    title: "Great Learning : Canva Essentials: Quick & Easy Design Skills",
    url: "https://www.canva.com/"
  }
];


export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
