import React from 'react';
import { Download } from 'lucide-react';

const sampleProducts = [
  {
    id: 'file-1',
    title: 'Modern Resume Template (Figma + PDF)',
    price: 14,
    type: 'file',
    image:
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'file-2',
    title: 'Lo‑Fi Beat Pack (WAV + STEMS)',
    price: 19,
    type: 'file',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'good-1',
    title: 'Wireless Mechanical Keyboard',
    price: 129,
    type: 'good',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'good-2',
    title: 'Noise‑Canceling Headphones',
    price: 199,
    type: 'good',
    image:
      'https://images.unsplash.com/photo-1518447845474-13b2f494180e?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProductCard({ product, onAdd }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.type === 'file' && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
            <Download className="h-3.5 w-3.5" /> Digital file
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{product.type === 'file' ? 'Instant download' : 'Ships in 2–4 days'}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Featured products</h2>
          <p className="mt-1 text-sm text-gray-600">A mix of digital downloads and physical goods</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
