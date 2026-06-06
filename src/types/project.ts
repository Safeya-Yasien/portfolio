export type Category = "Fullstack" | "Frontend" | "UI/UX" | "Backend";

export type EngagementType =
  | "Freelance"
  | "Personal"
  | "Internship"
  | "University"
  | "Scholarship";

export type ScholarshipProgram =
  | "DEPI"
  | "ITI"
  | "ALX"
  | "Orange Digital Center"
  | "Other";

export interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  github_link: string;
  live_demo: string;
  technologies: string[];
  featured?: boolean;
  engagementType?: EngagementType;
  scholarshipProgram?: ScholarshipProgram;
  collaborationType?: "Solo" | "Team";
  role?: string;
  teamSize?: number;
}
