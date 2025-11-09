import React from 'react';
import { ShoppingCart } from 'lucide-react';

function Navbar({ cartCount = 0, onOpenCart }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              ShopWave
            </span>
          </a>

          <nav className="flex items-center gap-6">
            <a href="#products" className="text-sm text-gray-600 hover:text-gray-900">Products</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>

            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-fuchsia-600 px-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
