# ShareNest (Admin-first MVP, WIP)

**ShareNest** is a community-sharing platform designed for local groups such as preschools, playgroups, and language schools. It enables simple, flexible sharing of items (like books and toys) with lightweight borrowing and user management flows.

> 🚧 This is an **MVP-in-progress**, focused first on the **admin dashboard** with mocked backend data and Okta-based authentication. The borrower-facing flow will follow in later iterations.

---

## 🔐 Authentication

- ✅ Okta login integrated via `NextAuth.js` (including logout)
- 🛠️ Secure route protection and session handling in progress

---

## 🖥️ Admin UI Features

### ✅ Completed

- Admin Overview Page (structure + mock metrics)
- Static Public Pages (About, How It Works)
- Integration between major routes
- Static site generation for public marketing content

### 🛠️ In Progress

- **Editable DataGrid Tables** for:
  - User management
  - Item inventory
- **Edit & Detail Popups** (modal forms for editing)
- **Create New Item / User** flows
- **Login flow** visual polish + UX feedback

---

## ⚙️ Tech Stack

- **Framework**: Next.js (App Router)
- **UI**: MUI (Material UI)
- **State**: Zustand
- **Forms**: React Hook Form
- **Data**: React Query (mocked for now)
- **Auth**: NextAuth.js + Okta
- **Lang/Tooling**: TypeScript, ESLint, Prettier

---

## 🗂️ Project Structure

This project uses **App Router** with a multi-tenancy and role-based architecture:

app/
├── (public) // Public-facing pages
│ ├── about/ → "About Us"
│ ├── how-it-works/ → Feature overview
│ ├── home/ → Public homepage (placeholder)
│ ├── components/ → UI elements like TopBar, LoginForm
│ └── layout.tsx → Layout for public pages

├── [domain]/ // Multi-tenancy: dynamic tenant layout
│ ├── [slug]/ → Handles group-specific logic
│ └── layout.tsx → Provides shared context for tenant routes

├── api/ // API routes (App Router)
│ ├── auth/ → Okta / NextAuth config
│ ├── domain/ → Group/slug config mock
│ ├── login/ → Custom login endpoint
│ └── upload/ → Placeholder route for file uploads

├── library/ // Borrower flow (to be built)
│ └── (user)/ → User-facing dashboard (upcoming)
│ └── layout.tsx

├── platform/ // Admin platform
│ ├── (admin)/
│ │ ├── items/ → Item inventory CRUD
│ │ ├── users/ → User management CRUD
│ │ ├── overview/ → Summary + metrics
│ │ ├── settings/ → Admin config (future)
│ │ ├── templates/ → Template/notifications (future)
│ │ ├── layout.tsx → Dashboard layout
│ │ ├── loading.tsx → Skeletons
│ │ └── page.tsx → Default admin entry point
│ └── stores/ → Zustand stores (e.g. account/session)

├── providers.tsx // App-wide providers (auth, theme, etc.)
└── sitemap.ts // Sitemap for SEO and indexing

yaml
Copy
Edit

---

## 🚀 Coming Next

- [ ] Hook up real API integration
- [ ] Route protection using session context
- [ ] Responsive polish and accessibility pass
- [ ] Finalise borrower-side (user) view
- [ ] Admin settings and configuration options
