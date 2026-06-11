"use client";

import { navigationGroups } from "@/lib/navigation";
import { BANK_NAME, utilityLinks } from "@/lib/site";
import { routeForLabel } from "@/lib/routes";
import { ChevronDown, Menu, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

export function MainNav() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>("Personal");

  return (
    <header className="sticky top-0 z-50 border-b border-bank-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:py-0">
        <a href="/" className="flex items-center gap-3" aria-label={`${BANK_NAME} home`}>
          <span className="grid h-10 w-10 place-items-center border border-bank-gold/45 bg-ink-950 text-sm font-semibold text-bank-goldSoft shadow-sm">
            AB
          </span>
          <span className="leading-none">
            <span className="block text-lg font-semibold tracking-[-0.02em] text-ink-950">
              {BANK_NAME}
            </span>
            <span className="mt-1 hidden text-[11px] uppercase tracking-[0.22em] text-bank-steel sm:block">
              Private • Commercial • Digital
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          {navigationGroups.map((group) => (
            <div key={group.label} className="group relative">
              <a
                href={group.href}
                className="flex items-center gap-1 border-b-2 border-transparent px-3 py-7 text-[13px] font-semibold text-ink-900 transition hover:border-bank-gold hover:text-bank-blue xl:px-3.5"
              >
                {group.label}
                <ChevronDown size={13} className="transition group-hover:rotate-180" />
              </a>

              <div className="invisible absolute left-1/2 top-full w-[380px] -translate-x-1/2 border border-bank-line bg-white p-4 opacity-0 shadow-institutional transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border-b border-bank-line pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bank-gold">
                    {group.label}
                  </p>
                  <a
                    href={group.href}
                    className="mt-2 inline-flex text-sm font-semibold text-ink-950 hover:text-bank-blue"
                  >
                    View {group.label} overview
                  </a>
                </div>

                <div className="mt-3 grid gap-1">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between border border-transparent px-3 py-2.5 text-sm font-medium text-bank-steel transition hover:border-bank-line hover:bg-bank-mist hover:text-ink-950"
                    >
                      {link.label}
                      <span className="text-bank-gold">→</span>
                    </a>
                  ))}
                </div>

                {group.label === "Investments" && (
                  <div className="mt-4 border border-bank-gold/40 bg-[#fff8e8] p-3 text-xs leading-6 text-ink-900">
                    Digital assets are high-risk and require eligibility, disclosures,
                    suitability review, custody review, and compliance approval.
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/search"
            aria-label="Search"
            className="grid h-10 w-10 place-items-center border border-bank-line text-ink-900 transition hover:border-bank-blue hover:bg-bank-mist"
          >
            <Search size={18} />
          </a>
          <a href="/login" className="btn-secondary h-10 px-5">
            Sign In
          </a>
          <a href="/open-account" className="btn-primary h-10 px-5">
            Open an Account
          </a>
        </div>

        <button
          type="button"
          aria-label="Open mobile menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-bank-line text-ink-950 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-74px)] overflow-y-auto border-t border-bank-line bg-white px-4 pb-6 shadow-institutional lg:hidden">
          <nav aria-label="Mobile navigation" className="grid divide-y divide-bank-line">
            {navigationGroups.map((group) => {
              const isOpen = mobileGroup === group.label;

              return (
                <div key={group.label} className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold text-ink-950"
                  >
                    {group.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${isOpen ? "rotate-180 text-bank-blue" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mb-3 grid gap-1 border-l border-bank-line pl-4">
                      <a
                        href={group.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-sm font-semibold text-bank-blue"
                      >
                        {group.label} overview
                      </a>

                      {group.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-bank-steel hover:text-bank-blue"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="/login" onClick={() => setOpen(false)} className="btn-secondary justify-center">
              Sign In
            </a>
            <a href="/open-account" onClick={() => setOpen(false)} className="btn-primary justify-center">
              Open Account
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-bank-line pt-4 text-xs text-bank-steel">
            {utilityLinks.map((link) => (
              <a
                key={link}
                href={routeForLabel(link)}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 hover:text-bank-blue"
              >
                <ShieldCheck size={13} /> {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
