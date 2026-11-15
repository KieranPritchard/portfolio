import { skill } from "@/types/skill";

/**
 * Skill categories and individual skill metrics.
 * Values represent estimated proficiency percentages for visual representation.
 */
export const skillCategories: skill[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", value: 90 },
      { name: "JavaScript / TS", value: 80 },
      { name: "Go", value: 65 },
      { name: "HTML / CSS", value: 90 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", value: 75 },
      { name: "Next", value: 75 },
      { name: "Tailwind CSS", value: 85 },
      { name: "Node.js", value: 70 },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Kali Linux", value: 75 },
      { name: "Wireshark", value: 50 },
      { name: "Nmap", value: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", value: 85 },
      { name: "Docker", value: 60 },
      { name: "n8n", value: 60 },
      { name: "Figma", value: 80 },
    ],
  },
]