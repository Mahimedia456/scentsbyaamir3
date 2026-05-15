import bottle from "../assets/bottle.png";

export const products = [
  {
    id: 1,
    name: "Elyndor",
    slug: "elyndor-inspired-by-roja-elysium",
    inspiredBy: "Inspired by Roja Elysium",
    category: "men",
    categoryLabel: "Men",
    family: "Fresh Luxury",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A fresh, energetic and premium masculine fragrance crafted for confidence.",
    story:
      "Elyndor is made for men who prefer clean power, fresh luxury and a polished signature scent. It opens bright, settles smooth, and leaves a confident trail.",
    notes: {
      top: ["Bergamot", "Lemon", "Grapefruit"],
      heart: ["Lavender", "Jasmine", "Pineapple"],
      base: ["Musk", "Amber", "Woods"],
    },
    tags: ["Fresh", "Citrus", "Luxury", "Office"],
    occasions: ["Daily Wear", "Office", "Summer", "Meetings"],
  },
  {
    id: 2,
    name: "Vauren",
    slug: "vauren-inspired-by-ysl-tuxedo",
    inspiredBy: "Inspired by YSL Tuxedo",
    category: "men",
    categoryLabel: "Men",
    family: "Spicy Amber",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A bold spicy amber fragrance with a premium evening-wear personality.",
    story:
      "Vauren is dark, dressed-up and sophisticated. It is designed for evenings, formal occasions and people who want a strong signature presence.",
    notes: {
      top: ["Spices", "Violet Leaf", "Bergamot"],
      heart: ["Rose", "Patchouli", "Amber"],
      base: ["Vanilla", "Musk", "Woods"],
    },
    tags: ["Spicy", "Amber", "Formal", "Luxury"],
    occasions: ["Evening", "Wedding", "Date Night", "Formal"],
  },
  {
    id: 3,
    name: "Desert Soul",
    slug: "desert-soul-inspired-by-ombre-nomade",
    inspiredBy: "Inspired by Ombre Nomade",
    category: "unisex",
    categoryLabel: "Unisex",
    family: "Dark Oud",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A deep oud fragrance with warm amber, smoky wood and royal intensity.",
    story:
      "Desert Soul is built around oud, rose and amber. It feels mysterious, royal and long-lasting, perfect for anyone who wants a powerful luxury trail.",
    notes: {
      top: ["Saffron", "Raspberry", "Rose"],
      heart: ["Oud", "Amber", "Incense"],
      base: ["Leather", "Musk", "Smoky Woods"],
    },
    tags: ["Oud", "Smoky", "Amber", "Royal"],
    occasions: ["Evening", "Winter", "Wedding", "Luxury Events"],
  },
  {
    id: 4,
    name: "Dark Seduction",
    slug: "dark-seduction",
    inspiredBy: "Inspired by Black Opium",
    category: "women",
    categoryLabel: "Women",
    family: "Sweet Seductive",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A sweet, dark and addictive feminine fragrance with coffee and vanilla.",
    story:
      "Dark Seduction is glamorous, warm and magnetic. It blends sweetness with sensual depth, making it perfect for nights, dates and confident moments.",
    notes: {
      top: ["Pear", "Pink Pepper", "Orange Blossom"],
      heart: ["Coffee", "Jasmine", "Almond"],
      base: ["Vanilla", "Patchouli", "Cedar"],
    },
    tags: ["Sweet", "Vanilla", "Seductive", "Night"],
    occasions: ["Date Night", "Evening", "Party", "Winter"],
  },
  {
    id: 5,
    name: "Amerel",
    slug: "amerel-inspired-by-dior-jadore",
    inspiredBy: "Inspired by Dior J'adore",
    category: "women",
    categoryLabel: "Women",
    family: "Elegant Floral",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A graceful floral fragrance made for elegance, softness and charm.",
    story:
      "Amerel is feminine, polished and radiant. It feels clean, floral and luxurious, ideal for daily elegance and special occasions.",
    notes: {
      top: ["Pear", "Melon", "Magnolia"],
      heart: ["Jasmine", "Rose", "Tuberose"],
      base: ["Musk", "Vanilla", "Cedar"],
    },
    tags: ["Floral", "Elegant", "Soft", "Luxury"],
    occasions: ["Daily Wear", "Gift", "Wedding", "Office"],
  },
  {
    id: 6,
    name: "Cherelle",
    slug: "cherelle-inspired-by-dior-oud-ispahan",
    inspiredBy: "Inspired by Dior Oud Ispahan",
    category: "unisex",
    categoryLabel: "Unisex",
    family: "Rose Oud",
    price: 7600,
    oldPrice: 9500,
    size: "50ml",
    image: bottle,
    rating: 5,
    short:
      "A rich rose and oud blend with warm oriental luxury and depth.",
    story:
      "Cherelle combines rose, oud and amber into a refined unisex signature. It is bold, warm and elegant with a premium Arabic feel.",
    notes: {
      top: ["Rose", "Labdanum", "Saffron"],
      heart: ["Oud", "Patchouli", "Amber"],
      base: ["Sandalwood", "Musk", "Resin"],
    },
    tags: ["Rose", "Oud", "Amber", "Unisex"],
    occasions: ["Luxury Events", "Evening", "Wedding", "Winter"],
  },
  {
    id: 7,
    name: "Men's Tester Box",
    slug: "mens-perfume-tester-box",
    inspiredBy: "5 x 5ml Luxury Perfume Testers",
    category: "tester-box",
    categoryLabel: "Tester Box",
    family: "Discovery Set",
    price: 2500,
    oldPrice: 3200,
    size: "5 x 5ml",
    image: bottle,
    rating: 5,
    short:
      "A curated tester box for trying multiple premium men’s fragrances.",
    story:
      "The tester box is perfect for discovering your signature scent before buying a full bottle. Try multiple moods, styles and fragrance families.",
    notes: {
      top: ["Fresh", "Spicy", "Citrus"],
      heart: ["Amber", "Leather", "Lavender"],
      base: ["Oud", "Musk", "Woods"],
    },
    tags: ["Tester", "Discovery", "Gift", "Men"],
    occasions: ["Gift", "Trial", "Daily Wear"],
  },
  {
    id: 8,
    name: "Female Tester Box",
    slug: "female-perfume-tester-box",
    inspiredBy: "5 x 5ml Luxury Perfume Testers",
    category: "tester-box",
    categoryLabel: "Tester Box",
    family: "Discovery Set",
    price: 2500,
    oldPrice: 3200,
    size: "5 x 5ml",
    image: bottle,
    rating: 5,
    short:
      "A curated tester box for exploring elegant women’s fragrances.",
    story:
      "A beautiful discovery set for women who want to try floral, sweet, fresh and seductive scents before choosing a signature perfume.",
    notes: {
      top: ["Fruity", "Floral", "Fresh"],
      heart: ["Rose", "Jasmine", "Coffee"],
      base: ["Vanilla", "Musk", "Amber"],
    },
    tags: ["Tester", "Discovery", "Gift", "Women"],
    occasions: ["Gift", "Trial", "Daily Wear"],
  },
];

export const collectionMeta = {
  men: {
    label: "Men",
    title: "Men’s Collection",
    kicker: "Bold / Fresh / Powerful",
    description:
      "Masculine fragrances crafted for confidence, office wear, evening presence and signature daily style.",
  },
  women: {
    label: "Women",
    title: "Women’s Collection",
    kicker: "Elegant / Floral / Seductive",
    description:
      "Feminine perfumes with soft florals, sweet warmth, elegance and unforgettable charm.",
  },
  unisex: {
    label: "Unisex",
    title: "Unisex Collection",
    kicker: "Oud / Amber / Signature",
    description:
      "Shared luxury scents built around oud, amber, musk, rose and deep oriental elegance.",
  },
  "tester-box": {
    label: "Tester Box",
    title: "Tester Box Collection",
    kicker: "Try / Discover / Choose",
    description:
      "Discovery sets designed to help you test different fragrances before choosing your full bottle.",
  },
};

export function formatPrice(price) {
  return `Rs ${Number(price || 0).toLocaleString("en-PK")}`;
}