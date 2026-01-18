import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(params.locale as any)) {
    notFound();
  }

  // Set request locale FIRST - this tells getRequestConfig to use route param, not headers
  setRequestLocale(params.locale);

  // Now getMessages() will use the locale from setRequestLocale, not headers()
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={params.locale} />
          <main className="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
