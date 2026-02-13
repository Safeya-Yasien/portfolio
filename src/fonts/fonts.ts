import { Cairo } from 'next/font/google';

const cairo_init = Cairo({
  subsets: ['latin'],
  weight: ['200', '300', '500', '600'],
  variable: '--font-cairo',
});

export const cairo = cairo_init.variable;
