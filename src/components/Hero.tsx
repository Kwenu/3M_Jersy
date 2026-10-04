
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { HERO_IMAGE } from '../data/site';
import { whatsappLink } from '../utils/whatsapp';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease }
  });

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink-950 pt-[72px]">
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -left-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-neon/10 blur-[140px]"
        aria-hidden="true" />
      
      <div
        className="diag-stripes absolute right-0 top-24 -z-10 hidden h-[420px] w-[280px] -skew-x-12 opacity-60 lg:block"
        aria-hidden="true" />
      

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div {...rise(0)} className="flex items-center gap-3">
            <span className="h-px w-10 bg-neon" aria-hidden="true" />
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-neon">
              Sri Lankan custom sportswear
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.06)}
            className="mt-6 font-display text-[3.4rem] font-black uppercase leading-[0.86] tracking-tightest text-white sm:text-[5rem] lg:text-[6.5rem]">
            
            Wear your
            <br />
            <span className="text-neon">game.</span>
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-6 font-display text-lg font-bold uppercase tracking-[0.04em] text-white/90 sm:text-2xl">
            
            Premium Custom Jerseys &amp; Apparel
          </motion.p>

          <motion.p {...rise(0.18)} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Custom sports jerseys, sportswear and premium corporate T-shirts designed to represent your team, brand and
            identity.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#jerseys"
              className="clip-angle inline-flex items-center justify-center gap-2 bg-neon px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-[background-color,box-shadow] duration-200 ease-swift hover:bg-white hover:shadow-neon-lg">
              
              View Catalog
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink('Hello 3M Jerseys, I would like to place an order for custom apparel.')}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-angle inline-flex items-center justify-center gap-2 bg-[#25D366] px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors duration-200 ease-swift hover:bg-[#1FBF5A]">
              
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.p
            {...rise(0.3)}
            className="mt-10 font-display text-[11px] font-bold uppercase tracking-[0.26em] text-white/45">
            
            Custom designs <span className="text-neon">•</span> Premium materials <span className="text-neon">•</span>{' '}
            Quality printing
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="relative">
          
          <div className="absolute -inset-4 -z-10 bg-neon/10 blur-3xl" aria-hidden="true" />
          <div className="clip-angle relative overflow-hidden border border-white/10">
            <img
              src={HERO_IMAGE}
              alt="Athletes wearing custom black and neon green 3M Jerseys kits"
              className="h-full w-full object-cover"
              loading="eager" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <motion.div
            className="absolute -bottom-5 -left-5 hidden border border-neon/40 bg-ink-950/90 px-5 py-4 backdrop-blur sm:block"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}>
            
            <p className="font-display text-3xl font-black leading-none text-neon">100%</p>
            <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              Made to order
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon/40 to-transparent" aria-hidden="true" />
    </section>);

}