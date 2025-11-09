import { Target, Heart, Zap, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Honesty',
      description: 'We tell you what you actually need, not what makes us the most money. No upselling or hidden fees.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Fair Pricing',
      description: 'Competitive prices on all services. We believe quality work should be affordable for everyone.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Experience',
      description: '8+ years working on Honda, Toyota, Mazda, and Acura. We know these cars and how to fix them right.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Service',
      description: 'Most services done same-day. We know you need your car back fast.'
    }
  ];

  const team = [
    {
      name: 'Mike Chen',
      role: 'Owner & Lead Mechanic',
      certifications: ['8+ Years Experience', 'Honda/Toyota Specialist', 'ASE Certified'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Martinez',
      role: 'Mechanic',
      certifications: ['Brake Specialist', '5+ Years Experience', 'Mazda Expert'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const partners = ['Honda', 'Toyota', 'Mazda', 'Acura'];

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Story"
            title="Honest Work, Fair Prices"
            centered
          />

          <div className="max-w-4xl mx-auto space-y-6 text-[#EAEAEA]">
            <p className="text-lg leading-relaxed">
              Founded in 2017, CARSHZA started with a simple goal: provide reliable, affordable auto service with honest advice and fair pricing. We specialize in Honda, Toyota, Mazda, and Acura vehicles because they're dependable and we know them inside and out.
            </p>
            <p className="text-lg leading-relaxed">
              What began as a one-person operation has grown into a trusted neighborhood shop. We handle everyday maintenance like oil changes, tire repairs, brakes, and general upkeep. We also sell quality used cars that we've personally inspected.
            </p>
            <p className="text-lg leading-relaxed">
              We're not the fanciest shop in town, but we're honest, fair, and we care about keeping your car running reliably without breaking your budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Us"
            subtitle="Four principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 text-center transition-all hover:border-[#00CFFF] hover:glow-blue group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00CFFF]/10 rounded-full mb-6 text-[#00CFFF] group-hover:bg-[#00CFFF]/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#00CFFF] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#B8B8B8] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Meet the Team"
            title="Our Mechanics"
            subtitle="Experienced technicians who care about your car"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all hover:border-[#00CFFF] hover:glow-blue"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-[#EAEAEA] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00CFFF] text-sm mb-4">
                    {member.role}
                  </p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <div key={idx} className="text-xs text-[#B8B8B8] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#E6C200] rounded-full"></span>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Brands We Service"
            title="Our Specialties"
            subtitle="We focus on these reliable brands"
            centered
          />

          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-[#B8B8B8] hover:text-[#00CFFF] transition-colors font-display text-2xl font-bold opacity-60 hover:opacity-100"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
