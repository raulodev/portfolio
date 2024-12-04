export interface PersonalInfo {
  name: string;
  summary: string;
  email: string;
}

export interface Projects {
  name: string;
  description: string;
  link: string;
  tech: Tech[];
}

export interface Tech {
  name: string;
}
