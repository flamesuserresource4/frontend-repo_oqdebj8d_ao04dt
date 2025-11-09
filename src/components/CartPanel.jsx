import React from 'react';

function formatCurrency(n) {
  return `$${n.toFixed(2)}`;
}

function CartPanel({ items, onClose, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className="fixed inset-0 z-30 flex">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <aside className="relative ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">Your cart</h3>
          <button onClick={onClose} className="rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-100">Close</button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-3">
                  <img src={it.image} alt={it.title} className="h-16 w-16 rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{it.title}</p>
                    <p className="text-xs text-gray-600">Qty {it.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{formatCurrency(it.price * it.qty)}</p>
                    <button onClick={() => onRemove(it.id)} className="mt-1 text-xs text-gray-500 hover:text-gray-700">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t p-6">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold text-gray-900">{formatCurrency(subtotal)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Checkout
          </button>
          <p className="mt-2 text-center text-xs text-gray-500">Demo only — no real payments processed.</p>
        </footer>
      </aside>
    </div>
  );
}

export default CartPanel;
