"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Crown, Facebook, Instagram, Linkedin, PlayCircle, Rocket, Star, Twitter } from "lucide-react";

export default function PricingPage() {
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
                name: "الرئيسية",                id: "/"},
              {
                name: "العقارات",                id: "/properties"},
              {
                name: "الفيديوهات",                id: "/videos"},
              {
                name: "الإعلانات المميزة",                id: "/pricing"},
              {
                name: "الوسطاء",                id: "/agents"},
              {
                name: "الأكاديمية",                id: "/academy"},
              {
                name: "حاسبة التمويل",                id: "/calculator"},
              {
                name: "تواصل",                id: "/contact"},
            ]}
            brandName="النجوم السبعة للعقارات"
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="خيارات الإعلانات المميزة"
            description="اختر الخطة المثالية لتعزيز ظهور عقارك والوصول إلى المزيد من المشترين المحتملين."
            tag="روّج لعقارك"
            plans={[
              {
                id: "standard",                badge: "قياسي",                badgeIcon: Rocket,
                price: "مجاناً",                name: "إدراج قياسي",                buttons: [{ text: "ابدأ الآن", href: "/contact" }],
                features: [
                  "إدراج لمدة 30 يوماً",                  "5 صور للعقار",                  "دعم أساسي عبر البريد الإلكتروني"
                ]
              },
              {
                id: "featured",                badge: "مميز",                badgeIcon: Star,
                price: "199 درهم/شهر",                name: "إدراج مميز",                buttons: [{ text: "اختر الخطة", href: "/contact" }],
                features: [
                  "إدراج لمدة 60 يوماً",                  "10 صور عالية الجودة",                  "دعم ذو أولوية",                  "ظهور في نتائج البحث المميزة"
                ]
              },
              {
                id: "homepage",                badge: "الصفحة الرئيسية",                badgeIcon: Crown,
                price: "499 درهم/شهر",                name: "إدراج الصفحة الرئيسية",                buttons: [{ text: "اختر الخطة", href: "/contact" }],
                features: [
                  "إدراج لمدة 90 يوماً",                  "15 صورة عالية الجودة + جولة افتراضية",                  "دعم مخصص 24/7",                  "ظهور بارز على الصفحة الرئيسية"
                ]
              },
              {
                id: "video-ad",                badge: "إعلان فيديو مميز",                badgeIcon: PlayCircle,
                price: "999 درهم/شهر",                name: "إعلان فيديو مميز",                buttons: [{ text: "اختر الخطة", href: "/contact" }],
                features: [
                  "إدراج لمدة 120 يوماً",                  "20 صورة + جولة افتراضية + فيديو احترافي",                  "دعم كبار العملاء",                  "ظهور على الصفحة الرئيسية وقسم الفيديوهات",                  "حملة إعلانية ممولة"
                ]
              }
            ]}
          />
        </div>

        <div id="contact-cta" data-section="contact-cta">
          <ContactCTA
            useInvertedBackground={false}
            background={{
              variant: "radial-gradient"}}
            tag="تواصل معنا"
            title="هل أنت مستعد للعثور على عقارك المثالي؟"
            description="فريقنا جاهز للإجابة على جميع استفساراتك وتقديم المساعدة اللازمة. لا تتردد في التواصل معنا اليوم."
            buttons={[
              {
                text: "تحدث مع خبير",                href: "/contact"},
              {
                text: "اطلب عقاراً",                href: "/contact"},
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
                href: "#",                ariaLabel: "Facebook"},
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"},
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"},
              {
                icon: Linkedin,
                href: "#",                ariaLabel: "LinkedIn"},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
