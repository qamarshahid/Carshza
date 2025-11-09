import { useState } from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/sampleData';

export default function Testimonials() {
  const [selectedService, setSelectedService] = useState('all');

  const services = ['all', ...Array.from(new Set(testimonials.map(t => t.service)))];

  const filteredTestimonials = selectedService === 'all'
    ? testimonials
    : testimonials.filter(t => t.service === selectedService);

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by Car Enthusiasts"
            subtitle="Real stories from real clients who trust us with their prized vehicles"
            centered
          />
        </div>
      </section>

      <section className="py-12 bg-[#0B0B0B] sticky top-20 z-40 border-b border-[rgba(255,255,255,0.08)]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all min-h-[44px] ${
                  selectedService === service
                    ? 'bg-[#00CFFF] text-black'
                    : 'bg-[#1A1A1A] text-[#EAEAEA] border border-[rgba(255,255,255,0.08)] hover:border-[#00CFFF]'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 transition-all hover:border-[#00CFFF] hover:glow-blue flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E6C200] text-[#E6C200]" />
                  ))}
                </div>

                <p className="text-[#EAEAEA] leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-[#EAEAEA]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#00CFFF]">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-[#B8B8B8]">
                No testimonials for this service category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-lg text-[#B8B8B8] leading-relaxed">
            Experience the same level of excellence that has earned us hundreds of five-star reviews. Our commitment to quality work, transparent pricing, and exceptional customer service sets us apart.
          </p>
        </div>
      </section>
    </div>
  );
}
