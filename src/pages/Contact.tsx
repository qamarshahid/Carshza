import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contact Us"
            title="Get in Touch"
            subtitle="Ready to start your automotive journey? We're here to help with any questions or service inquiries"
            centered
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-8 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096033!2d144.95373531531654!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635832767123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00CFFF]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#00CFFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#EAEAEA] mb-1">Location</h3>
                    <p className="text-[#B8B8B8]">
                      39 Finderne Ave<br />
                      Bridgewater, NJ 08807
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00CFFF]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#00CFFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#EAEAEA] mb-1">Phone</h3>
                    <p className="text-[#B8B8B8]">+1 (848) 260-8604</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00CFFF]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00CFFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#EAEAEA] mb-1">Email</h3>
                    <p className="text-[#B8B8B8]">info@carschzaauto.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00CFFF]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#00CFFF]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#EAEAEA] mb-1">Hours</h3>
                    <div className="text-[#B8B8B8] space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-xl p-8">
                <h2 className="text-3xl font-display font-bold text-[#00CFFF] mb-6">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-[#18C37E]/10 border border-[#18C37E]/30 rounded-lg">
                    <p className="text-[#18C37E] font-semibold">
                      Thank you for contacting us! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black transition-colors min-h-[44px]"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black transition-colors min-h-[44px]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black transition-colors min-h-[44px]"
                      placeholder="+1 (848) 260-8604"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                      Preferred Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black transition-colors min-h-[44px]"
                    >
                      <option value="">Select a service</option>
                      <option value="sales">Vehicle Purchase</option>
                      <option value="diagnostics">Engine Diagnostics</option>
                      <option value="performance">Performance Tuning</option>
                      <option value="detailing">Detailing & Coating</option>
                      <option value="wraps">Custom Wraps</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-[#B8B8B8] uppercase tracking-wide mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#00CFFF] focus:ring-2 focus:ring-[#00CFFF] focus:ring-offset-2 focus:ring-offset-black transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    loading={isSubmitting}
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00CFFF] mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            For urgent matters or roadside assistance, give us a call directly. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18482608604"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#E6C200] text-black font-semibold rounded-lg hover:glow-blue hover:scale-105 transition-all min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/18482608604"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-[#00CFFF] text-[#00CFFF] font-semibold rounded-lg hover:bg-[#00CFFF] hover:text-black transition-all min-h-[44px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
