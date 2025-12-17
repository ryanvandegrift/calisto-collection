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
        kicker="Calisto Hosting"
        title="Property management you can actually verify."
        subtitle="A luxury rental program built on real evidence. See inspections, task completion, incidents, and spending with receipts in one place, in real time."
        primaryCTA={{
          text: 'Request Property Assessment',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'See the Technology',
          href: '#technology',
        }}
        meta="Real-time visibility | Photo evidence | 24/7 monitoring | Audit trails"
        tagline="If your manager cannot show the receipts, you are buying promises."
      />

      {/* The fundamental problem */}
      <section className="cal-section-block cal-section-block--accent" id="problem">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Question"
            heading="How do you know your property is actually ready?"
            description="You own a $5M villa. Your manager texts, “The property is ready for guests.” No photos. No verification. You are 2,000 miles away, expected to trust."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Traditional Management"
              text="Monthly reports with vague summaries. You learn about problems when guests complain. Quality depends on whoever showed up that day. There is no real-time visibility."
            />
            <CompareCard
              title="Calisto Hosting"
              text="Open your phone and see the inspection photos from today. Review verification against your baseline and a readiness score. See what was fixed and when. Every arrival is checked and documented."
            />
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="cal-section-block" id="difference">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Calisto Difference"
            heading="Excellence you can see, not just hear about."
            description="Calisto Hosting is built for owners who want clear proof. Standards are verified, tasks are documented, incidents have timelines, and spending is tied to receipts."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Verification"
              title="Readiness is measured, not assumed"
              text="Before every arrival we run inspections with photo documentation, verify condition against your approved baseline, and close any gaps before check-in."
              list={[
                'Pre-arrival inspections with 40+ photo points per property',
                'Baseline comparison against approved condition',
                'Readiness scoring with correction and re-check',
                'Condition history tracked over time',
              ]}
            />

            <FeatureCard
              meta="Transparency"
              title="Real-time visibility, not monthly summaries"
              text="Your Calisto One portal shows arrivals, departures, task completion, incidents, and spending with receipts. You can verify what happened and when."
              list={[
                'Reservations and activity logging',
                'Task completion with photo proof and timestamps',
                'Owner billing with line-item detail and receipts',
                'Work orders tracked from creation to closeout',
              ]}
            />

            <FeatureCard
              meta="Protection"
              title="Monitoring that turns alerts into action"
              text="Sensors can detect water leaks, smoke, temperature issues, and access events. Alerts become managed incidents with documented response and prevention notes."
              list={[
                'Monitoring coverage across time zones',
                'Incident timelines from detection to resolution',
                'Playbook-driven response protocols',
                'Documentation suitable for insurance and liability',
              ]}
            />

            <FeatureCard
              meta="Experience"
              title="Guest service without compromising standards"
              text="Calls, messages, and requests are handled professionally and tracked in the operating record. Service stays consistent without cutting corners."
              list={[
                '“Alex with Calisto” answers calls with escalation as needed',
                'Call transcripts and communication history',
                'Concierge requests tracked to resolution',
                'Experience bookings and add-on revenue per stay',
              ]}
            />

            <FeatureCard
              meta="Financial Clarity"
              title="Line-item accountability"
              text="Every expense is tied to a specific task, with supporting documentation. If you see a charge, you can see the work behind it."
              list={[
                'Open any charge to view the work order and evidence',
                'Before and after photos for maintenance tasks',
                'Approval workflows for spending thresholds',
                'Audit trail for decisions and transactions',
              ]}
            />

            <FeatureCard
              meta="Access Control"
              title="Know who enters your property"
              text="Digital access can be time-bounded for staff and vendors. Every entry is logged. No shared codes as the default operating posture."
              list={[
                'Role-based access with expiration',
                'Entry and exit logs for audit trails',
                'Showing activity tracked and documented',
                'Vendor access tied to specific work orders',
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
            heading="Enterprise systems behind white-glove service."
            description="Calisto Hosting runs on Calisto Pro, the same institutional platform used across Calisto Collection. It is built for operational control, not marketing dashboards."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Calisto Ops"
              title="Operations engine"
              text="Tasks, workflows, approvals, and documentation connected in one operating record."
              list={[
                'Reservation and calendar coordination',
                'Task assignment with photo proof requirements',
                'Vendor management with QA sign-off',
                'Complete financial transaction history',
              ]}
            />

            <FeatureCard
              meta="Calisto Assure"
              title="Quality verification"
              text="Inspections with evidence trails, baseline comparison, and readiness scoring."
              list={[
                'Custom inspection routes for your property',
                'Baseline comparison and anomaly detection',
                'Readiness scoring before arrivals',
                'Findings tracked with severity and due dates',
              ]}
            />

            <FeatureCard
              meta="Calisto Signal"
              title="24/7 monitoring"
              text="Monitoring that produces a documented incident record, not just alerts."
              list={[
                'Water leak, smoke, temperature, and access monitoring',
                'Incident timelines with escalation protocols',
                'Coverage across time zones',
                'Insurance-ready documentation packs',
              ]}
            />

            <FeatureCard
              meta="Calisto 24/7"
              title="Professional communication"
              text="Calls and messages handled with consistency, documentation, and escalation rules."
              list={[
                'Dedicated forwarding number per property',
                'Professional answering service',
                'Transcripts and call summaries',
                'Message management and routing',
              ]}
            />

            <FeatureCard
              meta="Calisto Navigator"
              title="Guest portal"
              text="A branded guest experience for house info, service requests, and upgrades."
              list={[
                'Digital check-in workflows',
                'House manual and local information',
                'Service request tracking',
                'Experience bookings and add-ons',
              ]}
            />

            <FeatureCard
              meta="Calisto Access"
              title="Access control"
              text="Time-bounded digital access with complete logs."
              list={[
                'Digital key issuance and management',
                'Time-limited vendor access codes',
                'Entry and exit logging',
                'Smart lock integrations where available',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Show the receipts */}
      <section className="cal-section-block" id="proof">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Receipts"
            heading="See the evidence before you decide."
            description="We can share redacted examples of inspection records, incident documentation, owner packs, and financial transparency. This is what replaces “trust us.”"
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Pre-Arrival Readiness Report"
              text="Inspection results with photos, verification against baseline, readiness score, items found, and proof of resolution with a re-check."
            />
            <CompareCard
              title="Incident Response Documentation"
              text="A water leak alert with a complete timeline: detection time, dispatch, arrival, resolution, photos, and a prevention plan."
            />
            <CompareCard
              title="Monthly Owner Pack"
              text="Revenue summary, occupancy metrics, completed maintenance with evidence, guest satisfaction, and upcoming priorities generated from system records."
            />
            <CompareCard
              title="Task Completion Evidence"
              text="HVAC maintenance with a full chain: work order, arrival time, service performed, photo proof, QA sign-off, invoice, and payment record."
            />
            <CompareCard
              title="Access Activity Log"
              text="A clear entry log for staff, vendors, and showings with time windows and purpose. Every entry is timestamped and recorded."
            />
            <CompareCard
              title="Guest Communication History"
              text="Call transcripts, message history, and service requests with resolution times and outcomes in one audit trail."
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
            kicker="Is This For You?"
            heading="Built for owners who want verification, not reassurance."
            description="Calisto Hosting is designed for luxury owners who care about standards, accountability, and a defensible operating record."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="The Global Owner"
              title="Multiple properties across countries"
              text="You cannot be everywhere, but you can see everything. Run your portfolio from one dashboard with consistent standards."
              list={[
                'Unified dashboard across properties',
                'Consistent quality standards',
                'Real-time alerts across time zones',
                'Portfolio-level performance analytics',
              ]}
            />

            <FeatureCard
              meta="The Second-Home Owner"
              title="Your family escape, protected"
              text="Your home should feel perfect when you arrive. When you are away, you should be able to verify how it is being maintained."
              list={[
                'Pre-arrival verification for personal use',
                'Maintenance scheduled around your visits',
                'Vendor governance and approval controls',
                'Visibility without daily involvement',
              ]}
            />

            <FeatureCard
              meta="The Investor"
              title="Income with asset protection"
              text="Performance matters, but so does preservation. We optimize revenue while protecting quality and long-term value."
              list={[
                'Financial transparency with line-item detail',
                'Standards that protect asset value',
                'Occupancy and revenue analytics',
                'Incident documentation for insurance and liability',
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
            heading="From baseline to consistent performance."
            description="We establish your baseline and operating rules, set up systems, train the team, then run a documented cadence for every stay."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Phase 1"
              title="Baseline and standards"
              text="We document the approved condition, define standards, set inspection routes, and align readiness thresholds."
              list={[
                'Approved baseline documentation',
                'Room-by-room inventory and condition notes',
                'Quality standards aligned to your preferences',
                'Access plan and vendor governance',
              ]}
            />

            <FeatureCard
              meta="Phase 2"
              title="Technology setup"
              text="We configure Calisto Pro for your property, connect systems, install monitoring where needed, and grant portal access."
              list={[
                'Calisto One portal configured for your property',
                'Sensor installation where desired',
                'Smart lock integration and access rules',
                'Channel and PMS connections when applicable',
              ]}
            />

            <FeatureCard
              meta="Phase 3"
              title="Team training and launch"
              text="We train local teams on standards and protocols, complete the first verified inspection, and go live."
              list={[
                'Staff training on inspection and documentation',
                'QA verification process setup',
                'First baseline inspection and verification',
                'Guest communication setup and testing',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Operations and improvement"
              text="Every stay cycle includes readiness verification, task execution with proof, incident response, and trend review for prevention."
              list={[
                'Pre-arrival inspections with photo evidence',
                'Task completion tracking with QA sign-off',
                'Monitoring and incident coordination',
                'Monthly performance review and optimization',
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
            heading="Premium service with transparent economics."
            description="Calisto Hosting is designed for owners who want a higher standard and the documentation to back it up."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="What you are paying for"
              text="Platform access, verified readiness, documented operations, professional support, incident coordination, and receipt-level transparency."
            />
            <CompareCard
              title="What you are not paying for"
              text="Opaque reporting, unexplained charges, surprises discovered by guests, and standards that depend on luck."
            />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Typical investment range</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>Management fees:</strong> 15 to 22% of rental revenue (based on property, market, and scope)<br />
              <strong>Technology platform:</strong> included in management fee<br />
              <strong>Setup and baseline:</strong> one-time fee based on property size<br />
              <strong>IoT devices:</strong> a la carte based on desired monitoring level<br />
              <br />
              <em>Typical property revenue: $200K to $800K+ annually</em>
            </p>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>A simple lens</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              The cost of opacity is real: delayed maintenance, avoidable damage, reputation loss, and time spent chasing answers.
              <br />
              <br />
              <strong>Calisto Hosting reduces uncertainty by keeping a clean operating record.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cal-section-block" id="faq">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="What owners ask before making the switch."
            description="The due diligence conversations that happen before you entrust a high-value asset."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="How is this different from other “luxury” property managers?"
              answer="Most managers provide updates and monthly reporting. Calisto provides verification. You can review inspection photos, see task completion with timestamps, track incidents with timelines, and open any charge to view the receipts and supporting evidence."
            />

            <FAQCard
              question="Do I need to check the portal constantly?"
              answer="No. You get visibility without the burden. Alerts are reserved for what matters, and the portal is there when you want answers quickly."
            />

            <FAQCard
              question="What if I am happy with my current manager?"
              answer="That is great. The key question is whether you can verify performance. If you can see inspections, documentation, receipts, and incident records, you are already closer to the standard we believe owners deserve."
            />

            <FAQCard
              question="Is this only for tech-savvy owners?"
              answer="No. The portal is designed to be straightforward. The complexity stays behind the scenes, and you have support when you need it."
            />

            <FAQCard
              question="What happens when something goes wrong?"
              answer="Incidents become managed timelines with documentation. If there is a leak at night, the response actions, vendor dispatch, resolution, photos, and next steps are recorded and available to you."
            />

            <FAQCard
              question="Can you work with my existing systems?"
              answer="Often, yes. Calisto Pro can integrate with many reservation platforms and smart home devices. The goal is a single operating record, not more fragmentation."
            />

            <FAQCard
              question="Do you manage properties outside the Dominican Republic and Spain?"
              answer="We are expanding strategically. If your property is in another market, we can discuss availability and timing."
            />

            <FAQCard
              question="What is the onboarding timeline?"
              answer="Assessment typically takes about a week. Baseline documentation and setup usually take 2 to 3 weeks, followed by training and launch. Full optimization improves over the first 30 to 60 days as trend data builds."
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="cal-section-block cal-section-block--accent" id="portfolio">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Our Portfolio"
            heading="A small portfolio run to one standard."
            description="Every Calisto Hosting home operates on the same systems, the same verification model, and the same documentation discipline."
          />

          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              <strong>Dominican Republic:</strong> 12 luxury villas<br />
              <strong>Spain:</strong> 6 premium properties<br />
              <strong>Guest rating:</strong> 5.0 across the portfolio<br />
              <strong>Owner retention:</strong> 100%<br />
              <strong>Operational disputes:</strong> near zero when documentation is complete
            </p>
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/hosting-footer.jpg"
        title="Property management you can actually verify."
        text="Schedule a property assessment and see how Calisto Hosting delivers visibility, accountability, and peace of mind."
        ctaText="Request Property Assessment"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}
