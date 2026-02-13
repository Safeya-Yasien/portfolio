export type Category = "Fullstack" | "Frontend" | "Static" | "UI/UX";

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
}
