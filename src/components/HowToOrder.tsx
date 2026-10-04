
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { orderSteps } from '../data/site';
import { whatsappLink, PHONE_DISPLAY } from '../utils/whatsapp';

export function HowToOrder() {
  return (
    <section className="relative border-t border-white/[0.06] bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading index="Process" title="How to Order" subtitle="Four steps from idea to finished kit." />

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-neon/60 via-neon/20 to-transparent lg:block"
            aria-hidden="true" />
          
          {orderSteps.map((step, i) =>
          <Reveal key={step.step} delay={i * 0.07} as="li" className="relative">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-neon font-display text-sm font-black text-black">
                {step.step}
              </span>
              <h3 className="mt-6 font-display text-lg font-black uppercase tracking-tightest text-white">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          )}
        </ol>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-col items-start justify-between gap-6 border border-neon/30 bg-ink-850 p-7 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="font-display text-2xl font-black uppercase leading-none tracking-tightest text-white sm:text-3xl">
                Ready to order? Message us on WhatsApp.
              </p>
              <p className="mt-3 text-sm text-muted sm:text-base">
                Send your requirements to {PHONE_DISPLAY} and we will reply with a quote.
              </p>
            </div>
            <a
              href={whatsappLink('Hello 3M Jerseys, I would like to order custom apparel. My requirements are:')}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-angle inline-flex w-full shrink-0 items-center justify-center bg-[#25D366] px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors duration-200 ease-swift hover:bg-[#1FBF5A] lg:w-auto">
              
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}