import { ShieldCheck, Lock, BadgeCheck, Phone, Clock, FileText, RefreshCcw, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const trustHighlights = [
  {
    title: 'Secure Browsing',
    description: 'Our entire site is protected with HTTPS encryption so your information stays private when you reach out to us.',
    icon: <Lock className="w-8 h-8 text-[#00CFFF]" />
  },
  {
    title: 'Certified Technicians',
    description: 'ASE-certified mechanics and factory-trained specialists work on every vehicle we service or sell.',
    icon: <BadgeCheck className="w-8 h-8 text-[#00CFFF]" />
  },
  {
    title: 'Transparent Pricing',
    description: 'Every quote includes parts, labor, and taxes—no surprise fees when you arrive at the shop.',
    icon: <FileText className="w-8 h-8 text-[#00CFFF]" />
  },
  {
    title: 'Verified Reviews',
    description: 'We publish real customer testimonials and invite new feedback after every completed job.',
    icon: <Star className="w-8 h-8 text-[#00CFFF]" />
  }
];

const availability = [
  {
    label: 'Shop Hours',
    value: 'Mon–Sat 9a-5p · Sun Closed'
  },
  {
    label: 'Response Time',
    value: 'We respond to contact form submissions within one business day.'
  },
  {
    label: 'Emergency Support',
    value: 'Call or WhatsApp +1 (848) 260-8604 for urgent roadside assistance.'
  }
];

export default function Trust() {
  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Trust & Safety"
            title="Built for Reliability"
            subtitle="Security, transparency, and responsive support make CARSHZA a shop you can count on."
            centered
          />
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
              <div className="inline-flex items-center gap-3 text-[#00CFFF] font-semibold mb-6">
                <ShieldCheck className="w-7 h-7" />
                Service You Can Trust
              </div>

              <h2 className="text-3xl font-display font-bold text-[#EAEAEA] mb-4">
                Why Drivers Choose CARSHZA
              </h2>

              <p className="text-[#B8B8B8] leading-relaxed mb-6">
                We operate with a simple promise: every customer receives the same level of care we give to our own vehicles. Our processes focus on clarity, safety, and accountability so you always know what to expect before we turn a wrench.
              </p>

              <ul className="space-y-4 text-[#B8B8B8]">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#18C37E] flex-shrink-0 mt-1" />
                  <span>Step-by-step walkthroughs of recommended services with photos and technician notes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCcw className="w-5 h-5 text-[#18C37E] flex-shrink-0 mt-1" />
                  <span>Fresh content and pricing updates so the information you see online matches what you receive in-shop.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#18C37E] flex-shrink-0 mt-1" />
                  <span>Privacy-first contact form and secure storage for your service history and vehicle details.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustHighlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 transition-all hover:border-[#00CFFF] hover:glow-blue"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00CFFF]/10 rounded-xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#EAEAEA] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                eyebrow="Documentation"
                title="Policies That Protect You"
                subtitle="We publish every policy so you know how we handle data, warranties, and customer feedback."
              />

              <div className="space-y-6">
                <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                  <h3 className="text-xl font-display font-bold text-[#00CFFF] mb-3">Privacy Policy</h3>
                  <p className="text-[#B8B8B8] leading-relaxed">
                    We only collect the details needed to schedule service or provide a quote. Your contact information is never sold or shared, and you can request deletion at any time.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                  <h3 className="text-xl font-display font-bold text-[#00CFFF] mb-3">Service Guarantees</h3>
                  <p className="text-[#B8B8B8] leading-relaxed">
                    Most repairs include a 12-month / 12,000-mile warranty on labor and manufacturer-backed parts warranties. Every guarantee is documented on your invoice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
              <div className="inline-flex items-center gap-3 text-[#00CFFF] font-semibold mb-6">
                <Phone className="w-7 h-7" />
                Always Reachable
              </div>

              <h3 className="text-3xl font-display font-bold text-[#EAEAEA] mb-4">
                Support That Matches Your Schedule
              </h3>

              <p className="text-[#B8B8B8] leading-relaxed mb-8">
                We keep customers updated before, during, and after every service visit. Expect real people, prompt follow-ups, and clear explanations with no jargon.
              </p>

              <ul className="space-y-5 text-[#B8B8B8]">
                {availability.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E6C200] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#EAEAEA]">{item.label}</div>
                      <div className="text-sm leading-relaxed">{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 text-sm text-[#B8B8B8]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#EAEAEA]">Call:</span>
                  <a href="tel:18482608604" className="hover:text-[#00CFFF] transition-colors">
                    +1 (848) 260-8604
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#EAEAEA]">Email:</span>
                  <a href="mailto:info@carschzaauto.com" className="hover:text-[#00CFFF] transition-colors">
                    info@carschzaauto.com
                  </a>
                </div>
                <div>Visit us at 39 Finderne Ave, Bridgewater, NJ 08807.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


