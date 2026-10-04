
import {
  BrushIcon,
  BuildingIcon,
  HeadsetIcon,
  LayersIcon,
  PrinterIcon,
  UsersIcon } from
'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

const features = [
{
  icon: LayersIcon,
  title: 'Premium Materials',
  body: 'High-quality materials selected for comfort and durability.'
},
{
  icon: BrushIcon,
  title: 'Custom Designs',
  body: "Create jerseys that represent your team's identity."
},
{
  icon: PrinterIcon,
  title: 'Quality Printing',
  body: 'Professional-quality printing with strong visual detail.'
},
{
  icon: UsersIcon,
  title: 'Team Orders',
  body: 'Suitable for sports teams, schools, clubs and organizations.'
},
{
  icon: BuildingIcon,
  title: 'Corporate Apparel',
  body: 'Professional T-shirts for companies and events.'
},
{
  icon: HeadsetIcon,
  title: 'Customer Support',
  body: 'Easy communication and quotation through WhatsApp.'
}];

export function WhyUs() {
  return (
    <section className="relative border-t border-white/[0.06] bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading index="Why us" title="Why Choose 3M Jerseys?" />

        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) =>
          <Reveal key={feature.title} delay={i % 3 * 0.06} as="li" className="h-full">
              <div className="group flex h-full gap-5 border-l border-white/10 pl-6 transition-colors duration-300 ease-swift hover:border-neon">
                <feature.icon
                className="mt-1 h-6 w-6 shrink-0 text-neon"
                strokeWidth={1.5}
                aria-hidden="true" />
              
                <div>
                  <h3 className="font-display text-base font-black uppercase tracking-[0.06em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{feature.body}</p>
                </div>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}