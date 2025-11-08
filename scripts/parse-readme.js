#!/usr/bin/env node

/**
 * Parse the existing readme.md and extract all tool data into tools.json
 */

const fs = require('fs');
const path = require('path');

const README_PATH = path.join(__dirname, '..', 'readme.md');
const JSON_OUTPUT = path.join(__dirname, '..', 'data', 'tools.json');

function parseReadme(content) {
  const lines = content.split('\n');

  const data = {
    meta: {
      title: "Awesome AI Tools",
      lastUpdated: "November 2025",
      subtitle: "A complete guide to AI-powered coding tools, from inference providers to IDEs, extensions, and specialized utilities.",
      introduction: {
        overview: "",
        purpose: [],
        contributing: ""
      }
    },
    categories: []
  };

  let currentCategory = null;
  let currentSubcategory = null;
  let currentTool = null;
  let currentField = null;
  let inIntroduction = false;
  let inPurpose = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Skip empty lines when not building arrays
    if (!trimmedLine && !currentField) continue;

    // Parse introduction section
    if (trimmedLine === '## Introduction') {
      inIntroduction = true;
      continue;
    }

    if (inIntroduction) {
      if (trimmedLine.startsWith('## ')) {
        inIntroduction = false;
      } else if (trimmedLine === '### Purpose') {
        inPurpose = true;
        continue;
      } else if (trimmedLine === '### Contributing') {
        inPurpose = false;
        continue;
      } else if (trimmedLine.startsWith('This repository serves as')) {
        data.meta.introduction.overview = trimmedLine;
      } else if (inPurpose && trimmedLine.startsWith('-')) {
        data.meta.introduction.purpose.push(trimmedLine.substring(2));
      } else if (trimmedLine.startsWith('Contributions are welcome')) {
        data.meta.introduction.contributing = trimmedLine;
      }
      continue;
    }

    // Parse main category (## heading)
    if (trimmedLine.startsWith('## ') && !trimmedLine.includes('Table of Contents')) {
      // Save previous tool if exists
      if (currentTool && currentCategory) {
        if (currentSubcategory) {
          currentSubcategory.tools.push(currentTool);
        } else {
          currentCategory.tools.push(currentTool);
        }
        currentTool = null;
      }

      const categoryName = trimmedLine.substring(3);
      currentCategory = {
        id: categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: categoryName,
        description: null,
        tools: [],
        subcategories: []
      };
      data.categories.push(currentCategory);
      currentSubcategory = null;
      continue;
    }

    // Parse subcategory (### heading)
    if (trimmedLine.startsWith('### ')) {
      // Save previous tool if exists
      if (currentTool) {
        if (currentSubcategory) {
          currentSubcategory.tools.push(currentTool);
        } else if (currentCategory) {
          currentCategory.tools.push(currentTool);
        }
        currentTool = null;
      }

      const subcategoryName = trimmedLine.substring(4);
      currentSubcategory = {
        id: subcategoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: subcategoryName,
        tools: []
      };
      if (currentCategory) {
        currentCategory.subcategories.push(currentSubcategory);
      }
      continue;
    }

    // Parse tool entry (#### heading)
    if (trimmedLine.startsWith('#### ')) {
      // Save previous tool if exists
      if (currentTool) {
        if (currentSubcategory) {
          currentSubcategory.tools.push(currentTool);
        } else if (currentCategory) {
          currentCategory.tools.push(currentTool);
        }
      }

      // Extract tool name (remove ** markdown)
      const toolName = trimmedLine.substring(5).replace(/\*\*/g, '');
      currentTool = {
        name: toolName
      };
      currentField = null;
      continue;
    }

    // Parse tool fields
    if (currentTool && trimmedLine.startsWith('- **')) {
      // Extract field name and value
      const match = trimmedLine.match(/^- \*\*([^*]+)\*\*:\s*(.*)$/);
      if (match) {
        const fieldName = match[1];
        let fieldValue = match[2];

        // Convert field name to camelCase
        let camelFieldName = fieldName
          .replace(/[^a-zA-Z0-9\s]/g, '')
          .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
          .replace(/^(.)/, (_, c) => c.toLowerCase());

        // Handle acronyms: convert aPIConsole -> apiConsole, aPI -> api, etc.
        camelFieldName = camelFieldName
          .replace(/^aPI/, 'api')
          .replace(/^aI/, 'ai');

        // Check if this starts a multi-line field (Key Features, etc.)
        // A field is multi-line if the value is empty
        if (fieldValue.trim() === '') {
          currentField = camelFieldName;
          currentTool[camelFieldName] = [];
        } else {
          currentTool[camelFieldName] = fieldValue;
          currentField = null;
        }
      }
      continue;
    }

    // Parse multi-line fields (bullet points under a field)
    if (currentTool && currentField && line.startsWith('  - ')) {
      const value = line.substring(4);
      if (!Array.isArray(currentTool[currentField])) {
        currentTool[currentField] = [];
      }
      currentTool[currentField].push(value);
      continue;
    }

    // Parse special subsections - handles both **Text:** and **Text**:  formats
    if (currentTool && trimmedLine.match(/^\*\*[A-Za-z][^*]+(\*\*:|:\*\*)/)) {
      // Check if this is "Works with:" which is handled separately
      if (trimmedLine === '**Works with:**') {
        // Set up worksWith field so bullets get captured
        currentField = 'worksWith';
        currentTool.worksWith = [];
        // Don't create a subsection for this
      } else {
        // This is a subsection header - try both formats
        let match = trimmedLine.match(/^\*\*([^:]+):\*\*\s*(.*)$/); // **Text:** format
        if (!match) {
          match = trimmedLine.match(/^\*\*([^*]+)\*\*:\s*(.*)$/); // **Text**: format
        }

        if (match) {
          const subsectionName = match[1];
          const inlineContent = match[2].trim();
          let camelName = subsectionName
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
            .replace(/^(.)/, (_, c) => c.toLowerCase());

          // Handle acronyms
          camelName = camelName
            .replace(/^aPI/, 'api')
            .replace(/^aI/, 'ai');

          // Initialize subsections object if needed
          if (!currentTool.subsections) {
            currentTool.subsections = {};
          }

          currentField = camelName;
          currentTool.subsections[camelName] = {
            title: subsectionName,
            content: inlineContent ? [inlineContent] : []
          };
        }
      }
      continue;
    }

    // Parse "Works with:" section (check this before subsection content)
    if (currentTool && trimmedLine === '**Works with:**') {
      currentField = 'worksWith';
      currentTool.worksWith = [];
      continue;
    }

    // Parse subsection content (bullet points or paragraphs)
    if (currentTool && currentField && currentTool.subsections && currentTool.subsections[currentField]) {
      if (trimmedLine.startsWith('- ')) {
        currentTool.subsections[currentField].content.push(trimmedLine.substring(2));
        continue;
      } else if (trimmedLine && !trimmedLine.startsWith('**') && !trimmedLine.startsWith('####') && trimmedLine !== '---') {
        // Plain text content (but not separators)
        currentTool.subsections[currentField].content.push(trimmedLine);
        continue;
      }
    }

    // Parse works with items
    if (currentTool && currentField === 'worksWith' && trimmedLine.startsWith('- ')) {
      currentTool.worksWith.push(trimmedLine.substring(2));
      continue;
    }

    // End of tool entry (---)
    if (trimmedLine === '---') {
      if (currentTool) {
        if (currentSubcategory) {
          currentSubcategory.tools.push(currentTool);
        } else if (currentCategory) {
          currentCategory.tools.push(currentTool);
        }
        currentTool = null;
      }
      currentField = null;
      continue;
    }

    // Parse category description (paragraph after category heading)
    if (currentCategory && !currentSubcategory && !currentTool && trimmedLine && !trimmedLine.startsWith('#')) {
      if (!currentCategory.description) {
        currentCategory.description = trimmedLine;
      }
    }
  }

  // Save last tool if exists
  if (currentTool) {
    if (currentSubcategory) {
      currentSubcategory.tools.push(currentTool);
    } else if (currentCategory) {
      currentCategory.tools.push(currentTool);
    }
  }

  // Clean up categories with empty subcategories
  data.categories = data.categories.map(cat => {
    if (cat.subcategories.length === 0) {
      delete cat.subcategories;
    }
    return cat;
  });

  return data;
}

function main() {
  console.log('Reading readme.md...');
  const content = fs.readFileSync(README_PATH, 'utf-8');

  console.log('Parsing content...');
  const data = parseReadme(content);

  console.log(`Extracted ${data.categories.length} categories`);

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
  console.log(`Extracted ${totalTools} tools`);

  // Ensure data directory exists
  const dataDir = path.dirname(JSON_OUTPUT);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  console.log('Writing tools.json...');
  fs.writeFileSync(JSON_OUTPUT, JSON.stringify(data, null, 2), 'utf-8');

  console.log('✓ Successfully parsed readme.md and created tools.json');
}

main();
