import Layout from "../Layouts/Layouts";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make quality products accessible to everyone while
            providing an exceptional shopping experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2024, ShopHub started with a simple idea: make online
              shopping better. We believed that customers deserved a more
              personalized, seamless experience when shopping online.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve thousands of customers, offering a
              curated selection of high-quality products at competitive prices.
              Our commitment to customer satisfaction and product quality remains
              at the heart of everything we do.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80"
              alt="Our Store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We carefully select each product to ensure it meets our high standards of quality and value."
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We're here to help you find exactly what you're looking for."
              },
              {
                title: "Sustainability",
                description: "We're committed to reducing our environmental impact through sustainable practices."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@shophub.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 