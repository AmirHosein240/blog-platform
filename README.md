# 📝 MyBlog — Modern Blog Platform

A modern, responsive blog platform built with **Next.js, TypeScript, Tailwind CSS, and React**.

The project demonstrates modern frontend development concepts including the Next.js App Router, dynamic routing, server-side data fetching, loading and error states, form validation, client-side persistence, responsive UI, dark mode, and image optimization.

## 🚀 Live Demo

> Coming soon — deployed with Vercel.

## 📌 GitHub Repository

[GitHub Repository](https://github.com/AmirHosein240/blog-platform)

---

## ✨ Features

### 🏠 Homepage

- Modern hero section
- Featured/latest articles
- Responsive layout
- Navigation to posts and authors
- Responsive footer

### 📰 Blog Posts

- Browse all posts
- Dynamic post detail pages
- Featured post section
- Responsive post cards
- Author information
- Search posts by title
- Sort posts by:
  - Newest
  - Oldest
  - Title

- Pagination

### 👤 Authors

- Dynamic author pages
- Author profile information
- Display posts written by each author
- Author badges connected to author pages

### 💬 Comments

- View comments for each post
- Add new comments
- Form validation with Zod
- Form state management with React Hook Form
- Comments persisted in browser `localStorage`

### 🎨 UI & UX

- Responsive design
- Dark mode
- Mobile navigation
- Skeleton loading states
- Empty states
- Error states
- Custom 404 pages
- Smooth hover interactions
- Optimized images with `next/image`

### ⚡ Next.js Optimizations

- App Router
- Dynamic routes
- `generateMetadata` for dynamic SEO metadata
- Server Components where appropriate
- Client Components only where interactivity is required
- `next/image` image optimization
- Remote image configuration
- Incremental data revalidation with `revalidate`
- Route-level loading states
- Route-level error boundaries
- `notFound()` handling

---

## 🛠 Tech Stack

| Technology          | Purpose                                      |
| ------------------- | -------------------------------------------- |
| **Next.js 16**      | React framework and application architecture |
| **React 19**        | UI development                               |
| **TypeScript**      | Type safety                                  |
| **Tailwind CSS 4**  | Styling and responsive design                |
| **React Hook Form** | Form management                              |
| **Zod**             | Form validation                              |
| **JSONPlaceholder** | Demo REST API                                |
| **ESLint**          | Code quality and linting                     |
| **Turbopack**       | Development/build tooling                    |

---

## 📂 Project Structure

```text
blog-platform/
├── public/
│
├── src/
│   ├── app/
│   │   ├── authors/
│   │   │   └── [id]/
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── posts/
│   │   │   ├── [id]/
│   │   │   │   ├── error.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── error.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── blog/
│   │   │   ├── AuthorBadge.tsx
│   │   │   ├── CommentForm.tsx
│   │   │   ├── CommentList.tsx
│   │   │   ├── CommentsSection.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── FeaturedPost.tsx
│   │   │   ├── HomePostCard.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostCardSkeleton.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── SortDropdown.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   └── ui/
│   │       └── Skeleton.tsx
│   │
│   ├── hooks/
│   │   └── usePersistedComments.ts
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   │
│   └── types/
│       ├── author.ts
│       ├── comment.ts
│       └── post.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🔌 Data Source

This project uses **JSONPlaceholder** as a public demo REST API.

The application fetches:

- Posts
- Authors
- Comments

API requests are centralized inside:

```text
src/lib/api.ts
```

This keeps API-related logic separate from UI components.

---

## 🔍 Search, Sort & Pagination

The posts page supports client-friendly URL-based filtering.

Examples:

```text
/posts?search=qui
/posts?sort=oldest
/posts?sort=title
/posts?page=2
```

The posts page combines:

```text
Search
   ↓
Filtering
   ↓
Sorting
   ↓
Pagination
   ↓
UI
```

This approach keeps the page state represented by URL parameters, making filtered and sorted views easier to share and navigate.

---

## 💾 Comment Persistence

Comments submitted through the comment form are stored in the browser's `localStorage`.

The persistence logic is isolated in:

```text
src/hooks/usePersistedComments.ts
```

This means comments can remain available after refreshing the page without requiring a custom backend.

> Note: This is a frontend demonstration project, so comments are not stored in a production database.

---

## 🌙 Dark Mode

The application includes a custom dark mode implementation using:

- React Context
- `ThemeProvider`
- Tailwind CSS dark variant
- Browser `localStorage`

The user's selected theme is persisted between sessions.

---

## 🖼️ Image Optimization

Post images are generated using:

```text
https://picsum.photos
```

Images are rendered using Next.js:

```tsx
<Image />
```

and configured through `next.config.ts` using `remotePatterns`.

This allows the application to take advantage of Next.js image optimization.

---

## ⚡ Loading & Error Handling

The application uses Next.js route-level UI states.

### Loading states

```text
loading.tsx
```

Used for:

- Posts
- Post details
- Authors

### Error states

```text
error.tsx
```

Used to provide user-friendly error boundaries.

### Not Found

```text
not-found.tsx
```

Used when a requested post does not exist.

---

## 🔎 SEO & Metadata

The project uses Next.js Metadata APIs.

The root layout defines default metadata, while dynamic pages generate metadata based on the requested resource.

For example:

```tsx
export async function generateMetadata() {
  // ...
}
```

This allows individual posts and authors to have meaningful page titles and descriptions.

---

## 🧪 Code Quality

Before pushing changes, the project can be checked using:

```bash
npm run lint
```

Production builds can be tested using:

```bash
npm run build
```

The project currently passes both checks successfully.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AmirHosein240/blog-platform.git
```

### 2. Navigate to the project

```bash
cd blog-platform
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the production server after building the application.

### Lint

```bash
npm run lint
```

Runs ESLint to check the codebase.

---

## 🎯 Project Goals

This project was built to practice and demonstrate:

- Next.js App Router
- React Server Components
- Client Components
- TypeScript
- Dynamic routing
- API data fetching
- URL search parameters
- Form handling
- Schema validation
- State management
- Browser persistence
- Responsive UI development
- Dark mode
- Error handling
- Loading states
- SEO metadata
- Image optimization
- Production builds
- Git and GitHub workflow

---

## 📈 Possible Future Improvements

Some features that could be added in future versions:

- 🔐 User authentication
- ✍️ Create and edit posts
- 🗑️ Delete posts
- 🗄️ Database integration
- 👥 User profiles
- ❤️ Post likes
- 🔖 Bookmarks
- 🏷️ Categories and tags
- 🔎 Advanced search
- 📊 Admin dashboard
- ☁️ Cloud image storage
- 🧪 Automated testing
- 🚀 CI/CD with GitHub Actions

---

## 📸 Screenshots

Screenshots can be added here after deployment.

Example:

```md
![Homepage](./public/screenshots/homepage.png)
![Posts](./public/screenshots/posts.png)
![Post Details](./public/screenshots/post-details.png)
```

---

## 📄 License

This project is created for educational and portfolio purposes.

---

## 👨‍💻 Author

**AmirHosein**

GitHub:

[AmirHosein240](https://github.com/AmirHosein240)

---

⭐ If you find this project useful, feel free to star the repository.
