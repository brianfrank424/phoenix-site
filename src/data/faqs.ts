import { townList } from "./site";

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  { q: "Do you charge for estimates?", a: "No. Estimates are free." },
  { q: "What areas do you serve?", a: `We work across Central New York, including ${townList}.` },
  { q: "How long does a project take?", a: "It depends on the scope. Projects run anywhere from a few days to a few months." },
  { q: "Can we stay in the house during a renovation?", a: "It depends on the scope of the work. We will talk it through with you when we look at the project." },
  { q: "Do you use subcontractors?", a: "No. Every job is done by our own crew." },
];
