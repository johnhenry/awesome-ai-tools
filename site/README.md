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
