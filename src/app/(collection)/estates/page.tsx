import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function EstatesPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/estates-hero.jpg"
        kicker="Calisto Estates | Calisto Collection"
        title="Calisto Estates: Private Estate Management with Family-Office Discipline."
        subtitle="Discretion-first stewardship with clear governance and a complete operating record. Principals and family offices get visibility without noise, plus NDA-ready documentation when it matters."
        primaryCTA={{
          text: 'Request Confidential Consultation',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'See Our Approach',
          href: '#approach',
        }}
        meta="Limited client load | NDA-ready reporting | Access governance | Incident documentation"
        tagline="Quiet stewardship. Documented accountability."
      />

      {/* The estate management problem */}
      <section className="cal-section-block cal-section-block--accent" id="challenge">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Challenge"
            heading="Estate management should not require constant attention."
            description="High-value estates fail in predictable ways: inconsistent walkthroughs, unclear vendor accountability, unclear access, and spending that is hard to defend. The result is stress, drift, and unpleasant surprises."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Traditional Estate Management"
              text="Reactive instead of systematic. Standards live in someone’s head. Vendor relationships are personal and opaque. Access control becomes keys and shared codes. Incidents turn into explanations instead of records."
            />
            <CompareCard
              title="Calisto Estates"
              text="A documented cadence with defined standards. Vendor governance with scopes and approvals. Time-bounded access with audit trails. Incidents managed as timelines with prevention planning. You get visibility without day-to-day involvement."
            />
          </div>
        </div>
      </section>

      {/* What we actually deliver */}
      <section className="cal-section-block" id="what-we-deliver">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto Estates Standard"
            heading="Readiness, governance, documentation, discretion."
            description="Four pillars that define how we steward private estates."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Readiness"
              title="Your estate stays prepared"
              text="Walkthroughs with photo documentation, seasonal resets, and preventive maintenance. When you arrive, the condition is verified, not assumed."
              list={[
                'Estate mapping and baseline documentation',
                'Walkthrough cadence with photo evidence',
                'Preventive maintenance calendar with completion verification',
                'Pre-arrival inspections aligned to your standards',
              ]}
            />

            <FeatureCard
              meta="Governance"
              title="Spending and vendors stay controlled"
              text="Approval thresholds by category, scoped vendor work, QA sign-off before payment, and milestone governance for projects."
              list={[
                'Approval workflows with threshold enforcement',
                'Vendor scopes and competitive bids when needed',
                'Service levels with performance tracking',
                'Capital project governance with milestone verification',
              ]}
            />

            <FeatureCard
              meta="Documentation"
              title="A complete operating record"
              text="Vendor visits, maintenance activity, approvals, receipts, and outcomes are documented. When questions come up, the record answers them."
              list={[
                'Vendor activity logs with time windows and scope',
                'Financial transactions with receipts',
                'Maintenance history with before and after documentation',
                'Incident timelines with response and prevention notes',
              ]}
            />

            <FeatureCard
              meta="Discretion"
              title="Quiet professionalism"
              text="Confidential reporting structures, controlled information sharing, and a limited client load designed for focused attention."
              list={[
                'Confidential reporting with role-based access',
                'Discreet vendor coordination',
                'Enhanced access governance for sensitive areas',
                'Privacy-first approach to estate operations',
              ]}
            />
          </div>
        </div>
      </section>

      {/* The approach */}
      <section className="cal-section-block cal-section-block--accent" id="approach">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Our Approach"
            heading="Systematic stewardship, delivered discreetly."
            description="We establish a baseline, install a cadence, and run the estate with controls and documentation that remain stable over time."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Foundation"
              title="Baseline and standards"
              text="We document your estate, your preferences, and your operating rules. The goal is a clear standard and a clean baseline."
              list={[
                'Estate mapping across systems and assets',
                'Photographic baseline of approved condition',
                'Inventory support for high-value items',
                'Access protocols and security procedures',
                'Vendor directory and relationship notes',
                'Custom standards aligned to your preferences',
              ]}
            />

            <FeatureCard
              meta="Operations"
              title="Cadence and prevention"
              text="Walkthroughs, seasonal resets, and preventive maintenance keep the estate stable and ready."
              list={[
                'Weekly or bi-weekly walkthrough inspections',
                'Seasonal preparation and reset protocols',
                'Preventive maintenance calendar execution',
                'Photo documentation of activities',
                'Condition trend tracking over time',
                'Proactive issue identification and resolution',
              ]}
            />

            <FeatureCard
              meta="Governance"
              title="Vendor management and approvals"
              text="Work is scoped, approved, and verified. Spending follows your thresholds and your approval rules."
              list={[
                'Vendor vetting and relationship management',
                'Work scope development for projects and repairs',
                'Approval workflows enforced automatically',
                'QA verification before payment release',
                'Annual vendor performance reviews',
                'Competitive bidding for major work',
              ]}
            />

            <FeatureCard
              meta="Access Control"
              title="Documented entry for everyone"
              text="Access is time-bounded and logged. There are no permanent vendor codes and no shared keys as a default operating posture."
              list={[
                'Digital access management with expiration',
                'Role-based access for staff and vendors',
                'Time-window controls tied to scheduled work',
                'Entry and exit logging for audit trails',
                'Higher-security options for sensitive areas',
                'Remote access management and monitoring',
              ]}
            />

            <FeatureCard
              meta="Monitoring"
              title="Incident detection and response"
              text="Monitoring reduces surprise. When something happens, it becomes a managed incident with a documented closeout."
              list={[
                'Water leak detection with shutoff options',
                'Smoke and fire monitoring with dispatch protocols',
                'HVAC and temperature monitoring',
                'Security system integration where applicable',
                'Incident timelines with actions documented',
                'Prevention planning to reduce repeat issues',
              ]}
            />

            <FeatureCard
              meta="Reporting"
              title="Estate packs and confidential briefings"
              text="Reporting is tailored to your preferences. The content is evidence-based and designed for principals and family office workflows."
              list={[
                'Monthly estate pack with condition and activity summary',
                'Financial reporting with receipt-level detail',
                'Pre-arrival briefings with relevant updates',
                'Quarterly reviews and planning',
                'Ad hoc reporting on request',
                'NDA-ready handling and access controls',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology backbone */}
      <section className="cal-section-block" id="technology">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Technology"
            heading="Enterprise systems serving estate stewardship."
            description="Calisto Estates runs on Calisto Pro. The platform keeps the operating record, so standards remain consistent and decisions remain defensible."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Calisto One Portal"
              text="A private dashboard for estate condition, maintenance status, vendor activity, spending, and incident history. Access from anywhere."
            />
            <CompareCard
              title="Calisto Assure"
              text="Inspection routes with photo evidence, condition scoring, and trend analysis. Your estate’s condition history is documented over years."
            />
            <CompareCard
              title="Calisto Ops"
              text="Tasks, vendors, approvals, and financial tracking. Operational activity is logged and connected to documentation."
            />
            <CompareCard
              title="Calisto Signal"
              text="Monitoring and incident management. Alerts become incidents with actions, timelines, and prevention notes."
            />
            <CompareCard
              title="Calisto Access"
              text="Time-bounded digital access with role permissions and audit trails. Know who entered, when, and why."
            />
            <CompareCard
              title="Calisto 24/7"
              text="Optional communication coverage and emergency coordination for estates that require global continuity."
            />
          </div>
        </div>
      </section>

      {/* Proof artifacts */}
      <section className="cal-section-block cal-section-block--accent" id="documentation">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Documentation Standards"
            heading="Evidence that reduces friction."
            description="Redacted examples are available under NDA for serious inquiries. The goal is simple: a record that answers questions quickly."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Estate Readiness Pack"
              text="Walkthrough evidence with photos, condition scoring, items requiring attention, and documented resolutions delivered before arrival."
            />
            <CompareCard
              title="Incident Documentation"
              text="A complete record: alert time, response actions, vendor dispatch, resolution, assessment, and a prevention plan."
            />
            <CompareCard
              title="Access Activity Log"
              text="Every entry tied to a person, a time window, and a purpose. Housekeeping, grounds, vendors, and scheduled work are all logged."
            />
            <CompareCard
              title="Capital Project Governance"
              text="Scope, bid comparisons, approvals, milestones, completion verification, warranties, and closeout documentation."
            />
            <CompareCard
              title="Monthly Estate Pack"
              text="Condition summary with evidence, maintenance completed, spending summary with receipts, vendor activity, and upcoming priorities."
            />
            <CompareCard
              title="Pre-Arrival Briefing"
              text="Verified condition, recent work completed, items needing approval if any, and the schedule for upcoming work."
            />
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              className="cal-btn cal-btn-accent"
              href="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
              style={{ display: 'inline-block' }}
            >
              Request NDA Discussion
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
              Redacted documentation examples are available for qualified inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="cal-section-block" id="clients">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Our Clients"
            heading="Principals and family offices."
            description="Calisto Estates maintains a limited client load by design. The work requires focus, discretion, and continuity."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Primary Estate Owners"
              title="A principal residence run to your standard"
              text="Whether you are in residence or traveling, the estate remains ready with a documented cadence and clear controls."
              list={[
                'Readiness maintained regardless of occupancy',
                'Vendor coordination without day-to-day involvement',
                'Approvals and spending aligned to your preferences',
                'Pre-arrival preparation and verification',
              ]}
            />

            <FeatureCard
              meta="Multi-Property Owners"
              title="Portfolio consistency across locations"
              text="Multiple homes managed with consistent standards, consolidated reporting, and clear governance."
              list={[
                'Unified standards across properties',
                'Centralized governance and spending controls',
                'Portfolio-level dashboard and reporting',
                'Coordinated scheduling and resourcing',
              ]}
            />

            <FeatureCard
              meta="Family Offices"
              title="Stewardship with audit-ready records"
              text="Managing on behalf of principals requires controls, continuity, and documentation that stands up to scrutiny."
              list={[
                'Audit-ready documentation for activity and spend',
                'Governance aligned to family office protocols',
                'Role-based access for multiple stakeholders',
                'Long-term asset preservation planning',
              ]}
            />

            <FeatureCard
              meta="High-Sensitivity Estates"
              title="Enhanced security and discretion"
              text="Estates with valuables, collections, or security requirements can be run with tighter access governance and specialized protocols."
              list={[
                'Enhanced access controls for sensitive areas',
                'Discreet vendor coordination and scheduling',
                'Privacy-first communications and reporting',
                'NDA-ready documentation handling',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="cal-section-block cal-section-block--accent" id="investment">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Investment"
            heading="Transparent economics for estate stewardship."
            description="Calisto Estates is structured as a retainer relationship with clear documentation and cost transparency."
          />

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Monthly Retainer</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Base retainer:</strong> $8,000 to $25,000+ per month<br />
                <em>(Based on estate size, complexity, location, and service level)</em><br />
                <br />
                Includes walkthrough cadence, vendor coordination, platform access, reporting, and incident response coordination.
              </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Initial Setup and Baseline</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Estate assessment and mapping:</strong> $15K to $35K<br />
                <strong>Platform configuration:</strong> $10K to $20K<br />
                <strong>Baseline documentation:</strong> $10K to $25K<br />
                <br />
                <em>One-time fees to establish comprehensive documentation and operating controls.</em>
              </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Technology and Monitoring</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Calisto Pro platform:</strong> included in retainer<br />
                <strong>IoT sensors and devices:</strong> a la carte based on coverage needs<br />
                <strong>Advanced access control:</strong> hardware and installation at cost
              </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Vendor and Maintenance Costs</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Vendor work:</strong> billed separately at cost<br />
                <strong>Emergency response:</strong> coordination included; vendor costs billed<br />
                <strong>Capital projects:</strong> governed through approvals and milestone sign-off<br />
                <br />
                <em>Documentation is the rule: receipts and scopes live in the record.</em>
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Typical Estate Profile</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Property value:</strong> $5M to $50M+<br />
                <strong>Size:</strong> 5,000 to 50,000+ sq ft<br />
                <strong>Complexity:</strong> primary residence, compound, or multi-building estate<br />
                <br />
                <em>Minimum engagement: annual agreement with quarterly review points</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cal-section-block" id="faq">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="What principals and family offices ask."
            description="The conversations that matter before you entrust an estate to an operator."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="How is this different from a traditional estate manager?"
              answer="Traditional estate management often depends on personal memory and informal processes. Calisto Estates runs on documented standards, defined workflows, and an operating record you can review. Continuity comes from systems, not personalities."
            />

            <FAQCard
              question="Do you work under NDA?"
              answer="Yes. Calisto Estates can operate under NDA and controlled access protocols. Reporting and documentation can be structured for principals, counsel, and family office workflows."
            />

            <FAQCard
              question="Can you manage properties in multiple locations?"
              answer="Yes. We establish local service coverage in each market while keeping governance, reporting, and quality controls consistent through one platform."
            />

            <FAQCard
              question="What about our existing staff?"
              answer="We work with existing staff when possible. Strong people often perform better with documented standards, training, and a clear cadence. Changes are recommended only when performance or trust requires it."
            />

            <FAQCard
              question="How do you handle sensitive areas or high-value collections?"
              answer="We can apply tighter access governance for sensitive spaces, including restricted permissions, approval-based entry, separate logging, and documentation appropriate for insurance and stewardship requirements."
            />

            <FAQCard
              question="Can you share examples from other clients?"
              answer="Client confidentiality comes first. We can share redacted documentation examples under NDA and provide references when permission is granted."
            />

            <FAQCard
              question="What happens during emergencies if you are not local?"
              answer="Monitoring and protocols reduce response time. When an alert occurs, we coordinate local response and document actions, outcomes, and next steps in a clear incident record."
            />

            <FAQCard
              question="How do we begin?"
              answer="We start with a confidential consultation to understand the estate, preferences, and governance requirements. If there is mutual fit, we propose scope, cadence, approval structure, and reporting. Setup includes baseline documentation before ongoing stewardship begins."
            />
          </div>
        </div>
      </section>

      {/* Limited availability note */}
      <section className="cal-section-block cal-section-block--accent" id="availability">
        <div className="cal-main-inner">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Limited client load by design</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Calisto Estates maintains a limited roster to protect focus and discretion.
              If you want a high-volume manager, we are not the right fit.
              If you want disciplined stewardship with a clear operating record, let’s talk.
            </p>
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/estates-footer.jpg"
        title="Discretion-first stewardship with family-office discipline."
        text="Request a confidential consultation to discuss how Calisto Estates can run your estate with readiness, governance, and documented accountability."
        ctaText="Request Confidential Consultation"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}
