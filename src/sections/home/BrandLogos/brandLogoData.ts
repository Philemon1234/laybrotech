import brandLogo1 from '@/assets/images/Brands/1.webp';
import brandLogo2 from '@/assets/images/Brands/2.webp';
import brandLogo3 from '@/assets/images/Brands/3.webp';
import brandLogo4 from '@/assets/images/Brands/4.webp';
import brandLogo5 from '@/assets/images/Brands/5.webp';
import brandLogo6 from '@/assets/images/Brands/6.webp';
import brandLogo7 from '@/assets/images/Brands/7.webp';
import brandLogo8 from '@/assets/images/Brands/8.webp';
import brandLogo9 from '@/assets/images/Brands/9.webp';
import brandLogo10 from '@/assets/images/Brands/10.webp';

export type BrandLogo = {
  id: string;
  image: string;
  alt: string;
};

export const brandLogoRowOne: BrandLogo[] = [
  { id: 'brand-1', image: brandLogo1, alt: 'Laybrotech client logo 1' },
  { id: 'brand-2', image: brandLogo2, alt: 'Laybrotech client logo 2' },
  { id: 'brand-3', image: brandLogo3, alt: 'Laybrotech client logo 3' },
  { id: 'brand-4', image: brandLogo4, alt: 'Laybrotech client logo 4' },
  { id: 'brand-5', image: brandLogo5, alt: 'Laybrotech client logo 5' },
];

export const brandLogoRowTwo: BrandLogo[] = [
  { id: 'brand-6', image: brandLogo6, alt: 'Laybrotech client logo 6' },
  { id: 'brand-7', image: brandLogo7, alt: 'Laybrotech client logo 7' },
  { id: 'brand-8', image: brandLogo8, alt: 'Laybrotech client logo 8' },
  { id: 'brand-9', image: brandLogo9, alt: 'Laybrotech client logo 9' },
  { id: 'brand-10', image: brandLogo10, alt: 'Laybrotech client logo 10' },
];
