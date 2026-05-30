"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterCard from '@/components/sections/footer/FooterCard';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import { Facebook, GraduationCap, Instagram, Linkedin, MessageCircle, Twitter, CalendarDays, Home, Eye } from "lucide-react";

export default function AcademyPage() {
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
                name: "الرئيسية",                id: "/"
              },
              {
                name: "العقارات",                id: "/properties"
              },
              {
                name: "الفيديوهات",                id: "/videos"
              },
              {
                name: "الوسطاء",                id: "/agents"
              },
              {
                name: "الأكاديمية",                id: "/academy"
              },
              {
                name: "حاسبة التمويل",                id: "/calculator"
              },
              {
                name: "تواصل",                id: "/contact"
              }
            ]}
            brandName="النجوم السبعة للعقارات"
          />
        </div>

        <div id="academy-pricing" data-section="academy-pricing">
          <PricingCardOne
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="برامج الأكاديمية التدريبية"
            description="صُممت برامجنا التدريبية المتخصصة لتمكين وكلاء ووكالات العقارات من النجاح في السوق الإماراتي التنافسي."
            tag="تدريب الخبراء"
            tagIcon={GraduationCap}
            plans={[
              {
                id: "training-session",                badge: "جلسة تدريب فردية",                badgeIcon: GraduationCap,
                price: "500 درهم إماراتي / جلسة",                subtitle: "تدريب مكثف لمدة ساعة واحدة",                features: [
                  "تدريب شخصي ومخصص",                  "استراتيجيات بيع وتسويق متقدمة",                  "تحسين مهارات التفاوض",                  "بناء علاقات العملاء الفعالة",                  "فهم عميق لسوق العقارات الإماراتي"
                ]
              }
            ]}
          />
        </div>

        <div id="academy-features" data-section="academy-features">
          <FeatureCardTwentyThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="أنظمة متكاملة لأكاديمية الوكلاء"
            description="نقدم أدوات وتقنيات متطورة لدعم تدريب الوكلاء وتمكينهم من إدارة عملياتهم بكفاءة."
            tag="التقنيات المتقدمة"
            features={[
              {
                id: "booking-system",                title: "نظام حجوزات وجدولة",                tags: ["مواعيد", "تذكيرات"],
                imageSrc: "http://img.b2bpic.net/free-photo/appointment-booking-concept-with-date-hand_23-2149724036.jpg",                imageAlt: "Booking and scheduling system"
              },
              {
                id: "property-request-system",                title: "نظام طلبات العقارات",                tags: ["بحث", "تخصيص"],
                imageSrc: "http://img.b2bpic.net/free-photo/real-estate-agent-business-meeting-consulting-with-client-customer-selling-house-property-contract_1150-10657.jpg",                imageAlt: "Property request system"
              },
              {
                id: "viewing-booking-system",                title: "نظام حجز معاينات العقارات",                tags: ["معاينة", "تقويم"],
                imageSrc: "http://img.b2bpic.net/free-photo/happy-young-male-architect-business-man-holding-blueprints-standing-city_176420-21342.jpg",                imageAlt: "Property viewing booking system"
              }
            ]}
          />
        </div>

        <div id="academy-cta" data-section="academy-cta">
          <ContactCTA
            useInvertedBackground={false}
            background={{
              variant: "radial-gradient"
            }}
            tag="انضم إلينا"
            tagIcon={MessageCircle}
            title="ابدأ رحلتك نحو التميز العقاري اليوم"
            description="سجل الآن في أكاديمية التدريب الخاصة بنا واستفد من خبرات قادتنا في المجال."
            buttons={[
              {
                text: "سجل الآن",                href: "#academy-pricing"
              },
              {
                text: "تحدث مع مستشار",                href: "/contact/advisor"
              }
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
                href: "#",                ariaLabel: "Facebook"
              },
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"
              },
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"
              },
              {
                icon: Linkedin,
                href: "#",                ariaLabel: "LinkedIn"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
