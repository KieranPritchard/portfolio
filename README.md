# kpritchard.co.uk — Personal Portfolio

Source code for my personal portfolio site. Built with Next.js 15 and TypeScript, deployed on Vercel.

**Live:** [kpritchard.co.uk](https://www.kpritchard.co.uk/)

---

## Stack

| | |
|--|--|
| **Framework** | Next.js 15 (App Router) |
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
├── app/              # Next.js App Router pages & layouts
├── components/       # Reusable UI components
├── content/          # Markdown content (projects, blog posts, write-ups)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and content resolvers
├── public/           # Static assets
└── types/            # Shared TypeScript interfaces
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
