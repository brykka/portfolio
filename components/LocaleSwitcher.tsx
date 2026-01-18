'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface LocaleSwitcherProps {
  currentLocale: string;
}

export default function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('locale');

  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  const otherLocale = currentLocale === 'en' ? 'fr' : 'en';
  
  // Preserve query params
  const queryString = searchParams.toString();
  const href = `/${otherLocale}${pathWithoutLocale}${queryString ? `?${queryString}` : ''}`;

  return (
    <Link 
      href={href}
      className="locale-switcher"
      aria-label={t('switch')}
      title={t('switch')}
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
