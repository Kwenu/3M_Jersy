
import { LOGO_URL } from '../data/site';

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export function Logo({ className = '', imgClassName = 'h-9 w-auto' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img src={LOGO_URL} alt="3M Jerseys" className={`${imgClassName} object-contain`} />
      <span className="font-display text-lg uppercase leading-none tracking-tightest text-white sm:text-xl">
        <span className="font-black">3M</span> <span className="font-black text-neon">JERSEYS</span>
      </span>
    </span>);

}