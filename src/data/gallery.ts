export interface Photo {
  src: string;
  alt: string;
  service?: string; // service slug, if the photo belongs to one
  featured?: boolean; // shown in the home page row
}

// Add a photo by dropping the file in public/images and adding a line here.
export const gallery: Photo[] = [
  // Kitchens and baths
  { src: "/images/kitchen-dark-cabinets-wide.webp", alt: "Kitchen with dark cabinets, island and tile backsplash", service: "kitchens-baths", featured: true },
  { src: "/images/kitchen-navy-cabinets.webp", alt: "Kitchen with navy cabinets and mosaic backsplash", service: "kitchens-baths", featured: true },
  { src: "/images/kitchen-dark-cabinets.webp", alt: "L-shaped kitchen with dark cabinets and quartz counters", service: "kitchens-baths" },
  { src: "/images/kitchen-dark-cabinets-2.webp", alt: "Kitchen with dark cabinets and stainless appliances", service: "kitchens-baths" },
  { src: "/images/kitchen-navy-cabinets-2.webp", alt: "Navy kitchen cabinets with range and microwave", service: "kitchens-baths" },
  { src: "/images/kitchen-backsplash.webp", alt: "Cabinets and glass tile backsplash", service: "kitchens-baths" },
  { src: "/images/kitchen-white.webp", alt: "Kitchen with white cabinets and new flooring", service: "kitchens-baths" },
  { src: "/images/shower-tile.webp", alt: "Tiled walk-in shower", service: "kitchens-baths" },
  { src: "/images/bathroom-vanity.webp", alt: "Bathroom with new vanity and lighting", service: "kitchens-baths" },
  { src: "/images/bathroom-tile.webp", alt: "Bathroom with tile floor and new vanity", service: "kitchens-baths" },

  // Living spaces and basements
  { src: "/images/open-kitchen-living.webp", alt: "Open kitchen and living area with hardwood floors", service: "living-spaces-basements", featured: true },
  { src: "/images/living-room.webp", alt: "Living room with refinished hardwood floors", service: "living-spaces-basements", featured: true },
  { src: "/images/finished-attic.webp", alt: "Finished attic room with hardwood floors", service: "living-spaces-basements" },
  { src: "/images/staircase.webp", alt: "Staircase with new railings and balusters", service: "living-spaces-basements" },
  { src: "/images/hardwood-living.webp", alt: "Hardwood floors in an open living area", service: "living-spaces-basements" },
  { src: "/images/living-room-2.webp", alt: "Living room opening to entry hall", service: "living-spaces-basements" },
  { src: "/images/dining-room.webp", alt: "Dining room with new floors and trim", service: "living-spaces-basements" },
  { src: "/images/dining-room-2.webp", alt: "Dining room with chandelier and hardwood floors", service: "living-spaces-basements" },
  { src: "/images/hallway-tile.webp", alt: "Hallway with mosaic tile floor", service: "living-spaces-basements" },

  // Whole-home renovations
  { src: "/images/exterior.webp", alt: "Brick two-family home after a whole-home renovation", service: "whole-home-renovations", featured: true },
  { src: "/images/exterior-in-progress.webp", alt: "Brick home during exterior work", service: "whole-home-renovations" },

  // Roofing, siding and windows
  { src: "/images/roofing-siding-blue.webp", alt: "Colonial home with new blue vinyl siding and roof", service: "roofing-siding-windows", featured: true },

  // Decks, porches and outdoor living
  { src: "/images/double-covered-deck.webp", alt: "Two-story double covered deck", service: "decks-porches-outdoor-living", featured: true },
  { src: "/images/outdoor-fireplace.webp", alt: "Stone outdoor fireplace with paver patio", service: "decks-porches-outdoor-living", featured: true },
  { src: "/images/deck-steps-dusk.webp", alt: "Deck with wide curved steps at dusk", service: "decks-porches-outdoor-living", featured: true },
  { src: "/images/siding-exterior-2.webp", alt: "Multi-level deck on the back of a two-story home", service: "decks-porches-outdoor-living" },
  { src: "/images/siding-exterior.webp", alt: "Two-level deck with stairs down to the yard", service: "decks-porches-outdoor-living" },
  { src: "/images/double-covered-deck-2.webp", alt: "Double covered deck with white railings", service: "decks-porches-outdoor-living" },
  { src: "/images/two-story-deck.webp", alt: "Two-story deck on a sided home", service: "decks-porches-outdoor-living" },
  { src: "/images/covered-deck.webp", alt: "Covered deck with stairs and cable railing", service: "decks-porches-outdoor-living" },
  { src: "/images/covered-deck-2.webp", alt: "Covered deck with wide stairs", service: "decks-porches-outdoor-living" },
  { src: "/images/screened-porch.webp", alt: "Screened porch addition", service: "decks-porches-outdoor-living" },
  { src: "/images/porch-fireplace.webp", alt: "Stone fireplace on a covered porch", service: "decks-porches-outdoor-living" },
  { src: "/images/outdoor-fireplace-2.webp", alt: "Stacked stone outdoor fireplace and patio", service: "decks-porches-outdoor-living" },
  { src: "/images/outdoor-fireplace-patio.webp", alt: "Outdoor fireplace with stone seating wall", service: "decks-porches-outdoor-living" },
  { src: "/images/deck-stairs.webp", alt: "Deck stairs and privacy wall", service: "decks-porches-outdoor-living" },
  { src: "/images/deck-framing.webp", alt: "Multi-level deck framing during construction", service: "decks-porches-outdoor-living" },
  { src: "/images/deck-build.webp", alt: "Two-level deck under construction", service: "decks-porches-outdoor-living" },
  { src: "/images/deck-build-2.webp", alt: "Two-level deck framing", service: "decks-porches-outdoor-living" },
];

export const featuredPhotos = gallery.filter((p) => p.featured);
