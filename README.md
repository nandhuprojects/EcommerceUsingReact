# 🛒 ShopEasy - React eCommerce Website

## 📋 Overview
ShopEasy is a modern, fully-responsive eCommerce website built with React. This project demonstrates a complete shopping experience including product browsing, cart management, and checkout functionality.

## ✨ Features
- 🏠 Responsive home page with featured products and categories
- 🛍️ Product listing with filtering by category and price
- 🛒 Fully functional shopping cart with quantity controls
- 💳 Checkout process with form validation
- 📱 Mobile-friendly design
- 🔄 Context API for state management
- 🧭 Multi-page navigation with React Router
- 👥 About page with company information and team members
- 📝 Contact form with validation

## 🚀 Technologies Used
- ⚛️ React.js
- 🧭 React Router
- 🔄 Context API
- 📱 Responsive CSS
- 🧩 Modular component structure

## 🛠️ Installation & Setup
1. 📂 Clone the repository
```bash
git clone https://github.com/your-username/shopeasy.git
cd shopeasy
```

2. 📦 Install dependencies
```bash
npm install
```

3. ▶️ Start the development server
```bash
npm start
```

4. 🌐 Open your browser and navigate to `http://localhost:3000`

## 📂 Project Structure
```
shopeasy/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Products.jsx
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── index.js
└── README.md
```

## 📱 Application Flow
1. 🏠 Users land on the Home page showcasing featured products
2. 🛍️ They can browse all products or filter by category/price
3. 🛒 Products can be added to cart
4. 🔄 Cart allows quantity adjustments and item removal
5. 💳 Checkout process collects shipping and payment info
6. ✅ Order confirmation displayed after purchase

## 📝 Key Components

### App.jsx
- 🌐 Sets up routing and context providers
- 🛒 Manages cart state and functions

### Products.jsx
- 📋 Displays product listings
- 🔍 Implements filtering functionality

### Cart.jsx
- 🛒 Shows items in cart with quantity controls
- 💰 Calculates subtotal, shipping, and total
- 📝 Provides checkout form

### About.jsx
- 📜 Company history and values
- 👥 Team member profiles
- 🖼️ Image slideshow for company journey

### Contact.jsx
- 📞 Contact information
- 📝 Contact form with validation

## 👥 Team Members
- 👨‍💻 NANDHAKUMAR V M - Founder & CEO
- 👩‍💼 SOWMYA J V - Head of Product
- 👩‍💻 SUDARMUGI B - Customer Service Manager
- 👩‍💻 SANMATHI M K - Lead Developer

## 🔄 State Management
The application uses React's Context API for state management, particularly for the shopping cart functionality. The CartContext provides:
- 🛒 Cart items array
- ➕ Add to cart function
- 🔄 Update quantity function
- ❌ Remove item function
- 🧹 Clear cart function

## 📱 Responsive Design
The website is fully responsive and works seamlessly on:
- 💻 Desktop computers
- 💻 Laptops
- 📱 Tablets
- 📱 Mobile phones

## 🚧 Future Improvements
- 🔐 User authentication
- ⭐ Product reviews and ratings
- 💾 Order history
- ❤️ Wishlist functionality
- 🔍 Search functionality
- 🌓 Dark mode toggle

## 🙏 Acknowledgements
- 📚 React documentation
- 🎨 Design inspiration from various eCommerce platforms
- 👨‍👩‍👧‍👦 Team members for their contributions

---

⭐ Made with ❤️ by the ShopEasy team ⭐
