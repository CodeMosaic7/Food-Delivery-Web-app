# Simple Food Delivery Website (MERN Stack)

> A concise, practical README for a simple food-delivery web application built using the MERN stack (MongoDB, Express, React, Node.js).

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Getting Started — Installation](#getting-started--installation)
6. [Environment Variables](#environment-variables)
7. [Folder Structure (recommended)](#folder-structure-recommended)
8. [Backend API Endpoints](#backend-api-endpoints)
9. [Database Schema (models)](#database-schema-models)
10. [Frontend Structure & Pages](#frontend-structure--pages)
11. [Running the App (dev & prod)](#running-the-app-dev--prod)
12. [Testing](#testing)
13. [Deployment](#deployment)
14. [Security & Best Practices](#security--best-practices)
15. [Future Improvements](#future-improvements)
16. [License](#license)

---

## Project Overview

A simple food-delivery web app where users can browse restaurants/menus, add items to a cart, and place orders. Admins (or restaurant owners) can manage menu items and view orders. The app focuses on clear separation between backend APIs and a React frontend.

Use this README as a scaffold to build, test, and deploy a minimal but production-minded MERN application.

---

## Key Features

* Browse restaurants and menus
* Search and filter items
* Add items to cart, adjust quantities
* Checkout flow with order creation (no real payments required — placeholder)
* Order history for users
* Admin panel for managing restaurants, menus and orders
* JWT-based authentication for users and admins

---

## Tech Stack

* **Frontend:** React (Create React App or Vite), React Router, Redux or Context API, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ORM)
* **Auth:** JSON Web Tokens (JWT)
* **Dev tools:** Nodemon, dotenv
* **Optional:** Tailwind CSS / Bootstrap for UI, Cloudinary for images

---

## Prerequisites

* Node.js (>= 16)
* npm or yarn
* MongoDB (Atlas or local)
* Git

---

## Getting Started — Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-food-delivery.git
cd mern-food-delivery
```

### 2. Install dependencies

**Backend**

```bash
cd server
npm install
```

**Frontend**

```bash
cd ../client
npm install
```

### 3. Create environment files

Create `.env` in `server/` (see Environment Variables below).

### 4. Run in development (concurrently)

From project root you can run both servers (either using `concurrently` or two terminals):

Terminal 1 (server):

```bash
cd server
npm run dev
# runs nodemon on port e.g. 5000
```

Terminal 2 (client):

```bash
cd client
npm start
# runs React dev server on port 3000
```

Now open `http://localhost:3000`.

---

## Environment Variables

Create `server/.env` with values like:

```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/food-delivery?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
```

On production, set these in your hosting provider's environment config.

---

## Folder Structure (recommended)

```
/mern-food-delivery
├─ /client                # React app
│  ├─ /src
│  │  ├─ /components
│  │  ├─ /pages
│  │  ├─ /services       # axios wrappers
│  │  └─ index.js
├─ /server                # Express app
│  ├─ /controllers
│  ├─ /models
│  ├─ /routes
│  ├─ /middleware
│  ├─ server.js
│  └─ config.js
├─ .gitignore
└─ README.md
```

---

## Backend API Endpoints (example)

Use RESTful routes. Prefix: `/api`.

### Auth

* `POST /api/auth/register` — Register user (name, email, password)
* `POST /api/auth/login` — Login (returns JWT)

### Restaurants & Menus

* `GET /api/restaurants` — List restaurants
* `GET /api/restaurants/:id` — Restaurant details + menu
* `POST /api/restaurants` — (admin) create restaurant
* `PUT /api/restaurants/:id` — (admin) update
* `DELETE /api/restaurants/:id` — (admin) delete

Menu items (nested or separate resource):

* `POST /api/restaurants/:id/items` — add item
* `PUT /api/items/:itemId` — update item
* `DELETE /api/items/:itemId` — delete item

### Orders

* `POST /api/orders` — create an order (userId, items, total, address)
* `GET /api/orders/user/:userId` — user order history
* `GET /api/orders` — (admin) list all orders
* `PUT /api/orders/:orderId` — update order status

---

## Database Schema (Mongoose models) — examples

### User

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hashed
  role: { type: String, enum: ['user','admin'], default: 'user' }
}, { timestamps: true });
```

### Restaurant

```js
const RestaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  description: String,
  image: String
}, { timestamps: true });
```

### MenuItem

```js
const ItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  name: String,
  price: Number,
  description: String,
  image: String
});
```

### Order

```js
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    { item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }, quantity: Number }
  ],
  total: Number,
  address: String,
  status: { type: String, enum: ['placed','preparing','out_for_delivery','delivered'], default: 'placed' }
}, { timestamps: true });
```

---

## Frontend Structure & Pages

* **Home / Restaurants listing** — cards for restaurants
* **Restaurant page** — menu, add to cart
* **Cart page** — edit quantities and checkout
* **Checkout / Order confirmation** — submit order
* **User profile / Order history**
* **Admin Dashboard** — manage restaurants, menu, and orders

Use React Router for routes and a central store (Context or Redux) for cart/auth state.

---

## Running the App (dev & prod)

**Development** — run backend with `nodemon` and frontend with `npm start`.

**Production build**

* Build React app: `cd client && npm run build`
* Serve static files from Express: in `server.js`, serve `client/build` and fallback to `index.html` for SPA routing.

Example Express snippet:

```js
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
```

---

## Testing

* Backend unit tests: Jest + Supertest
* Frontend testing: React Testing Library
* Example: test order creation and auth middleware

---

## Deployment

* **Backend:** Heroku, Render, Railway, or a VPS
* **Database:** MongoDB Atlas
* **Frontend:** Netlify, Vercel, or served via the Node server
* Use CI/CD (GitHub Actions) to run tests and deploy on merge.

---

## Security & Best Practices

* Hash passwords with `bcrypt`
* Validate and sanitize inputs (express-validator)
* Use HTTPS in production
* Store secrets in env vars
* Rate limiting and CORS config
* Limit file upload sizes

---

## Future Improvements

* Real payment integration (Stripe)
* Real-time order tracking (WebSockets)
* Push notifications
* Multi-restaurant menus and search by cuisine
* Recommendation engine

---

## License

This project is available under the MIT License.

---

*Do you want this README customized with example code snippets (server.js, sample React components) or converted into a GitHub-ready `README.md` with badges and screenshots?*
