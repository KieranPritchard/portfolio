# kpritchard.co.uk — Personal Portfolio

Source code for my personal portfolio site. Built with Next.js and TypeScript, deployed on Vercel.

**Live:** [kpritchard.co.uk](https://www.kpritchard.co.uk/)

---

## Stack

| | |
|--|--|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI** | shadcn/ui |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Theming** | next-themes |
| **Deployment** | Vercel |

---

## Project Structure

```
/
├── app/                  # App Router routes, metadata, and route handlers
├── components/
│   ├── features/         # Components grouped by product area (about, blog, home, etc.)
│   ├── layouts/          # Shared page and site layout components
│   ├── buttons/          # Shared button components
│   ├── providers/        # Client-side context providers
│   └── ui/               # Reusable UI primitives
├── content/              # Markdown content (projects and blog posts)
├── data/                 # Structured JSON data
├── hooks/                # Custom React hooks
├── lib/                  # Shared utilities and content data access
├── public/               # Static assets served directly
│   ├── images/profile/   # Profile photography
│   ├── documents/        # Downloadable documents
│   ├── awards/           # Award images
│   ├── blogs/            # Blog cover images
│   └── projects/         # Project images grouped by project slug
├── scripts/              # Project maintenance and validation scripts
└── types/                # Shared TypeScript types
```

---

## Features

- **Filterable project grid** — categorised by Security, Web, and Automation
- **Floating nav** — active-page highlighting, mobile full-screen overlay with Framer Motion animations
- **Dark / light theme** — hydration-safe via `next-themes`
- **Blog** — file-based Markdown posts resolved at build time
- **Responsive** — mobile-first throughout

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build
```

---

## Contact

- **Site:** [kpritchard.co.uk](https://www.kpritchard.co.uk/)
- **Email:** [KieranPritchard06@gmail.com](mailto:KieranPritchard06@gmail.com)
- **LinkedIn:** [linkedin.com/in/kieran-pritchard](https://www.linkedin.com/in/kieran-pritchard/)
