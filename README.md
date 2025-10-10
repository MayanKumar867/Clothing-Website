A complete MERN Stack E-Commerce platform that allows users to browse, search, and purchase clothing products, with an admin panel, authentication, and image uploads  all in one scalable app.
Live demo: https://vsr-fashion-frontend.onrender.com

Tech Stack
Frontend: React.js, Tailwind CSS, React Router, Axios
Backend: Node.js, Express.js, MongoDB
Authentication: JWT (JSON Web Tokens), Firebase Google Auth
Image Uploads: Multer, Cloudinary

Features:
User Authentication (Signup, Login, Logout)
Google OAuth integration
Product listing, search, and filtering
Add to Cart & Wishlist functionality
Secure payment gateway (can mention Razorpay if added)
Admin panel for product management (CRUD operations)
Cloudinary image uploads with Multer
Voice assistant for navigation
Fully responsive UI (mobile-friendly)

How It Works:
Frontend communicates with Express APIs for authentication, product fetching, and cart management.
Multer handles image uploads which are stored on Cloudinary.
JWT tokens secure user routes and protect admin features.
MongoDB stores user, product, and order data.

Install dependencies:
cd client && npm install
cd ../server && npm install

Run the app
npm run dev

