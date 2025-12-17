import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function BoutiquePage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/boutique-hero.jpg"
        kicker="Calisto Boutique | Calisto Collection"
        title="Calisto Boutique: White-label hotel operations with real accountability."
        subtitle="Independent hotels deserve professional systems without losing character. Calisto Boutique delivers disciplined operations, verified standards, and clear reporting under your brand."
        primaryCTA={{
          text: 'Request Operations Assessment',
          href: 'https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/',
        }}
        secondaryCTA={{
          text: 'See the Operating Model',
          href: '#operating-model',
        }}
        meta="Performance reporting | QA enforcement | Governed spend | Audit trails"
        tagline="Your brand stays front and center. The operation gets tighter."
      />

      {/* The boutique hotel reality */}
      <section className="cal-section-block cal-section-block--accent" id="reality">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Reality"
            heading="Boutique excellence needs repeatable execution."
            description="Independent hotels compete on experience and authenticity. Value is protected by consistency, spend control, and a clean record of what was done."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="The Owner-Operator Trap"
              text="Great vision, uneven execution. Standards vary by shift. Issues get handled reactively. Financial oversight becomes a review of PDFs after the month is over."
            />
            <CompareCard
              title="Calisto Boutique"
              text="A documented operating cadence. Rooms and public areas are inspected with photo evidence. Spend follows approvals. Incidents are logged as timelines. Stakeholders can see performance without waiting for a report."
            />
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section className="cal-section-block" id="what-we-do">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="White-Label Operations"
            heading="We run the operation. You keep the brand."
            description="Calisto Boutique is hands-off hotel management delivered behind the scenes. We bring disciplined operations while protecting what makes your property special."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Commercial Performance"
              title="Weekly trading with actions you can track"
              text="Pricing and distribution decisions are recorded, executed, and reviewed. Stakeholders see what changed and why."
              list={[
                'Weekly trading review with pickup and pricing actions',
                'Channel performance monitoring with clear adjustments',
                'Direct booking initiatives with measurable goals',
                'Accountability for decisions and outcomes',
              ]}
            />

            <FeatureCard
              meta="Quality Assurance"
              title="Standards verified with evidence"
              text="Readiness is not assumed. Inspections are documented with photos and scored against your baseline."
              list={[
                'Daily inspections with photo documentation',
                'Readiness scoring before arrivals',
                'Baseline comparison for consistency checks',
                'Repeat-issue tracking and prevention',
              ]}
            />

            <FeatureCard
              meta="Financial Governance"
              title="Spend control that holds up under scrutiny"
              text="Approvals, scopes, QA sign-off, and documentation sit behind every meaningful expense."
              list={[
                'Approval workflows by spend category',
                'Vendor scoping and competitive bids when needed',
                'QA verification before final payment release',
                'Audit trail for every transaction',
              ]}
            />

            <FeatureCard
              meta="Guest Experience"
              title="Service delivery with follow-through"
              text="Requests are tracked from submission to resolution. When something goes wrong, recovery has a playbook and a record."
              list={[
                'Guest request tracking and fulfillment',
                '24/7 call answering and escalation',
                'Service recovery protocols with outcomes',
                'Guest satisfaction tracking over time',
              ]}
            />

            <FeatureCard
              meta="Stakeholder Visibility"
              title="Clear reporting without the fog"
              text="Stakeholders can see performance metrics and operational activity without waiting for month-end narratives."
              list={[
                'KPI dashboard for occupancy, ADR, and RevPAR',
                'Weekly updates that include actions taken',
                'Monthly owner packs generated from system data',
                'Quarterly strategy reviews based on trends',
              ]}
            />

            <FeatureCard
              meta="Operational Discipline"
              title="Systems that survive staff turnover"
              text="Standards live in the operating system. When people change, the process stays intact."
              list={[
                'SOPs mapped to real workflows',
                'Training protocols with checkpoints',
                'Incident response playbooks for common scenarios',
                'Knowledge base that improves with every resolution',
              ]}
            />
          </div>
        </div>
      </section>

      {/* The technology advantage */}
      <section className="cal-section-block cal-section-block--accent" id="technology">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Calisto Pro Platform"
            heading="Professional systems for independent hotels."
            description="Calisto Pro brings operations, QA, and governance into one place, so performance is visible and decisions are easier to defend."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Calisto Ops"
              title="Operations Management"
              text="Reservations, tasks, vendor work, approvals, and financial controls in one operating layer."
              list={[
                'Reservation management and room assignment',
                'Housekeeping and maintenance task tracking',
                'Vendor work orders with QA requirements',
                'Revenue tracking and reporting',
              ]}
            />

            <FeatureCard
              meta="Calisto Assure"
              title="Quality Assurance"
              text="Inspections with photo evidence and a baseline reference, so standards stay consistent."
              list={[
                'Inspection routes for rooms and public spaces',
                'Photo documentation with baseline reference',
                'Findings with severity and due dates',
                'Trend analysis for prevention',
              ]}
            />

            <FeatureCard
              meta="Calisto Signal"
              title="Incident Management"
              text="Alerts become trackable incidents with escalation rules, timelines, and closeout documentation."
              list={[
                'Sensor integration where applicable',
                'Incident timeline documentation',
                'Escalation rules and response playbooks',
                'Evidence packages for claims and compliance',
              ]}
            />

            <FeatureCard
              meta="Calisto Navigator"
              title="Guest Portal"
              text="A branded digital guest experience with back-end tracking so requests do not disappear."
              list={[
                'White-label guest portal under your brand',
                'Digital check-in and check-out workflows',
                'Service request tracking and fulfillment',
                'Guest satisfaction measurement',
              ]}
            />

            <FeatureCard
              meta="Calisto 24/7"
              title="Professional Communication"
              text="Call answering and message handling that follows your escalation rules and keeps a clean record."
              list={[
                'Answering service in your brand voice',
                'Call transcripts and summaries',
                'Message triage and routing',
                'Escalation protocols for urgent matters',
              ]}
            />

            <FeatureCard
              meta="Calisto Access"
              title="Access Governance"
              text="Access that expires automatically, with entry logs tied to roles and work orders."
              list={[
                'Role-based access with expiration',
                'Entry logging for compliance',
                'Vendor access tied to work orders',
                'Audit-ready access reporting',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="cal-section-block" id="operating-model">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="How It Works"
            heading="From assessment to stable performance."
            description="We audit the current state, stabilize the operation, install controls, and then run a consistent cadence that keeps standards and performance on track."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Phase 1 (Week 1-2)"
              title="Operations Audit"
              text="A focused review of commercial strategy, service delivery, staffing, vendors, SOPs, and financial controls. We establish a baseline and identify the gaps."
              list={[
                'Revenue and distribution analysis',
                'Standards documentation and gap assessment',
                'Staff capability evaluation and training plan',
                'Vendor relationships and cost review',
                'Approval workflow and controls review',
              ]}
            />

            <FeatureCard
              meta="Phase 2 (Month 1-3)"
              title="90-Day Stabilization"
              text="We install the platform, document standards, train teams, and create a weekly cadence with visible milestones."
              list={[
                'Platform setup and data migration',
                'Inspection routes and readiness workflows',
                'Staff training and operating checkpoints',
                'Vendor governance and approval workflows',
                'Quality baseline established with photo evidence',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Commercial Cadence"
              text="Weekly trading with actions that are recorded, executed, and reviewed."
              list={[
                'Weekly trading reviews with pricing actions',
                'Channel performance monitoring',
                'Direct booking initiatives with tracking',
                'Competitive set monitoring',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Quality Enforcement"
              text="Inspections, readiness checks, and prevention planning that keep standards consistent."
              list={[
                'Pre-arrival room inspections',
                'Public space monitoring and upkeep',
                'Preventive maintenance execution',
                'Repeat-issue tracking and prevention',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Financial Controls"
              text="Spend governance with approvals, scopes, QA sign-off, and audit trails."
              list={[
                'Threshold alerts for material variances',
                'Vendor scopes and bids when needed',
                'Milestone-based approvals for projects',
                'Monthly financial review with variance notes',
              ]}
            />

            <FeatureCard
              meta="Ongoing"
              title="Stakeholder Reporting"
              text="Dashboards plus weekly updates, monthly owner packs, and quarterly reviews based on trends."
              list={[
                'Always-on access to dashboards',
                'Weekly updates with actions and outcomes',
                'Monthly owner pack from system records',
                'Quarterly business review and planning',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Show the receipts */}
      <section className="cal-section-block cal-section-block--accent" id="proof">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Receipts"
            heading="Artifacts you can review."
            description="We can share redacted examples of trading updates, owner packs, QA reports, and governance documentation for qualified owners and investors."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Weekly Trading Update"
              text="Occupancy, ADR, and RevPAR with pickup and forecast. Pricing actions taken. Channel performance. Next week’s plan. Recorded and attributable."
            />
            <CompareCard
              title="Monthly Owner Pack"
              text="P&L with notes. Key performance metrics. QA summary. Incident log with resolutions. Priorities and action items, generated from system records."
            />
            <CompareCard
              title="Quality Assurance Report"
              text="Room inspections with scores, photos, and findings by severity. Trends over time and prevention actions."
            />
            <CompareCard
              title="Capital Project Governance"
              text="Scope, bid comparison, approvals, milestones, photos, and closeout documentation."
            />
            <CompareCard
              title="Incident Documentation"
              text="Timeline from detection to resolution. Actions, communications, guest recovery steps, and prevention plan."
            />
            <CompareCard
              title="Stakeholder Dashboard"
              text="Live KPIs, booking pace, forecast, quality scores, and budget variance available anytime through Calisto One."
            />
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <a
              className="cal-btn cal-btn-accent"
              href="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
              style={{ display: 'inline-block' }}
            >
              Request Redacted Examples
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
              Available under NDA for qualified investors and hotel owners
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="cal-section-block" id="ideal-client">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Is This For You?"
            heading="Built for stakeholders who want clarity."
            description="Calisto Boutique serves independent owners, investor groups, and asset managers who value boutique character and professional controls."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Independent Hotel Owners"
              title="Your vision, backed by a tighter operation"
              text="You created something special. Calisto runs the operation, preserves your brand, and gives you visibility without daily firefighting."
              list={[
                'Keep your brand identity and guest relationships',
                'Reduce operational stress and constant escalation',
                'See performance clearly without daily involvement',
                'Protect asset value with documented standards',
              ]}
            />

            <FeatureCard
              meta="Investor Groups"
              title="Performance with accountability"
              text="You invested for returns and stability. Calisto provides clear KPIs, governed spend, and documentation that holds up in diligence."
              list={[
                'Dashboard visibility across the asset',
                'Weekly and monthly reporting with clear KPIs',
                'Approval controls tied to spending',
                'Audit-ready operating documentation',
              ]}
            />

            <FeatureCard
              meta="Family Offices"
              title="Stewardship with a clean record"
              text="This asset carries weight beyond numbers. Calisto protects it with disciplined operations, transparency, and calm control."
              list={[
                'Governance and approval controls',
                'Receipt-level financial documentation',
                'Incident documentation and risk management',
                'Operations that remain stable through transitions',
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
            heading="White-label operations with transparent economics."
            description="Engagements are structured for alignment and clarity. We share full details after an assessment."
          />

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Typical Engagement Structure</h3>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Management Fee</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                <strong>Base:</strong> 4 to 6% of total revenue (covers core operations and platform)<br />
                <strong>Performance incentive:</strong> 10 to 15% of GOP over baseline
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Incentives are aligned, while the base supports consistent execution and oversight.
              </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Onboarding and Setup</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Operations audit:</strong> $15K to $25K (based on complexity)<br />
                <strong>Platform setup:</strong> $10K to $20K (one-time)<br />
                <strong>90-day stabilization:</strong> included in the first 3 months of management
              </p>
            </div>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.75rem' }}>Technology Platform</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Calisto Pro access:</strong> included in management<br />
                <strong>IoT devices and sensors:</strong> a la carte based on property needs<br />
                <strong>Custom integrations:</strong> quoted separately if required
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Typical Hotel Profile</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <strong>Size:</strong> 15 to 50 rooms<br />
                <strong>Annual revenue:</strong> $1M to $10M+<br />
                <strong>Property value:</strong> $3M to $30M<br />
                <br />
                <em>Minimum engagement: 2-year agreement with a 90-day stabilization period</em>
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
            heading="What owners and investors ask before engaging."
            description="The diligence questions that matter when you are choosing an operator."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="Is this truly white-label?"
              answer="Yes. Your brand remains guest-facing. Calisto operates behind the scenes. Guests experience your identity and your tone. You can choose whether to disclose our involvement."
            />

            <FAQCard
              question="What makes Calisto different from typical hotel management companies?"
              answer="Visibility and follow-through. Many operators rely on monthly summaries and internal conversations. Calisto runs on a documented operating cadence with inspections, approvals, incident timelines, and evidence trails that stakeholders can review."
            />

            <FAQCard
              question="Can we use Calisto Pro without hiring you to operate?"
              answer="Yes. Calisto Pro can be licensed as software for teams that want to execute internally. Calisto Boutique is for owners who want full operations handled end to end."
            />

            <FAQCard
              question="How do you preserve our unique character while adding systems?"
              answer="Systems protect character by making the experience consistent. We document what makes your property special and make sure it shows up reliably in daily execution."
            />

            <FAQCard
              question="What happens if we are not satisfied?"
              answer="We structure a stabilization period with clear milestones. If the operation is not improving on a measurable path, we do not want you stuck in a bad fit."
            />

            <FAQCard
              question="How do you handle existing staff?"
              answer="We work with the team when possible. Good people with unclear systems often perform better once standards, training, and workflows are documented."
            />

            <FAQCard
              question="What kind of RevPAR improvement can we expect?"
              answer="It depends on baseline, market, and product fit. We focus on disciplined execution, clear reporting, and quality control. Performance tends to follow when pricing, distribution, and service delivery are run consistently."
            />

            <FAQCard
              question="How long until we see results?"
              answer="Operational stability usually improves first. Commercial improvements take longer because pricing, distribution, and reputation shift over time. We share a timeline after the initial audit."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/boutique-footer.jpg"
        title="White-label operations. Clear accountability. Your brand."
        text="Request an operations assessment and see how Calisto Boutique delivers disciplined execution with visible results."
        ctaText="Request Operations Assessment"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}
