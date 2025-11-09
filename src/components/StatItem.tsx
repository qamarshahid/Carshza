import { ReactNode } from 'react';

interface StatItemProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl transition-all hover:border-[#00CFFF] hover:glow-blue">
      <div className="mb-3 text-[#00CFFF]">
        {icon}
      </div>
      <div className="text-3xl font-mono font-bold text-[#E6C200] mb-1">
        {value}
      </div>
      <div className="text-sm text-[#B8B8B8]">
        {label}
      </div>
    </div>
  );
}
