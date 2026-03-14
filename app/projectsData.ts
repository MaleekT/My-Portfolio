export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "Gods Time Is The Best Textile Stores",
    url: "https://gods-time-is-the-best-textile-stores.webflow.io",
    category: "E-Commerce / Retail",
    description:
      "A faith-inspired textile retail experience blending devotional warmth with clean, conversion-focused storefront design.",
    image: "/textile.png",
  },
  {
    id: "02",
    title: "Hayes Valley Interior Design",
    url: "https://hayessvalleyinteriordesign.webflow.io",
    category: "Interior Design / Lifestyle",
    description:
      "A refined digital presence for a boutique interior design studio, evoking the curated, neighbourhood character of San Francisco's Hayes Valley.",
    image: "/hayes.png",
  },
  {
    id: "03",
    title: "Melons Site",
    url: "https://melons-site.webflow.io",
    category: "Digital Banking / Fintech",
    description:
      "A playful yet polished brand site for a fresh produce concept, balancing organic energy with clean, appetite-driven design.",
    image: "/melons.png",
  },
  {
    id: "04",
    title: "Vantage Point",
    url: "https://vantage-point-665ec9.webflow.io",
    category: "Saas / infrastructure",
    description:
      "A high-performance cloud architecture and design agency that builds scalable, fault-tolerant SaaS platforms through elite engineering and premium UI/UX",
    image: "/vantage.png",
  },
];