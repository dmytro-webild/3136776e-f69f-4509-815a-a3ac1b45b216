"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
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

  <div id="property-videos" data-section="property-videos">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="جولات عقارية بالفيديو (تيك توك و ريلز)"
      description="استكشف العقارات الفاخرة بجولات فيديو قصيرة ومثيرة، مصممة خصيصًا لتجربة مشاهدة سريعة ومتكاملة على هاتفك. مرر لأعلى لمشاهدة المزيد!"
      tag="فيديوهات"
      blogs={[
        {
          id: "v1",
          category: "فيلا فاخرة",
          title: "جولة سريعة: فيلا الأحلام في تلال الإمارات",
          excerpt: "شاهد جمال التصميم والتشطيبات الفاخرة في هذه الفيلا الحصرية.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-showcasing-their-home-through-smartphone_23-2151624886.jpg",
          imageAlt: "Video thumbnail for Emirates Hills villa",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-20",
        },
        {
          id: "v2",
          category: "شقة بنتهاوس",
          title: "إطلالة ساحرة: بنتهاوس في برج خليفة",
          excerpt: "تجربة معيشة لا مثيل لها مع إطلالة بانورامية على أفق دبي.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-reading-book-street_23-2147737638.jpg",
          imageAlt: "Video thumbnail for Burj Khalifa penthouse",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-19",
        },
        {
          id: "v3",
          category: "تاون هاوس",
          title: "عصري ومريح: تاون هاوس في دبي هيلز",
          excerpt: "تصميم حديث ومساحات واسعة مثالية للعائلات في مجتمع دبي هيلز.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-showcasing-their-home-through-smartphone_23-2151624884.jpg",
          imageAlt: "Video thumbnail for Dubai Hills townhouse",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-18",
        },
        {
          id: "v4",
          category: "فيلا شاطئية",
          title: "استمتع بالبحر: فيلا على نخلة جميرا",
          excerpt: "عش الرفاهية المطلقة مع وصول خاص إلى الشاطئ في نخلة جميرا.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-cute-woman-lifestyle-blogger-sits-her-room-with-daily-journal-planner_1258-281953.jpg",
          imageAlt: "Video thumbnail for Palm Jumeirah villa",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-17",
        },
        {
          id: "v5",
          category: "شقة فاخرة",
          title: "حياة المدن: شقة غرفتين نوم في وسط دبي",
          excerpt: "موقع مثالي ووسائل راحة عالمية في قلب مدينة دبي النابض.",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-models-paper-cut-out-style_23-2149374794.jpg",
          imageAlt: "Video thumbnail for Downtown Dubai apartment",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-16",
        },
        {
          id: "v6",
          category: "فيلا عائلية",
          title: "الخصوصية والهدوء: فيلا في المرابع العربية",
          excerpt: "مساحة خضراء واسعة ومرافق ترفيهية لعائلة تستحق الأفضل.",
          imageSrc: "http://img.b2bpic.net/free-photo/grey-concrete-building-daytime_250224-255.jpg",
          imageAlt: "Video thumbnail for Arabian Ranches villa",
          authorName: "النجوم السبعة للعقارات",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg",
          date: "2024-07-15",
        },
      ]}
    />
  </div>

  <div id="video-faq" data-section="video-faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "vf1",
          title: "كيف يمكنني تحميل فيديو عقاري؟",
          content: "يمكن للمكاتب والوسطاء الموثقين تحميل الفيديوهات من خلال لوحة التحكم الخاصة بهم.",
        },
        {
          id: "vf2",
          title: "ما هي مدة الفيديو المسموح بها؟",
          content: "يجب أن تتراوح مدة الفيديو بين 15 و 30 ثانية لضمان تجربة مشاهدة سريعة وجذابة.",
        },
        {
          id: "vf3",
          title: "هل يمكن للفيديوهات أن تعرض في الصفحة الرئيسية؟",
          content: "نعم، يمكن ترقية الفيديو ليظهر كفيديو مميز أو مثبت في الصفحة الرئيسية مقابل رسوم إضافية.",
        },
      ]}
      title="أسئلة شائعة حول فيديوهات العقارات"
      description="كل ما تحتاج معرفته عن كيفية إنشاء وتحميل فيديوهات عقارك في منصة النجوم السبعة للعقارات."
      tag="دعم"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="video-contact" data-section="video-contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="تواصل"
      title="هل لديك استفسارات حول فيديوهات العقارات؟"
      description="تواصل مع فريق الدعم لدينا للحصول على المساعدة في إنشاء أو تحميل فيديوهاتك العقارية."
      buttons={[
        {
          text: "تحدث مع الدعم",
          href: "/contact",
        },
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
