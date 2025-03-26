const products = [
  // Running Shoes
  {
    name: "Adidas Ultra 4D Running Shoes",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    description: "Experience the future of running with Ultra 4D. Features a revolutionary 3D-printed midsole that provides precisely tuned cushioning.",
    price: 220.00,
    countInStock: 15,
    rating: 4.5,
    numReview: 124,
    category: "Running Shoes"
  },
  {
    name: "Ultraboost Light Running Shoes",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    description: "Experience our lightest Ultraboost ever. Featuring the revolutionary Light BOOST midsole.",
    price: 190.00,
    countInStock: 18,
    rating: 4.9,
    numReview: 203,
    category: "Running Shoes"
  },
  {
    name: "4DFWD 2 Running Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Revolutionary running shoes with 3D-printed midsole technology.",
    price: 200.00,
    countInStock: 15,
    rating: 4.9,
    numReview: 156,
    category: "Running Shoes"
  },
  {
    name: "SolarGlide 6 Running Shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    description: "Engineered for long-distance comfort with responsive cushioning.",
    price: 140.00,
    countInStock: 25,
    rating: 4.6,
    numReview: 178,
    category: "Running Shoes"
  },
  {
    name: "Adizero Boston 11",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    description: "Lightweight racing shoes for speed and performance.",
    price: 160.00,
    countInStock: 20,
    rating: 4.7,
    numReview: 145,
    category: "Running Shoes"
  },

  // Casual Sneakers
  {
    name: "Stan Smith Classic White",
    image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3",
    description: "The legendary Stan Smith returns in its most iconic form.",
    price: 85.00,
    countInStock: 20,
    rating: 4.9,
    numReview: 231,
    category: "Casual Sneakers"
  },
  {
    name: "Superstar Classic Shoes",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    description: "The iconic shell-toe design that revolutionized basketball.",
    price: 100.00,
    countInStock: 30,
    rating: 4.7,
    numReview: 267,
    category: "Casual Sneakers"
  },
  {
    name: "Forum Low White",
    image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144",
    description: "A basketball-inspired silhouette that's become a street style icon.",
    price: 95.00,
    countInStock: 8,
    rating: 4.8,
    numReview: 89,
    category: "Casual Sneakers"
  },
  {
    name: "Gazelle Indoor Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    description: "Classic terrace style meets modern comfort.",
    price: 90.00,
    countInStock: 35,
    rating: 4.6,
    numReview: 178,
    category: "Casual Sneakers"
  },
  {
    name: "Continental 80 Vintage",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    description: "Retro tennis style with premium leather upper.",
    price: 110.00,
    countInStock: 25,
    rating: 4.5,
    numReview: 156,
    category: "Casual Sneakers"
  },

  // Outdoor & Hiking
  {
    name: "Terrex Free Hiker 2.0",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0",
    description: "Adventure-ready hiking shoes with BOOST cushioning.",
    price: 180.00,
    countInStock: 20,
    rating: 4.8,
    numReview: 145,
    category: "Outdoor"
  },
  {
    name: "Terrex Swift R3 GTX",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    description: "Waterproof hiking shoes for challenging terrains.",
    price: 160.00,
    countInStock: 25,
    rating: 4.7,
    numReview: 98,
    category: "Outdoor"
  },
  {
    name: "Terrex AX4 Mid GTX",
    image: "https://images.unsplash.com/photo-1527010154944-f2241763d806",
    description: "Mid-cut hiking boots with GORE-TEX protection.",
    price: 170.00,
    countInStock: 30,
    rating: 4.8,
    numReview: 167,
    category: "Outdoor"
  },
  {
    name: "Terrex Agravic Flow 2",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    description: "Trail running shoes built for speed and stability.",
    price: 140.00,
    countInStock: 28,
    rating: 4.6,
    numReview: 134,
    category: "Outdoor"
  },

  // Clothing
  {
    name: "Tiro Track Jacket",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    description: "A classic track jacket updated for modern style.",
    price: 45.00,
    countInStock: 40,
    rating: 4.6,
    numReview: 245,
    category: "Clothing"
  },
  {
    name: "Adicolor Classics 3-Stripes Tee",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    description: "A timeless t-shirt design featuring the iconic 3-Stripes.",
    price: 30.00,
    countInStock: 60,
    rating: 4.5,
    numReview: 189,
    category: "Clothing"
  },
  {
    name: "Premium Essentials Hoodie",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Premium cotton-blend hoodie with minimalist design.",
    price: 65.00,
    countInStock: 45,
    rating: 4.8,
    numReview: 167,
    category: "Clothing"
  },
  {
    name: "Adicolor Classics Shorts",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    description: "Classic athletic shorts with modern comfort.",
    price: 35.00,
    countInStock: 55,
    rating: 4.5,
    numReview: 234,
    category: "Clothing"
  },
  {
    name: "Z.N.E. Premium Track Pants",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
    description: "Premium track pants with modern cut and comfort.",
    price: 75.00,
    countInStock: 35,
    rating: 4.7,
    numReview: 156,
    category: "Clothing"
  },
  {
    name: "Trefoil Essentials Crewneck",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a",
    description: "Classic crewneck sweatshirt with iconic Trefoil logo.",
    price: 55.00,
    countInStock: 48,
    rating: 4.6,
    numReview: 178,
    category: "Clothing"
  },

  // Accessories
  {
    name: "Superlite Performance Cap",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    description: "Stay cool and protected with this lightweight performance cap.",
    price: 24.00,
    countInStock: 35,
    rating: 4.7,
    numReview: 156,
    category: "Accessories"
  },
  {
    name: "Adicolor Classics Socks",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
    description: "Classic athletic socks with comfort cushioning.",
    price: 15.00,
    countInStock: 100,
    rating: 4.4,
    numReview: 456,
    category: "Accessories"
  },
  {
    name: "Sport Performance Backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Durable backpack with laptop compartment and organization pockets.",
    price: 55.00,
    countInStock: 40,
    rating: 4.6,
    numReview: 189,
    category: "Accessories"
  },
  {
    name: "Training Gym Bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "Spacious gym bag with separate shoe compartment.",
    price: 45.00,
    countInStock: 30,
    rating: 4.5,
    numReview: 145,
    category: "Accessories"
  },
  {
    name: "Classic Water Bottle 750ml",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    description: "Durable water bottle with easy-grip design.",
    price: 20.00,
    countInStock: 75,
    rating: 4.3,
    numReview: 234,
    category: "Accessories"
  },
  {
    name: "Training Gloves",
    image: "https://images.unsplash.com/photo-1583473848882-f195d359f9de",
    description: "Lightweight training gloves for gym workouts.",
    price: 25.00,
    countInStock: 50,
    rating: 4.4,
    numReview: 167,
    category: "Accessories"
  }
];

module.exports = products;