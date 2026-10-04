import { useState } from "react";
import {
  CheckIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { address } from "../data/site";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
} from "../utils/whatsapp";

const productTypes = [
  "Custom Sports Jersey",
  "Corporate T-Shirt",
  "Team Kit (Jersey + Pants)",
  "Event / Promotional Apparel",
  "Other",
];

const fieldClass =
  "w-full border border-white/12 bg-ink-900 px-4 py-3.5 text-sm text-white placeholder:text-white/35 transition-colors duration-200 ease-swift focus:border-neon";

const labelClass =
  "block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/60";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    productType: productTypes[0],
    quantity: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(
      whatsappLink(
        `Hello 3M Jerseys, I would like a quotation.\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct: ${form.productType}\nQuantity: ${form.quantity}\nMessage: ${form.message}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28"
    >
      <div
        className="absolute -right-32 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-neon/[0.08] blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-neon">
            Contact
          </span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-tightest text-white sm:text-6xl">
            Let&apos;s create your{" "}
            <span className="text-neon">next jersey</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink(
                  "Hello 3M Jerseys, I would like to chat about a custom order.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors duration-200 ease-swift hover:bg-[#1FBF5A]"
              >
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex flex-1 items-center justify-center gap-2 bg-neon px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-[background-color,box-shadow] duration-200 ease-swift hover:bg-white hover:shadow-neon"
              >
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Call Us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex flex-1 items-center justify-center gap-2 border border-white/20 px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 ease-swift hover:border-neon hover:text-neon"
              >
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                Email Us
              </a>
            </div>

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <MapPinIcon
                  className="mt-1 h-5 w-5 shrink-0 text-neon"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className={labelClass}>Address</p>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-muted">
                    {address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <PhoneIcon
                  className="mt-1 h-5 w-5 shrink-0 text-neon"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className={labelClass}>Phone &amp; WhatsApp</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-2 block text-sm text-muted hover:text-neon"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MailIcon
                  className="mt-1 h-5 w-5 shrink-0 text-neon"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className={labelClass}>Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-2 block text-sm text-muted hover:text-neon"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="border border-white/10 bg-ink-850 p-6 sm:p-9"
            >
              <h3 className="font-display text-xl font-black uppercase tracking-tightest text-white">
                Request a quotation
              </h3>
              <p className="mt-2 text-sm text-muted">
                Fill in your details and we will reply with pricing and a
                mockup.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="+94 7X XXX XXXX"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={update("quantity")}
                    className={`mt-2 ${fieldClass}`}
                    placeholder="e.g. 20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="productType">
                    Product Type
                  </label>
                  <select
                    id="productType"
                    value={form.productType}
                    onChange={update("productType")}
                    className={`mt-2 ${fieldClass}`}
                  >
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className={`mt-2 resize-none ${fieldClass}`}
                    placeholder="Tell us about your design, colours and sizes."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="clip-angle mt-8 inline-flex w-full items-center justify-center gap-2 bg-neon px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-[background-color,box-shadow] duration-200 ease-swift hover:bg-white hover:shadow-neon-lg sm:w-auto"
              >
                {sent ? (
                  <CheckIcon className="h-4 w-4" aria-hidden="true" />
                ) : null}
                {sent ? "Inquiry Sent" : "Send Inquiry"}
              </button>
              <p aria-live="polite" className="mt-4 text-xs text-muted">
                {sent
                  ? "Thanks — your inquiry has been prepared in WhatsApp. Send the message to reach our team."
                  : "Your inquiry opens in WhatsApp so our team can reply instantly."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
