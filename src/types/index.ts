export interface WebsiteBase {
  // 作品集网站名称;
  title?: string
  // 工作职位;
  job: string
  // 简要描述
  briefDescription: string
  // 详细描述
  detailedDescription: string
  // 个人Github链接
  gitHubLink: string
  // 个人邮箱链接
  emailLink: string
}
/**
 * @description 项目信息 TS类型接口;
 */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[];
  cover: string;
  detailImage: string;
  demoUrl?: string;
  repoUrl?: string;
  date: string;
  features: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  year: string;
  description: string;
}

export interface SkillItem {
  name: string;
  percent: number;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}