# Awesome AI Tools - Astro Site

This is an Astro v5.15 site that displays the curated list of AI-powered coding tools from the awesome-ai-tools repository.

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

Build the site for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Deployment

### GitHub Pages

This site is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

**Automatic Deployment:**
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site
- Triggered on pushes to `main` branch that affect the `site/` directory or `data/tools.json`
- Site will be available at: `https://johnhenry.github.io/awesome-ai-tools/`

**Manual Setup (First Time):**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. The workflow will run automatically on the next push to main

**Manual Deployment:**

You can also trigger a deployment manually:
1. Go to the Actions tab in your GitHub repository
2. Select "Deploy Astro site to GitHub Pages"
3. Click "Run workflow"

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Page routes
│   └── tools.json   # AI tools data
├── astro.config.mjs # Astro configuration
├── package.json
└── tsconfig.json
```

## Data Source

The site uses data from `/data/tools.json` which contains comprehensive information about:

- AI Inference Providers
- IDEs and Editors
- VS Code Extensions
- CLI Tools
- Code Review Tools
- And more...

## Features

- Responsive design with dark mode support
- Category navigation
- Tool cards with detailed information
- Links to official websites and documentation
- "Works with" compatibility information

## License

CC0-1.0 - See the main repository for details.
