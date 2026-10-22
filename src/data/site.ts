// Business details used across the site. Change them here, not in the pages.
export const site = {
  name: "Phoenix Property Partners",
  legalName: "Phoenix Property Partners LLC",
  tagline: "Remodel · Repair · Renew",
  area: "Central New York",
  towns: ["New Hartford", "Whitesboro", "Westmoreland", "Marcy", "Frankfort", "Utica"],
  phone: "315-794-5119",
  phoneHref: "tel:+13157945119",
  email: "info@phxpropertypartners.com",
  url: "https://phxpropertypartners.com",
};

// "New Hartford, Whitesboro, ... and Utica"
export const townList = `${site.towns.slice(0, -1).join(", ")} and ${site.towns.at(-1)}`;
