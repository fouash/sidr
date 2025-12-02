export interface Product {
  id: number;
  name: string;
  price: string;
  weight: string;
  image: string;
  description: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  ABOUT = 'ABOUT',
  EXPERT = 'EXPERT',
  CONTACT = 'CONTACT',
  BENEFITS = 'BENEFITS',
  SIDR_HAIR = 'SIDR_HAIR',
  SIDR_SKIN = 'SIDR_SKIN',
  SIDR_BODY = 'SIDR_BODY',
  SIDR_RECIPES = 'SIDR_RECIPES',
  SIDR_GUIDE = 'SIDR_GUIDE',
  BLOG = 'BLOG'
}