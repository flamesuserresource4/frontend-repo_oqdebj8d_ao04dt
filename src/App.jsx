import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartPanel from './components/CartPanel';
import Footer from './components/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function checkout() {
    alert('Demo checkout — connect a payment provider to go live.');
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ProductGrid onAdd={addToCart} />
      </main>
      <Footer />

      {cartOpen && (
        <CartPanel
          items={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onCheckout={checkout}
        />
      )}
    </div>
  );
}

export default App;
