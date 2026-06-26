# Amazon DR Dashboard

A multi-tenant SaaS dashboard for Amazon sellers to run their **Daily Review (DR)** — tracking sales, FBA inventory, listing health, account health, and seller performance in one place.

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=flat&logo=vercel)

---

## Features

| Page | What it shows |
|------|--------------|
| **Daily Review** | Revenue, units ordered, sessions, Buy Box %, conversion rate, 9-point DR checklist |
| **Account Health** | Health score, policy violations, performance metrics |
| **Performance Notifications** | Critical alerts, warnings, action-required flags |
| **Open Cases** | Support cases sorted by seller response needed |
| **Buyer Messages** | Unread messages with 24h response countdown |
| **Inventory** | FBA stock levels, days of supply, restock alerts, inbound shipments |
| **Listings & Reviews** | Listing health, suppression issues, star ratings, negative review monitoring |

**Platform**
- Multi-tenant — each seller connects their own Amazon account via OAuth
- Role-based access: Admin, Manager, Viewer
- Amazon SP-API integration with LWA OAuth + AWS SigV4 signing
- AES-256-GCM encrypted credential storage per store

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| Auth | NextAuth.js (credentials + JWT) |
| Charts | Recharts |
| Validation | Zod |
| Deploy | Vercel |

---

## Local Setup

### Prerequisites
- Node.js 18+
- PostgreSQL (local or Neon)

### 1. Clone & install

```bash
git clone https://github.com/rapidoodle/saas-dashboard.git
cd saas-dashboard
npm install
```

### 2. Configure environment

```bash
cp .env.local.example .env.local
```

Required variables:

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."                  # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"
ENCRYPTION_KEY="..."                   # openssl rand -hex 32

# Amazon SP-API (your developer app credentials)
AMAZON_CLIENT_ID="amzn1.application-oa2-client.xxxx"
AMAZON_CLIENT_SECRET="..."
AMAZON_AWS_ACCESS_KEY="..."
AMAZON_AWS_SECRET_KEY="..."
AMAZON_AWS_REGION="us-east-1"
```

> Per-seller credentials (refresh token, seller ID, marketplace ID) are collected via Amazon OAuth and stored encrypted in the database — not in env vars.

### 3. Set up the database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel

1. Push to GitHub and import at [vercel.com/new](https://vercel.com/new)
2. Go to **Storage** tab → **Create** → **Neon Postgres** (auto-injects `DATABASE_URL`)
3. Add remaining env vars under **Settings → Environment Variables**
4. Set the build command to:
   ```
   prisma generate && prisma migrate deploy && next build
   ```
5. Deploy

---

## Onboarding a New Seller

1. Seller signs up and lands on `/connect`
2. Clicks **Connect Amazon Account** → redirects to Amazon OAuth consent
3. After authorization, their store is created and credentials stored encrypted in the DB
4. They land on `/dashboard` and see their live data

---

## Role Permissions

| Action | Admin | Manager | Viewer |
|---|---|---|---|
| View all data | ✅ | ✅ | ✅ |
| Create / edit records | ✅ | ✅ | ❌ |
| Delete records | ✅ | ❌ | ❌ |
| Manage users | ✅ | ❌ | ❌ |
| Connect Amazon account | ✅ | ❌ | ❌ |

---

## Project Structure

```
app/
  (auth)/login/
  (dashboard)/
    dashboard/             # Daily Review — KPIs, revenue, DR checklist
    inventory/             # FBA inventory + inbound shipments
    listings/              # Listings health + review monitoring
    connect/               # Amazon OAuth onboarding
  api/
    amazon/
      oauth/authorize/     # Initiates Amazon OAuth flow
      oauth/callback/      # Handles OAuth callback, saves credentials
      sales/               # SP-API Sales & Traffic
      inventory/           # SP-API FBA Inventory
      listings/            # SP-API Listings Items
components/
  dashboard/               # StatCard, DailyReviewAlert, AccountHealth, etc.
  inventory/               # InventoryTable, InventoryAlerts
  listings/                # ListingsTable, ReviewSummary
  connect/                 # ConnectAmazonButton
  layout/                  # Sidebar, Header
  ui/                      # Button, Input, Modal, Badge, Skeleton
lib/
  amazon-sp-api.ts         # SP-API client — multi-tenant, per-store credentials
  auth.ts                  # NextAuth config
  db.ts                    # Prisma client singleton
  encryption.ts            # AES-256-GCM encrypt/decrypt
  permissions.ts           # RBAC permission map
  store.ts                 # Per-store credential resolution
prisma/
  schema.prisma            # DB schema (User, Store, AmazonCredentials)
```

---

## Author

**Ralfh Bryan Perez** — [github.com/rapidoodle](https://github.com/rapidoodle)
