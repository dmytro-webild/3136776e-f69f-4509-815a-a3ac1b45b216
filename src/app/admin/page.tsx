"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterCard from '@/components/sections/footer/FooterCard';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function AdminDashboardPage() {
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
                name: "الرئيسية", id: "/"},
              {
                name: "العقارات", id: "/properties"},
              {
                name: "الفيديوهات", id: "/videos"},
              {
                name: "الوسطاء", id: "/agents"},
              {
                name: "الأكاديمية", id: "/academy"},
              {
                name: "حاسبة التمويل", id: "/calculator"},
              {
                name: "تواصل", id: "/contact"},
              {
                name: "لوحة التحكم", id: "/admin"}
            ]}
            brandName="النجوم السبعة للعقارات"
          />
        </div>

        <div id="admin-dashboard" data-section="admin-dashboard" className="relative z-10 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">لوحة تحكم المسؤول</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">إدارة شاملة للمنصة العقارية.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              [{                title: "إدارة المستخدمين",                description: "عرض، إضافة، تعديل، وحذف حسابات المستخدمين.",                href: "/admin/users"
              },
              {
                title: "إدارة الوكالات",                description: "إدارة بيانات الوكالات العقارية والتحكم في صلاحياتها.",                href: "/admin/agencies"
              },
              {
                title: "إدارة العقارات",                description: "الإشراف على قائمة العقارات، الموافقات، والتعديلات.",                href: "/admin/properties"
              },
              {
                title: "إدارة الفيديوهات",                description: "تحميل، تنظيم، وحذف الفيديوهات التسويقية.",                href: "/admin/videos"
              },
              {
                title: "إدارة المدفوعات",                description: "متابعة المعاملات المالية، الفواتير، والاشتراكات.",                href: "/admin/payments"
              },
              {
                title: "إدارة الإعلانات",                description: "إنشاء، تعديل، ومراقبة حملات الإعلانات.",                href: "/admin/advertisements"
              },
              ].map((item, index) => (
                <Link key={index} href={item.href} className="block p-6 bg-card-background rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
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
                href: "#", ariaLabel: "Facebook"},
              {
                icon: Instagram,
                href: "#", ariaLabel: "Instagram"},
              {
                icon: Twitter,
                href: "#", ariaLabel: "Twitter"},
              {
                icon: Linkedin,
                href: "#", ariaLabel: "LinkedIn"},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}