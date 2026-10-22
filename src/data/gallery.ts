export interface Photo {
  src: string;
  alt: string;
  service: string; // service slug
}

// Newest first. Add a photo by dropping the file in public/images and adding a line here.
export const gallery: Photo[] = [
  { src: "/images/living-room.webp", alt: "Renovated living area with refinished hardwood floors", service: "whole-home-renovations" },
  { src: "/images/kitchen.webp", alt: "Renovated kitchen with white cabinets", service: "kitchens-baths" },
  { src: "/images/bathroom.webp", alt: "Renovated bathroom with new vanity", service: "kitchens-baths" },
  { src: "/images/staircase.webp", alt: "Rebuilt staircase with new railings", service: "basements-living-spaces" },
  { src: "/images/exterior.webp", alt: "Brick home with renovated double porches", service: "roofing-siding-windows" },
];
