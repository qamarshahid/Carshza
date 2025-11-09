import { AlertCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

interface PerformanceProps {
  onNavigate: (page: string) => void;
}

export default function Performance({ onNavigate }: PerformanceProps) {
  const services = [
    {
      title: 'ECU Remap & Tuning',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Up to 30% horsepower gains',
        'Improved throttle response',
        'Optimized fuel efficiency'
      ]
    },
    {
      title: 'Exhaust Upgrades',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Enhanced engine sound',
        'Reduced back pressure',
        'Weight reduction options'
      ]
    },
    {
      title: 'Suspension Setup',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Improved handling dynamics',
        'Adjustable ride height',
        'Track-ready configurations'
      ]
    },
    {
      title: 'Body Kits & Aerodynamics',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Aggressive styling',
        'Enhanced downforce',
        'Carbon fiber components'
      ]
    },
    {
      title: 'Custom Wraps',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Paint protection',
        'Unlimited color options',
        'Removable and reversible'
      ]
    }
  ];

  return (
    <div>
      <section className="relative py-32 bg-diagonal-stripes overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Performance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <SectionHeader
            eyebrow="Performance"
            title="Unlock Your Vehicle's Potential"
            subtitle="Professional performance upgrades engineered for power, precision, and reliability"
            centered
          />
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? 'bg-black' : 'bg-[#0B0B0B]'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-4xl font-display font-bold text-[#00CFFF] mb-6">
                  {service.title}
                </h2>

                <div className="relative mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-6">
                  <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                    <h3 className="text-xl font-display font-bold text-[#E6C200] mb-6">
                      Key Benefits
                    </h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-2 h-2 bg-[#00CFFF] rounded-full mt-2"></div>
                          <span className="text-[#EAEAEA] text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="secondary" onClick={() => onNavigate('Contact')}>
                    Request Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFC857]/10 border border-[#FFC857]/30 rounded-xl p-8 flex gap-6">
              <div className="flex-shrink-0">
                <AlertCircle className="w-8 h-8 text-[#FFC857]" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-[#FFC857] mb-3">
                  Important Safety & Legal Information
                </h3>
                <p className="text-[#EAEAEA] leading-relaxed mb-4">
                  All performance modifications are designed and installed with safety as our top priority. We ensure that modifications comply with local emissions and noise regulations.
                </p>
                <p className="text-[#B8B8B8] text-sm leading-relaxed">
                  Some modifications may affect your vehicle's warranty or require additional insurance coverage. We recommend discussing these changes with your insurance provider. Track-focused modifications may not be suitable for daily street use and should be used responsibly in appropriate environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Ready to Transform Your Drive?
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our performance specialists to discuss your goals and get a custom quote.
          </p>
          <Button variant="primary" onClick={() => onNavigate('Contact')}>
            Book Performance Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
