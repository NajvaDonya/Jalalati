import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { STORAGE_KEY, translations } from "@/lib/i18n";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: translations.ar.metaTitle,
  description: translations.ar.metaDescription,
};

const langBootstrapScript = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var l=localStorage.getItem(k);if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';}else if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';}else{document.documentElement.lang='ar';document.documentElement.dir='rtl';}}catch(e){document.documentElement.lang='ar';document.documentElement.dir='rtl';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${vazirmatn.variable} h-full font-sans`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langBootstrapScript }} />
      </head>
      <body className="min-h-dvh bg-[#253041] font-sans text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
