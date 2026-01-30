interface Skill {
  name: string;
  level: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-[#1a1f26]/60 border border-white/5 p-6 rounded-2xl shadow-xl">
      <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">{category}</h4>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 font-medium">{skill.name}</span>
              <span className="text-slate-500">{skill.level}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                style={{ width: skill.level.includes('%') ? skill.level : '100%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}