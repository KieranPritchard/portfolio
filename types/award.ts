export type Award = {
  title: string;
  awardedBy: string;
  category: string;
  image?: string;          // path inside /public
  imageAlt?: string;       // description for screen readers
  objectPosition?: string; // crop focus, e.g. "50% 20%"
};