
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { customSteps } from '../data/site';
import { whatsappLink } from '../utils/whatsapp';

export function CustomDesign() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-black py-20 sm:py-28">
      <div className="grid-lines absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-neon/[0.07] blur-[160px]"
        aria-hidden="true" />
      

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-neon">
            Custom orders
          </span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-tightest text-white sm:text-6xl lg:text-7xl">
            Your team. Your design.
            <br />
            <span className="text-neon">Your identity.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Have your own design? Send us your logo, colors, names and requirements and our team can help turn your
            concept into custom sportswear.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {customSteps.map((step, i) =>
          <Reveal key={step.step} delay={i * 0.08} as="li" className="h-full">
              <div className="group relative flex h-full flex-col bg-ink-900 p-7 transition-colors duration-300 ease-swift hover:bg-ink-850 sm:p-9">
                <span className="font-display text-5xl font-black leading-none text-white/12 transition-colors duration-300 ease-swift group-hover:text-neon/40">
                  {step.step}
                </span>
                <h3 className="mt-6 font-display text-xl font-black uppercase tracking-tightest text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                <span
                className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-neon transition-[width] duration-300 ease-swift group-hover:w-full"
                aria-hidden="true" />
              
              </div>
            </Reveal>
          )}
        </ol>

        <Reveal delay={0.1} className="mt-12">
          <a
            href={whatsappLink(
              'Hello 3M Jerseys, I would like to start a custom order. Here are my design requirements:'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-angle inline-flex items-center gap-2 bg-neon px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-[background-color,box-shadow] duration-200 ease-swift hover:bg-white hover:shadow-neon-lg">
            
            Start Your Custom Order
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>);

}