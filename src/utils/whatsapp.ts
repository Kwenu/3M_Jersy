export const WHATSAPP_NUMBER = '94777202940';
export const PHONE_DISPLAY = '+94 777 202 940';
export const PHONE_TEL = '+94777202940';
export const EMAIL = '3mjerseys@gmail.com';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productEnquiry(
kind: 'Premium Jersey Design' | 'Corporate T-Shirt',
name: string,
itemCode?: string)
: string {
  const reference = itemCode ? `${itemCode} – ${name}` : name;
  return whatsappLink(
    `Hello 3M Jerseys, I am interested in the ${kind} – ${reference}. Please send me more details and a quotation.`
  );
}