🛍️ Brivana – React E-Commerce Store

Brivana is a fully functional e-commerce style React application built using React Query for data fetching and Redux Toolkit for state management. The project consumes the FakeStoreAPI to simulate real asynchronous product and category data, while implementing a persistent shopping cart with session storage.

This project demonstrates modern React architecture, clean component reuse, and best practices for API handling, state management, and UI design.

---

🚀 Features:
 
- PRODUCT CATALOG
    - Fetches all products from the FakeStoreAPI using React Query
    - Displays:
        - Title
        - Price
        - Category
        - Description
        - Rating
        - Image
    - Graceful image fallback for broken API image links

- DYNAMIC CATEGORY NAVIGATION
    - Categories are fetched dynamically from the API
    - Users can browse:
        - Electronics
        - Jewelry
        - Men’s Clothing
        - Women’s Clothing
    - Reusable CategoryPage component handles all category rendering

- FUNCTIONAL SHOPPING CART
    - Add products to cart from any page
    - Increase quantity if product already exists
    - Remove items from cart
    - View total item count and total price
    - Cart state managed globally with Redux Toolkit

- SESSION STORAGE PERSISTENCE
    - Cart persists across page refreshes and navigation
    - Redux slice manages session storage automatically

- CHECKOUT SIMULAATION
    - “Checkout” clears Redux state and session storage
    - Visual confirmation to the user with a browser alert

- UI/UX
    - Responsive Bootstrap layout
    - Consistent coastal theme styling
    - Navbar with live cart counter
    - Hero sections and polished design
    - Reusable ProductCard component for clean architecture

---

🧠 Technologies Used

React + TypeScript
React Router
React Query (@tanstack/react-query)
Redux Toolkit
Axios
React Bootstrap
React Icons
FakeStoreAPI


---

🗃️ File Structure

src/
│
├── api/
│   └── products.ts        # All API calls and Product types
│
├── components/
│   ├── NavBar.tsx
│   ├── ProductCard.tsx   # Reusable product display card
│   └── CategoryPage.tsx  # Reusable category layout
│
├── pages/
│   ├── WelcomePage.tsx
│   ├── ShopBy.tsx
│   ├── Electronics.tsx
│   ├── Jewelry.tsx
│   ├── Mens.tsx
│   ├── Womens.tsx
│   └── CartPage.tsx
│
├── redux/
│   ├── cartSlice.ts      # Redux + sessionStorage integration
│   └── store.ts


---

🧪 API Used

All data comes from:

👉 https://fakestoreapi.com/

Endpoints used:
/products
/products/categories

---

▶️ Running the Application

1. Clone the repo
    git clone https://github.com/your-username/brivana.git
    cd brivana

2. Install dependencies
    npm install

3. Run the development server
    npm run dev

App runs at: http://localhost:5173

---

📌 Why This Project Matters

This is more than a school assignment — it models how a real e-commerce frontend is structured using modern React best practices and clean separation of concerns.

It is suitable for inclusion in a professional portfolio.

---

©️ Author

Kayla Salmon
Full Stack Software Engineer