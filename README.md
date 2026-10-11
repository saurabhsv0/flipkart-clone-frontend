# ShopKart — Flipkart-Inspired E-Commerce Frontend

A responsive React + Vite frontend built from the supplied SRS. It is intentionally branded **ShopKart** rather than using Flipkart's proprietary branding/assets.

## Included
- Customer storefront and responsive navigation
- Search, category browsing, filtering and sorting
- Product detail pages, ratings, offers and specifications
- Cart, wishlist and quantity management
- Address/order summary/checkout flow
- Razorpay-ready payment UI placeholder
- Order history and tracking UI
- Login/signup UI with mock local state
- Seller dashboard and product management UI
- Admin analytics dashboard
- Mock product/order data
- API-ready component/page separation

## Run locally
```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Build
```bash
npm run build
```

## Backend integration points
Replace the mock state in `src/context/StoreContext.jsx` with Axios calls to the SRS APIs:
- `/api/auth/*`
- `/api/products/*`
- `/api/cart`
- `/api/wishlist`
- `/api/orders/*`
- `/api/payments/*`
- `/api/products/:id/reviews`

For production, keep Razorpay secret credentials on the Node/Express server and only expose public configuration to React.

## Suggested next implementation
1. Connect authentication to JWT/cookie sessions.
2. Generate Prisma models from the SRS entities.
3. Connect product/search/filter APIs.
4. Persist cart and wishlist.
5. Implement Razorpay order creation + server-side signature verification.
6. Add Cloudinary upload flow for seller images.
7. Add React Query/Redux Toolkit if the API state grows.
8. Add Vitest/Playwright tests and CI.
