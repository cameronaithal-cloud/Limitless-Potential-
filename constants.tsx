
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velocity Elite Runner',
    category: 'Running',
    price: 159.99,
    rating: 4.8,
    image: 'https://picsum.photos/seed/run1/600/600',
    description: 'Designed for marathon speed, featuring carbon-fiber plates and ultra-light foam.',
    features: ['Carbon Plate', 'Breathable Mesh', 'Ultra-light Foam']
  },
  {
    id: '2',
    name: 'Apex Grip Basketballs',
    category: 'Basketball',
    price: 45.00,
    rating: 4.5,
    image: 'https://picsum.photos/seed/ball1/600/600',
    description: 'Professional grade composite leather with advanced sweat-wicking technology.',
    features: ['Deep Channels', 'Superior Grip', 'All-surface Durability']
  },
  {
    id: '3',
    name: 'Titan Power Rack',
    category: 'Training',
    price: 899.00,
    rating: 4.9,
    image: 'https://picsum.photos/seed/rack1/600/600',
    description: 'The ultimate center for your home gym. Heavy-duty steel construction.',
    features: ['1000lb Capacity', 'Safety Bars Included', 'Multi-grip Pull-up Bar']
  },
  {
    id: '4',
    name: 'Zen Flow Yoga Mat',
    category: 'Yoga',
    price: 65.00,
    rating: 4.7,
    image: 'https://picsum.photos/seed/yoga1/600/600',
    description: 'Eco-friendly non-slip surface with 6mm of premium cushioning.',
    features: ['Natural Rubber', 'Alignment Lines', 'Antibacterial Surface']
  },
  {
    id: '5',
    name: 'Pro-Aero Cycling Jersey',
    category: 'Cycling',
    price: 110.00,
    rating: 4.6,
    image: 'https://picsum.photos/seed/cycle1/600/600',
    description: 'Streamlined fit for reduced drag and maximum ventilation.',
    features: ['Moisture Wicking', 'Three Rear Pockets', 'UV Protection']
  },
  {
    id: '6',
    name: 'Quantum Cross-Trainer',
    category: 'Training',
    price: 129.99,
    rating: 4.4,
    image: 'https://picsum.photos/seed/train1/600/600',
    description: 'Versatile shoes for lifting, HIIT, and functional training.',
    features: ['Heel Stability', 'Flexible Forefoot', 'Durable Outsole']
  },
  {
    id: '7',
    name: 'Wind-Breaker Elite',
    category: 'Running',
    price: 89.99,
    rating: 4.3,
    image: 'https://picsum.photos/seed/run2/600/600',
    description: 'Water-resistant, ultra-light shell for all-weather performance.',
    features: ['Packable Design', 'Reflective Details', 'Ventilated Back']
  },
  {
    id: '8',
    name: 'Court King Shoes',
    category: 'Basketball',
    price: 140.00,
    rating: 4.9,
    image: 'https://picsum.photos/seed/ball2/600/600',
    description: 'High-top support with responsive cushioning for explosive dunks.',
    features: ['Ankle Lockdown', 'Responsive Zoom Air', 'Non-marking Rubber']
  }
];

export const CATEGORIES: string[] = ['All', 'Running', 'Basketball', 'Training', 'Yoga', 'Cycling'];
