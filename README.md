# SRK Visions

The public website for **SRK Visions**, a Hyderabad-based photo post-production studio. It presents the studio's services, portfolio, client workflow, testimonials, and a project-brief form for photographers and studios.

## What the site includes

- Service pages for colour correction, image culling and selection, high-end retouching, and album design
- Portfolio, before-and-after, testimonials, Instagram, about, contact, privacy-policy, and order pages
- A responsive global navigation, footer, and WhatsApp contact shortcut
- SEO metadata, sitemap, and robots configuration
- A project-brief endpoint at `POST /api/order`

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for animation
- Lucide React icons

## Local development

### Prerequisites

- Node.js 20.9 or newer
- npm

### Run the project

```bash
git clone https://github.com/beyondwebco-lgtm/srk-vision.git
cd srk-vision
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Produce an optimized production build |
| `npm run start` | Serve a production build locally |

## Project structure

```text
src/
  app/              Routes, layout, metadata, and the order API route
  components/       Reusable page sections and shared UI
  data/content.ts   Studio details and editable site content
public/assets/      Brand images, team photos, and portfolio assets
```

## Editing content

Most business-facing copy, services, testimonials, portfolio items, workflow steps, and studio contact details live in [`src/data/content.ts`](src/data/content.ts). Update that file when changing studio information so it stays consistent across pages.

The footer is in [`src/components/Footer.tsx`](src/components/Footer.tsx) and includes the BeyondWebCo attribution link.

## Order brief endpoint

The order form sends requests to `POST /api/order`. The route currently validates the customer's name, email, and phone number, then records the structured brief to server logs and returns an order ID. It does **not** send email yet.

The route contains a commented Resend integration placeholder. Before enabling delivery, configure a valid sender domain and add `RESEND_API_KEY` to the deployment environment. Never commit environment files or API keys.

## Images and assets

Project-owned assets are under `public/assets`. Some editorial and demonstration images are served from Unsplash; `next.config.ts` explicitly permits that remote image host. Confirm image rights before replacing sample imagery or launching a revised site.

## Deployment

Deploy to any host that supports Next.js (for example, Vercel). Configure production environment variables in the host dashboard, run `npm run build`, and connect the deployment to the `main` branch for continuous delivery.

## Credits

Built by [BeyondWebCo](https://www.beyondwebco.com/).
