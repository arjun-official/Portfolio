# Arjun P - Software Engineer Portfolio

Personal portfolio website for Arjun P, a Computer Science and Engineering undergraduate interested in backend development, AI, machine learning, and intelligent software systems.

The site presents professional experience, technical skills, selected projects, education, certifications, languages, and contact details in a responsive multi-page experience.

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Features

- Responsive portfolio layout for desktop and mobile screens
- Client-side navigation for About, Skills, Experience, Projects, Education, and Contact pages
- Project cards with screenshots, technologies, descriptions, and GitHub links
- Profile photo and project media served from the public assets folder
- Downloadable resume
- Direct email and phone contact links
- Reduced-motion support for users who prefer less animation

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Other Commands

```bash
npm run typecheck
npm run lint
npm run preview
```

## Project Structure

```text
project/
├── public/
│   └── profile/       # Profile photo, project screenshots, and resume
├── src/
│   ├── data/
│   │   └── profile.ts # Profile, experience, project, and education data
│   ├── App.tsx        # Application pages and routing
│   ├── index.css      # Global styles and responsive layout rules
│   └── main.tsx       # React entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Adding Images

Place public images in `public/profile/` and reference them from React with a root-relative URL:

```tsx
<img src="/profile/profile.jpeg" alt="Arjun P" />
```

For filenames containing spaces, encode the spaces in the browser path or rename the file using a simpler name such as `flight-review.png`.

## Updating Portfolio Content

Edit [src/data/profile.ts](src/data/profile.ts) to update:

- Personal information and contact details
- Skills
- Internship experience
- Projects and project links
- Education
- Certifications
- Languages

## Deploying to GitHub

The project is configured as a Vite application and can be deployed through GitHub Pages, Netlify, Vercel, or another static hosting provider.

To push changes to the existing GitHub repository:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## License

This portfolio is personal work. Contact the author before reusing its content, branding, or personal information.
