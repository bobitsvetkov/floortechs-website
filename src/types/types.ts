export type Page = "home" | "solutions" | "work" | "installation" | "contact";

export interface Credentials {
  emailJsPublicKey: string;
  emailJsServiceKey: string;
  emailJsTemplateKey: string;
  recaptchaSiteKey: string;
  googleMapsApiKey: string;
}

interface Industry {
  name: string;
  description: string;
}
export interface FlooringSolution {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: Industry[];
  imageUrl: string;
  primaryColor: string;
}

export interface FlooringService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  imageUrl: string;
}
