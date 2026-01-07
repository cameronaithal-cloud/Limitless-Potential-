import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from './constants.tsx';
import { Product, CartItem, Category } from './types.ts';
import { ProductCard } from './components/ProductCard.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { Button } from './components/Button.tsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

const Home: React.FC<{ 
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
}> = ({ onAddToCart, onViewDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col space-y-12 pb-24">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-[40px] overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop" 
          alt="Hero" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center px-12 sm:px-24">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase">
              Season 2025 Arrived
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white leading-tight">
              LIMITLESS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">POTENTIAL.</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg">
              Elite equipment engineered for those who refuse to settle. Push your boundaries with Velocity's new performance collection.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-none">
                Shop New Arrivals
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-4">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">SHOP THE GEAR</h2>
            <p className="text-gray-500">Premium performance for every discipline.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as Category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-black text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 relative max-w-xl mx-auto">
          <input 
            type="text"
            placeholder="Search our catalog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-12 text-lg focus:border-indigo-500 outline-none transition-colors shadow-sm"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-xl font-medium">No products match your criteria.</p>
            <Button variant="ghost" className="mt-4" onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}>
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* Trust Marks */}
      <section className="bg-white border-y border-gray-100 py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Fast Delivery</h4>
              <p className="text-sm text-gray-500">Free worldwide shipping over $150.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">Elite Support</h4>
              <p className="text-sm text-gray-500">24/7 technical gear specialists.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold">60-Day Trial</h4>
              <p className="text-sm text-gray-500">Not the right fit? Free returns.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Header: React.FC<{ cartCount: number; onOpenCart: () => void }> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter">VELOCITY</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          <Link to="/" className="text-black hover:text-indigo-600 transition-colors">Apparel</Link>
          <Link to="/" className="hover:text-black transition-colors">Equipment</Link>
          <Link to="/" className="hover:text-black transition-colors">Collections</Link>
          <Link to="/" className="hover:text-black transition-colors">Labs</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            onClick={onOpenCart}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-600 relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <Button variant="primary" size="sm" className="hidden sm:inline-flex">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeCartItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={
              <Home 
                onAddToCart={addToCart} 
                onViewDetails={(p) => setSelectedProduct(p)} 
              />
            } />
          </Routes>
        </main>

        <footer className="bg-black text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-black tracking-tighter">VELOCITY</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  The world's premier provider of professional athletic equipment. We fuel performance at every level.
                </p>
                <div className="flex space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 bg-gray-800 rounded-lg hover:bg-indigo-600 cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-indigo-400">Products</h5>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><Link to="/" className="hover:text-white transition-colors">Running Gear</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Court Sports</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Strength Lab</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Accessories</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-indigo-400">Support</h5>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li><Link to="/" className="hover:text-white transition-colors">Order Status</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Gift Cards</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-indigo-400">Newsletter</h5>
                <p className="text-gray-400 text-sm">Join the club for early access to drops.</p>
                <div className="flex bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-transparent border-none px-4 py-3 text-sm flex-grow outline-none"
                  />
                  <button className="bg-white text-black px-6 font-bold hover:bg-indigo-400 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
              <p>© 2025 Velocity Sports Performance Ltd. All rights reserved.</p>
              <div className="flex space-x-8">
                <Link to="/" className="hover:text-white">Privacy Policy</Link>
                <Link to="/" className="hover:text-white">Terms of Service</Link>
                <Link to="/" className="hover:text-white">Sustainability</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Global UI Components */}
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemove={removeCartItem}
          onUpdateQuantity={updateQuantity}
        />

        <ChatAssistant />

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[32px] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                  {selectedProduct.category} Collection
                </span>
                <h2 className="text-4xl font-black mb-4">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-bold">${selectedProduct.price.toFixed(2)}</span>
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-bold">{selectedProduct.rating} Rating</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedProduct.features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    fullWidth 
                    size="lg" 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    Add to Bag
                  </Button>
                  <Button variant="outline" size="lg" className="w-16 h-14 flex items-center justify-center p-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;