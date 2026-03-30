import Link from 'next/link';

interface ProjectProps {
  title: string;
  subTitle: string;
  cardTitle: string;
  description: string;
  tags: string[];
  points: string[];
  href: string;
  color: 'orange' | 'purple' | 'blue'; 
}

export function ProjectCard({ title, subTitle, cardTitle, description, tags, points, href, color }: ProjectProps) {
  const colorClass = `${color}-500`; 
  const bgClass = `from-${color}-500/10`;
  const textClass = `text-${color}-400`; 
  const badgeClass = `bg-${color}-500/20 text-${color}-400 border-${color}-500/30`;
  const badgeLabel = color === 'orange' ? 'Latest Tech' : color === 'purple' ? 'This Site' : 'Web Service';

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" 
      className={`group bg-[#161b22]/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-${color}-500/50 transition-all duration-500 shadow-lg block`}>
      
      <div className="aspect-[16/10] bg-[#21262d] relative overflow-hidden text-center flex items-center justify-center px-4">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} via-blue-500/10 to-transparent group-hover:scale-110 transition-transform duration-700`}></div>
        
        <div className="relative z-10 text-white font-black text-2xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
          {subTitle}<br />
          <span className={`${textClass} text-lg`}>{title}</span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-white">{cardTitle}</h4>
          <span className={`text-[10px] px-2 py-0.5 rounded border ${badgeClass}`}>
            {badgeLabel}
          </span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">{description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-slate-500 bg-white/5 border border-white/5 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
          <ul className="text-[11px] text-slate-500 space-y-1 border-t border-white/5 pt-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                {/* 丸ぽちの色も動的に */}
                <span className={`w-1 h-1 bg-${color}-500 rounded-full`}></span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}