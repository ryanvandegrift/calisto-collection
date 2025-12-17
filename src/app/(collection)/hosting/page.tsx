import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function HostingPage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/hosting-hero.jpg"
        kicker="Calisto Hosting | Calisto Collection"
        title="Calisto Hosting: Luxury Rental Management You Can Verify."
        subtitle="A luxury rental program built on evidence. See inspections, readiness, incidents, access, and spending with receipts in one place, in real time."
        primaryCTA={{
          text: 'Request Property Assessment',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'See the Technology',
          href: '#technology',
        }}
        meta="Real-Time Visibility | Photo Evidence | 24/7 Monitoring | Full Audit Trails"
        tagline="If Your Manager Cannot Show The Receipts, You Are Buying Promises."
      />

      {/* The fundamental problem */}
      <section className="cal-section-block cal-section-block--accent" id="problem">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Question"
            heading="How Do You Know Your Property Is Ready?"
            description="You own a $5M villa. You get a text that says: “Property is ready.” No photos. No checklist. No verification. You are expected to trust from 2,000 miles away."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Traditional Management"
              text="Monthly summaries with vague updates. You hear about problems when guests complain. Quality depends on who is on shift. Little real visibility."
            />
            <CompareCard
              title="Calisto Hosting"
              text="Open your portal. Review inspection photos from today. See readiness scoring and verification against your baseline. Track the items found and the items resolved. Every arrival verified."
            />
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="cal-section-block" id="difference">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Standard"
            heading="Evidence First. Standards Enforced."
            description="Calisto Hosting is built for owners who want clarity. Every standard is documented. Every claim is backed by proof."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Verification"
              title="Readiness Is Measured"
              text="Before every arrival: inspections with photo evidence, verification against your approved baseline, and re-checks when corrections are required."
              list={[
                'Pre-arrival inspections with 40+ photo points per property',
                'Verification against your approved condition baseline',
                'Readiness scoring with correction and re-verification',
                'Photo history that tracks condition over time',
              ]}
            />

            <FeatureCard
              meta="Transparency"
              title="Real-Time Visibility"
              text="Your portal shows arrivals, departures, task completion with timestamps, spending with receipts, and incident timelines."
              list={[
                'Reservations and guest activity logged',
                'Task completion with photo proof and timestamps',
                'Owner billing with line items and receipt attachments',
                'Work orders tracked from start to close',
              ]}
            />

            <FeatureCard
              meta="Protection"
              title="24/7 Monitoring With Documentation"
              text="Sensors detect water leaks, smoke, and access events. Alerts become incidents with timelines, actions, outcomes, and prevention notes."
              list={[
                'Global monitoring across time zones',
                'Incident timelines: detection to response to resolution',
                'Playbook-driven handling',
                'Documentation for insurance and liability',
              ]}
            />

            <FeatureCard
              meta="Experience"
              title="Guest Service With Accountability"
              text="Calls and messages are handled professionally, logged, and traceable. Concierge activity is tracked through completion."
              list={[
                'Calls answered and managed consistently',
                'Communication history and transcripts available',
                'Concierge requests tracked to resolution',
                'Add-ons and experience bookings tracked per stay',
              ]}
            />

            <FeatureCard
              meta="Financial Clarity"
              title="Every Charge Has Evidence"
              text="Expenses are tied to work orders with receipts and before/after documentation. No mystery lines."
              list={[
                'Click any charge to see the work order and receipts',
                'Before/after photos for maintenance work',
                'Approval workflows for spending thresholds',
                'Complete audit trail for transactions',
              ]}
            />

            <FeatureCard
              meta="Access Control"
              title="Know Who Entered, When, And Why"
              text="Time-limited access for staff and vendors with entry/exit logs. No shared codes."
              list={[
                'Role-based access with automatic expiration',
                'Entry and exit logs for a complete record',
                'Vendor access tied to specific work orders',
                'Access reports available anytime',
              ]}
            />
          </div>
        </div>
      </section>

      {/* The Technology */}
      <section className="cal-section-block cal-section-block--accent" id="technology">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Calisto Pro Platform"
            heading="Enterprise Systems Behind White-Glove Service."
            description="Calisto Hosting runs on Calisto Pro, the same operations platform used across Calisto Collection."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Calisto Ops"
              title="Operations Engine"
              text="Tasks, workflows, approvals, and records in one system."
              list={[
                'Calendar coordination and stay operations',
                'Task assignment with evidence requirements',
                'Vendor management with QA sign-off',
                'Full transaction history and documentation',
              ]}
            />

            <FeatureCard
              meta="Calisto Assure"
              title="Quality Verification"
              text="Inspections with evidence and verification against your baseline."
              list={[
                'Custom inspection routes for your property',
                'Verification and anomaly detection',
                'Readiness scoring before arrivals',
                'Findings tracked with severity and due dates',
              ]}
            />

            <FeatureCard
              meta="Calisto Signal"
              title="24/7 Monitoring"
              text="Monitoring that turns alerts into managed incidents with outcomes."
              list={[
                'Water, smoke, and access monitoring',
                'Incident timelines with escalation protocols',
                'Coverage across time zones',
                'Insurance-ready documentation',
              ]}
            />

            <FeatureCard
              meta="Calisto 24/7"
              title="Professional Communication"
              text="Calls and messages handled consistently, logged, and traceable."
              list={[
                'Dedicated routing per property',
                'Professional call answering',
                'Transcripts and summaries',
                'Message management and escalation',
              ]}
            />

            <FeatureCard
              meta="Calisto Navigator"
              title="Guest Portal"
              text="Digital check-in, house info, service requests, and upgrades."
              list={[
                'Digital check-in',
                'House manual and local information',
                'Service request tracking',
                'Add-ons and upgrades',
              ]}
            />

            <FeatureCard
              meta="Calisto Access"
              title="Access Governance"
              text="Time-bounded access with audit trails."
              list={[
                'Digital key issuance and management',
                'Time-limited vendor access',
                'Entry/exit logging and reporting',
                'Smart lock integration options',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Show the receipts */}
      <section className="cal-section-block" id="proof">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Evidence"
            heading="Evaluate The Artifacts."
            description="We can share redacted examples of reports, inspection records, incident documentation, and owner packs."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Pre-Arrival Readiness Report"
              text="Inspection results with photos, readiness scoring, items identified, items resolved, and re-check evidence."
            />
            <CompareCard
              title="Incident Documentation"
              text="Detection, response, actions, resolution, and prevention notes with supporting photos."
            />
            <CompareCard
              title="Monthly Owner Pack"
              text="Revenue summary, occupancy metrics, maintenance completed with evidence, and priorities generated from system records."
            />
            <CompareCard
              title="Task Evidence Chain"
              text="Work order to arrival time to completion proof to QA sign-off to invoice and payment."
            />
            <CompareCard
              title="Access Activity Log"
              text="Entry windows and timestamps for staff, vendors, and scheduled visits."
            />
            <CompareCard
              title="Communication History"
              text="Calls, messages, requests, and resolution outcomes with timestamps."
            />
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              className="cal-btn cal-btn-accent"
              href="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
              style={{ display: 'inline-block', marginRight: '1rem' }}
            >
              Request Redacted Examples
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
              Available under NDA for qualified property owners
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="cal-section-block cal-section-block--accent" id="ideal-client">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Fit"
            heading="Built For Owners Who Demand Proof."
            description="Calisto Hosting is for owners who want transparency, verified standards, and clean accountability."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="The Global Owner"
              title="Multiple Properties Across Countries"
              text="You cannot be everywhere. You can still have complete visibility."
              list={[
                'Unified dashboard across properties',
                'Consistent standards across the portfolio',
                'Alerts regardless of time zone',
                'Portfolio-level performance visibility',
              ]}
            />

            <FeatureCard
              meta="The Second-Home Owner"
              title="Your Home Is Your Standard"
              text="You want your home ready when you arrive, and proof it stayed that way while you were away."
              list={[
                'Pre-arrival verification for personal use',
                'Maintenance scheduled around visits',
                'Vendor governance and approvals',
                'Visibility without daily involvement',
              ]}
            />

            <FeatureCard
              meta="The Investor"
              title="Income With Asset Protection"
              text="Returns matter, but so does long-term condition. You should see both."
              list={[
                'Line-item financial transparency',
                'Standards that protect asset value',
                'Revenue analytics and reporting',
                'Incident documentation for risk management',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="cal-section-block" id="how-it-works">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How It Works"
            heading="Baseline, Then Continuous Verification."
            description="We establish your approved baseline, install the operating system, then run the property with ongoing evidence and reporting."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Phase 1"
              title="Baseline And Standards"
              text="We document your approved condition and configure inspection and readiness standards."
              list={[
                'Baseline documentation of approved condition',
                'Room-by-room inventory and notes',
                'Inspection routes and readiness thresholds',
                'Access plan and vendor governance',
              ]}
            />

            <FeatureCard
              meta="Phase 2"
              title="Platform Setup"
              text="We configure Calisto Pro, connect key systems, and establish monitoring and access governance."
              list={[
                'Calisto portal configured for your property',
                'Monitoring setup based on coverage needs',
                'Access governance configuration',
                'Integration planning where applicable',
              ]}
            />

            <FeatureCard
              meta="Phase 3"
              title="Team Launch"
              text="We train teams on standards and evidence workflows, then go live with verified operations."
              list={[
                'Training on inspection and evidence capture',
                'QA verification process',
                'First verified inspection cycle',
                'Guest communication setup',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Operate With Proof"
              text="Each stay cycle includes verification, documented execution, incident response, and trend-based prevention."
              list={[
                'Pre-arrival inspections with photo evidence',
                'Work orders tracked to completion',
                'Incident response with timelines',
                'Performance and prevention reviews',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className="cal-section-block cal-section-block--accent" id="investment">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Investment"
            heading="Premium Service With Transparent Value."
            description="You are paying for disciplined operations, verified standards, and a complete operating record."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="What You Are Paying For"
              text="Verified inspections, real-time visibility, documented incident management, clear financial records, and professional operations."
            />
            <CompareCard
              title="What You Are Not Paying For"
              text="Opacity, vague summaries, surprise charges, and learning about problems from guests."
            />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Typical Investment Range</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>Management fees:</strong> 15–22% of rental revenue (based on property profile and service scope)<br />
              <strong>Platform access:</strong> Included<br />
              <strong>Setup & baseline:</strong> One-time fee based on property size<br />
              <strong>Monitoring devices:</strong> À la carte based on coverage needs
            </p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>The Real Cost Is Uncertainty</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              A missed maintenance issue can become a major claim. A preventable guest failure can damage your brand. Calisto Hosting reduces risk by operating with evidence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cal-section-block" id="faq">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="What Owners Ask Before Switching."
            description="Straight answers for serious owners."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="How is this different from other luxury managers?"
              answer="We operate with proof. You see inspections, readiness, incident logs, and spending with receipts. Most managers summarize. We document."
            />

            <FAQCard
              question="Do I need to check the portal constantly?"
              answer="No. You use it when you want clarity. You can also choose alerts only when decisions or exceptions require your attention."
            />

            <FAQCard
              question="What happens when something goes wrong?"
              answer="Issues become incidents with timelines, actions, outcomes, and prevention notes. You receive the record, not a story."
            />

            <FAQCard
              question="Can you integrate with what I already use?"
              answer="Often yes. We aim for one operating record, not more fragmentation. We align integrations based on your systems and the property profile."
            />

            <FAQCard
              question="Do you operate outside DR and Spain?"
              answer="We are expanding. If your property is elsewhere, we can discuss coverage and timing based on your market."
            />

            <FAQCard
              question="What is the onboarding timeline?"
              answer="Assessment and baseline documentation typically take a few weeks, then we launch with verified operations. We move deliberately because the goal is lasting standards."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/hosting-footer.jpg"
        title="Property Management You Can Verify."
        text="Schedule a property assessment and see how Calisto Hosting operates with evidence, clarity, and accountability."
        ctaText="Request Property Assessment"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}
