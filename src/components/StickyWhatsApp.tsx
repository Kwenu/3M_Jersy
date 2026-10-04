
import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink } from '../utils/whatsapp';

export function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 p-3 backdrop-blur-xl lg:hidden">
      <a
        href={whatsappLink('Hello 3M Jerseys, I would like to get a quote for custom apparel.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.14em] text-black transition-colors duration-200 ease-swift hover:bg-[#1FBF5A]">
        
        <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
        Order on WhatsApp
      </a>
    </div>);

}