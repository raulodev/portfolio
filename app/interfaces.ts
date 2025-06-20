export interface PersonalInfo {
  name: string;
  summary: string;
  email: string;
}

export interface Projects {
  name: string;
  description: string;
  link: Link[];
  tech: Tech[];
}

export interface Tech {
  name: string;
}

export interface Link {
  description: string;
  link: string;
  icon: "GithubIcon" | "LucideLink";
}
