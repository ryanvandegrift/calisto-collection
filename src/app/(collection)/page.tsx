import HeroCover from '@/components/shared/HeroCover';
import SectionIntro from '@/components/shared/SectionIntro';
import FeatureCard from '@/components/shared/FeatureCard';
import CompareCard from '@/components/shared/CompareCard';
import FAQCard from '@/components/shared/FAQCard';
import FooterCTA from '@/components/shared/FooterCTA';

export default function CollectionHomePage() {
  return (
    <>
      <HeroCover
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/collection-hero.jpg"
        kicker="Calisto Collection"
        title="Calisto Collection: Flagship homes, villas, and boutique hotels operated by Calisto."
        subtitle="A private portfolio run on Calisto Pro with live visibility into inspections, readiness, incidents, access, and spending. Standards are not promised. They are documented."
        primaryCTA={{
          text: 'Explore Services',
          href: '#services',
        }}
        secondaryCTA={{
          text: 'See the Platform',
          href: '#technology',
        }}
        meta="Live visibility | Photo evidence | 24/7 monitoring | Full audit trails"
        tagline="Documentation beats promises."
      />

      {/* The fundamental problem */}
      <section className="cal-section-block cal-section-block--accent" id="problem">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Owner Test"
            heading="How do you verify the work when you are not there?"
            description="Most managers send polished updates. The hard part is confirming what happened, when it happened, and who signed off."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Traditional Property Management"
              text="You get periodic summaries and selective updates. Vendor work is hard to audit. Charges show up after the fact. Problems surface through guest feedback or during your next visit."
            />
            <CompareCard
              title="Calisto Collection"
              text="You see the operating record as it is created. Inspections, tasks, incidents, access, approvals, and receipts live in one system. You can verify outcomes without chasing anyone."
            />
          </div>
        </div>
      </section>

      {/* The innovation */}
      <section className="cal-section-block" id="innovation">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="What We Built"
            heading="A new standard: operations you can verify."
            description="Calisto Collection pairs luxury service with professional operating controls, so owners can see what is happening in real time."
          />

          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Three services. One platform. One visibility standard.
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '2rem',
                marginBottom: '3rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#F6C1D9' }}>
                  Calisto Hosting
                </h4>
                <p style={{ fontSize: '0.9rem' }}>Luxury vacation rental management</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#F6C1D9' }}>
                  Calisto Boutique
                </h4>
                <p style={{ fontSize: '0.9rem' }}>White-label hotel operations</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#F6C1D9' }}>
                  Calisto Estates
                </h4>
                <p style={{ fontSize: '0.9rem' }}>Private estate management</p>
              </div>
            </div>

            <div
              style={{
                padding: '2rem',
                background: 'rgba(246, 193, 217, 0.1)',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                <strong>What unifies all three:</strong> Operations run on Calisto Pro, our institutional-grade
                platform. Owners see activity in real time through Calisto One. Readiness is verified with photo
                evidence. Incidents are logged as timelines. Charges map to work orders with receipts and approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The technology foundation */}
      <section className="cal-section-block cal-section-block--accent" id="technology">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Calisto Pro Platform"
            heading="Enterprise infrastructure, applied to luxury property operations."
            description="Calisto Collection runs on systems built for accountability. The platform keeps the record, so quality does not depend on memory or messaging."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Calisto One"
              title="Owner Command Center"
              text="Live visibility into inspections, tasks, incidents, access history, and financial activity. Check in whenever you want, without waiting for a report."
              list={[
                'Live dashboard showing current property status',
                'Complete task and workflow history',
                'Financial transactions with receipt attachments',
                'Incident timelines with documentation',
              ]}
            />

            <FeatureCard
              meta="Calisto Ops"
              title="Operations Engine"
              text="Every task runs through a defined workflow with assignments, requirements, approvals, and a record of completion."
              list={[
                'Reservation and calendar management',
                'Task assignment with photo proof requirements',
                'Vendor coordination with QA sign-off',
                'Complete financial transparency',
              ]}
            />

            <FeatureCard
              meta="Calisto Assure"
              title="Quality Verification"
              text="Photo-based inspections with baseline comparison, so standards are measured and repeatable."
              list={[
                'Custom inspection routes for your property',
                'AI comparison against approved baseline',
                'Readiness scoring with correction protocols',
                'Condition history trending over time',
              ]}
            />

            <FeatureCard
              meta="Calisto Signal"
              title="24/7 Monitoring"
              text="Sensors detect critical issues early. Alerts become managed incidents with actions, timestamps, and outcomes."
              list={[
                'Global monitoring across all time zones',
                'Incident timelines from detection to resolution',
                'Playbook-driven response protocols',
                'Insurance-ready documentation',
              ]}
            />

            <FeatureCard
              meta="Calisto 24/7"
              title="Professional Coverage"
              text="Guest and owner communication coverage with transcripts and case history, so nothing gets lost."
              list={[
                'Dedicated phone number per property',
                'Professional "Alex with Calisto" answering',
                'Complete call transcripts and summaries',
                'AI-powered message management',
              ]}
            />

            <FeatureCard
              meta="Calisto Access"
              title="Access Control"
              text="Time-bounded digital access with entry logs, so you always know who entered, when, and why."
              list={[
                'Digital key issuance and management',
                'Time-limited vendor access codes',
                'Entry/exit logging with timestamps',
                'Integration with smart lock systems',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Three services detailed */}
      <section className="cal-section-block" id="services">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Three Services"
            heading="Choose the model that fits your property."
            description="Each service is designed for a specific operating reality. All three run on the same platform and the same evidence standard."
          />

          <div className="cal-feature-grid cal-feature-grid--with-intro">
            <FeatureCard
              meta="Luxury Villas and Estates"
              title="Calisto Hosting"
              text="Hands-off vacation rental management with hotel-level readiness and owner visibility. Built for properties that need both performance and protection."
              list={[
                'Pre-arrival inspections with photo verification',
                'Professional guest services and 24/7 support',
                'Revenue optimization with quality protection',
                'Complete financial and operational visibility',
                'IoT monitoring and incident management',
                'Access control and audit trails',
              ]}
            />

            <FeatureCard
              meta="Boutique Hotels"
              title="Calisto Boutique"
              text="White-label hotel operations with real accountability. Built for owners and investors who want performance clarity without losing character."
              list={[
                'Commercial performance management',
                'Quality assurance with evidence trails',
                'Financial governance and controls',
                'Weekly trading updates with actions',
                'Stakeholder dashboard and reporting',
                'Your brand, our operating system',
              ]}
            />

            <FeatureCard
              meta="Private Estates"
              title="Calisto Estates"
              text="Discretion-first estate management with a clean operating record. Built for principals who want readiness, governance, and calm control."
              list={[
                'Systematic readiness maintenance',
                'Vendor governance with approval controls',
                'Access management with audit trails',
                '24/7 incident detection and response',
                'NDA-ready reporting and communication',
                'Limited client load for focused attention',
              ]}
            />
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/hosting" className="cal-btn cal-btn-accent">
              Explore Hosting
            </a>
            <a href="/boutique" className="cal-btn cal-btn-accent">
              Explore Boutique
            </a>
            <a href="/estates" className="cal-btn cal-btn-accent">
              Explore Estates
            </a>
          </div>
        </div>
      </section>

      {/* The receipts */}
      <section className="cal-section-block cal-section-block--accent" id="proof">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="The Receipts"
            heading="Ask for the proof. We will show it."
            description="We can share redacted examples of inspections, incident logs, owner packs, and receipt-level reporting for qualified owners."
          />

          <div className="cal-compare-grid">
            <CompareCard
              title="Pre-Arrival Inspection Report"
              text="Photos captured shortly before arrival. Readiness scored against a baseline. Issues flagged, corrected, and signed off with evidence."
            />
            <CompareCard
              title="Incident Response Timeline"
              text="Alert time, dispatch time, actions taken, photos, costs, and follow-up plan. The record reads like a log, not a story."
            />
            <CompareCard
              title="Monthly Owner Pack"
              text="Performance summary, maintenance completed with photo evidence, spending detail with receipts, and priorities for the month ahead."
            />
            <CompareCard
              title="Task Completion Evidence"
              text="HVAC maintenance: work order created, technician arrived, service completed, photo proof captured, QA sign-off recorded, invoice attached, receipt stored."
            />
            <CompareCard
              title="Access Activity Log"
              text="Every entry tied to a person, a time, and a reason. Housekeeping, vendors, showings, and checks are all recorded."
            />
            <CompareCard
              title="Financial Transparency"
              text="Click a charge to see the linked work order, photos, approvals, invoice, and receipt. No guessing what the line item was."
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
              Available under NDA for qualified property owners
            </p>
          </div>
        </div>
      </section>

      {/* Competitive positioning */}
      <section className="cal-section-block" id="difference">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="What Changes"
            heading="The difference is the operating system."
            description="It is not about nicer reports. It is about running the property with controls, evidence, and visibility."
          />

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #F6C1D9' }}>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold' }}>Dimension</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold' }}>Traditional Managers</th>
                  <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold', color: '#F6C1D9' }}>Calisto Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Visibility</td>
                  <td style={{ padding: '1rem' }}>Periodic updates</td>
                  <td style={{ padding: '1rem' }}>Live dashboard and history</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Quality</td>
                  <td style={{ padding: '1rem' }}>Assumed</td>
                  <td style={{ padding: '1rem' }}>Verified with photos and sign-off</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Spending</td>
                  <td style={{ padding: '1rem' }}>Summary statements</td>
                  <td style={{ padding: '1rem' }}>Receipts tied to work orders</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Incidents</td>
                  <td style={{ padding: '1rem' }}>Ad hoc communication</td>
                  <td style={{ padding: '1rem' }}>Timelines with outcomes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Task Completion</td>
                  <td style={{ padding: '1rem' }}>Status updates</td>
                  <td style={{ padding: '1rem' }}>Evidence and audit trail</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(246, 193, 217, 0.3)' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Access</td>
                  <td style={{ padding: '1rem' }}>Shared codes or keys</td>
                  <td style={{ padding: '1rem' }}>Time-limited access with logs</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Disputes</td>
                  <td style={{ padding: '1rem' }}>Conflicting accounts</td>
                  <td style={{ padding: '1rem' }}>Timestamped record</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="cal-section-block" id="portfolio">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Our Portfolio"
            heading="A portfolio built on visibility."
            description="Every property in Calisto Collection runs on the same operating system and the same documentation standard."
          />

          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F6C1D9', marginBottom: '0.5rem' }}>18</div>
                <div style={{ fontSize: '1rem' }}>Properties in Collection</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F6C1D9', marginBottom: '0.5rem' }}>5.0</div>
                <div style={{ fontSize: '1rem' }}>Guest Rating</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F6C1D9', marginBottom: '0.5rem' }}>100%</div>
                <div style={{ fontSize: '1rem' }}>Owner Retention</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F6C1D9', marginBottom: '0.5rem' }}>0</div>
                <div style={{ fontSize: '1rem' }}>Operational Disputes</div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(246, 193, 217, 0.1)', borderRadius: '8px' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic' }}>
                When the work is documented, the conversations get simpler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cal-section-block cal-section-block--accent" id="faq">
        <div className="cal-main-inner">
          <SectionIntro
            kicker="Questions"
            heading="What owners ask before making the switch."
            description="The practical questions that come up before someone hands over the keys."
          />

          <div className="cal-faq-grid">
            <FAQCard
              question="How is this different from other property management companies?"
              answer="Most managers provide periodic updates. Calisto Collection provides an operating record you can inspect at any time. You can review inspection photos, confirm task completion with timestamps, track incidents as timelines, and match charges to receipts and approvals inside one system."
            />

            <FAQCard
              question="Which service is right for my property?"
              answer="Calisto Hosting is for luxury vacation rentals with hotel-level operations. Calisto Boutique is for independent hotels that want white-label operations and clear performance reporting. Calisto Estates is for private residences that require discretion, governance, and ongoing readiness. We will recommend the best fit after a short call."
            />

            <FAQCard
              question="Is this only for tech-savvy owners?"
              answer="No. Calisto One is designed to be simple. Most owners use it like a quick check-in: last inspection, current status, open items, and recent spending. If you want details, they are there. If you do not, the system still keeps the record."
            />

            <FAQCard
              question="What if I'm happy with my current manager?"
              answer="That is great. The question is whether you can verify performance when you want to. If you can see inspection evidence, incident history, access records, and receipt-level spending, you already have what most owners are missing."
            />

            <FAQCard
              question="Do I need to check the portal constantly?"
              answer="No. It is visibility on your terms. You get alerts only when your attention is needed. Otherwise, you check in whenever you want."
            />

            <FAQCard
              question="What happens when something goes wrong?"
              answer="The goal is a clear timeline and a clean resolution. Alerts are logged, actions are assigned, outcomes are documented, and you can review the record whenever you want."
            />

            <FAQCard
              question="Can you work with properties outside DR and Spain?"
              answer="We are expanding strategically. If your property is elsewhere, contact us. We will tell you if we can support your area now, or what the timeline looks like."
            />

            <FAQCard
              question="What is the investment level?"
              answer="It varies by service and property. We share pricing during a short consultation once we understand your property, goals, and operating requirements."
            />
          </div>
        </div>
      </section>

      <FooterCTA
        backgroundImage="https://calistomedia.blob.core.windows.net/calisto-one/collection-footer.jpg"
        title="Run your property with visibility, not guesswork."
        text="Choose a service and see how Calisto Collection delivers documented standards through Calisto Pro."
        ctaText="Schedule Consultation"
        ctaHref="https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/"
      />
    </>
  );
}
