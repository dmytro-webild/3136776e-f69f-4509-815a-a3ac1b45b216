"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Award, BookOpen, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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

  <div id="academy-about" data-section="academy-about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="أكاديمية النجوم السبعة: ارتق بمسيرتك العقارية"
      description="برامج تدريب واستشارات متخصصة للوسطاء والمكاتب العقارية الموثوقين. اكتسب المهارات والمعرفة اللازمة لتحقيق أقصى إمكاناتك في السوق."
      metrics={[
        {
          value: "+100",
          title: "خبير مدرب",
        },
        {
          value: "60",
          title: "دقيقة للجلسة",
        },
        {
          value: "خاصة",
          title: "جلسات فردية",
        },
      ]}
      tag="تدريب احترافي"
      imageSrc="http://img.b2bpic.net/free-photo/multiethnic-group-women-working-together-copy-space-display_482257-119110.jpg"
      imageAlt="Professional real estate training session"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="academy-features" data-section="academy-features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "af1",
          title: "المبيعات العقارية",
          tags: [
            "استراتيجيات",
            "إغلاق الصفقات",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/european-african-american-business-partners-discussing-contract-business-meeting_181624-30969.jpg",
          imageAlt: "Real estate sales strategies",
        },
        {
          id: "af2",
          title: "التسويق العقاري",
          tags: [
            "سوشيال ميديا",
            "فيديو",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/view-earnings-accounting-financial-money-concept_53876-15880.jpg",
          imageAlt: "Real estate marketing strategies",
        },
        {
          id: "af3",
          title: "قوانين الإمارات",
          tags: [
            "تحديثات",
            "تشريعات",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/standard-quality-control-concept-m_23-2150041840.jpg",
          imageAlt: "UAE real estate laws",
        },
      ]}
      title="موضوعات تدريبية متقدمة"
      description="نغطي جميع الجوانب الحيوية لنجاحك في السوق العقاري، من المبيعات والتسويق إلى القوانين وبناء العلامة الشخصية."
      tag="محتوى حصري"
    />
  </div>

  <div id="academy-pricing" data-section="academy-pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "aprice1",
          badge: "جلسة فردية",
          badgeIcon: BookOpen,
          price: "500 درهم",
          subtitle: "جلسة تدريب واستشارة لمدة 60 دقيقة",
          buttons: [
            {
              text: "احجز جلستك الآن",
              href: "#",
            },
          ],
          features: [
            "جلسة شخصية 1:1",
            "استشارات مخصصة",
            "تحليل احتياجاتك",
            "دعم مستمر",
          ],
        },
        {
          id: "aprice2",
          badge: "باقة 3 جلسات",
          badgeIcon: Award,
          price: "1350 درهم",
          subtitle: "توفير 150 درهم",
          buttons: [
            {
              text: "احجز الباقة",
              href: "#",
            },
          ],
          features: [
            "3 جلسات تدريب فردية",
            "خطة تطوير مخصصة",
            "أولوية الحجز",
            "متابعة دورية",
          ],
        },
      ]}
      title="أسعار جلسات الأكاديمية"
      description="استثمر في نفسك ومهاراتك. جلسات فردية متخصصة لمساعدتك على التفوق."
      tag="باقات التدريب"
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
