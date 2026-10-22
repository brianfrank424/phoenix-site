export interface Service {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  includes: string[];
  image: string;
  imageAlt: string;
}

// Order here is the order on the site.
export const services: Service[] = [
  {
    slug: "kitchens-baths",
    name: "Kitchens and baths",
    summary: "Full remodels or targeted updates: cabinets, counters, tile, fixtures and layout changes.",
    intro:
      "Kitchens and bathrooms are the rooms people use hardest and notice most. We handle the whole job, from demo through tile, fixtures and trim, with one crew start to finish.",
    includes: [
      "Full kitchen and bathroom remodels",
      "Cabinets and countertops",
      "Tile floors, backsplashes and showers",
      "Plumbing fixtures and vanities",
      "Layout changes and new lighting",
    ],
    image: "/images/kitchen.webp",
    imageAlt: "Remodeled kitchen",
  },
  {
    slug: "basements-living-spaces",
    name: "Basements and living spaces",
    summary: "Finished basements, flooring, paint, trim and stairs.",
    intro:
      "A finished basement or a refreshed living area changes how a house lives day to day. We frame, finish and trim it out so it feels like it was always part of the home.",
    includes: [
      "Finished basements",
      "Flooring installation",
      "Interior painting",
      "Trim, doors and millwork",
      "Stairs and railings",
    ],
    image: "/images/staircase.webp",
    imageAlt: "Rebuilt staircase and trim",
  },
  {
    slug: "whole-home-renovations",
    name: "Whole-home renovations",
    summary: "Several rooms or the whole house, planned and built as one project.",
    intro:
      "When a house needs more than one room done, it pays to plan it as one project. We sequence the work so trades are not undoing each other, and one crew carries it through.",
    includes: [
      "Multi-room remodels",
      "Full interior renovations",
      "Planning and sequencing the work",
      "Coordinating interior and exterior work",
    ],
    image: "/images/living-room.webp",
    imageAlt: "Open living area after renovation",
  },
  {
    slug: "roofing-siding-windows",
    name: "Roofing, siding and windows",
    summary: "Exterior work on its own or as part of a larger renovation.",
    intro:
      "Roofing, siding and windows protect everything inside. We take them on as standalone jobs or as part of a bigger renovation.",
    includes: [
      "Roof repairs and replacements",
      "Vinyl, cedar and engineered siding",
      "Window replacement",
      "Porches and exterior trim",
      "Exterior painting",
    ],
    image: "/images/exterior.webp",
    imageAlt: "Home exterior with renovated porches",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
