import { Car, Facebook, Instagram, Twitter, Youtube, ShieldCheck, Lock, Award } from 'lucide-react';
import Badge from './Badge';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = ['About', 'Services', 'Inventory', 'Testimonials', 'Trust & Safety', 'Contact', 'Privacy Policy', 'Terms of Service'];

  return (
    <footer className="bg-[#0B0B0B] border-t border-[rgba(255,255,255,0.08)] mt-24">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-[#00CFFF]" strokeWidth={2} />
              <span className="font-display text-lg font-bold text-[#00CFFF]">CARSHZA</span>
            </div>
            <p className="text-[#B8B8B8] text-sm leading-relaxed">
              Affordable auto service and quality used cars. Specializing in Honda, Toyota, Mazda, and Acura. Honest work at fair prices.
            </p>
            <div className="mt-6 space-y-2 text-xs text-[#6F6F6F]">
              <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2">
                <Lock className="w-4 h-4 text-[#00CFFF]" />
                HTTPS Secured & Encrypted
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">ASE Certified</Badge>
                <Badge variant="success">Licensed & Insured</Badge>
                <Badge variant="gold">12-Month Warranty</Badge>
              </div>
            </div>
            <div className="mt-6 space-y-2 text-sm text-[#B8B8B8]">
              <div>39 Finderne Ave, Bridgewater, NJ 08807</div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#EAEAEA]">Call:</span>
                <a href="tel:18482608604" className="hover:text-[#00CFFF] transition-colors">
                  +1 (848) 260-8604
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#EAEAEA]">Hours:</span> Mon–Sat 9 AM – 5 PM · Sun Closed
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-[#EAEAEA] mb-4 uppercase tracking-wide">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onNavigate(link)}
                  className="text-[#B8B8B8] hover:text-[#00CFFF] transition-colors text-sm text-left min-h-[44px]"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-[#EAEAEA] mb-4 uppercase tracking-wide">Connect</h3>
            <div className="flex gap-4">
              <button className="p-2 text-[#B8B8B8] hover:text-[#E6C200] hover:glow-gold transition-all rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#B8B8B8] hover:text-[#E6C200] hover:glow-gold transition-all rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#B8B8B8] hover:text-[#E6C200] hover:glow-gold transition-all rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#B8B8B8] hover:text-[#E6C200] hover:glow-gold transition-all rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-6 space-y-3 text-xs text-[#B8B8B8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E6C200]" />
                BBB Trusted Business — License #CA-45219
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E6C200]" />
                5-Star Average on Google & RepairPal
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)]">
        <div className="container-custom py-6">
          <p className="text-[#B8B8B8] text-sm text-center">
            © 2025 CARSHZA. All rights reserved. Built for automotive excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
