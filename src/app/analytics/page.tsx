"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function AnalyticsPage() {
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
                name: "إدارة العقارات",                id: "/properties/manage"},
              {
                name: "الفيديوهات",                id: "/videos"},
              {
                name: "إدارة الفيديوهات",                id: "/videos/manage"},
              {
                name: "الحسابات",                id: "/accounts"},
              {
                name: "إدارة العملاء",                id: "/leads"},
              {
                name: "لوحة التحليل",                id: "/analytics"},
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
        <main className="relative flex flex-col items-center justify-center py-20 min-h-[500px]">
          <h1 className="text-4xl font-bold mb-4">لوحة التحليل</h1>
          <p className="text-lg text-gray-600">صفحة عرض تحليلات وأداء وكالة العقارات.</p>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}