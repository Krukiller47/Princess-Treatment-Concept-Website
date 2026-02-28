# Princess Treatment Concept Website

A modern, fully responsive beauty salon website for **Princess Treatment – Addis Ababa**, built with **Next.js 14** and **Tailwind CSS**. This replaces the previous WordPress / Kubio editor setup with a developer-friendly codebase that is easy to customise, fast to load, and deployable to any static or Node.js host.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (Pages Router) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | JavaScript (React 18) |
| Deployment | Vercel / Netlify / any Node host |

## Pages & Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Navbar | `components/Navbar.js` | Fixed top nav with mobile hamburger menu |
| Hero | `components/Hero.js` | Full-screen landing banner with CTAs |
| Services | `components/Services.js` | 6-card service grid with hover effects |
| About | `components/About.js` | Story section with stats |
| Gallery | `components/Gallery.js` | 6-cell photo gallery grid |
| Contact / Book | `components/Contact.js` | Booking form + contact details |
| Footer | `components/Footer.js` | Links, social icons, copyright |

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krukiller47/Princess-Treatment-Concept-Website.git
   cd Princess-Treatment-Concept-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment Instructions

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

### Deploy to Vercel (recommended)

```bash
npx vercel
```

Or connect the GitHub repository to [Vercel](https://vercel.com) for automatic deployments on every push.

## Customising the Content

All content lives directly in the component files — no CMS or special editor needed:

- **Services** → `components/Services.js` – edit the `services` array
- **About stats** → `components/About.js` – edit the stats array
- **Gallery items** → `components/Gallery.js` – swap emojis / images
- **Contact info** → `components/Contact.js` – update address, phone, email
- **Social links** → `components/Footer.js`

## Additional Notes

- Ensure [Node.js](https://nodejs.org/) (v18+) is installed.
- Replace placeholder contact details and social links with real ones before going live.
- To add real photos replace the emoji placeholders in `Gallery.js` with `<Image>` tags pointing to your `/public` assets.

