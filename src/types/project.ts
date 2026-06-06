export type Category =
  | "Fullstack"
  | "Frontend"
  | "UI/UX"
  | "Backend";

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
  engagementType?: "Freelance" | "Personal" | "Internship";
  collaborationType?: "Solo" | "Team";
  role?: string;
  teamSize?: number;
}
