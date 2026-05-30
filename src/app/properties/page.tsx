"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
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

  <div id="all-properties" data-section="all-properties">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "ap1",
          name: "شقة حديثة في دبي مارينا",
          price: "2,500,000 درهم",
          variant: "للبيع",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-building-with-multiple-large-windows_250224-148.jpg",
          imageAlt: "Modern apartment in Dubai Marina",
        },
        {
          id: "ap2",
          name: "فيلا فسيحة في الجولف",
          price: "18,000,000 درهم",
          variant: "للبيع",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-arrangement-work_23-2151976859.jpg",
          imageAlt: "Spacious villa in The Meadows",
        },
        {
          id: "ap3",
          name: "استوديو مفروش في وسط البلد",
          price: "80,000 درهم/سنة",
          variant: "للإيجار",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-outdoor-hotel_1150-12915.jpg",
          imageAlt: "Furnished studio in Downtown",
        },
        {
          id: "ap4",
          name: "فيلا عائلية بـ 4 غرف في البراري",
          price: "7,000,000 درهم",
          variant: "للبيع",
          imageSrc: "http://img.b2bpic.net/free-photo/chair-pool_74190-1324.jpg",
          imageAlt: "4-bedroom family villa in Al Barari",
        },
        {
          id: "ap5",
          name: "شقة فاخرة بإطلالة بحرية",
          price: "3,800,000 درهم",
          variant: "للبيع",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-smartphone-with-home-automation-app_23-2149036831.jpg",
          imageAlt: "Luxury apartment with sea view",
        },
        {
          id: "ap6",
          name: "تاون هاوس عصري في مجتمع هادئ",
          price: "150,000 درهم/سنة",
          variant: "للإيجار",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girls-gym-sports-ladies-sportswear-friends-race-track_1157-43974.jpg",
          imageAlt: "Modern townhouse in a quiet community",
        },
      ]}
      title="جميع العقارات المعروضة"
      description="تصفح أحدث العقارات المتاحة للبيع والإيجار في جميع أنحاء الإمارات. استخدم الفلاتر للعثور على ما يناسبك."
      tag="تصفح"
    />
  </div>

  <div id="property-contact-cta" data-section="property-contact-cta">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="استفسار"
      title="لم تجد عقارك؟ اطلب مساعدة خبير!"
      description="فريقنا المتخصص مستعد لمساعدتك في البحث عن العقار الذي يلبي جميع احتياجاتك. تواصل معنا الآن."
      buttons={[
        {
          text: "تواصل مع وسيط",
          href: "/contact",
        },
        {
          text: "اطلب عقاراً خاصاً",
          href: "/contact",
        },
      ]}
    />
  </div>

  <div id="property-testimonials" data-section="property-testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "pt1",
          name: "علياء الفهيم",
          role: "مستشارة قانونية",
          company: "مؤسسة العدل",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1604.jpg",
          imageAlt: "Aliya Al Fahim",
        },
        {
          id: "pt2",
          name: "فهد القاسمي",
          role: "مطور عقاري",
          company: "عقارات الإمارات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-reaching-out-camera-woman-city_169016-66619.jpg",
          imageAlt: "Fahad Al Qasimi",
        },
        {
          id: "pt3",
          name: "نادية كرم",
          role: "مصممة داخلية",
          company: "لمسات للديكور",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-smiling-man-talking-mobile-phone-calling-seller-he-found-online-while-using-laptop-shopping-searching-appartment-internet_176420-25732.jpg",
          imageAlt: "Nadia Karam",
        },
        {
          id: "pt4",
          name: "سامي العوضي",
          role: "مدير استثمار",
          company: "جلوبال انفست",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-with-speech-bubble_53876-13588.jpg",
          imageAlt: "Sami Al Awadhi",
        },
        {
          id: "pt5",
          name: "مها الكتبي",
          role: "مديرة مشروعات",
          company: "بناء للمقاولات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/home-insurance-coverage-estate-residential_53876-121259.jpg",
          imageAlt: "Maha Al Ketbi",
        },
      ]}
      kpiItems={[
        {
          value: "99%",
          label: "رضا العملاء",
        },
        {
          value: "سريع",
          label: "إغلاق الصفقات",
        },
        {
          value: "سهل",
          label: "عملية البحث",
        },
      ]}
      title="قصص نجاح عملائنا"
      description="شاهد كيف ساعدنا عملاء آخرين في العثور على عقاراتهم المثالية."
      tag="تجارب حقيقية"
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
