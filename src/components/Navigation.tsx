import { useState } from 'react';
import { Car, Menu, X, PhoneCall } from 'lucide-react';
import Button from './Button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About',
    'Services',
    'Inventory',
    'Gallery',
    'Testimonials',
    'Trust & Safety',
    'Contact'
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[rgba(255,255,255,0.08)]">
        <div className="container-custom">
          <div className="flex items-center h-20 w-full gap-4">
            <button
              onClick={() => handleNavClick('Home')}
              className="flex items-center gap-2 group"
              aria-label="CARSHZA Home"
            >
              <Car className="w-8 h-8 text-[#00CFFF] group-hover:text-[#E6C200] transition-colors" strokeWidth={2} />
              <span className="font-display text-xl font-bold text-[#00CFFF] group-hover:text-[#E6C200] transition-colors">
                CARSHZA
              </span>
            </button>

            <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-sm font-medium transition-colors hover:text-[#00CFFF] min-h-[44px] px-2 ${
                    currentPage === item ? 'text-[#00CFFF]' : 'text-[#EAEAEA]'
                  }`}
                >
                  {item}
                  {currentPage === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00CFFF] animate-fade-in-up"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:18482608604"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.12)] px-4 py-2.5 text-sm text-[#EAEAEA] transition-colors hover:border-[#00CFFF] hover:text-[#00CFFF] whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                +1 (848) 260-8604
              </a>
              <Button
                variant="primary"
                onClick={() => handleNavClick('Contact')}
                className="px-6 py-2.5"
              >
                Schedule Service
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#EAEAEA] hover:text-[#00CFFF] transition-colors min-h-[44px] min-w-[44px] ml-auto"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-20 bottom-0 w-64 bg-[#0B0B0B] border-l border-[rgba(255,255,255,0.08)] animate-fade-in-up">
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-4 rounded-lg font-medium transition-all min-h-[44px] ${
                    currentPage === item
                      ? 'bg-[#00CFFF]/10 text-[#00CFFF] border-l-4 border-[#00CFFF]'
                      : 'text-[#EAEAEA] hover:bg-[#1A1A1A]'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:18482608604"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-[rgba(255,255,255,0.12)] px-4 py-3 text-sm text-[#EAEAEA] transition-colors hover:border-[#00CFFF] hover:text-[#00CFFF]"
              >
                <PhoneCall className="w-4 h-4" />
                Call +1 (848) 260-8604
              </a>
              <Button
                variant="primary"
                onClick={() => handleNavClick('Contact')}
                className="w-full px-4 py-3"
              >
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
