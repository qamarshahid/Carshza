import { PhoneCall, MessageSquare } from 'lucide-react';
import Button from './Button';

interface QuickContactBarProps {
  onNavigate: (page: string) => void;
}

export default function QuickContactBar({ onNavigate }: QuickContactBarProps) {
  return (
    <div className="bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.08)] py-3 text-sm text-[#B8B8B8]">
      <div className="container-custom flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
          <span className="font-semibold text-[#EAEAEA]">Need service fast?</span>
          <span className="opacity-80">Same-day appointments available Monday through Saturday.</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <a
            href="tel:18482608604"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.12)] px-5 py-2.5 text-[#EAEAEA] transition-colors hover:border-[#00CFFF] hover:text-[#00CFFF] whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            +1 (848) 260-8604
          </a>
          <Button
            variant="primary"
            onClick={() => onNavigate('Contact')}
            className="w-full sm:w-auto px-8 py-2.5"
          >
            <span className="flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Schedule Service
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}


