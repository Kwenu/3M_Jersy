
import { Reveal } from './ui/Reveal';
import { gallery } from '../data/gallery';

export function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] bg-black py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-neon">About us</span>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-tightest text-white sm:text-5xl lg:text-6xl">
            Built for teams.
            <br />
            <span className="text-neon">Made to stand out.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            3M Jerseys is a Sri Lankan custom sportswear and apparel printing company based in Moratuwa. We design and
            produce premium sports jerseys, sportswear and corporate T-shirts for teams, clubs, schools, companies and
            events.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Every order is made to your specification — your colours, your logo, your names and numbers — printed with
            attention to detail and finished to a standard your team is proud to wear.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
            ['Based in', 'Moratuwa, LK'],
            ['Made', 'To order'],
            ['Orders via', 'WhatsApp']].
            map(([label, value]) =>
            <div key={label} className="bg-ink-900 px-5 py-5">
                <dt className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{label}</dt>
                <dd className="mt-2 font-display text-sm font-black uppercase tracking-tight text-neon">{value}</dd>
              </div>
            )}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="clip-angle relative overflow-hidden border border-white/10">
            <img
              src={gallery[0].image}
              alt="Team wearing custom 3M Jerseys kits"
              loading="lazy"
              className="h-full w-full object-cover" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>);

}