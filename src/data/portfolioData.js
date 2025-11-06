// // src/data/portfolioData.js
// const portfolioProjects = [
//   {
//     id: 1,
//     title: "Ramadevi Foods | Indian Sweets Branding & Packaging",
//     category: "Food & Beverage",
//     tags: ["Packaging", "Branding"],
//     thumbnail: "https://picsum.photos/600/400?random=101",
//     description:
//       "Ramadevi Foods' identity celebrates the rich heritage of South Indian culinary traditions. Vibrant hues were used to evoke warmth and authenticity.",
//     client: "Ramadevi Foods",
//     challenge:
//       "Blend traditional motifs with a modern retail-ready packaging that communicates homemade quality.",
//     solutions:
//       "Created a warm color palette, traditional patterns, and illustrated packaging that feels premium yet familiar.",
//     images: [
//       "https://picsum.photos/1200/800?random=111",
//       "https://picsum.photos/1000/700?random=112",
//       "https://picsum.photos/1000/700?random=113"
//     ],
//   },

//   {
//     id: 2,
//     title: "E-Commerce Platform Redesign",
//     category: "Web",
//     tags: ["Web Development", "UI/UX"],
//     thumbnail: "https://picsum.photos/600/400?random=102",
//     description:
//       "A full redesign to improve conversion and mobile experience for an online retailer.",
//     client: "ShopKit",
//     challenge: "Improve conversion rates and mobile checkout flow.",
//     solutions:
//       "Simplified checkout, improved product pages, and implemented responsive components.",
//     images: [
//       "https://picsum.photos/1200/800?random=121",
//       "https://picsum.photos/1000/700?random=122",
//       "https://picsum.photos/1000/700?random=123"
//     ],
//   },

//   {
//     id: 3,
//     title: "Mobile App UI Kit",
//     category: "Mobile",
//     tags: ["Mobile App", "Design System"],
//     thumbnail: "https://picsum.photos/600/400?random=103",
//     description:
//       "A reusable UI kit for a cross-platform mobile app to speed up development.",
//     client: "AppWorks",
//     challenge: "Create consistent components across screens and platforms.",
//     solutions:
//       "Delivered a component library with tokens, guidelines, and example screens.",
//     images: [
//       "https://picsum.photos/1200/800?random=131",
//       "https://picsum.photos/1000/700?random=132",
//       "https://picsum.photos/1000/700?random=133"
//     ],
//   },

//   {
//     id: 4,
//     title: "Brand Identity for Startup X",
//     category: "Branding",
//     tags: ["Branding", "Identity"],
//     thumbnail: "https://picsum.photos/600/400?random=104",
//     description: "Full brand identity — logo, colors, type, and guidelines.",
//     client: "Startup X",
//     challenge: "Create a memorable identity for a competitive market.",
//     solutions: "Logo system, visual language, and brand usage guidelines.",
//     images: [
//       "https://picsum.photos/1200/800?random=141",
//       "https://picsum.photos/1000/700?random=142",
//       "https://picsum.photos/1000/700?random=143"
//     ],
//   },

//   {
//     id: 5,
//     title: "Analytics Dashboard",
//     category: "SaaS",
//     tags: ["Dashboard", "Data Viz"],
//     thumbnail: "https://picsum.photos/600/400?random=105",
//     description: "Interactive analytics dashboard for product and sales teams.",
//     client: "Insightly",
//     challenge: "Surface key metrics clearly without overwhelming users.",
//     solutions:
//       "Dashboard with customizable widgets, filtering, and export functionality.",
//     images: [
//       "https://picsum.photos/1200/800?random=151",
//       "https://picsum.photos/1000/700?random=152",
//       "https://picsum.photos/1000/700?random=153"
//     ],
//   },

