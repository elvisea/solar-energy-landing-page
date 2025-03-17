import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { websiteSchema, organizationSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://solarenergy.com.br'),
  title: {
    default: "SolarEnergy - Energia Solar por Assinatura",
    template: "%s | SolarEnergy"
  },
  description: "Economize até 20% na sua conta de energia com nossa solução de energia solar por assinatura, sem instalação de painéis na sua casa.",
  keywords: [
    "energia solar",
    "energia renovável",
    "economia de energia",
    "energia solar por assinatura",
    "energia limpa",
    "sustentabilidade",
    "painéis solares",
    "energia verde"
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://solarenergy.com.br",
    siteName: "SolarEnergy",
    title: "SolarEnergy - Energia Solar por Assinatura",
    description: "Economize até 20% na sua conta de energia com nossa solução de energia solar por assinatura, sem instalação de painéis na sua casa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://solarenergy.com.br"
  },
  authors: [
    {
      name: "SolarEnergy",
      url: "https://solarenergy.com.br",
    }
  ],
  generator: "Next.js",
  applicationName: "SolarEnergy",
  referrer: "origin-when-cross-origin",
  creator: "SolarEnergy",
  publisher: "SolarEnergy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "verification-code",
  },
  other: {
    'priority-hints': "1",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema])
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
