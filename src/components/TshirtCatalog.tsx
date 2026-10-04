
import { MessageCircleIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { tshirts } from '../data/tshirts';
import { productEnquiry } from '../utils/whatsapp';

export function TshirtCatalog() {
  return (
    <section id="corporate" className="relative border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="Corporate"
          title="Premium Corporate T-Shirts"
          subtitle="Professional apparel for teams, companies, events and brands." />
        

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tshirts.map((tee, i) =>
          <Reveal key={tee.id} delay={i % 3 * 0.06} as="li" className="h-full">
              <article className="group flex h-full flex-col border border-white/10 bg-ink-850 transition-[border-color,transform] duration-300 ease-swift hover:-translate-y-1 hover:border-neon/60">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                  src={tee.image}
                  alt={`${tee.name} corporate T-shirt`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-swift group-hover:scale-[1.06]" />
                
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-black uppercase leading-none tracking-tightest text-white">
                    {tee.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{tee.description}</p>
                  <a
                  href={productEnquiry('Corporate T-Shirt', tee.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 border border-neon/50 px-4 py-3 pt-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-neon transition-colors duration-200 ease-swift hover:bg-neon hover:text-black">
                  
                    <MessageCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    Get Quote
                  </a>
                </div>
              </article>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}