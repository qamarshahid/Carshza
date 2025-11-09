interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {eyebrow && (
        <div className="inline-block mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E6C200] px-3 py-1 border border-[#E6C200]/30 rounded-full">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-4 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#E6C200]"></span>
      </h2>
      {subtitle && (
        <p className="text-lg text-[#B8B8B8] mt-6 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
