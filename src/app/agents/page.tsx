"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
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

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="فريق النجوم السبعة من الوسطاء"
      tag="خبراؤنا"
      membersAnimation="slide-up"
      members={[
        {
          id: "m1",          name: "أحمد السبع",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-gay-official-suit-looking-camera-front-view-bearded-caucasian-man-smiling-camera-getting-dressed-wedding-ceremony-with-lover-lgbt-love-marriage-concept_74855-22937.jpg",          imageAlt: "Ahmed Al Saba"},
        {
          id: "m2",          name: "ليلى الزهراء",          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-high-protocol-event_23-2150951459.jpg",          imageAlt: "Laila Al Zahraa"},
        {
          id: "m3",          name: "يوسف الخالد",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg",          imageAlt: "Youssef Al Khaled"},
        {
          id: "m4",          name: "نور العلي",          imageSrc: "http://img.b2bpic.net/free-photo/happy-business-partners-reading-news-tablet-computer-outdoors_1262-12345.jpg",          imageAlt: "Noor Al Ali"},
        {
          id: "m5",          name: "سعيد الشمسي",          imageSrc: "http://img.b2bpic.net/free-photo/confident-people-holding-toy-house-together_23-2147764167.jpg",          imageAlt: "Saeed Al Shamsi"},
        {
          id: "m6",          name: "مريم الهدى",          imageSrc: "http://img.b2bpic.net/free-photo/female-realtor-showing-new-house-smiley-couple-laptop_23-2148895494.jpg",          imageAlt: "Maryam Al Huda"},
      ]}
      memberVariant="card"
    />
  </div>

  <div id="agent-metrics" data-section="agent-metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="ثق في خبرائنا المعتمدين"
      tag="الوسطاء الموثقون"
      metrics={[
        {
          id: "am1",          value: "100%",          description: "وسطاء موثقون"},
        {
          id: "am2",          value: "+200",          description: "سنة خبرة مجتمعة"},
        {
          id: "am3",          value: "+5000",          description: "صفقة ناجحة"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="agent-testimonials" data-section="agent-testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "att1",          name: "جاسم المطروشي",          role: "مستثمر",          company: "عقارات أبوظبي",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-emotional-girl-business-style-clothes-plain-white-background-office-audience_78826-2259.jpg",          imageAlt: "Jassim Al Matroushi"},
        {
          id: "att2",          name: "ريم البلوشي",          role: "مديرة مشتريات",          company: "مجموعة الخليج",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-showing-thumbs-up-posing-camera-park_1262-20571.jpg",          imageAlt: "Reem Al Balushi"},
        {
          id: "att3",          name: "ناصر العامري",          role: "رائد أعمال",          company: "ستارت أب",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/relaxing-fume-banking-adult-absence_1134-936.jpg",          imageAlt: "Nasser Al Ameri"},
        {
          id: "att4",          name: "منى سعيد",          role: "خبيرة مالية",          company: "جلوبال فينانس",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-female-office-workers-thumbing-up-smiling-two-cheerful-professional-businesswomen-standing-together-posing-meeting-room-teamwork-business-success-cooperation-concept_74855-7378.jpg",          imageAlt: "Mona Saeed"},
        {
          id: "att5",          name: "سيف علي",          role: "مدير عقارات",          company: "إدارة العقار",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-hr-manager-congratulating-with-getting-job_1262-19403.jpg",          imageAlt: "Saif Ali"},
      ]}
      kpiItems={[
        {
          value: "5/5",          label: "احترافية"},
        {
          value: "ممتاز",          label: "سرعة الاستجابة"},
        {
          value: "عالي",          label: "جودة الخدمة"},
      ]}
      title="تقييمات عملائنا لوسطائنا"
      description="شفافية وثقة: استمع إلى ما يقوله عملاؤنا عن جودة خدمة وسطائنا المحترفين."
      tag="جودة الخدمة"
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