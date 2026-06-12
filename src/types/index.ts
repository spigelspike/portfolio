// ============================================
// TYPES — Shareef's Quest
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  thumbnail?: string;
  icon: string; // emoji placeholder until real assets
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  icon: string; // emoji placeholder
  color: string;
}

export type SkillCategory =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'devops'
  | 'ai';

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  year: string;
  type: 'academic' | 'certification' | 'competition' | 'milestone';
}

import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode | string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
