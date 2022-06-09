export interface ContentInfo {
  title: string;
  content: string;
}

export interface ProjectInfo {
  name: string;
  description: string;
  featureImage: string;
  githubLink?: string;
  devpostLink?: string;
  techStack: string;
}

export interface SkillInfo {
  name: string;
  imgUrl: string;
}

export interface MainLinks {
  githubLink: string;
  resumeLink: string;
  linkedinLink: string;
}
