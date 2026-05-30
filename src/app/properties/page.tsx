"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function PropertiesPage() {
  const whatsappMessage = 'مرحبًا، أود الاستفسار عن أحد العقارات المعروضة على منصة النجوم السبعة للعقارات.';
  const whatsappNumber = '971501234567';
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav" className="sticky top-0 z-50">
          <NavbarStyleApple
            navItems={[
              { name: "الرئيسية", id: "/" },
              { name: "العقارات", id: "/properties" },
              { name: "المشاريع الجديدة", id: "/new-projects" },
              { name: "الوسطاء العقاريون", id: "/real-estate-agents" },
              { name: "فيديوهات العقارات", id: "/property-videos" },
              { name: "طلب عقار", id: "/property-request" },
              { name: "تواصل معنا", id: "/contact-us" }
            ]}
            brandName="النجوم السبعة للعقارات"
          />
        </div>

        <main className="min-h-screen p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">صفحة العقارات</h1>
          <p className="text-lg">اكتشف مجموعتنا الواسعة من العقارات المعروضة.</p>
        </main>

        <div id="footer" data-section="footer">
          <FooterCard
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg"
            logoAlt="النجوم السبعة للعقارات"
            logoText="النجوم السبعة للعقارات — منذ 2010"
            copyrightText="© 2024 النجوم السبعة للعقارات. جميع الحقوق محفوظة."
            socialLinks={[
              { icon: Facebook, href: "#", ariaLabel: "Facebook" },
              { icon: Instagram, href: "#", ariaLabel: "Instagram" },
              { icon: Twitter, href: "#", ariaLabel: "Twitter" },
              { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}