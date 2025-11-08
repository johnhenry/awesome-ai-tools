# Build Scripts

This directory contains scripts for managing the awesome-ai-tools repository.

## Overview

The repository uses a **JSON-first approach**:
- `data/tools.json` is the source of truth
- `readme.md` is auto-generated from the JSON
- Never edit `readme.md` directly

## Scripts

### `generate-readme.js`
Generates `readme.md` from `data/tools.json`.

**Usage:**
```bash
node scripts/generate-readme.js
# or
npm run build
```

**What it does:**
1. Reads `data/tools.json`
2. Generates markdown for all tools and categories
3. Appends footer sections from `templates/footer-sections.md`
4. Writes to `readme.md`

### `parse-readme.js`
Parses an existing `readme.md` and extracts data into `data/tools.json`.

**Usage:**
```bash
node scripts/parse-readme.js
# or
npm run parse
```

**When to use:**
- Initial setup from an existing readme
- Recovering from manual readme edits
- Migration/import scenarios

**Note:** This is typically only needed once. After setup, work with `tools.json` directly.

## Workflow

### Adding a New Tool

1. **Extract information** from the tool's website
2. **Edit `data/tools.json`** to add the tool entry in the appropriate category
3. **Regenerate readme**:
   ```bash
   npm run build
   ```

### Updating a Tool

1. **Edit the tool's entry** in `data/tools.json`
2. **Regenerate readme**:
   ```bash
   npm run build
   ```

### Validating JSON

To check if `tools.json` is valid JSON:
```bash
npm run validate
```

## JSON Structure

```json
{
  "meta": {
    "title": "Awesome AI Tools",
    "lastUpdated": "November 2025",
    "introduction": { ... }
  },
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "description": "Optional description",
      "tools": [ ... ],
      "subcategories": [ ... ]
    }
  ]
}
```

### Tool Entry Format

```json
{
  "name": "Tool Name",
  "type": "Description",
  "developer": "Company",
  "website": "https://...",
  "repository": "https://github.com/...",
  "installation": "install command",
  "keyFeatures": ["feature1", "feature2"],
  "worksWith": ["integration1", "integration2"]
}
```

Use **camelCase** for field names. Common fields:
- name, type, developer, website, repository, documentation
- installation, models, keyFeatures, pricing
- status, worksWith

Only include fields that have values - omit empty/null fields.

## Templates

### `templates/footer-sections.md`

Contains the final sections of the readme that don't change frequently:
- Performance Comparison Context
- Integration Matrix Summary
- Recommendations by Use Case
- Tool Categories Summary
- Additional Resources
- License

These sections are appended to the generated readme automatically.

## Tips

- Always run `npm run build` after editing `tools.json`
- Use `npm run validate` to check JSON syntax before building
- Keep tool entries sorted alphabetically within categories (optional but nice)
- Use consistent field names across similar tools
