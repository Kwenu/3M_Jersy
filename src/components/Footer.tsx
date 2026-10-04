import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Logo } from "./Logo";
import { address } from "../data/site";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "../utils/whatsapp";

const quickLinks = [
  { label: "Catalog", href: "#catalog" },
  { label: "Jersey Designs", href: "#jerseys" },
  { label: "Corporate T-Shirts", href: "#corporate" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pb-24 pt-16 lg:pb-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo imgClassName="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Custom sports jerseys, sportswear and premium corporate T-shirts,
              made to order in Moratuwa, Sri Lanka.
            </p>
            <a
              href={whatsappLink(
                "Hello 3M Jerseys, I would like to get a quote.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-neon/50 px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-neon transition-colors duration-200 ease-swift hover:bg-neon hover:text-black"
            >
              Chat on WhatsApp
            </a>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 ease-swift hover:text-neon"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <MapPinIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                  aria-hidden="true"
                />
                <span>
                  {address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="transition-colors duration-200 ease-swift hover:text-neon"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors duration-200 ease-swift hover:text-neon"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="mt-14 flex text-[10px] font-bold uppercase tracking-[0.24em] flex-col gap-3 border-t border-white/30 pt-6 sm:flex-row sm:items-center sm:justify-between text-white/30">
            <p>© {new Date().getFullYear()} 3M JERSEYS. All rights reserved.</p>
            <p className="text-neon/80">Katubedda • Moratuwa • Sri Lanka</p>
            <div className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-white/30">
              <span className="mr-1 inline-block">
                Designed & Developed by
              </span>
              <a
                href="www.cloudxglobal.lk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact"
                className="inline-flex items-center text-neon/80"
              >
                CloudX Global
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
