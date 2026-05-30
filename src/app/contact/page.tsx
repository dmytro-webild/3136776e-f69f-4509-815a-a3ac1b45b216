"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterCard from '@/components/sections/footer/FooterCard';
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
          name: "الرئيسية",          id: "/"},
        {
          name: "العقارات",          id: "/properties"},
        {
          name: "الفيديوهات",          id: "/videos"},
        {
          name: "الوسطاء",          id: "/agents"},
        {
          name: "الأكاديمية",          id: "/academy"},
        {
          name: "حاسبة التمويل",          id: "/calculator"},
        {
          name: "تواصل",          id: "/contact"},
      ]}
      brandName="النجوم السبعة للعقارات"
    />
  </div>

  <div id="contact-main" data-section="contact-main">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="تواصل معنا"
      title="تواصل مع النجوم السبعة للعقارات"
      description="نحن هنا للإجابة على جميع استفساراتك وتقديم الدعم. تواصل معنا عبر الهاتف، البريد الإلكتروني، أو قم بزيارة مكتبنا."
      buttons={[
        {
          text: "أرسل رسالة",          href: "/contact/message"},
        {
          text: "النجوم السبعة واتساب",          href: "https://wa.me/971501234567"},
      ]}
    />
  </div>

  <div id="faq-general" data-section="faq-general">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "fq1",          title: "كيف يمكنني البحث عن عقار؟",          content: "يمكنك استخدام محرك البحث المتقدم في الصفحة الرئيسية لتصفية العقارات حسب المدينة، النوع، السعر، وغيرها من المعايير."},
        {
          id: "fq2",          title: "هل يمكنني حجز موعد لمعاينة عقار؟",          content: "نعم، يمكنك حجز موعد معاينة مباشرة من صفحة تفاصيل العقار مع الوسيط المسؤول."},
        {
          id: "fq3",          title: "ما هي الفوائد من حساب العميل؟",          content: "يمكنك حفظ العقارات والفيديوهات المفضلة، التواصل مع الوسطاء، وتلقي إشعارات مخصصة."},
      ]}
      title="أسئلة شائعة"
      description="ابحث عن إجابات لأسئلتك المتكررة حول العقارات، خدماتنا، وعملية الشراء أو الإيجار."
      tag="المساعدة"
      faqsAnimation="slide-up"
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
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
        {
          icon: Linkedin,
          href: "#",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}