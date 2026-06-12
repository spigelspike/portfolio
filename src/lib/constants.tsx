// ============================================
// CONSTANTS — All portfolio content data
// ============================================
import { Project, Skill, Achievement, NavItem, SocialLink } from '@/types';

// ── Personal Info ──────────────────────────
export const PERSONAL = {
  name: 'Mohamed Shereef',
  displayName: 'MHD SHAREEF',
  roles: ['Software Engineer', 'AI Builder', 'Problem Solver'],
  tagline: 'Turning ideas into intelligent solutions, one line of code at a time.',
  summary: `Recent B.Tech Information Technology graduate with demonstrated experience building backend services, data pipelines, and AI-integrated systems using Python and JavaScript. Strong foundation in data structures, algorithms, and object-oriented design.`,
  education: {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'MEA Engineering College, Kerala',
    graduation: 'May 2026',
  },
  email: 'mhdshareefch@gmail.com',
  phone: '+91 9061139031',
  github: 'https://github.com/spigelspike',
  linkedin: 'https://linkedin.com/in/mohamed-shereef',
  instagram: 'https://instagram.com/mhdshareef._',
  location: 'Kerala, India',
} as const;

// ── Navigation ─────────────────────────────
import React from 'react';
import { Home, User, Zap, Briefcase, Trophy, Mail } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home', icon: <Home size="1em" /> },
  { label: 'About', href: '/#about', icon: <User size="1em" /> },
  { label: 'Skills', href: '/#skills', icon: <Zap size="1em" /> },
  { label: 'Projects', href: '/#projects', icon: <Briefcase size="1em" /> },
  { label: 'Achievements', href: '/#achievements', icon: <Trophy size="1em" /> },
  { label: 'Contact', href: '/#contact', icon: <Mail size="1em" /> },
];

// ── Skills ─────────────────────────────────
export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', proficiency: 90, icon: '🐍', color: '#3776ab' },
  { name: 'JavaScript', category: 'languages', proficiency: 85, icon: 'JS', color: '#f7df1e' },
  { name: 'TypeScript', category: 'languages', proficiency: 82, icon: 'TS', color: '#3178c6' },
  { name: 'Java', category: 'languages', proficiency: 65, icon: '☕', color: '#ed8b00' },
  { name: 'C', category: 'languages', proficiency: 60, icon: 'C', color: '#a8b9cc' },
  // Backend
  { name: 'FastAPI', category: 'backend', proficiency: 85, icon: '⚡', color: '#009688' },
  { name: 'Node.js', category: 'backend', proficiency: 80, icon: '🟢', color: '#339933' },
  { name: 'REST APIs', category: 'backend', proficiency: 88, icon: '🔗', color: '#61affe' },
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 85, icon: '⚛️', color: '#61dafb' },
  { name: 'Tailwind', category: 'frontend', proficiency: 82, icon: '🎨', color: '#06b6d4' },
  { name: 'HTML/CSS', category: 'frontend', proficiency: 90, icon: '🌐', color: '#e34f26' },
  // Databases
  { name: 'PostgreSQL', category: 'databases', proficiency: 80, icon: '🐘', color: '#4169e1' },
  { name: 'Supabase', category: 'databases', proficiency: 85, icon: '⚡', color: '#3ecf8e' },
  { name: 'Firebase', category: 'databases', proficiency: 70, icon: '🔥', color: '#ffca28' },
  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 70, icon: '🐳', color: '#2496ed' },
  { name: 'Git', category: 'devops', proficiency: 88, icon: '📦', color: '#f05032' },
  { name: 'Vercel', category: 'devops', proficiency: 80, icon: '▲', color: '#ffffff' },
  // AI
  { name: 'PyTorch', category: 'ai', proficiency: 75, icon: '🔬', color: '#ee4c2c' },
  { name: 'LLM APIs', category: 'ai', proficiency: 82, icon: '🤖', color: '#a855f7' },
  { name: 'Copilot', category: 'ai', proficiency: 85, icon: '🧠', color: '#00d2ff' },
];

