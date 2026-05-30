"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function VideosPage() {
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

        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">فيديوهات العقارات</h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
            استعرض أحدث الفيديوهات العقارية بأسلوب "تيك توك"، مع إمكانية التمرير، التشغيل التلقائي، وحفظ الفيديوهات المفضلة لديك.
          </p>
          <div className="w-full max-w-sm h-96 bg-card rounded-xl flex items-center justify-center text-foreground/60 border border-border">
            <p>مساحة لعرض فيديوهات العقارات</p>
          </div>
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
