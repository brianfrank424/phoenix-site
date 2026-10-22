export interface Service {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  design: string;
  includes: string[];
  image: string;
  imageAlt: string;
}

// Order here is the order on the site.
export const services: Service[] = [
  {
    slug: "kitchens-baths",
    name: "Kitchens and baths",
    summary: "Full remodels or targeted updates, from layout and cabinets to tile and fixtures.",
    intro:
      "Kitchens and bathrooms are the rooms people use hardest and notice most. We take on everything from a full gut remodel to a cabinet and countertop refresh, with one crew from demo to the last fixture.",
    design:
      "Not sure what you want yet? We help you work out the layout, cabinets, counters, tile and fixtures before any work starts, so you know what the finished room will look like.",
    includes: [
      "Full kitchen remodels",
      "Bathroom remodels and updates",
      "Cabinets, countertops and islands",
      "Tile backsplashes, floors and showers",
      "Sinks, faucets, vanities and fixtures",
      "Layout changes, lighting and flooring",
    ],
    image: "/images/kitchen-dark-cabinets-wide.webp",
    imageAlt: "Kitchen with dark cabinets, island and tile backsplash",
  },
  {
    slug: "living-spaces-basements",
    name: "Living spaces and basements",
    summary: "Flooring, paint, trim, stairs, and finished attics and basements.",
    intro:
      "A refreshed living area or a newly finished attic or basement changes how a house lives day to day. We handle the floors, walls, trim and stairs so the space feels like it was always part of the home.",
    design:
      "We help you plan the space: flooring and paint choices, trim details, and how a finished attic or basement will be laid out and used.",
    includes: [
      "Hardwood, vinyl plank and tile flooring",
      "Interior painting",
      "Trim, doors and millwork",
      "Stairs, railings and balusters",
      "Finished attics and basements",
    ],
    image: "/images/open-kitchen-living.webp",
    imageAlt: "Open kitchen and living area with hardwood floors",
  },
  {
    slug: "whole-home-renovations",
    name: "Whole-home renovations",
    summary: "Several rooms or the whole house, planned and built as one project.",
    intro:
      "When a house needs more than one room done, it pays to plan it as one project. We sequence the work so trades are not undoing each other, and one crew carries it through from start to finish.",
    design:
      "We help you set priorities and a plan for the whole house, room by room, so the finishes work together and the work happens in the right order.",
    includes: [
      "Multi-room remodels",
      "Full interior renovations",
      "Kitchens, baths and floors done together",
      "Interior and exterior work planned as one project",
      "Planning and sequencing the work",
    ],
    image: "/images/exterior.webp",
    imageAlt: "Brick two-family home after a whole-home renovation",
  },
  {
    slug: "decks-porches-outdoor-living",
    name: "Decks, porches and outdoor living",
    summary: "Decks, covered and screened porches, patios and outdoor fireplaces.",
    intro:
      "Outdoor space is some of the most-used square footage a house has. We build single and multi-level decks, covered and screened porches, stairs and railings, and stone patios with outdoor fireplaces.",
    design:
      "We help you design it: size and layout, levels and stairs, railing and decking materials, and how it connects to the house and the yard.",
    includes: [
      "Single and multi-level decks",
      "Covered and screened porches",
      "Stairs and railings",
      "Paver patios",
      "Stone outdoor fireplaces",
    ],
    image: "/images/double-covered-deck.webp",
    imageAlt: "Two-story double covered deck",
  },
  {
    slug: "roofing-siding-windows",
    name: "Roofing, siding and windows",
    summary: "Roofs, siding and windows, on their own or as part of a renovation.",
    intro:
      "Roofing, siding and windows protect everything inside and set the look of the house from the street. We take them on as standalone jobs or as part of a bigger renovation.",
    design:
      "We help you choose materials and colors that suit the house, from shingle and siding styles to trim and window options.",
    includes: [
      "Roof repairs and full replacements",
      "Vinyl, cedar and engineered siding",
      "Window replacement",
      "Exterior trim and doors",
      "Exterior painting",
    ],
    image: "/images/roofing-siding-blue.webp",
    imageAlt: "Colonial home with new blue vinyl siding and roof",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
