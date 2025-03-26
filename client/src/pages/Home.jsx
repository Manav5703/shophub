import { Link } from "react-router-dom";
import Layout from "../Layouts/Layouts";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { productListAction } from "../Redux/Actions/Product";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productListReducer);

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  // Get featured products (first 4 products)
  const featuredProducts = products?.slice(0, 4) || [];

  const categories = [
    {
      name: "Running Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "High-performance running shoes for every runner",
      link: "/products?category=Running%20Shoes"
    },
    {
      name: "Casual Sneakers",
      image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      description: "Stylish and comfortable everyday sneakers",
      link: "/products?category=Casual%20Sneakers"
    },
    {
      name: "Outdoor",
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
      description: "Gear up for your outdoor adventures",
      link: "/products?category=Outdoor"
    },
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      description: "Trendy and comfortable apparel",
      link: "/products?category=Clothing"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      description: "Complete your look with our accessories",
      link: "/products?category=Accessories"
    }
  ];

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Hero Section */}
          <div className="relative bg-gray-900 h-[500px] rounded-2xl overflow-hidden mb-16">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80"
              alt="Hero"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to ShopHub
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                Discover our curated collection of premium products at unbeatable prices
              </p>
              <Link
                to="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Categories Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.link}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-gray-200 text-sm">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Products Section */}
          {featuredProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                  <Link
                    key={product._id}
                    to={`/products/${product._id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-2">${product.price}</p>
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="ml-1 text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter Section */}
          <section className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for exclusive deals and updates
              </p>
              <form className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-md px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Home;