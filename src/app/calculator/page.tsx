"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
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
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "الرئيسية",
          id: "/",
        },
        {
          name: "العقارات",
          id: "/properties",
        },
        {
          name: "الفيديوهات",
          id: "/videos",
        },
        {
          name: "الوسطاء",
          id: "/agents",
        },
        {
          name: "الأكاديمية",
          id: "/academy",
        },
        {
          name: "حاسبة التمويل",
          id: "/calculator",
        },
        {
          name: "تواصل",
          id: "/contact",
        },
      ]}
      brandName="النجوم السبعة للعقارات"
    />
  </div>

  <div id="mortgage-calculator-intro" data-section="mortgage-calculator-intro">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="حاسبة التمويل العقاري الذكية"
      description="احسب أقساطك الشهرية واجمالي الفوائد بدقة. أدخل سعر العقار، الدفعة الأولى، نسبة الفائدة، ومدة التمويل واحصل على جدول سداد تقديري."
      metrics={[
        {
          value: "سريع",
          title: "نتائج فورية",
        },
        {
          value: "دقيق",
          title: "حسابات موثوقة",
        },
        {
          value: "سهل",
          title: "استخدام بسيط",
        },
      ]}
      tag="أداة مجانية"
      imageSrc="http://img.b2bpic.net/free-photo/graph-stack-coins-calculator-house-model-blueprint_23-2148038724.jpg"
      imageAlt="Mortgage calculator interface"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="calculator-contact-cta" data-section="calculator-contact-cta">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="مساعدة التمويل"
      title="هل تحتاج لمساعدة في التمويل العقاري؟"
      description="خبراؤنا الماليون جاهزون لتقديم الاستشارات ومساعدتك في الحصول على أفضل عروض التمويل."
      buttons={[
        {
          text: "تحدث مع مستشار مالي",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg"
      logoAlt="النجوم السبعة للعقارات"
      logoText="النجوم السبعة للعقارات"
      copyrightText="© 2026 | جميع الحقوق محفوظة لدى النجوم السبعة للعقارات"
      socialLinks={[
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Linkedin,
          href: "#",
          ariaLabel: "LinkedIn",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
