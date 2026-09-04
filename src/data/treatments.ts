export interface TreatmentCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  benefits: string[];
  subTherapies?: {
    groupName: string;
    description?: string;
    therapies: string[];
  }[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "panchakarma",
    number: "01",
    title: "Panchakarma & Ayurvedic Therapies",
    description: "The ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance.",
    longDescription: "Panchakarma is Ayurveda's primary purification and detoxification treatment. It is a highly personalized, five-step process that releases deep-seated toxins from the body. Paired with classical therapies like Abhyanga and Shirodhara, this program restores your body's innate healing capacity and brings profound balance to your doshas.",
    image: "/panchakarma_male.webp",
    benefits: ["Deep Cellular Detoxification", "Restores Dosha Balance", "Enhances Immunity", "Reverses Aging Signs"],
    subTherapies: [
      {
        groupName: "Classical five-fold purification system",
        description: "Drawing out accumulated toxins and restoring the body's natural balance.",
        therapies: [
          "Abhyangam", "Pizhichil", "Podikizhi", "Elakizhi", 
          "Naranga Kizhi", "Njavara Kizhi", "Nasyam", "Shirodhara", 
          "Takradhara", "Ksheera Dhara", "Dhanyamla Dhara", "Dhoomapaanam"
        ]
      },
      {
        groupName: "Specialized Ayurvedic Therapies",
        therapies: [
          "Kati Vasti", "Greeva Vasti", "Janu Vasti", "Shiro Vasti", 
          "Shiro Abhyangam", "Shiropichu", "Shirolepam", "Shirodhara", "Thalapothichil"
        ]
      }
    ]
  },
  {
    id: "rejuvenation",
    number: "02",
    title: "Rejuvenation Programs",
    description: "Revitalize your tissues and energy levels with classical Rasayana therapies designed to promote longevity and vitality.",
    longDescription: "Our Rejuvenation (Rasayana) programs are designed to halt premature aging, improve cellular health, and restore vital energy (Ojas). Through specialized massages, herbal steam baths, and precise dietary regimens, we help you achieve a radiant complexion, physical strength, and mental clarity.",
    image: "/rejuvenation_male.webp",
    benefits: ["Boosts Vital Energy (Ojas)", "Improves Skin & Tissue Health", "Promotes Longevity", "Reduces Physical Fatigue"],
    subTherapies: [
      {
        groupName: "Body Rejuvenation",
        description: "Rasayana-inspired care to restore vitality, circulation and radiance from the outside in.",
        therapies: [
          "Body Scrub Massage",
          "Lymphatic Drainage Massage",
          "Ayurvedic Steam Bath",
          "Udwarthanam",
          "Stone Massage",
          "Foot Reflexology"
        ]
      }
    ]
  },
  {
    id: "pain-management",
    number: "03",
    title: "Pain Management",
    description: "Natural, non-invasive Ayurvedic solutions for chronic pain, joint stiffness, and musculoskeletal disorders.",
    longDescription: "Chronic pain is often a result of aggravated Vata dosha and accumulated toxins (Ama) in the joints and tissues. Our specialized pain management therapies include targeted warm oil applications (Kizhi), localized bastis, and herbal poultices to reduce inflammation, improve mobility, and provide lasting relief.",
    image: "/pain_management_male.webp",
    benefits: ["Reduces Joint Inflammation", "Improves Flexibility & Mobility", "Relieves Back & Neck Pain", "Non-invasive Healing"],
    subTherapies: [
      {
        groupName: "Joint & Bone Care",
        description: "Targeted protocols for joints, spine and soft tissue — combining diagnosis-led care with classical therapies.",
        therapies: [
          "Arthritis",
          "Rheumatoid Arthritis",
          "Osteoarthritis",
          "Joint & Sports Injury",
          "Frozen Shoulder",
          "Tennis Elbow",
          "Golfers Elbow",
          "Carpal Tunnel Syndrome",
          "Cervical Spondylosis",
          "Lumbar Spondylosis",
          "Low Back Pain",
          "Sciatica",
          "Varicose Veins",
          "Foot and Heel Pain Management",
          "Muscle Cramp and Sprain Management"
        ]
      },
      {
        groupName: "Pain Relief Therapies",
        therapies: [
          "Kati Vasti",
          "Greeva Vasti",
          "Janu Vasti",
          "Upanaham",
          "Swedana Therapy (Sudation Therapy)"
        ]
      }
    ]
  },
  {
    id: "stress-relief",
    number: "04",
    title: "Stress Relief & Mental Wellness",
    description: "Soothe your nervous system and find profound mental clarity through deeply relaxing therapies like Shirodhara.",
    longDescription: "In today's fast-paced world, mental burnout is common. Our stress relief programs focus on calming the mind and nervous system. Signature treatments like Shirodhara (continuous pouring of warm herbal oil on the forehead) induce a state of deep meditation, reducing anxiety, insomnia, and mental fatigue.",
    image: "/images/treatment_shirodhara.webp",
    benefits: ["Alleviates Anxiety & Stress", "Improves Sleep Quality", "Enhances Focus & Clarity", "Balances the Nervous System"],
    subTherapies: [
      {
        groupName: "Mental Wellness Therapies",
        description: "Calming, grounding therapies for the nervous system — quieting the mind as much as the body.",
        therapies: [
          "Stress & Anxiety Management",
          "Insomnia Management",
          "Migraine Management",
          "Shirodhara",
          "Takradhara",
          "Shiro Abhyanga",
          "Shiro Vasti",
          "Shiro Pichu",
          "Shiro Lepam"
        ]
      }
    ]
  },
  {
    id: "womens-wellness",
    number: "05",
    title: "Women's Wellness",
    description: "Holistic care addressing the unique physiological and hormonal needs of women through every stage of life.",
    longDescription: "Ayurveda offers profound wisdom for women's health. Our specialized programs address hormonal imbalances, menstrual irregularities, pre/post-natal care, and menopausal transitions. We combine classical therapies, herbal formulations, and dietary guidance to support feminine vitality and hormonal harmony.",
    image: "/womens_wellness.webp",
    benefits: ["Balances Hormones Naturally", "Supports Reproductive Health", "Eases Menopausal Transitions", "Post-natal Rejuvenation"],
    subTherapies: [
      {
        groupName: "Women's Wellness Therapies",
        description: "Care across every life stage — from hormonal balance to prenatal, neonatal and postnatal support.",
        therapies: [
          "PMOS / PCOS (Polycystic Ovary Syndrome)",
          "Leucorrhoea",
          "Prenatal Care",
          "Neonatal Care",
          "Postnatal Care",
          "Udara Veshtanam"
        ]
      }
    ]
  },
  {
    id: "lifestyle-guidance",
    number: "06",
    title: "Lifestyle Guidance",
    description: "Personalized daily routines (Dinacharya) and dietary plans based on your unique mind-body constitution.",
    longDescription: "True health extends beyond the treatment room. Our expert Ayurvedic practitioners provide comprehensive lifestyle counseling. By understanding your unique Prakriti (constitution), we guide you in adopting the right diet, daily habits, and seasonal routines to maintain optimal health effortlessly.",
    image: "/lifestyle_guidance_male.webp",
    benefits: ["Customized Diet Plans", "Daily Routine (Dinacharya) Setup", "Improves Digestion (Agni)", "Sustainable Weight Management"],
    subTherapies: [
      {
        groupName: "Lifestyle & Condition Management",
        description: "Managing chronic, lifestyle-driven conditions through diet, routine and Ayurvedic protocol.",
        therapies: [
          "Obesity and Weight Management",
          "Dyslipidemia Management (High Cholesterol)",
          "Diabetes Management",
          "Hypertension Management (High BP)"
        ]
      }
    ]
  },
  {
    id: "preventive-healthcare",
    number: "07",
    title: "Preventive Healthcare",
    description: "Proactive Ayurvedic care to build resilience, enhance immunity, and prevent illnesses before they manifest.",
    longDescription: "The highest goal of Ayurveda is to maintain the health of the healthy. Our preventive programs identify subtle imbalances before they become chronic diseases. Through seasonal detoxifications (Ritucharya), immune-boosting herbs, and periodic therapies, we fortify your body's natural defense mechanisms.",
    image: "/preventive_yoga.webp",
    benefits: ["Strengthens Natural Immunity", "Prevents Seasonal Illnesses", "Identifies Early Imbalances", "Maintains Long-term Health"],
    subTherapies: [
      {
        groupName: "Digestive Health",
        description: "Everyday health, addressed early — digestion, skin and hair, ENT and eye care, and whole-life consultation.",
        therapies: [
          "Gastrointestinal Conditions",
          "Gastritis",
          "GERD (Acid Reflux)",
          "Irritable Bowel Syndrome (IBS)",
          "Constipation",
          "Gall Bladder Stone"
        ]
      },
      {
        groupName: "Skin & Hair Care",
        therapies: [
          "Beauty & Skin Care",
          "Eczema Management",
          "Urticaria Management",
          "Psoriasis Management",
          "Acne Management",
          "Anti-Dandruff Treatment",
          "Hair Fall Treatment",
          "Mukha Lepam",
          "Shiro Lepam",
          "Shiro Pichu",
          "Herbal Facial (5 Steps)"
        ]
      },
      {
        groupName: "ENT & Eye Care",
        therapies: [
          "Dry Eyes",
          "Sinusitis Management",
          "Anjana Therapy",
          "Karnapooranam Therapy",
          "Karnadhupanam Therapy",
          "Netratarpanam Therapy",
          "Netrasekam Therapy",
          "Netrapooranam Therapy"
        ]
      },
      {
        groupName: "General Wellness",
        therapies: [
          "Preventive Health Consultation",
          "Geriatric Care",
          "Ayurvedic Lifestyle Consultation",
          "Ayurvedic Diet Consultation",
          "Daily Routine Guidance (Dinacharya)",
          "Seasonal Regimen (Ritucharya)",
          "Personalized Nutrition Counselling"
        ]
      }
    ]
  }
];
