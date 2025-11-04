# Awesome AI Tools Categories

This document lists all categories in the awesome-ai-tools readme.md to help with proper categorization of new tools.

## Main Categories

### AI Inference Providers
For services that provide API access to AI models for inference. This includes both major cloud providers and smaller specialized providers.

**Subcategories:**
- Major Cloud Providers (Anthropic, OpenAI, Google, DeepSeek, etc.)
- Unified Routing & Aggregation Platforms (OpenRouter, Unify, etc.)
- Additional Model Providers (Meta, xAI, Stability AI, etc.)

**Examples:** Anthropic Claude API, OpenAI GPT API, Google Gemini API, OpenRouter

---

### MCP Providers
Tools and services that implement the Model Context Protocol (MCP), an open standard for AI system integrations with external tools and data sources.

**Examples:** Anthropic MCP Server Repository, PulseMCP, Awesome MCP Servers

---

### CLI Tools
Command-line interface tools for AI-assisted coding. These are terminal-based tools that developers run from the command line.

**Examples:** Aider, Claude Code, GitHub Copilot CLI, Cody CLI

---

### Cloud-Based Agentic Coding Services
Web-based AI coding services that can autonomously perform complex coding tasks, often with long-running agents and deployment capabilities.

**Examples:** Replit Agent, bolt.new, v0 by Vercel, Lovable (formerly GPT Engineer)

---

### VS Code Extensions
Extensions that add AI capabilities to Visual Studio Code.

**Examples:** GitHub Copilot, Cline, Roo Code, Continue.dev, Cursor (also a full IDE)

---

### JetBrains IDE Tools
AI tools specifically for JetBrains IDEs (IntelliJ IDEA, PyCharm, WebStorm, etc.)

**Examples:** JetBrains AI Assistant, GitHub Copilot for JetBrains, Tabnine

---

### Full IDE Tools
Complete integrated development environments with built-in AI capabilities, not just extensions.

**Examples:** Cursor, Windsurf, PearAI, Zed, Void

---

### Code Review & Security Tools
Tools focused on code review, security analysis, vulnerability detection, and code quality.

**Examples:** Amazon Q Developer, Snyk, Qodo (formerly Codium), Greptile

---

### Testing & QA Tools
Tools specialized in generating tests, test automation, and quality assurance.

**Examples:** CodiumAI Cover-Agent, Momentic, QA Wolf, Octomind

---

### API Testing Tools
Specialized tools for API testing, monitoring, and development.

**Examples:** Postman, Treblle Alfred AI, Apidog

---

### Documentation & Code Explanation
Tools that generate documentation, explain code, or help with code understanding.

**Examples:** Mintlify, Trelent, Bloop

---

### Database & SQL Tools
AI-powered tools for database management, SQL generation, and data analysis.

**Examples:** Text2SQL.ai, NLSQL, AI Query, Outerbase

---

### Local Model Infrastructure
Tools and frameworks for running AI models locally on your own hardware.

**Examples:** Ollama, LM Studio, LocalAI, Jan

---

### AI/ML Libraries & Frameworks
Software development libraries and frameworks for building AI-powered applications.

**Examples:** LangChain, LlamaIndex, Semantic Kernel, AutoGen

---

### Browser Extensions
Extensions for web browsers that add AI capabilities to the browsing experience.

**Examples:** Phind, Codeium browser extension

---

### Search & Research Tools
AI-powered search engines and research tools for developers.

**Examples:** Phind, Perplexity, Sourcegraph Cody

---

### Other Tools & Infrastructure
Tools that don't fit neatly into other categories, including infrastructure, deployment, monitoring, and specialized utilities.

**Examples:** Railway, Pieces for Developers, Codeium Windsurf

---

## Categorization Guidelines

When categorizing a new tool, consider:

1. **Primary Function**: What is the tool's main purpose?
2. **Form Factor**: Is it a CLI, IDE, extension, service, or library?
3. **Specialization**: Does it specialize in a specific area (testing, security, documentation)?
4. **Multiple Categories**: Some tools may fit multiple categories - choose the most prominent one

## Examples of Tricky Categorizations

- **Cursor**: Both a VS Code Extension AND a Full IDE - categorized as Full IDE because it's a complete IDE built on VS Code
- **GitHub Copilot**: Available as VS Code extension, JetBrains plugin, and CLI - has entries in multiple categories
- **Anthropic**: Both an inference provider AND creator of MCP - listed in AI Inference Providers (MCP is separate category)
- **Replit**: Could be IDE or Cloud Service - categorized as Cloud-Based Agentic Coding Service because of its deployment capabilities
