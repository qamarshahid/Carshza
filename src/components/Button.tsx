import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = "px-8 py-3 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none min-h-[44px] min-w-[44px]";

  const variantClasses = {
    primary: "bg-[#E6C200] text-black hover:glow-blue hover:scale-105 active:scale-95",
    secondary: "bg-transparent border-2 border-[#00CFFF] text-[#00CFFF] hover:bg-[#00CFFF] hover:text-black",
    tertiary: "bg-transparent text-[#00CFFF] hover:underline underline-offset-4"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
          Loading...
        </span>
      ) : children}
    </button>
  );
}
