import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

// Minimal config for next-intl
// The locale parameter comes from route params (via setRequestLocale), not headers
// This config exists for next-intl to find, but we load messages directly in layouts
export default getRequestConfig(async ({ locale }) => {
  // Return messages - locale comes from route params via setRequestLocale, not headers
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
