#!/usr/bin/env node

/**
 * Generate readme.md from tools.json
 */

const fs = require('fs');
const path = require('path');

const JSON_INPUT = path.join(__dirname, '..', 'data', 'tools.json');
const FOOTER_TEMPLATE = path.join(__dirname, '..', 'templates', 'footer-sections.md');
const README_OUTPUT = path.join(__dirname, '..', 'readme.md');

function camelToTitle(camelCase) {
  // Handle common acronyms
  const acronyms = {
    'apiConsole': 'API Console',
    'apiPlatform': 'API Platform',
    'api': 'API',
    'aiStudio': 'AI Studio',
    'vertexAI': 'Vertex AI',
    'laPlayforme': 'La Plateforme'
  };

  if (acronyms[camelCase]) {
    return acronyms[camelCase];
  }

  // Convert camelCase to Title Case
  return camelCase
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

function generateToolEntry(tool) {
  let entry = `#### **${tool.name}**\n`;

  // Define field order for consistent output
  const fieldOrder = [
    'type',
    'developer',
    'stakeholder',
    'website',
    'repository',
    'documentation',
    'apiConsole',
    'apiPlatform',
    'gettingStarted',
    'download',
    'stableImage',
    'grok',
    'aiStudio',
    'vertexAI',
    'platform',
    'platforms',
    'laPlayforme',
    'installation',
    'source',
    'status',
    'rebranding',
    'formerName',
    'release',
    'commands',
    'variants',
    'models',
    'api',
    'pricing',
    'specialFeatures',
    'keyFeatures',
    'key Features',
    'focus',
    'architecture',
    'providers',
    'performance',
    'benchmark',
    'requirements',
    'useCase'
  ];

  // Add fields in order
  fieldOrder.forEach(field => {
    if (tool[field] !== undefined) {
      const title = camelToTitle(field);
      const value = tool[field];

      if (Array.isArray(value)) {
        if (value.length > 0) {
          entry += `- **${title}**:\n`;
          value.forEach(item => {
            entry += `  - ${item}\n`;
          });
        }
      } else {
        entry += `- **${title}**: ${value}\n`;
      }
    }
  });

  // Add any other fields not in the predefined order (except subsections and worksWith)
  Object.keys(tool).forEach(field => {
    if (field !== 'name' && field !== 'worksWith' && field !== 'subsections' && !fieldOrder.includes(field)) {
      const title = camelToTitle(field);
      const value = tool[field];

      if (Array.isArray(value)) {
        if (value.length > 0) {
          entry += `- **${title}**:\n`;
          value.forEach(item => {
            entry += `  - ${item}\n`;
          });
        }
      } else {
        entry += `- **${title}**: ${value}\n`;
      }
    }
  });

  // Add subsections if present
  if (tool.subsections) {
    entry += '\n';
    Object.keys(tool.subsections).forEach(key => {
      const subsection = tool.subsections[key];

      // Check if content has inline text or bullet points
      if (subsection.content.length === 1 && !subsection.content[0].includes('\n')) {
        // Single line - might be inline content
        // Check if it looks like inline content (no bullet formatting needed)
        const content = subsection.content[0];
        if (content && content.length > 0 && !content.startsWith('-')) {
          entry += `**${subsection.title}:** ${content}\n\n`;
        } else {
          entry += `**${subsection.title}**:\n`;
          entry += `- ${content}\n\n`;
        }
      } else {
        // Multiple items or empty - use bullet points
        entry += `**${subsection.title}**:\n`;
        subsection.content.forEach(item => {
          entry += `- ${item}\n`;
        });
        entry += '\n';
      }
    });
  }

  // Add "Works with" section
  if (tool.worksWith && tool.worksWith.length > 0) {
    entry += `**Works with:**\n`;
    tool.worksWith.forEach(item => {
      entry += `- ${item}\n`;
    });
    entry += '\n';
  }

  entry += '---\n';

  return entry;
}

function generateTableOfContents(categories) {
  let toc = '## Table of Contents\n';
  categories.forEach(cat => {
    const anchor = cat.id;
    toc += `- [${cat.name}](#${anchor})\n`;
  });
  return toc + '\n---\n\n';
}

function generateReadme(data) {
  let readme = `# ${data.meta.title} [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)\n\n`;

  // Add metadata
  readme += `> **Last Updated:** ${data.meta.lastUpdated}\n`;
  readme += `> ${data.meta.subtitle}\n\n`;

  // Add introduction
  readme += `## Introduction\n\n`;
  readme += `${data.meta.introduction.overview}\n\n`;

  readme += `### Purpose\n\n`;
  readme += `The AI coding tools ecosystem is rapidly evolving, with new tools, models, and integrations being released frequently. This guide aims to:\n\n`;
  data.meta.introduction.purpose.forEach(item => {
    readme += `- ${item}\n`;
  });

  readme += `\n### Contributing\n\n`;
  readme += `${data.meta.introduction.contributing}\n\n`;

  // Add table of contents
  readme += generateTableOfContents(data.categories);

  // Add categories
  data.categories.forEach(category => {
    readme += `## ${category.name}\n\n`;

    // Add category description if present
    if (category.description) {
      readme += `${category.description}\n\n`;
    }

    // Handle subcategories
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach(subcategory => {
        readme += `### ${subcategory.name}\n\n`;

        subcategory.tools.forEach(tool => {
          readme += generateToolEntry(tool);
          readme += '\n';
        });
      });
    } else if (category.tools && category.tools.length > 0) {
      // No subcategories, add tools directly
      category.tools.forEach(tool => {
        readme += generateToolEntry(tool);
        readme += '\n';
      });
    }
  });

  return readme;
}

function main() {
  console.log('Reading tools.json...');
  const data = JSON.parse(fs.readFileSync(JSON_INPUT, 'utf-8'));

  console.log('Generating readme.md...');
  let readme = generateReadme(data);

  // Append footer sections if template exists
  if (fs.existsSync(FOOTER_TEMPLATE)) {
    console.log('Appending footer sections...');
    const footer = fs.readFileSync(FOOTER_TEMPLATE, 'utf-8');
    readme += '\n' + footer;
  }

  console.log('Writing readme.md...');
  fs.writeFileSync(README_OUTPUT, readme, 'utf-8');

  // Count tools
  let totalTools = 0;
  data.categories.forEach(cat => {
    if (cat.tools) totalTools += cat.tools.length;
    if (cat.subcategories) {
      cat.subcategories.forEach(sub => {
        totalTools += sub.tools.length;
      });
    }
  });

  console.log(`✓ Successfully generated readme.md with ${totalTools} tools across ${data.categories.length} categories`);
}

main();
