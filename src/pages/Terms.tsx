import SectionHeader from '../components/SectionHeader';

export default function Terms() {
  return (
    <div>
      <section className="py-24 bg-diagonal-stripes">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Terms of Service"
            title="Straightforward Service Agreements"
            subtitle="Clear expectations before we begin work on your vehicle."
            centered
          />
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0B]">
        <div className="container-custom space-y-10 max-w-4xl text-[#B8B8B8]">
          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">Estimates & Approvals</h2>
            <p className="leading-relaxed">
              All service begins with a written estimate outlining labor, parts, taxes, and applicable shop fees. We wait for your written or recorded approval before starting work, and we notify you immediately if anything changes.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">Payment & Invoicing</h2>
            <p className="leading-relaxed">
              Payment is due when services are complete. We accept cash, major credit cards, and contactless payments. Detailed invoices include a breakdown of parts, labor, and warranties so you can keep accurate service records.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">Warranty Coverage</h2>
            <p className="leading-relaxed">
              Labor is warrantied for 12 months or 12,000 miles unless otherwise specified. Manufacturer warranties apply to all new parts, and we document coverage on your invoice. Warranty service must be performed at CARSHZA unless noted.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10">
            <h2 className="text-2xl font-display font-bold text-[#EAEAEA] mb-4">Customer Responsibilities</h2>
            <p className="leading-relaxed">
              Please share all known issues and vehicle history to help us diagnose accurately. Let us know if you are running late or need to reschedule—there is no penalty with 24 hours notice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


