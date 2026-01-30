import { ReactNode } from 'react';

interface ContactLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  hoverColor: 'orange' | 'purple';
}

export function ContactLink({ href, label, icon, hoverColor }: ContactLinkProps) {
  const isOrange = hoverColor === 'orange';
  
  const borderColor = isOrange ? 'group-hover:border-orange-500/50' : 'group-hover:border-purple-500/50';
  const textColor = isOrange ? 'group-hover:text-orange-400' : 'group-hover:text-purple-400';

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
      <div className={`w-14 h-14 bg-[#232a34] border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all ${borderColor}`}>
        {icon}
      </div>
      <span className={`text-[10px] mt-2 text-slate-500 font-bold ${textColor}`}>
        {label}
      </span>
    </a>
  );
}