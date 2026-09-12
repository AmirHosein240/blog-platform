# MyBlog — Modern Blog Platform

A responsive blog platform built with Next.js, React, TypeScript, and Tailwind CSS. The app showcases a real-world content browsing flow: landing page, posts listing with search and sorting, author pages, dynamic post detail pages, and client-side comment persistence.

This project is designed to demonstrate production-oriented frontend patterns such as app-router pages, server-side metadata generation, React Query integration, persistent client state, and clean component boundaries.

## Overview

The application lets users:

- Browse featured content on the home page
- Explore the full posts list with search and sorting
- Navigate through author profiles and author-specific posts
- Read individual post details
- Add comments to posts, with comments persisted in browser storage
- Toggle between light and dark themes
- Experience responsive layouts for mobile and desktop

## Tech Stack

| Technology            | Purpose                                   |
| --------------------- | ----------------------------------------- |
| Next.js 16            | App Router, SSR, routing, page generation |
| React 19              | UI development                            |
| TypeScript            | Static typing                             |
| Tailwind CSS 4        | Styling and responsive design             |
| @tanstack/react-query | Remote data fetching and caching          |
| React Hook Form       | Form state management                     |
| Zod                   | Form validation                           |
| Orval                 | OpenAPI client code generation            |
| JSONPlaceholder       | Demo API data source                      |
| ESLint                | Linting and code quality checks           |

## Features

### Home Page

- Hero section with CTA buttons
- Featured articles on the landing page
- Card-based layout for article previews
- Responsive navigation and footer

### Posts Page

- Full post listing
- Search by title
- Sorting by newest, oldest, and title
- URL-based query state
- Pagination
- Featured post section before the rest of the list

### Author Pages

- Dynamic route per author
- Author profile summary
- List of posts authored by that person
- Linked author badges on post cards

### Post Detail Pages

- Dynamic route per post
- Metadata generation for SEO
- Not-found handling for invalid IDs
- Comments section below the article body

### Comments

- Fetch comments from the API
- Merge fetched comments with locally persisted comments
- Add new comments with validation
- Persist inserted comments in localStorage for the current post

### UI and UX

- Light/dark mode toggle
- Mobile menu for smaller screens
- Responsive cards and grid layouts
- Loading skeletons and empty states
- Theme-aware styling across the app
- Next.js image optimization via remote patterns

## Project Structure

```text
blog-platform/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── authors/
│   │   │   └── [id]/
│   │   │       ├── error.tsx
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── posts/
│   │   │   ├── [id]/
│   │   │   │   ├── error.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── error.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
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
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── ui/
│   │       └── Skeleton.tsx
│   ├── hooks/
│   │   └── usePersistedComments.ts
│   ├── providers/
│   │   ├── QueryProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── services/
│   │   ├── generated/
│   │   │   ├── comments/
│   │   │   ├── model/
│   │   │   ├── posts/
│   │   │   └── users/
│   │   ├── http.ts
│   │   └── swagger.yaml
│   ├── types/
│   │   └── post.ts
│   └── app/
│       └── ...
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── orval.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── public/
```

## Data Flow and API

The project uses JSONPlaceholder as the remote demo API for posts, authors, and comments. Request logic is centralized through the generated client created by Orval, with HTTP utilities in the services layer.

Key files:

- src/services/http.ts
- src/services/generated/posts/posts.ts
- src/services/generated/users/users.ts
- src/services/generated/comments/comments.ts

This structure keeps UI code separate from API logic and makes future client regeneration easier when the API schema changes.

## Routing

The app includes these primary routes:

- / — homepage with featured content
- /posts — post listing with filtering and pagination
- /posts/[id] — post detail page
- /authors/[id] — author profile and author posts

The project also includes route-level loading and error UI files under the app route folders.

## Local Development

### Install dependencies

```bash
npm install
```

### Start the app in development mode

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

### Regenerate API client

```bash
npm run swagger:gen
```

## Notes

- The application uses browser localStorage for comment persistence, scoped by post ID.
- Dark mode is applied through a custom theme provider and class toggling on the document root.
- The build has been verified successfully with the project scripts in the current workspace.

## Verification Status

The following checks were run successfully in the project:

- npm run build
- npm run lint

This confirms the current codebase is building cleanly and passing the configured lint rules.
UI

````

This approach keeps the page state represented by URL parameters, making filtered and sorted views easier to share and navigate.

---

## 💾 Comment Persistence

Comments submitted through the comment form are stored in the browser's `localStorage`.

The persistence logic is isolated in:

```text
src/hooks/usePersistedComments.ts
````

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
