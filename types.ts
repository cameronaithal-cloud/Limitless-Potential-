
export type Category = 'All' | 'Running' | 'Basketball' | 'Training' | 'Yoga' | 'Cycling';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
