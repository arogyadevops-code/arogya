export interface CarePlan {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const carePlans: CarePlan[] = [
  {
    id: "relax-rejuvenate",
    title: "Relax & Rejuvenate Program",
    description: "A calming, full-body reset combining classical Abhyangam, steam and therapeutic massage to release tension and restore energy.",
    image: "/images/care-plans/cp_relax.webp"
  },
  {
    id: "sports-recovery",
    title: "Sports Recovery & Rehabilitation",
    description: "Targeted therapies for athletes and active individuals to speed recovery from strain, injury and joint overuse.",
    image: "/images/care-plans/cp_sports.webp"
  },
  {
    id: "natural-beauty",
    title: "Natural Beauty & Skin Rejuvenation",
    description: "Herbal facials, Mukha Lepam and cleansing therapies for natural radiance from within, free of synthetic products.",
    image: "/images/care-plans/cp_beauty.webp"
  },
  {
    id: "spine-health",
    title: "Spine Health & Posture Care",
    description: "Kati and Greeva Vasti-led therapies to relieve spinal stiffness and correct long-term postural imbalance.",
    image: "/images/care-plans/cp_spine.webp"
  },
  {
    id: "stroke-recovery",
    title: "Stroke Recovery & Neuro Rehabilitation",
    description: "Structured Ayurvedic rehabilitation to support motor function, circulation and recovery after a neurological event.",
    image: "/images/care-plans/cp_stroke.webp"
  },
  {
    id: "migraine-relief",
    title: "Migraine Relief Program",
    description: "Shirodhara and Nasyam-based protocols to calm the nervous system and reduce migraine frequency and intensity.",
    image: "/images/care-plans/cp_migraine.webp"
  },
  {
    id: "comprehensive-pain",
    title: "Comprehensive Pain Relief Program",
    description: "Multi-modal approach combining herbal poultices and specialized massages for chronic joint and muscle pain.",
    image: "/images/care-plans/cp_pain.webp"
  },
  {
    id: "lifestyle-disease",
    title: "Lifestyle Disease Management",
    description: "Holistic interventions through diet, yoga, and natural therapies to manage conditions like diabetes and hypertension.",
    image: "/images/care-plans/cp_lifestyle.webp"
  },
  {
    id: "digestive-wellness",
    title: "Digestive Wellness Program",
    description: "Deep cleansing and Agni-restoring protocols to resolve chronic gut issues, bloating, and metabolic sluggishness.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "golden-years",
    title: "Golden Years Wellness Program",
    description: "Gentle, restorative care for seniors — supporting mobility, circulation and vitality with age-appropriate therapies.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "healthy-weight",
    title: "Healthy Weight Management",
    description: "Udwarthanam and metabolism-focused therapies paired with diet and lifestyle guidance for sustainable results.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "detox-rejuvenation",
    title: "Detox & Rejuvenation Therapy",
    description: "A guided Panchakarma-based cleanse to clear accumulated toxins and reset the body's natural rhythm.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "womens-40",
    title: "Women's 40+ Wellness Program",
    description: "Specialized therapies supporting hormonal balance, bone density, and emotional well-being during perimenopause and beyond.",
    image: "/images/care-plans/cp_womens_40.webp"
  },
  {
    id: "pregnancy-mother-care",
    title: "Pregnancy & Mother Care Program",
    description: "Pre and post-natal Ayurvedic care encompassing gentle massages, nourishing diets, and restorative practices.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness for IT & Banking Professionals",
    description: "Ergonomic and stress-relief therapies specifically designed to combat the effects of sedentary desk jobs and high-pressure roles.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  }
];
