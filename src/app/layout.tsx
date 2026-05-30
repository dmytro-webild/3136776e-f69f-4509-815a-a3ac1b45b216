import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'النجوم السبعة للعقارات | منصة عقارية فاخرة في الإمارات',
  description: 'اكتشف العقارات الفاخرة في الإمارات مع النجوم السبعة للعقارات. شقق وفيلات للبيع والإيجار، وسطاء موثوقون، فيديوهات عقارية، وأكثر.',
  keywords: ["عقارات دبي، عقارات الإمارات، شقق للبيع، فيلات للإيجار، النجوم السبعة للعقارات، وساطة عقارية، استثمار عقاري"],
  openGraph: {
    "title": "النجوم السبعة للعقارات | منصة عقارية فاخرة في الإمارات",
    "description": "اكتشف العقارات الفاخرة في الإمارات مع النجوم السبعة للعقارات. شقق وفيلات للبيع والإيجار، وسطاء موثوقون، فيديوهات عقارية، وأكثر.",
    "url": "/",
    "siteName": "النجوم السبعة للعقارات",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-angle-view-modern-building-with-glass-windows-sunlight_181624-11971.jpg",
        "alt": "Luxurious real estate in Dubai"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "النجوم السبعة للعقارات | منصة عقارية فاخرة في الإمارات",
    "description": "اكتشف العقارات الفاخرة في الإمارات مع النجوم السبعة للعقارات. شقق وفيلات للبيع والإيجار، وسطاء موثوقون، فيديوهات عقارية، وأكثر.",
    "images": [
      "http://img.b2bpic.net/free-photo/low-angle-view-modern-building-with-glass-windows-sunlight_181624-11971.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
