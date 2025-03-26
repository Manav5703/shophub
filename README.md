# ShopHub - E-commerce Platform

A modern e-commerce platform built with React, Node.js, and MongoDB. This project was developed as part of a university course (COMP 3753 DBMS).

## Features

- 🛍️ Product browsing with category filters and search
- 🔍 Advanced filtering and sorting options
- 🛒 Shopping cart functionality
- 👤 User authentication (login/register)
- 💳 Multiple payment options (Demo)
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Frontend:**
  - React
  - Redux for state management
  - Tailwind CSS for styling
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - JWT for authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shophub.git
   cd shophub
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Run the development server:
   ```bash
   # Run backend (from root directory)
   npm run dev

   # Run frontend (from client directory)
   cd client
   npm run dev
   ```

## Project Structure

```
├── api/                  # Backend code
│   ├── data/            # Seed data
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
├── client/              # Frontend code
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── Redux/      # Redux store and actions
│   │   └── Layouts/    # Layout components
│   └── public/         # Static files
└── README.md
```

## Screenshots

[Add screenshots of your application here]

## Contributing

This is a university project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Acadia University](https://www2.acadiau.ca/) for the project opportunity
- Icons from [SVG Repo](https://www.svgrepo.com/) and [Iconscout](https://iconscout.com/)
- Built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)
