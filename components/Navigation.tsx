'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations('nav');

  const navItems = [
    { href: '/', key: 'home' },
    { href: '/work/', key: 'work' },
    { href: '/about/', key: 'about' },
    { href: '/contact/', key: 'contact' },
  ];

  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <Link href={`/${locale}${item.href}`} className="nav-link">
              {t(item.key as any)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
