import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '../data/site';
import { whatsappLink } from '../utils/whatsapp';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const quoteHref = whatsappLink('Hello 3M Jerseys, I would like to get a quote for custom apparel.');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-swift ${
      scrolled ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl' : 'border-b border-transparent bg-black/20'}`
      }>
      
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="3M Jerseys — home">
          <Logo imgClassName="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="relative font-display text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition-colors duration-200 ease-swift hover:text-neon">
            
              {link.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-angle hidden bg-neon px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-black transition-[background-color,box-shadow] duration-200 ease-swift hover:bg-white hover:shadow-neon sm:inline-flex">
            
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors duration-200 ease-swift hover:border-neon hover:text-neon xl:hidden"
            aria-label="Open menu">
            
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ?
        <motion.div
          className="fixed inset-0 z-50 bg-ink-950 xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
          
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
              <Logo imgClassName="h-8 w-auto" />
              <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white hover:border-neon hover:text-neon"
              aria-label="Close menu">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col px-5 pt-6 sm:px-8">
              {navLinks.map((link, i) =>
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.03 * i, ease: [0.23, 1, 0.32, 1] }}
              className="border-b border-white/10 py-5 font-display text-2xl font-black uppercase tracking-tightest text-white hover:text-neon">
              
                  {link.label}
                </motion.a>
            )}
              <a
              href={quoteHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="clip-angle mt-8 inline-flex items-center justify-center bg-neon px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.14em] text-black">
              
                Get a Quote
              </a>
            </nav>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}