import Link from 'next/link';
import Navigation from './Navigation';
import LocaleSwitcher from './LocaleSwitcher';

interface HeaderProps {
  siteTitle?: string;
  locale: string;
}

export default function Header({ siteTitle = 'Portfolio', locale }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <Link href={`/${locale}/`} className="header-logo">
          {siteTitle}
        </Link>
        <div className="header-nav-wrapper">
          <Navigation locale={locale} />
          <LocaleSwitcher currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}
