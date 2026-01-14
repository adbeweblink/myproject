
import { LucideIcon } from 'lucide-react';

export interface EventTypeDefinition {
  label: string;
  color: string;
  text: string;
  border: string;
  shadow: string;
  icon: LucideIcon;
  isOnline: boolean;
}

export interface EventTypes {
  [key: string]: EventTypeDefinition;
}

export interface EventItem {
  id: number;
  date: string;
  displayDate?: string; // Optional custom display label (e.g. "3月")
  name: string;
  type: EventTypeDefinition;
  status: string;
  highlight?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  desc: string;
  url: string;
  image: string; // Added for Unsplash thumbnail
}

export interface CourseItem {
  id: number;
  month: string;
  date: string;
  title: string;
  desc: string;
  level: string;
  tag: string;
  image: string;
}

export interface AlliancePartner {
  name: string;
  logo: string;
}

export interface AllianceItem {
  id: string;
  category: string;
  icon: LucideIcon;
  partners: AlliancePartner[];
  desc: string;
  relationship: string; // Added: Connection to Adobe
  opportunity: string;  // Added: Business benefit
  color: string;
  textColor: string;
  bg: string;
  link?: string;
  image: string; // Added: Background image
}

export interface QuarterItem {
  id: string;
  label: string;
  start: string;
  end: string;
  bg: string;
}

export interface KPIMetric {
  value: string;
  label: string;
  sub: string;
  color: string;
}

export interface LabProject {
  id: number;
  type: 'tool' | 'game';
  title: string;
  description: string;
  link: string;
  // Tool specific
  purpose?: string;
  problemSolved?: string;
  efficiency?: string;
  // Game specific
  appeal?: string;
  stickiness?: string;
  features?: string;
}