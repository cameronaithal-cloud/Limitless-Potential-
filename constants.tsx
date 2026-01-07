
import { Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velocity Elite Runner',
    category: 'Running',
    price: 159.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    description: 'Designed for marathon speed, featuring carbon-fiber plates and ultra-light foam.',
    features: ['Carbon Plate', 'Breathable Mesh', 'Ultra-light Foam']
  },
  {
    id: '2',
    name: 'Apex Grip Basketballs',
    category: 'Basketball',
    price: 45.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1519861531473-9200362f46b3?q=80&w=600&auto=format&fit=crop',
    description: 'Professional grade composite leather with advanced sweat-wicking technology.',
    features: ['Deep Channels', 'Superior Grip', 'All-surface Durability']
  },
  {
    id: '3',
    name: 'Titan Power Rack',
    category: 'Training',
    price: 899.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    description: 'The ultimate center for your home gym. Heavy-duty steel construction.',
    features: ['1000lb Capacity', 'Safety Bars Included', 'Multi-grip Pull-up Bar']
  },
  {
    id: '4',
    name: 'Zen Flow Yoga Mat',
    category: 'Yoga',
    price: 65.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=600&auto=format&fit=crop',
    description: 'Eco-friendly non-slip surface with 6mm of premium cushioning.',
    features: ['Natural Rubber', 'Alignment Lines', 'Antibacterial Surface']
  },
  {
    id: '5',
    name: 'Pro-Aero Cycling Jersey',
    category: 'Cycling',
    price: 110.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1534346707168-2b9a18f5198d?q=80&w=600&auto=format&fit=crop',
    description: 'Streamlined fit for reduced drag and maximum ventilation.',
    features: ['Moisture Wicking', 'Three Rear Pockets', 'UV Protection']
  },
  {
    id: '6',
    name: 'Quantum Cross-Trainer',
    category: 'Training',
    price: 129.99,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1514994667787-b48ca37155f0?q=80&w=600&auto=format&fit=crop',
    description: 'Versatile shoes for lifting, HIIT, and functional training.',
    features: ['Heel Stability', 'Flexible Forefoot', 'Durable Outsole']
  },
  {
    id: '7',
    name: 'Wind-Breaker Elite',
    category: 'Running',
    price: 89.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1516251193007-45ef944abc0c?q=80&w=600&auto=format&fit=crop',
    description: 'Water-resistant, ultra-light shell for all-weather performance.',
    features: ['Packable Design', 'Reflective Details', 'Ventilated Back']
  },
  {
    id: '8',
    name: 'Court King Shoes',
    category: 'Basketball',
    price: 140.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=600&auto=format&fit=crop',
    description: 'High-top support with responsive cushioning for explosive dunks.',
    features: ['Ankle Lockdown', 'Responsive Zoom Air', 'Non-marking Rubber']
  }
];

export const CATEGORIES: string[] = ['All', 'Running', 'Basketball', 'Training', 'Yoga', 'Cycling'];