// ── Projects ───────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'book2vision',
    title: 'Book2Vision',
    description: 'AI-powered multimedia generation platform that transforms books into audiobooks, visual summaries, AI-generated illustrations, and interactive learning content using OCR, NLP, LLMs, image generation, and text-to-speech technologies.',
    techStack: ['Python', 'NLP', 'LLMs', 'OCR', 'Text-to-Speech', 'Image Generation'],
    githubUrl: 'https://github.com/spigelspike/Book2Vision',
    thumbnail: '/assets/thumbnail/book2vision.webp',
    icon: '📚',
  },
  {
    id: 'kallanum-policeum',
    title: 'Kallanum Policeum',
    description: 'Browser-based real-time multiplayer social deduction game featuring voice chat, realtime synchronization, secure role assignment, and a fully serverless architecture.',
    techStack: ['React', 'TypeScript', 'WebRTC', 'Supabase', 'Serverless'],
    githubUrl: 'https://github.com/spigelspike/kallanum-policeum',
    liveUrl: 'https://www.kallanumpoliceum.online',
    thumbnail: '/assets/thumbnail/kallanum_policeum.webp',
    icon: '🎮',
  },
  {
    id: 'hopon',
    title: 'HopON',
    description: 'Cross-platform social networking and gaming alert application that enables users to instantly notify gaming squads while sharing memes, anime progress, movies, and music within private groups.',
    techStack: ['Cross-platform', 'Real-time', 'Social Networking'],
    githubUrl: 'https://github.com/spigelspike/HopON',
    thumbnail: '/assets/thumbnail/hopeon.webp',
    icon: '📱',
  },
  {
    id: 'cpms',
    title: 'CPMS',
    description: 'Full-stack university placement platform with dedicated portals for students, recruiters, and administrators, featuring AI-powered resume analysis, job management, and automated placement workflows.',
    techStack: ['Full-stack', 'PostgreSQL', 'AI Resume Analysis', 'Workflows'],
    githubUrl: 'http://github.com/spigelspike/cpms',
    thumbnail: '/assets/thumbnail/cpms.webp',
    icon: '🎓',
  },
  {
    id: 'labsync',
    title: 'LabSync',
    description: 'Laboratory reservation and scheduling platform for educational institutions that provides role-based access control, real-time availability tracking, interactive scheduling, and approval-based booking workflows.',
    techStack: ['Role-based Access', 'Scheduling', 'Workflows'],
    githubUrl: 'https://github.com/spigelspike/Lab-sync',
    thumbnail: '/assets/thumbnail/labsync.webp',
    icon: '🧪',
  },
  {
    id: 'aclinsight-net',
    title: 'ACLInsight-Net',
    description: 'Deep learning MRI diagnostic system for ACL tear detection that leverages EfficientNet-B4, multi-plane MRI fusion, and Grad-CAM explainability to support medical image analysis and research.',
    techStack: ['Deep Learning', 'PyTorch', 'EfficientNet-B4', 'Grad-CAM'],
    githubUrl: 'https://github.com/spigelspike/aclinsight-net',
    thumbnail: '/assets/thumbnail/acl.webp',
    icon: '🧠',
  },
  {
    id: 'pypath',
    title: 'PyPath',
    description: 'Fully interactive browser-based Python learning platform featuring live code execution through Pyodide, structured learning modules, coding challenges, gamification, interview preparation, and certification.',
    techStack: ['Python', 'Pyodide', 'Browser Execution', 'Gamification'],
    githubUrl: 'https://github.com/spigelspike/PyPath-Interactive-Python-Learning-Platform',
    liveUrl: 'https://spigelspike.github.io/PyPath-Interactive-Python-Learning-Platform/',
    thumbnail: '/assets/thumbnail/pypath.webp',
    icon: '🐍',
  },
  {
    id: 'omnivoice',
    title: 'OmniVoice Malayalam Normalizer',
    description: 'Open-source contribution that adds Malayalam text normalization support to the OmniVoice multilingual text-to-speech system, improving speech synthesis quality and pronunciation accuracy.',
    techStack: ['Open Source', 'NLP', 'Text-to-Speech', 'Malayalam'],
    githubUrl: 'https://github.com/spigelspike/OmniVoice',
    thumbnail: '/assets/thumbnail/omni-voice.webp',
    icon: '🗣️',
  },
  {
    id: 'kerala-waste',
    title: 'Kerala Waste Management System',
    description: 'Web-based waste management platform that helps citizens and administrators report waste issues, monitor collection activities, and coordinate waste management operations digitally to promote environmental sustainability.',
    techStack: ['Web', 'Civic Tech', 'Management Platform'],
    githubUrl: 'https://github.com/spigelspike/kerala-waste-managment',
    liveUrl: 'https://spigelspike.github.io/kerala-waste-managment/',
    thumbnail: '/assets/thumbnail/kerala_waste.webp',
    icon: '♻️',
  },
];

// ── Achievements ───────────────────────────
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Strong foundation in DSA and problem-solving techniques',
    icon: '🧩',
    year: '2024',
    type: 'academic',
  },
  {
    title: 'Machine Learning',
    description: 'Fundamentals of ML including neural networks and model training',
    icon: '🤖',
    year: '2024',
    type: 'academic',
  },
  {
    title: 'System Design',
    description: 'Designing scalable, distributed architectures',
    icon: '🏗️',
    year: '2025',
    type: 'academic',
  },
  {
    title: 'Network Security',
    description: 'Cryptography & Network Security fundamentals',
    icon: '🔒',
    year: '2025',
    type: 'academic',
  },
  {
    title: 'IEEE Publication',
    description: 'Preparing ACLInsight-Net paper for IEEE submission',
    icon: '📄',
    year: '2026',
    type: 'milestone',
  },
  {
    title: 'B.Tech IT',
    description: 'Bachelor of Technology — MEA Engineering College',
    icon: '🎓',
    year: '2026',
    type: 'academic',
  },
];

// ── Social Links ───────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: PERSONAL.github, icon: '🐙' },
  { platform: 'LinkedIn', url: PERSONAL.linkedin, icon: '💼' },
  { platform: 'Email', url: `mailto:${PERSONAL.email}`, icon: '📧' },
];

// ── Section IDs (for scroll targeting) ─────
export const SECTIONS = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  achievements: 'achievements',
  contact: 'contact',
} as const;
