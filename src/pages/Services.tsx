import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { services } from '../data/sampleData';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'How long does a typical service take?',
      answer: 'Oil changes usually take about 30 minutes. Tire repairs are typically same-day. Brake jobs usually take 2-3 hours. We\'ll give you an honest time estimate when you come in.'
    },
    {
      question: 'Do you use OEM or aftermarket parts?',
      answer: 'We use quality aftermarket parts that meet or exceed OEM standards. They\'re reliable and more affordable. If you prefer OEM parts, we can order them for you.'
    },
    {
      question: 'What warranty do you offer on your work?',
      answer: 'We offer a 90-day warranty on labor for most repairs. Parts warranties vary by manufacturer, usually 1-2 years. We stand behind our work.'
    }
  ];

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Services"
            title="Everyday Maintenance at Fair Prices"
            subtitle="Oil changes, tire service, brakes, and general repairs for Honda, Toyota, Mazda, and Acura"
            centered
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all hover:border-[#00CFFF]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-[#1A1A1A]/50 min-h-[44px]"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-[#EAEAEA] mb-1">
                      {service.title}
                    </h3>
                    {service.priceFrom && (
                      <p className="text-[#E6C200] font-mono text-sm">
                        From ${service.priceFrom}
                      </p>
                    )}
                  </div>
                  <div className="text-[#00CFFF]">
                    {openAccordion === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {openAccordion === index && (
                  <div className="px-8 pb-8 animate-fade-in-up">
                    <p className="text-[#B8B8B8] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-[#00CFFF]/10 rounded flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-[#00CFFF]" />
                          </div>
                          <span className="text-[#EAEAEA]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="secondary" onClick={() => onNavigate('Contact')}>
                      Request Service
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Quick answers to help you understand our service process"
            centered
          />

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8"
              >
                <h3 className="text-xl font-display font-bold text-[#00CFFF] mb-4">
                  {faq.question}
                </h3>
                <p className="text-[#B8B8B8] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Need Service Today?
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            Give us a call or stop by. Most services can be done same-day. Walk-ins welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => onNavigate('Contact')}>
              Get a Quote
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('Contact')}>
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
