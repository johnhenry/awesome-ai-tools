---
name: add-awesome-tool
description: This skill should be used when analyzing a link to an AI tool and adding it to the awesome-ai-tools readme with proper categorization
---

# Add Awesome Tool

Analyze a URL (or multiple URLs) to an AI tool, extract relevant information, and add it to the awesome-ai-tools readme.md with proper categorization and formatting.

## Usage

When the user provides a link to an AI tool, use this skill to:

1. Fetch and analyze the webpage content
2. Extract key information (name, description, features, pricing, etc.)
3. Determine the appropriate category in the readme
4. Format the entry according to the readme's structure
5. Add the entry to the appropriate section in the readme
6. Update the "Last Updated" date

The skill supports both single links and multiple links in one request.

## Workflow

To add a tool to the readme:

1. **Run the analysis script**: Use the Python script in `scripts/analyze_and_add.py` with the URL as an argument
2. **Review the extracted data**: The script will display the extracted information and proposed category
3. **Confirm or adjust**: User can confirm the entry or request adjustments
4. **Add to readme**: The tool will be added to the appropriate section in readme.md

## Bundled Resources

### scripts/

**analyze_and_add.py**: Main script that:
- Fetches webpage content from provided URLs
- Extracts tool information (name, description, features, pricing)
- Uses Claude API to intelligently categorize the tool
- Formats the entry according to readme structure
- Inserts the entry in the correct alphabetical position within the category
- Updates the "Last Updated" date

Usage:
```bash
python3 .claude/skills/add-awesome-tool/scripts/analyze_and_add.py <url> [additional_urls...]
```

### references/

**categories.md**: Complete list of categories from the readme with descriptions to help with categorization

## Implementation

When the user provides a link (or says something like "add this tool"):

1. **Extract the URL** from the user's message
2. **Run the script**:
   ```bash
   python3 .claude/skills/add-awesome-tool/scripts/analyze_and_add.py <url>
   ```
3. **Present the analysis** to the user, showing:
   - Extracted tool name and description
   - Proposed category
   - Key features found
   - Formatted entry preview
4. **Ask for confirmation** before adding to readme
5. **Add to readme** if confirmed
6. **Update "Last Updated"** date to current month and year

## Categories

The readme contains these main categories:
- AI Inference Providers (with subcategories)
- MCP Providers
- CLI Tools
- Cloud-Based Agentic Coding Services
- VS Code Extensions
- JetBrains IDE Tools
- Full IDE Tools
- Code Review & Security Tools
- Testing & QA Tools
- API Testing Tools
- Documentation & Code Explanation
- Database & SQL Tools
- Local Model Infrastructure
- AI/ML Libraries & Frameworks
- Browser Extensions
- Search & Research Tools
- Other Tools & Infrastructure

## Entry Format

Each entry follows this structure:

```markdown
#### **Tool Name**
- **Developer**: Company/Organization (if different from tool name)
- **Website**: https://example.com
- **Repository**: https://github.com/... (if open source)
- **Documentation**: https://docs.example.com (if available)
- **Type**: Brief description
- **Key Features**:
  - Feature 1
  - Feature 2
  - Feature 3
- **Pricing**: Pricing model (if applicable)

**Works with:**
- Compatible tools/platforms
- Integration options
- Use cases

---
```

## Examples

**User**: "Add this tool: https://github.com/example/awesome-ai-cli"

**Assistant**:
1. Runs the analysis script
2. Extracts: "Awesome AI CLI - A command-line tool for..."
3. Proposes: "CLI Tools" category
4. Shows formatted entry
5. Asks for confirmation
6. Adds to readme in correct alphabetical position
7. Updates "Last Updated" date

**User**: "Add these: https://tool1.com https://tool2.com"

**Assistant**: Processes both URLs sequentially, following the same workflow for each

## Limitations

- Requires Claude API access for intelligent content analysis and categorization
- Webpage content must be accessible (no paywalls or login requirements)
- Works best with official tool websites that have clear documentation
- May need manual adjustment for tools that fit multiple categories
- Cannot automatically determine "Works with:" compatibility without additional context
