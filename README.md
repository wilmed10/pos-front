# POS - Frontend (Next.js)

Storefront and admin panel for a point-of-sale system, built with Next.js App Router. Talks to the [postnest](../postnest) API for products, categories, coupons and transactions.

Live at [pos-front-beta.vercel.app](https://pos-front-beta.vercel.app/).

## Stack

- Next.js 16 (App Router, Server Components + Server Actions)
- React 19
- Tailwind CSS 4
- Zustand for cart state
- TanStack Query
- Zod for schema validation of API responses
- react-dropzone / react-toastify / react-calendar

## Structure

- `(store)` - public storefront: category browsing, product cards, shopping cart, checkout with coupons
- `admin` - product CRUD, category-based product listing, sales/transactions dashboard with date filtering
- `api/sales`, `api/coupons` - route handlers that proxy to the backend
- `actions/` - server actions for creating/updating products, uploading images, submitting orders
- `store/store.ts` - Zustand cart store
- `schemas/schemas.ts` - Zod schemas shared across actions and route handlers

## Setup

```bash
npm install
```

Create `.env`:

```
API_URL=              # server-side backend URL (used in Server Components/Actions)
NEXT_PUBLIC_API_URL=   # client-side backend URL (used for product images)
NEXT_PUBLIC_DOMAIN=    # this app's own public URL (used by internal API routes)
```

## Running

```bash
npm run dev     # http://localhost:4000
npm run build
npm run start
```

## Deployment

Deployed on Vercel. Environment variables (`API_URL`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_DOMAIN`) must point to the deployed `postnest` API instance.
