"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Calculator, Check } from "lucide-react";

export default function CalculatorPage() {
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

        <div id="calculator-section" data-section="calculator-section">
          <PricingCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="حاسبة التمويل العقاري"
            description="احسب الأقساط الشهرية وتقديرات التمويل لعقارك المستقبلي بكل سهولة ودقة."
            tag="ابدأ الآن"
            tagIcon={Calculator}
            plans={[
              {
                id: "p1",                badge: "قرض قياسي",                badgeIcon: Calculator,
                price: "7,500 درهم/شهرياً",                subtitle: "فائدة ثابتة 3% على 25 سنة",                buttons: [{ text: "احسب الآن" }],
                features: [
                  "دفعة أولى 20%",                  "شروط سداد مرنة",                  "لا توجد رسوم خفية"
                ]
              },
              {
                id: "p2",                badge: "قرض مرن",                badgeIcon: Calculator,
                price: "6,000 درهم/شهرياً",                subtitle: "فائدة متغيرة 2.5% على 30 سنة",                buttons: [{ text: "احسب الآن" }],
                features: [
                  "دفعة أولى 15%",                  "إمكانية إعادة التمويل",                  "خيارات دفع مسبق"
                ]
              },
              {
                id: "p3",                badge: "قرض استثماري",                badgeIcon: Calculator,
                price: "10,000 درهم/شهرياً",                subtitle: "فائدة ثابتة 4% على 20 سنة",                buttons: [{ text: "احسب الآن" }],
                features: [
                  "دفعة أولى 25%",                  "مستشار استثماري مخصص",                  "عوائد تنافسية"
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}