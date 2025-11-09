import { useState } from 'react';
import { Award, Users, Wrench, Star, ChevronLeft, ChevronRight, Car, ShieldCheck, Lock, FileCheck, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import StatItem from '../components/StatItem';
import CarCard from '../components/CarCard';
import SectionHeader from '../components/SectionHeader';
import { sampleCars, services, testimonials } from '../data/sampleData';

interface HomeProps {
  onNavigate: (page: string, carId?: number) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredCars = sampleCars.slice(0, 5);
  const slidesPerView = 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center justify-center bg-diagonal-stripes overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

        <div className="container-custom relative z-10 text-center py-24">
          <div className="relative inline-block mb-8 overflow-hidden">
            <Car className="w-24 h-24 text-[#00CFFF] mx-auto animate-light-sweep" strokeWidth={1.5} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#E6C200] rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-[#00CFFF]">
            CARSHZA
          </h1>

          <p className="text-2xl md:text-3xl text-[#00CFFF] mb-12 font-light">
            Affordable Maintenance & Quality Used Cars
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" onClick={() => onNavigate('Inventory')}>
              Browse Cars
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('Services')}>
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Trust Signals"
            title="Reliability You Can Verify"
            subtitle="Security, transparency, and responsive support keep your experience hassle-free."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00CFFF]/10 rounded-lg mb-4">
                <Lock className="w-6 h-6 text-[#00CFFF]" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#EAEAEA] mb-2">HTTPS Protected</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Every page uses SSL encryption so contact forms, quotes, and bookings stay private.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00CFFF]/10 rounded-lg mb-4">
                <FileCheck className="w-6 h-6 text-[#00CFFF]" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#EAEAEA] mb-2">Published Policies</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Privacy, warranty, and terms are easy to read and updated regularly so there are no surprises.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00CFFF]/10 rounded-lg mb-4">
                <ShieldCheck className="w-6 h-6 text-[#00CFFF]" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#EAEAEA] mb-2">Certified Team</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                ASE-certified technicians and verified partners provide dependable repairs and inspections.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00CFFF]/10 rounded-lg mb-4">
                <PhoneCall className="w-6 h-6 text-[#00CFFF]" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#EAEAEA] mb-2">Live Support</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Real staff members answer every call, email, and message—no bots, no automated scripts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Featured Inventory"
            title="Quality Used Cars"
            subtitle="Reliable Honda, Toyota, Mazda, and Acura vehicles at fair prices"
            centered
          />

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
              >
                {featuredCars.map((car) => (
                  <div key={car.id} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                    <CarCard {...car} onViewDetails={(id) => onNavigate('Inventory', id)} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-3 rounded-full hover:bg-[#00CFFF] hover:border-[#00CFFF] transition-all min-h-[44px] min-w-[44px]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-3 rounded-full hover:bg-[#00CFFF] hover:border-[#00CFFF] transition-all min-h-[44px] min-w-[44px]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => onNavigate('Inventory')}>
              View All Inventory
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Services"
            title="Affordable Maintenance & Repairs"
            subtitle="Oil changes, tire service, brakes, and general maintenance"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 transition-all hover:border-[#00CFFF] hover:glow-blue group"
              >
                <div className="w-12 h-12 bg-[#00CFFF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00CFFF]/20 transition-colors">
                  <Car className="w-6 h-6 text-[#00CFFF]" />
                </div>

                <h3 className="text-xl font-display font-bold text-[#EAEAEA] mb-3 group-hover:text-[#00CFFF] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#B8B8B8] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <button
                  onClick={() => onNavigate('Services')}
                  className="text-[#00CFFF] text-sm font-semibold hover:underline underline-offset-4 transition-all"
                >
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Shop"
            title="Clean & Professional"
            subtitle="See our work and the cars we service"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={`https://images.pexels.com/photos/${3802510 + item * 100}/pexels-photo-${3802510 + item * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={`Workshop ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" onClick={() => onNavigate('Gallery')}>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real feedback from real car enthusiasts"
            centered
          />

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-12">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E6C200] text-[#E6C200]" />
                ))}
              </div>

              <p className="text-xl text-[#EAEAEA] text-center mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#EAEAEA]">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-[#B8B8B8]">
                    {testimonials[currentTestimonial].service}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-3 rounded-full hover:bg-[#00CFFF] hover:border-[#00CFFF] transition-all hidden lg:flex min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] p-3 rounded-full hover:bg-[#00CFFF] hover:border-[#00CFFF] transition-all hidden lg:flex min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              <button onClick={prevTestimonial} className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#00CFFF] transition-all min-h-[44px] min-w-[44px]" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextTestimonial} className="p-2 bg-[#1A1A1A] rounded-full hover:bg-[#00CFFF] transition-all min-h-[44px] min-w-[44px]" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#00CFFF]/10 to-[#E6C200]/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Honest Service, Fair Prices
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            Whether you need an oil change, tire repair, or looking for a reliable used car, we're here to help.
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
