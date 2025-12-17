"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type Service = {
  key: "hosting" | "estates" | "boutique";
  name: string;
  category: string;
  overview: string;
  highlights: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  href: string;
};

type MenuKey = null | "hosting" | "estates" | "boutique";

const PINK_BG = "bg-[rgba(246,193,217,0.30)]";
const PINK_HOVER = "hover:bg-[rgba(246,193,217,0.30)]";

const MENU_CARD = "rounded-[2px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.12)]";
const ITEM_BASE = "rounded-[2px] px-3 py-2 transition text-black";
const ITEM_TEXT_14 = "text-[14px] font-light";
const CAP_TEXT = "text-[13px] font-light text-black/75";

const BOOKINGS_URL = "https://outlook.office365.com/owa/calendar/LetsTalk@calistoco.com/bookings/";

export default function CollectionHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState<MenuKey>(null);
  const [hideHeader, setHideHeader] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const services = useMemo<Service[]>(
    () => [
      {
        key: "hosting",
        name: "Calisto Hosting",
        category: "Luxury Rental Management",
        overview:
          "Property management you can actually verify. Photo evidence, readiness scoring, and real-time visibility into inspections, tasks, incidents, and spending.",
        highlights: [
          "Pre-arrival inspections with 40+ photos",
          "Readiness verification against your baseline",
          "24/7 monitoring and incident response",
          "Financial transparency with receipts",
          "Guest communication history with transcripts",
          "Access control with entry and exit logs",
          "Task completion with photo proof",
          "Sensor integration for water, smoke, and access",
          "Revenue strategy with standards protection",
          "A real-time dashboard, not monthly reports",
        ],
        primaryCta: {
          label: "Request Property Assessment",
          href: BOOKINGS_URL,
        },
        secondaryCta: { label: "See the technology", href: "/hosting#technology" },
        href: "/hosting",
      },
      {
        key: "estates",
        name: "Calisto Estates",
        category: "Private Estate Management",
        overview:
          "Discretion-first stewardship operated like a family office. Systematic governance with audit-grade documentation and clear accountability, without constant involvement.",
        highlights: [
          "Readiness maintenance with documented standards",
          "Vendor governance with approval controls",
          "Time-bounded access with full audit trails",
          "Monitoring with incident documentation",
          "Confidential reporting and NDA-ready workflows",
          "Capital projects governed by milestones",
          "Pre-arrival verification and briefings",
          "Monthly estate packs with evidence",
          "Limited client load by design",
          "Family office-grade accountability",
        ],
        primaryCta: {
          label: "Request Confidential Consultation",
          href: BOOKINGS_URL,
        },
        secondaryCta: { label: "See our approach", href: "/estates#approach" },
        href: "/estates",
      },
      {
        key: "boutique",
        name: "Calisto Boutique",
        category: "White-Label Hotel Operations",
        overview:
          "Institutional discipline for independent hotels. Measurable commercial performance, verified standards, and stakeholder transparency under your brand.",
        highlights: [
          "Weekly trading discipline with documented actions",
          "Room readiness verified with photo evidence",
          "Financial governance and spend controls",
          "Stakeholder dashboard and reporting",
          "Quality assurance with verification workflows",
          "Commercial performance accountability",
          "Standards that survive staff turnover",
          "Incident management with timelines",
          "Monthly owner packs from system data",
          "Your brand, our operating systems",
        ],
        primaryCta: {
          label: "Request Operations Assessment",
          href: BOOKINGS_URL,
        },
        secondaryCta: { label: "See the operating model", href: "/boutique#operating-model" },
        href: "/boutique",
      },
    ],
    []
  );

  const activeService = useMemo(
    () => services.find((s) => s.key === open) ?? services[0],
    [open, services]
  );

  // Hide on scroll down / show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (open) return;

      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const goingDown = y > lastY;
          const pastThreshold = y > 24;
          setHideHeader(pastThreshold && goingDown);
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Ensure header is visible when menu opens
  useEffect(() => {
    if (open) setHideHeader(false);
  }, [open]);

  // Close on route change
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Escape closes
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clearCloseTimer() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  }

  function openMenu(key: Exclude<MenuKey, null>) {
    clearCloseTimer();
    setOpen(key);
  }

  function closeAll() {
    clearCloseTimer();
    setOpen(null);
  }

  const overlayOpen = !!open;

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white",
        "transition-transform duration-300 ease-out will-change-transform",
        hideHeader ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      onMouseEnter={clearCloseTimer}
    >
      <div className="cal-main-inner">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            onClick={closeAll}
            aria-label="Calisto Collection home"
          >
            <Image
              src="https://calistomedia.blob.core.windows.net/calisto-one/calisto_logo_300.png"
              alt="Calisto"
              width={140}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <div className="leading-tight">
              <div className="text-[16px] font-medium tracking-[-0.01em] text-black">
                Calisto &amp; Co.
              </div>
              <div className="text-[12px] tracking-[0.18em] text-black/60 uppercase">
                Collection
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            <TopNavButton
              label="Calisto Hosting"
              open={open === "hosting"}
              onOpen={() => openMenu("hosting")}
              controlsId="menu-hosting"
            />
            <TopNavButton
              label="Calisto Estates"
              open={open === "estates"}
              onOpen={() => openMenu("estates")}
              controlsId="menu-estates"
            />
            <TopNavButton
              label="Calisto Boutique"
              open={open === "boutique"}
              onOpen={() => openMenu("boutique")}
              controlsId="menu-boutique"
            />
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a
            href={BOOKINGS_URL}
            onClick={closeAll}
            className="inline-flex h-9 items-center justify-center rounded-[2px] px-4 text-[14px] font-normal text-black bg-[#F6C1D9] shadow-[0_6px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition"
            >
            Schedule Consultation
            </a>

          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-[2px] px-3 py-2 text-[14px] font-normal text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition"
              onClick={() => setOpen((v) => (v ? null : "hosting"))}
              aria-expanded={!!open}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Click-away overlay */}
      {overlayOpen && (
        <button
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 cursor-default"
          onClick={() => setOpen(null)}
          style={{ background: "transparent" }}
        />
      )}

      {/* Mega menu */}
      {open && (
        <MegaMenuDock
          id={
            open === "hosting"
              ? "menu-hosting"
              : open === "estates"
              ? "menu-estates"
              : "menu-boutique"
          }
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          <div className="grid grid-cols-[260px_1fr] gap-10">
            {/* Left column */}
            <div>
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">
                SERVICES
              </div>

              <div className="space-y-[2px]">
                {services.map((s) => {
                  const active = s.key === open;
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onMouseEnter={() => setOpen(s.key)}
                      onFocus={() => setOpen(s.key)}
                      className={[
                        "block w-full text-left",
                        ITEM_BASE,
                        ITEM_TEXT_14,
                        active ? PINK_BG : PINK_HOVER,
                      ].join(" ")}
                    >
                      {s.name}
                      <div className="mt-0.5 text-[12px] font-light text-black/60">
                        {s.category}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-black/10">
                <Link
                  href="/"
                  onClick={closeAll}
                  className="text-[13px] font-light text-black/70 hover:text-black transition inline-flex items-center gap-2"
                >
                  About Calisto Collection <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="min-w-0">
              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">
                {activeService.category.toUpperCase()}
              </div>

              <div className="text-[22px] font-light tracking-[-0.01em] text-black mb-3">
                {activeService.name}
              </div>
              <div className="text-[14px] font-light leading-relaxed text-black/75 max-w-[68ch] mb-6">
                {activeService.overview}
              </div>

              <div className="mb-3 text-[11px] tracking-[0.22em] text-black/45">
                KEY CAPABILITIES
              </div>

              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6">
                {activeService.highlights.slice(0, 10).map((h) => (
                  <li key={h} className={`flex items-start gap-2 ${CAP_TEXT}`}>
                    <CheckIcon />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/10">
                <a
                  href={activeService.primaryCta.href}
                  onClick={closeAll}
                  className="inline-flex items-center justify-center rounded-[2px] px-4 py-2 text-[14px] font-normal text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition"
                  style={{ background: "#F6C1D9", color: "#000" }}
                >
                  {activeService.primaryCta.label}
                </a>

                <Link
                  href={activeService.secondaryCta.href}
                  onClick={closeAll}
                  className="inline-flex items-center justify-center rounded-[2px] px-4 py-2 text-[14px] font-normal text-black shadow-[0_10px_28px_rgba(0,0,0,0.10)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition"
                >
                  {activeService.secondaryCta.label}
                </Link>

                <Link
                  href={activeService.href}
                  onClick={closeAll}
                  className="ml-auto inline-flex items-center gap-2 text-[14px] font-light text-[#F6C1D9] hover:text-[#e5b0c8] transition"
                >
                  Explore {activeService.name} <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </MegaMenuDock>
      )}
    </header>
  );
}

function MegaMenuDock({
  id,
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      id={id}
      className="fixed inset-x-0 top-16 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Mega menu"
    >
      <div className="cal-main-inner">
        <div className={MENU_CARD}>
          <div className="p-7">{children}</div>
        </div>
      </div>
    </div>
  );
}

function TopNavButton({
  label,
  open,
  onOpen,
  controlsId,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  controlsId: string;
}) {
  return (
    <button
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className="text-[15px] font-normal text-black/80 hover:text-black transition inline-flex items-center gap-2"
      aria-expanded={open}
      aria-controls={controlsId}
    >
      {label}
      <span className="text-black/35">▾</span>
    </button>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-[2px] shrink-0"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.8 13.6 4.7 10.5l1.1-1.1 2 2 6-6 1.1 1.1-7.1 7.1z"
        fill="currentColor"
        style={{ color: "#F6C1D9" }}
      />
    </svg>
  );
}
