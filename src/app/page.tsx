"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Facebook, Home, Instagram, Linkedin, Twitter, Users, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  const whatsappMessage = 'مرحبًا، أود الاستفسار عن أحد العقارات المعروضة على منصة النجوم السبعة للعقارات.';
  const whatsappNumber = '971501234567'; // Placeholder for office WhatsApp
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

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
          name: "العقارات",          id: "#featured-properties"},
        {
          name: "الوسطاء",          id: "#featured-agents"},
        {
          name: "تواصل",          id: "#contact-cta"},
      ]}
      brandName="النجوم السبعة للعقارات"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient"}}
      title="اكتشف عالم الفخامة في العقارات بدولة الإمارات"
      description="منصة النجوم السبعة للعقارات هي بوابتك للعقارات المميزة في دبي وأبوظبي وجميع أنحاء الإمارات. ابحث عن فيلتك أو شقتك الفاخرة المثالية."
      kpis={[
        {
          value: "+1000",          label: "عقار معروض"},
        {
          value: "+500",          label: "عميل سعيد"},
        {
          value: "2010",          label: "تأسست عام"},
      ]}
      enableKpiAnimation={true}
      tag="النجوم السبعة للعقارات"
      buttons={[
        {
          text: "ابحث عن عقارك الآن",          href: "#featured-properties"},
        {
          text: "اطلب عقارك الخاص",          href: "#contact-cta"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-view-modern-building-with-glass-windows-sunlight_181624-11971.jpg?_wi=1"
      imageAlt="Luxurious real estate in Dubai"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064844.jpg",          alt: "Real estate agent profile 1"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064840.jpg",          alt: "Real estate agent profile 2"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-with-glasses-blue-suit-with-tie-lights-with-blurry-background_181624-17456.jpg",          alt: "Real estate agent profile 3"},
        {
          src: "http://img.b2bpic.net/free-photo/businessman-with-amrs-crossed-looking-camera_23-2148113008.jpg",          alt: "Real estate agent profile 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-confident-muslim-businesswoman-standing-with-arms-crossed-office-looking-camera_637285-6459.jpg",          alt: "Real estate agent profile 5"},
      ]}
      avatarText="+1000 عميل موثوق"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings_23-2149661414.jpg",          alt: "Dubai Cityscape"},
        {
          type: "text-icon",          text: "عقارات فاخرة",          icon: Home,
        },
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/amazing-view-dome-luxury-royal-hotel-bodrum-turkey_627829-7208.jpg",          alt: "Modern Architecture"},
        {
          type: "text",          text: "خدمات استشارية"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/low-angle-building-with-many-windows_23-2148252801.jpg",          alt: "Skyscraper view"},
        {
          type: "text-icon",          text: "وسطاء معتمدون",          icon: Users,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="خبرة تمتد لأكثر من عقد في سوق العقارات الإماراتي"
      description="منذ عام 2010، والنجوم السبعة للعقارات هي الشريك الموثوق لك في عالم العقارات الفاخرة. نلتزم بتقديم أفضل الفرص الاستثمارية والحلول العقارية المبتكرة لعملائنا الكرام."
      metrics={[
        {
          value: "+10",          title: "سنوات خبرة"},
        {
          value: "+200",          title: "وسيط معتمد"},
        {
          value: "أبوظبي",          title: "من دبي إلى"},
      ]}
      tag="قصتنا"
      imageSrc="http://img.b2bpic.net/free-photo/modern-sauna-with-panoramic-windows-wooden-design_169016-70021.jpg?_wi=1"
      imageAlt="Modern real estate office interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="featured-properties" data-section="featured-properties">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "فيلا فاخرة في تلال الإمارات",          price: "35,000,000 درهم",          variant: "للبيع",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041530379-villa-interior-1.jpg?_wi=2",          imageAlt: "Luxury villa interior in Emirates Hills"},
        {
          id: "p2",          name: "شقة بنتهاوس بإطلالة على برج خليفة",          price: "12,000,000 درهم",          variant: "للبيع",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041531235-penthouse-view-2.jpg?_wi=2",          imageAlt: "Penthouse living room with Burj Khalifa view"},
        {
          id: "p3",          name: "منزل تاون هاوس حديث في دبي هيلز",          price: "5,800,000 درهم",          variant: "للبيع",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041532057-townhouse-exterior-3.jpg?_wi=2",          imageAlt: "Modern townhouse exterior in Dubai Hills"},
        {
          id: "p4",          name: "فيلا شاطئية حصرية في نخلة جميرا",          price: "50,000,000 درهم",          variant: "للبيع",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041532822-beach-villa-interior-4.jpg?_wi=2",          imageAlt: "Exclusive beachfront villa living area in Palm Jumeirah"},
        {
          id: "p5",          name: "شقة فاخرة بغرفتي نوم في وسط مدينة دبي",          price: "3,200,000 درهم",          variant: "للإيجار",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041533681-apartment-bedroom-5.jpg?_wi=2",          imageAlt: "Luxury 2-bedroom apartment master bedroom in Downtown Dubai"},
        {
          id: "p6",          name: "فيلا واسعة بـ 5 غرف نوم في المرابع العربية",          price: "9,500,000 درهم",          variant: "للبيع",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041534440-villa-pool-6.jpg?_wi=2",          imageAlt: "Spacious 5-bedroom villa with private pool in Arabian Ranches"},
      ]}
      title="العقارات الفاخرة المميزة"
      description="استعرض مجموعتنا المختارة بعناية من العقارات الأكثر فخامة وتميزاً في أرقى أحياء الإمارات. فرص استثمارية فريدة ومنازل الأحلام."
      tag="حصري"
      buttons={[
        {
          text: "تواصل عبر واتساب",          href: whatsappLink
        }
      ]}
    />
  </div>

  <div id="property-categories" data-section="property-categories">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "cat1",          title: "الفلل الفاخرة",          tags: [
            "للبيع",            "للإيجار"],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=w788vr&_wi=1",          imageAlt: "Luxury Villa Icon"},
        {
          id: "cat2",          title: "الشقق العصرية",          tags: [
            "مفروشة",            "غير مفروشة"],
          imageSrc: "http://img.b2bpic.net/free-vector/real-estate-infographic-with-skyscrapers_23-2147550989.jpg?_wi=1",          imageAlt: "Modern Apartment Icon"},
        {
          id: "cat3",          title: "العقارات التجارية",          tags: [
            "مكاتب",            "محلات"],
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-house-silhouette_23-2150281528.jpg?_wi=1",          imageAlt: "Commercial Property Icon"},
      ]}
      title="اكتشف العقارات حسب الفئة"
      description="سواء كنت تبحث عن فيلا عائلية، شقة عصرية، أو عقار تجاري، لدينا الخيار المثالي لك."
      tag="تصفح"
    />
  </div>

  <div id="featured-agents" data-section="featured-agents">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "a1",          name: "محمد السبع",          role: "وسيط عقاري معتمد",          company: "النجوم السبعة",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-bearded-guy-posing-against-white-wall_176420-30580.jpg?_wi=1",          imageAlt: "محمد السبع"
        },
        {
          id: "a2",          name: "فاطمة الزهراء",          role: "خبير عقاري",          company: "النجوم السبعة",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-arabic-businesswoman_181624-51783.jpg?_wi=1",          imageAlt: "فاطمة الزهراء"
        },
        {
          id: "a3",          name: "علي الخالد",          role: "مستشار استثماري",          company: "النجوم السبعة",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-arab-man-making-thumbs-up_23-2148135891.jpg?_wi=1",          imageAlt: "علي الخالد"
        },
        {
          id: "a4",          name: "مريم العلي",          role: "أخصائية عقارات",          company: "النجوم السبعة",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-indian-woman-posing-sari_23-2149405629.jpg?_wi=1",          imageAlt: "مريم العلي"
        },
        {
          id: "a5",          name: "أحمد الشمسي",          role: "مدير مبيعات",          company: "النجوم السبعة",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-of-young-man_181624-30691.jpg?_wi=1",          imageAlt: "أحمد الشمسي"
        }
      ]}
      kpiItems={[
        {
          value: "+200",          label: "وسطاء معتمدون"
        },
        {
          value: "4.8/5",          label: "متوسط التقييم"
        },
        {
          value: "✓",          label: "وكالات موثوقة"}
      ]}
      title="الوسطاء والوكالات المعتمدة"
      description="تعرف على فريقنا من الخبراء العقاريين المعتمدين والوكالات الموثوقة لدينا، مع تقييماتهم الحقيقية من العملاء."
      tag="تقييمات الوسطاء"
      tagIcon={Star}
      buttons={[
        {
          text: "تحدث مع وسيط عبر واتساب",          href: whatsappLink
        }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "سارة محمد",          role: "مستثمرة",          company: "مجموعة الفجر",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1674.jpg?_wi=1",          imageAlt: "Sarah Mohammad"},
        {
          id: "t2",          name: "خالد أحمد",          role: "رجل أعمال",          company: "الشركة الدولية",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/muslim-woman-with-hijab-leaving-hotel-smiling-while-being-vacation_23-2149309153.jpg?_wi=1",          imageAlt: "Khaled Ahmed"},
        {
          id: "t3",          name: "ليلى حسن",          role: "مديرة تسويق",          company: "إبداع ديزاين",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-office-employers-thumbing-up-smiling-two-happy-professional-businesswomen-standing-together-posing-meeting-room-teamwork-business-cooperation-concept_74855-6924.jpg?_wi=1",          imageAlt: "Laila Hassan"},
        {
          id: "t4",          name: "يوسف منصور",          role: "مهندس",          company: "العمران الحديث",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-mature-business-leader-with-laptop_74855-3534.jpg?_wi=1",          imageAlt: "Youssef Mansour"},
        {
          id: "t5",          name: "فاطمة سعيد",          role: "طبيبة",          company: "مستشفى الأمل",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-handsome-corporate-man-suit-smiling-showing-thumbs-up-praise-work-good-job-saying-yes-standing-white-background_176420-49993.jpg?_wi=1",          imageAlt: "Fatima Said"},
      ]}
      kpiItems={[
        {
          value: "+500",          label: "عميل سعيد"},
        {
          value: "4.9/5",          label: "متوسط التقييم"},
        {
          value: "+1000",          label: "صفقة ناجحة"},
      ]}
      title="ماذا يقول عملاؤنا عنا؟"
      description="نحن نفخر بالثقة التي نكتسبها من عملائنا وبالتجارب الإيجابية التي نقدمها لهم. استمع إلى قصص نجاحهم."
      tag="آراء العملاء"
    />
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
          text: "تحدث مع خبير",          href: "#contact-cta"},
        {
          text: "اطلب عقاراً",          href: "#contact-cta"},
        {
          text: "تواصل عبر واتساب",          href: whatsappLink
        }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1780147263173-fsq26gp3.jpg"
      logoAlt="النجوم السبعة للعقارات"
      logoText="النجوم السبعة للعقارات — منذ 2010"
      copyrightText="© 2024 النجوم السبعة للعقارات. جميع الحقوق محفوظة."
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