//   {
//     id: 6,
//     title: "AI Proof-of-Concept",
//     category: "AI/ML",
//     tags: ["AI", "Prototype"],
//     thumbnail: "https://picsum.photos/600/400?random=106",
//     description:
//       "A prototype demonstrating an ML model integrated into a user-facing app.",
//     client: "DataLabs",
//     challenge: "Turn ML research into a usable demo quickly.",
//     solutions: "Built a lightweight UI and connected model APIs for demoing.",
//     images: [
//       "https://picsum.photos/1200/800?random=161",
//       "https://picsum.photos/1000/700?random=162",
//       "https://picsum.photos/1000/700?random=163"
//     ],
//   }
// ];

// export default portfolioProjects;

// src/data/portfolioData.js
const portfolioProjects = [
  {
  id: 1,
  title: "Pawfect",
  category: "Food & Beverage",
  subtitle: "Full Brand Identity Package",
  tags: ["Packaging", "Branding", "Design"],
  thumbnail: `/ProjectImages/Project01/Pawfect-project-01.jpg`,
  description:
    "Public relations is extremely important because it helps shape how people think, trust, and feel about a brand, organization, or individual. It builds a positive image, maintains reputation, and creates meaningful connections with the public, media, customers, and stakeholders. PR helps build credibility—not by ads or paid promotions, but through strategic communication, storytelling, transparency, and trust-building. When done right, PR increases brand value, handles negative situations smoothly, improves customer loyalty, and influences public perception in a powerful way. In today’s competitive world, where every opinion spreads fast through social media and online platforms, public relations is not just useful—it is necessary for long-term success and growth.",
  goals:
    "Public relations is extremely important because it helps shape how people think, trust, and feel about a brand, organization, or individual. It builds a positive image, maintains reputation, and creates meaningful connections with the public, media, customers, and stakeholders. PR helps build credibility—not by ads or paid promotions, but through strategic communication, storytelling, transparency, and trust-building. When done right, PR increases brand value, handles negative situations smoothly, improves customer loyalty, and influences public perception in a powerful way. In today’s competitive world, where every opinion spreads fast through social media and online platforms, public relations is not just useful—it is necessary for long-term success and growth.",
  textBlock:
    "Public relations is extremely important because it helps shape how people think, trust, and feel about a brand, organization, or individual. It builds a positive image, maintains reputation, and creates meaningful connections with the public, media, customers, and stakeholders. PR helps build credibility—not by ads or paid promotions, but through strategic communication, storytelling, transparency, and trust-building. When done right, PR increases brand value, handles negative situations smoothly, improves customer loyalty, and influences public perception in a powerful way. In today’s competitive world, where every opinion spreads fast through social media and online platforms, public relations is not just useful—it is necessary for long-term success and growth.",
  person: {
    name: "Kristy",
    role: "Brand Designer",
    image: "https://picsum.photos/seed/kristy/200/200",
  },
  images: Array.from({ length: 18 }).map(
  (_, i) => `/ProjectImages/Project01/Pawfect-project-${String(i + 1).padStart(2, "0")}.jpg`
),

},

  {
    id: 2,
    title: "ShopKit",
    category: "Web Design & UX",
    subtitle: "Website Redesign",
    tags: ["UI/UX", "Web Redesign", "Conversion Optimization"],
    thumbnail: "https://picsum.photos/seed/shopkit-thumb/600/400",
    description:
      "ShopKit approached us to overhaul their e-commerce platform for a modern, mobile-first experience. The redesign improved navigation, boosted engagement, and streamlined checkout flows to enhance conversions.",
    goals:
      "Streamline the checkout process, improve mobile navigation, and enhance product discoverability to increase conversion rates.",
    textBlock:
      "The redesign focused on clarity, usability, and visual hierarchy. Optimized responsive components ensure seamless user experience across all devices.",
    person: {
      name: "Kristy",
      role: "Lead UX Designer",
      image: "https://picsum.photos/seed/kristy2/200/200",
    },
    images: Array.from({ length: 13 }).map(
      (_, i) => `https://picsum.photos/seed/shopkit${i + 1}/1600/1000`
    ),
  },
  {
    id: 3,
    title: "AppWorks",
    category: "Mobile Design",
    subtitle: "UI Kit Design",
    tags: ["UI Kit", "Design System", "Mobile App"],
    thumbnail: "https://picsum.photos/seed/appworks-thumb/600/400",
    description:
      "AppWorks needed a comprehensive UI kit for consistent, fast product development. We built a scalable design system that unified their mobile experience across platforms.",
    goals:
      "Deliver a reusable set of mobile components to ensure consistency and speed across iOS and Android apps.",
    textBlock:
      "The UI kit included standardized typography, buttons, forms, and icons, enabling developers to quickly implement screens while maintaining a consistent look and feel.",
    person: {
      name: "Kristy",
      role: "UI Designer",
      image: "https://picsum.photos/seed/kristy3/200/200",
    },
    images: Array.from({ length: 13 }).map(
      (_, i) => `https://picsum.photos/seed/appworks${i + 1}/1600/1000`
    ),
  },
  {
    id: 4,
    title: "Startup X",
    category: "Branding",
    subtitle: "Brand Identity Package",
    tags: ["Identity Design", "Logo", "Strategy"],
    thumbnail: "https://picsum.photos/seed/startupx-thumb/600/400",
    description:
      "Startup X was ready to redefine its market presence. We built a bold, adaptable brand system that reflects innovation and scalability while maintaining a sense of trust and clarity.",
    goals:
      "Build a unique, memorable brand identity that communicates innovation, trust, and flexibility across digital and print mediums.",
    textBlock:
      "The visual system combines bold typography, modern color palettes, and adaptable layouts to support diverse marketing and product applications.",
    person: {
      name: "Kristy",
      role: "Creative Director",
      image: "https://picsum.photos/seed/kristy4/200/200",
    },
    images: Array.from({ length: 13 }).map(
      (_, i) => `https://picsum.photos/seed/startupx${i + 1}/1600/1000`
    ),
  },
  {
    id: 5,
    title: "Insightly",
    category: "SaaS Design",
    subtitle: "Dashboard Design",
    tags: ["Dashboard", "Data Visualization", "Product UI"],
    thumbnail: "https://picsum.photos/seed/insightly-thumb/600/400",
    description:
      "Insightly wanted to simplify how users interact with complex data. We crafted a dashboard that balances clarity, depth, and interactivity for real-time analytics.",
    goals:
      "Create a dashboard interface that presents complex metrics clearly, enabling users to take meaningful action quickly.",
    textBlock:
      "The interface uses modular widgets, dynamic charts, and responsive layouts, making data accessible and actionable without overwhelming the user.",
    person: {
      name: "Kristy",
      role: "Product Designer",
      image: "https://picsum.photos/seed/kristy5/200/200",
    },
    images: Array.from({ length: 13 }).map(
      (_, i) => `https://picsum.photos/seed/insightly${i + 1}/1600/1000`
    ),
  },
  {
    id: 6,
    title: "DataLabs",
    category: "AI / Machine Learning",
    subtitle: "AI Prototype Platform",
    tags: ["AI", "Prototype", "Web App"],
    thumbnail: "https://picsum.photos/seed/datalabs-thumb/600/400",
    description:
      "We collaborated with DataLabs to showcase their AI models through an interactive, proof-of-concept platform. It demonstrated AI capabilities in real-time with intuitive user flows.",
    goals:
      "Demonstrate AI model capabilities with a lightweight, intuitive interface to facilitate stakeholder understanding and testing.",
    textBlock:
      "The PoC includes real-time AI outputs, responsive visualization, and minimal UI friction, enabling efficient user testing and feedback collection.",
    person: {
      name: "Kristy",
      role: "UX Engineer",
      image: "https://picsum.photos/seed/kristy6/200/200",
    },
    images: Array.from({ length: 13 }).map(
      (_, i) => `https://picsum.photos/seed/datalabs${i + 1}/1600/1000`
    ),
  },
];

export default portfolioProjects;
