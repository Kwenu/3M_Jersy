
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { jerseys } from '../data/jerseys';
import { tshirts } from '../data/tshirts';

const categories = [
{
  index: '01',
  title: 'Premium Jersey Designs',
  description:
  'Professional-quality custom jerseys designed for football, cricket, basketball, esports and other sports.',
  cta: 'Explore Jerseys',
  href: '#jerseys',
  image: jerseys[3].image,
  light: true
},
{
  index: '02',
  title: 'Premium Corporate T-Shirts',
  description:
  'Premium-quality corporate T-shirts customized with your company branding, logo and preferred design.',
  cta: 'View Corporate T-Shirts',
  href: '#corporate',
  image: tshirts[1].image,
  light: false
}];

export function FeaturedCategories() {
  return (
    <section id="catalog" className="relative border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="Collection"
          title="Our Premium Collection"
          subtitle="Built for teams. Designed for performance. Made to stand out." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {categories.map((cat, i) =>
          <Reveal key={cat.index} delay={i * 0.08} as="article">
              <a
              href={cat.href}
              className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-ink-850 transition-[border-color,transform] duration-300 ease-swift hover:-translate-y-1 hover:border-neon/60">
              
                <div
                className={`relative aspect-[16/11] overflow-hidden ${cat.light ? 'bg-white p-6' : 'bg-black'}`}>
                
                  <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-500 ease-swift group-hover:scale-[1.04] ${
                  cat.light ? 'object-contain' : 'object-cover'}`
                  } />
                
                  {cat.light ? null :
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/20 to-transparent"
                  aria-hidden="true" />

                }
                  <span
                  className={`absolute left-5 top-5 font-display text-5xl font-black leading-none ${
                  cat.light ? 'text-black/10' : 'text-white/15'}`
                  }>
                  
                    {cat.index}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tightest text-white sm:text-3xl">
                    {cat.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{cat.description}</p>
                  <span className="mt-auto flex items-center gap-2 pt-7 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-neon">
                    {cat.cta}
                    <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-200 ease-swift group-hover:translate-x-1"
                    aria-hidden="true" />
                  
                  </span>
                </div>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}