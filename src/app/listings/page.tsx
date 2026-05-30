"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import React from "react";

export default function ListingsPage() {
  const whatsappMessage = 'مرحبًا، أود الاستفسار عن أحد العقارات المعروضة على منصة النجوم السبعة للعقارات.';
  const whatsappNumber = '971501234567'; // Placeholder for office WhatsApp
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const sampleProperties = [
    {
      id: "prop1",      category: "Villa",      name: "فيلا فاخرة في دبي هيلز",      price: "15,000,000 درهم",      rating: 5,
      reviewCount: "42",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041530379-villa-interior-1.jpg?_wi=2",      imageAlt: "Luxury villa in Dubai Hills"},
    {
      id: "prop2",      category: "Apartment",      name: "شقة بنتهاوس مطلة على البحر",      price: "8,500,000 درهم",      rating: 4,
      reviewCount: "28",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041531235-penthouse-view-2.jpg?_wi=2",      imageAlt: "Sea view penthouse apartment"},
    {
      id: "prop3",      category: "Townhouse",      name: "تاون هاوس عصري في المرابع العربية",      price: "4,200,000 درهم",      rating: 4,
      reviewCount: "19",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041532057-townhouse-exterior-3.jpg?_wi=2",      imageAlt: "Modern townhouse in Arabian Ranches"},
    {
      id: "prop4",      category: "Villa",      name: "فيلا شاطئية في نخلة جميرا",      price: "30,000,000 درهم",      rating: 5,
      reviewCount: "55",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041532822-beach-villa-interior-4.jpg?_wi=2",      imageAlt: "Beachfront villa in Palm Jumeirah"},
    {
      id: "prop5",      category: "Apartment",      name: "شقة استوديو في وسط مدينة دبي",      price: "1,500,000 درهم",      rating: 3,
      reviewCount: "12",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041533681-apartment-bedroom-5.jpg?_wi=2",      imageAlt: "Studio apartment in Downtown Dubai"},
    {
      id: "prop6",      category: "Commercial",      name: "مكتب تجاري في مركز دبي المالي",      price: "7,000,000 درهم",      rating: 4,
      reviewCount: "20",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ERdh5u0Vj6gGA0J1BFm6r4sITF/uploaded-1718041534440-villa-pool-6.jpg?_wi=2",      imageAlt: "Commercial office in DIFC"},
    {
      id: "prop7",      category: "Villa",      name: "فيلا عائلية في البراري",      price: "18,000,000 درهم",      rating: 4,
      reviewCount: "30",      imageSrc: "http://img.b2bpic.net/free-photo/house-with-green-garden_1203-3467.jpg",      imageAlt: "Family villa in Al Barari"},
    {
      id: "prop8",      category: "Apartment",      name: "شقة بغرفتي نوم في دبي مارينا",      price: "2,800,000 درهم",      rating: 5,
      reviewCount: "48",      imageSrc: "http://img.b2bpic.net/free-photo/exterior-modern-building_1203-3636.jpg",      imageAlt: "Two-bedroom apartment in Dubai Marina"}
  ];

  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedSort, setSelectedSort] = React.useState("Price: Low to High");

  const categories = ["All", "Villa", "Apartment", "Townhouse", "Commercial"];
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Rating: High to Low"];

  const filters = [
    {
      label: "الفئة",      options: categories,
      selected: selectedCategory,
      onChange: setSelectedCategory,
    },
    {
      label: "الترتيب حسب",      options: sortOptions,
      selected: selectedSort,
      onChange: setSelectedSort,
    },
  ];

  const filteredAndSortedProducts = React.useMemo(() => {
    return sampleProperties
      .filter((product) =>
        selectedCategory === "All" || product.category === selectedCategory
      )
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (selectedSort === "Price: Low to High") {
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        }
        if (selectedSort === "Price: High to Low") {
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        }
        if (selectedSort === "Rating: High to Low") {
          return b.rating - a.rating;
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedSort]);

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
                name: "العقارات",                id: "/listings"},
              {
                name: "الوسطاء",                id: "/#featured-agents"},
              {
                name: "تواصل",                id: "/#contact-cta"},
            ]}
            brandName="النجوم السبعة للعقارات"
          />
        </div>

        <div id="property-listings" data-section="property-listings">
          <ProductCatalog
            layout="page"
            products={filteredAndSortedProducts}
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
            searchPlaceholder="ابحث عن عقارك المثالي..."
            filters={filters}
            emptyMessage="لم يتم العثور على عقارات مطابقة لبحثك."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
