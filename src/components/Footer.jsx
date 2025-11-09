import React from 'react';

function Footer() {
  return (
    <footer id="about" className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">About ShopWave</h3>
            <p className="mt-3 text-sm text-gray-600">
              A modern storefront for selling both digital downloads and physical goods. Built for speed and simplicity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-gray-900">License for files</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Follow</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-900">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Newsletter</h3>
            <p className="mt-3 text-sm text-gray-600">Get product updates and special offers.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="you@example.com" className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} ShopWave. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
