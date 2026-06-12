export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price?: number;
  features: ProductFeature[];
  images: string[];
}
