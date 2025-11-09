import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'blue' | 'success' | 'warning';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variantClasses = {
    gold: 'bg-[#E6C200] text-black',
    blue: 'bg-[#00CFFF] text-black',
    success: 'bg-[#18C37E] text-black',
    warning: 'bg-[#FFC857] text-black'
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
