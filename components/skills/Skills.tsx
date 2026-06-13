import SkillsTerminal from "./SkillsTerminal";

const skills: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  Backend:  ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MySQL", "Prisma"],
  Tools:    ["Git", "GitHub", "Postman", "VS Code"],
};

export default function Skills() {
  return <SkillsTerminal skills={skills} />;
}
