// src/config/menuConfig.js

export const siteConfig = {
  companyName: "Addverb",
  tagline: "Warehouse Automation that delivers value!",
  topLinks: [
    { label: "Contact", href: "https://addverb.com/contact-us/" },
  ],
  iconLinks: [
    { label: "Facebook", href: "https://www.facebook.com/AddverbTech/", icon: "/src/assets/fb.svg" },
    { label: "Twitter", href: "https://x.com/Addverb_Tech", icon: "🐦" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/addverb/", icon: "💼" },
    { label: "Instagram", href: "#", icon: "📸" },
  ],
};

export const menuConfig = {
  mainMenus: [
    {
      label: "Industry",
      href: "https://addverb.com/industry/",
      children: [
        { label: "Automotive & Tyre", href: "https://addverb.com/industry/automotive-and-tyre-automation/" },
        { label: "Consumer Goods", href: "https://addverb.com/industry/consumer-goods-warehouse-automation/" },
        { label: "Grocery", href: "https://addverb.com/industry/intralogistics-solutions-for-grocery/" },
        { label: "Pharma & Healthcare", href: "https://addverb.com/industry/pharma-and-e-pharmacy-automation/" },
        { label: "Chemicals", href: "https://addverb.com/industry/chemicals-and-petrochemicals-industry-automation/" },
        { label: "Solar & Battery", href: "https://addverb.com/industry/solar-and-battery-automation/" },
        { label: "3PL & Logistics", href: "https://addverb.com/industry/third-party-logistics-automation/" },
        { label: "Cold Storage", href: "https://addverb.com/industry/cold-storage-automation/" },
        { label: "E-Commerce", href: "https://addverb.com/industry/ecommerce-supply-chain-automation/" },
        { label: "Fashion", href: "https://addverb.com/industry/fashion-supply-chain-management/" },
        { label: "Semiconductors", href: "https://addverb.com/industry/semiconductors-automation/" },
      ],
    },
    {
      label: "Solutions",
      children: [
        {
          label: "By Functionality",
          href: "https://addverb.com/functionality/",
          children: [
            { label: "Material Movement", href: "https://addverb.com/solutions_category/material-movements/" },
            { label: "Sortation", href: "https://addverb.com/solutions_category/sortation/" },
            { label: "Picking", href: "https://addverb.com/solutions_category/picking/" },
            { label: "Storage", href: "https://addverb.com/solutions_category/storage/" },
            { label: "Reverse Logistics", href: "https://addverb.com/solutions_category/reverse-logistics/" },
          ],
        },
        {
          label: "By Products",
          href: "https://addverb.com/automated-warehouse-robots/",
          children: [
            {
              label: "Mobile Robots",
              href: "https://addverb.com/product-category/mobile-robots/",
              children: [
                { label: "Autonomous Forklift", href: "https://addverb.com/products/autonomous-forklift/" },
                { label: "Autonomous Mobile Robot", href: "https://addverb.com/autonomous-mobile-robot/" },
                { label: "Multi-Carton Picking Robot", href: "https://addverb.com/multi-carton-picking-robot/" },
                { label: "Rail Guided Vehicle", href: "https://addverb.com/rail-guided-vehicle/" },
              ],
            },
            {
              label: "Sorting Robots",
              href: "https://addverb.com/product-category/sorting-robots/",
              children: [
                { label: "Robotic Sorter", href: "https://addverb.com/robotic-sorter/" },
                { label: "Vertical Sortation Robot", href: "https://addverb.com/vertical-sortation-robot/" },
              ],
            },
            {
              label: "ASRS",
              href: "https://addverb.com/product-category/automated-storage-and-retrieval-system-asrs/",
              children: [
                { label: "4 Way Pallet Shuttle", href: "https://addverb.com/4-way-pallet-shuttle/" },
                { label: "Mother-Child Shuttle", href: "https://addverb.com/mother-child-shuttle/" },
                { label: "Pallet Shuttle", href: "https://addverb.com/pallet-shuttles/" },
                { label: "Crane ASRS", href: "https://addverb.com/crane-asrs/" },
                { label: "Carton Shuttle", href: "https://addverb.com/carton-shuttle/" },
                { label: "Multi Level Shuttle", href: "https://addverb.com/multi-level-shuttle/" },
              ],
            },
            {
              label: "Picking Systems",
              href: "https://addverb.com/product-category/picking-systems/",
              children: [
                { label: "Horizontal Carousel", href: "https://addverb.com/products/horizontal-carousel-system/" },
                { label: "Pick-to-Light", href: "https://addverb.com/pick-to-light/" },
              ],
            },
            {
              label: "Software",
              href: "https://addverb.com/software-overview/",
              children: [
                { label: "WMS", href: "https://addverb.com/software/warehouse-management-system/" },
                { label: "WES", href: "https://addverb.com/software/warehouse-execution-system/" },
                { label: "WCS", href: "https://addverb.com/software/warehouse-control-system/" },
                { label: "Fleet Management", href: "https://addverb.com/software/fleet-management-system/" },
              ],
            },
          ],
        },
      ],
    },
    { label: "Service", href: "https://addverb.com/after-sales-service-support/" },
    {
      label: "News Room",
      children: [
        { label: "Case Studies", href: "https://addverb.com/case-studies/" },
        { label: "Blogs", href: "https://addverb.com/blog/" },
        { label: "Whitepapers", href: "https://addverb.com/whitepaper/" },
        { label: "Events", href: "https://addverb.com/event/" },
        { label: "News", href: "https://addverb.com/press-release-listing/" },
        { label: "Podcasts", href: "https://addverb.com/podcasts/" },
        { label: "Sustainability", href: "https://addverb.com/sustainability/" },
      ],
    },
    {
      label: "More",
      children: [
        { label: "Careers", href: "https://careers.addverb.com/" },
        { label: "About Us", href: "https://addverb.com/about-us/" },
        { label: "Partners", href: "https://addverb.com/partnerships-and-alliances/" },
      ],
    },
  ],
  iconLinks: [
    { label: "Podcasts", href: "https://addverb.com/podcasts/", icon: "🎙️" },
    { label: "Enquire", href: "https://addverb.com/contact-us/", icon: "❓" },
    { label: "Blog", href: "https://addverb.com/blog/", icon: "📝" },
    { label: "Support", href: "https://support.addverb.com/", icon: "🛠️" },
  ],
};
