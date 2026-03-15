const siteConfig = {
  brand: {
    name: "CodeHeR LLC",
    domain: "codeherllc.com",
    tagline: "Smart Websites. Powerful Infrastructure. Built for Growth."
  },

  business: {
    email: "info@codeherllc.com",
    phone: "",
    location: "Arizona Based | Serving Clients Across the U.S."
  },

  navigation: {
    ctaLabel: "Request a Quote",
    ctaTarget: "quote-modal"
  },

  hero: {
    eyebrow: "Arizona Based | Serving Clients Across the U.S.",
    heading: "Smart Websites. Powerful Infrastructure. Built for Growth.",
    description:
      "Professional website development, rebuilds, managed hosting, and technical support for businesses and organizations that need a reliable digital presence.",
    primaryCtaLabel: "Request a Quote",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "#services"
  },

  truststrip: {
    heading: "Built for reliability, clarity, and long-term support.",
    description:
      "CodeHeR LLC helps businesses and organizations build and maintain websites with clean development, transparent communication, and service that supports growth.",
    items: ["Reliable", "Transparent", "Full-Service", "Managed Hosting"]
  },

  services: {
    eyebrow: "Services",
    heading: "Built to Support the Full Life of Your Website",
    description:
      "From full builds to rebuilds, managed hosting, and technical support, CodeHeR LLC offers services designed to help businesses launch, improve, and maintain a strong web presence."
  },

  about: {
    eyebrow: "About",
    heading: "A Company Built to Deliver Clean, Reliable Web Solutions",
    paragraphs: [
      "CodeHeR LLC provides website development and support services for businesses and organizations that need a strong digital foundation without unnecessary complexity.",
      "The company focuses on clean builds, practical solutions, and long-term usability so clients have a website that works for their business today and can scale with them tomorrow."
    ]
  },

  footer: {
    description:
      "CodeHeR LLC provides website development, website rebuilds, managed hosting, and technical support for businesses and organizations across the United States.",
    links: [
      {
        id: "footer-services",
        label: "Services",
        href: "#services"
      },
      {
        id: "footer-about",
        label: "About",
        href: "#about"
      }
    ]
  },

  api: {
    baseUrl: "/api",
    quoteEndpoint: "/quotes"
  }
};

export default siteConfig;
