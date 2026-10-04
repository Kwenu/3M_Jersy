
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  index?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', index }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-neon" aria-hidden="true" />
        {index ?
        <span className="font-display text-xs font-bold uppercase tracking-[0.35em] text-neon">{index}</span> :
        null}
      </div>
      <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.92] tracking-tightest text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
    </Reveal>);

}