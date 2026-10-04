
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { gallery } from '../data/gallery';

export function Gallery() {
  return (
    <section className="relative border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading index="Gallery" title="Our Work" subtitle="Kits, teams, printing and finished apparel." />

        <ul className="mt-12 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[200px] lg:grid-cols-4">
          {gallery.map((item, i) =>
          <Reveal key={item.id} delay={i % 4 * 0.05} as="li" className={`${item.span} h-full`}>
              <figure className="group relative h-full w-full overflow-hidden border border-white/10">
                <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-swift group-hover:scale-105" />
              
                <span
                className="absolute inset-0 bg-neon/0 transition-colors duration-300 ease-swift group-hover:bg-neon/25"
                aria-hidden="true" />
              
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/90 to-transparent p-4 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-[opacity,transform] duration-300 ease-swift group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}