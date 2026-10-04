import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { jerseys, jerseyFilters } from '../data/jerseys';
import { productEnquiry } from '../utils/whatsapp';
import type { JerseyCategory } from '../types/catalog';

const ease = [0.23, 1, 0.32, 1] as const;

export function JerseyCatalog() {
  const [active, setActive] = useState<'ALL' | JerseyCategory>('ALL');

  const visible = useMemo(
    () => active === 'ALL' ? jerseys : jerseys.filter((j) => j.category === active),
    [active]
  );

  return (
    <section id="jerseys" className="relative border-t border-white/[0.06] bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="Catalog"
            title="Premium Jersey Designs"
            subtitle="Every design carries its own item code — quote it on WhatsApp and we will customise it with your team colours, logo, names and numbers." />
          
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter jerseys by sport">
            {jerseyFilters.map((filter) => {
              const isActive = filter === active;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={`px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.16em] transition-[background-color,color,border-color] duration-200 ease-swift ${
                  isActive ?
                  'border border-neon bg-neon text-black' :
                  'border border-white/15 text-white/65 hover:border-neon/60 hover:text-neon'}`
                  }>
                  
                  {filter}
                </button>);

            })}
          </div>
        </div>

        <motion.ul layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((jersey) =>
            <motion.li
              key={jersey.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease }}
              className="group flex flex-col border border-white/10 bg-ink-850 transition-[border-color,transform] duration-300 ease-swift hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon">
              
                <div className="relative aspect-[4/3] overflow-hidden bg-white p-4">
                  <img
                  src={jersey.image}
                  alt={`${jersey.name} custom jersey design, front and back view`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 ease-swift group-hover:scale-[1.04]" />
                
                  <span className="absolute left-0 top-0 bg-black px-3 py-2 font-display text-[11px] font-bold tracking-[0.2em] text-neon">
                    {jersey.itemCode}
                  </span>
                  <span className="absolute right-0 top-0 bg-black/85 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                    {jersey.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-black uppercase leading-none tracking-tightest text-white">
                    {jersey.name}
                  </h3>
                  <p className="mt-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                    Item code <span className="text-neon">{jersey.itemCode}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{jersey.description}</p>

                  <div className="mt-auto flex flex-col gap-2 pt-6">
                    <a
                    href="#contact"
                    className="inline-flex items-center justify-center border border-neon/50 px-4 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-neon transition-colors duration-200 ease-swift hover:bg-neon hover:text-black">
                    
                      Get Quote
                    </a>
                    <a
                    href={productEnquiry('Premium Jersey Design', jersey.name, jersey.itemCode)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-colors duration-200 ease-swift hover:bg-[#1FBF5A]">
                    
                      <MessageCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>);

}