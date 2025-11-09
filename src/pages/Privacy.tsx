import SectionHeader from '../components/SectionHeader';

export default function Privacy() {
  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Privacy Policy"
            title="Your Information, Your Choice"
            subtitle="We only collect what we need to provide service and we keep it secure."
            centered
          />
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom space-y-10 max-w-4xl text-[#B8B8B8]">
          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">What We Collect</h2>
            <p className="leading-relaxed">
              When you contact us through our site or schedule a visit, we only ask for the information required to respond—typically your name, preferred contact details, vehicle make/model, and a summary of the service you need. If you approve work, we attach those details to your invoice so we can reference past services.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">How We Use It</h2>
            <p className="leading-relaxed">
              Your information allows us to prepare accurate quotes, confirm appointments, and keep you updated during repairs. We never sell or rent contact information. We do not use automated decision-making—every response comes from a member of our team.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">How We Keep It Safe</h2>
            <p className="leading-relaxed">
              All web forms are protected by HTTPS and stored on encrypted systems with access restricted to shop managers. Completed job records are retained for up to five years to honor warranties and then securely deleted.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">Your Rights</h2>
            <p className="leading-relaxed">
              You can request a copy of your records, ask for corrections, or have your information deleted at any time by emailing privacy@carschzaauto.com. We respond to all requests within five business days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


