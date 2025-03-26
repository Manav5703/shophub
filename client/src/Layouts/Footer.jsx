import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://www.svgrepo.com/show/520948/shopping-bag-4.svg"
                className="h-8 w-8 text-white"
                alt="ShopHub Logo"
              />
              <span className="ml-2 text-xl font-bold">ShopHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for all your needs. Quality products, great prices, and excellent service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=running" className="text-gray-400 hover:text-white transition">
                  Running Shoes
                </Link>
              </li>
              <li>
                <Link to="/products?category=casual" className="text-gray-400 hover:text-white transition">
                  Casual Sneakers
                </Link>
              </li>
              <li>
                <Link to="/products?category=outdoor" className="text-gray-400 hover:text-white transition">
                  Outdoor & Hiking
                </Link>
              </li>
              <li>
                <Link to="/products?category=clothing" className="text-gray-400 hover:text-white transition">
                  Clothing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@shophub.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Shop Street</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
