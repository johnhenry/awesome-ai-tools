# Awesome AI Tools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> **Last Updated:** November 2025
> A complete guide to AI-powered coding tools, from inference providers to IDEs, extensions, and specialized utilities.

## Introduction

This repository serves as a comprehensive, curated list of AI-powered coding tools available as of October 2025. Our goal is to provide developers, teams, and organizations with a detailed overview of the AI coding landscape, helping them make informed decisions about which tools best fit their needs.

### Purpose

The AI coding tools ecosystem is rapidly evolving, with new tools, models, and integrations being released frequently. This guide aims to:

- **Centralize Information**: Consolidate scattered information about AI coding tools in one accessible location
- **Provide Context**: Offer detailed descriptions, features, and compatibility information for each tool
- **Enable Comparison**: Help users compare tools based on their specific requirements (privacy, cost, performance, etc.)
- **Track Evolution**: Document the fast-changing landscape of AI coding tools and their capabilities
- **Support Decision-Making**: Provide use-case specific recommendations to guide tool selection

### Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to add new tools, update existing entries, and follow our quality standards.

## Table of Contents
- [AI Inference Providers](#ai-inference-providers)
- [MCP Providers](#mcp-providers)
- [CLI Tools](#cli-tools)
- [Cloud-Based Agentic Coding Services](#cloud-based-agentic-coding-services)
- [VS Code Extensions](#vs-code-extensions)
- [JetBrains IDE Tools](#jetbrains-ide-tools)
- [Full IDE Tools](#full-ide-tools)
- [Code Review & Security Tools](#code-review-security-tools)
- [Testing & QA Tools](#testing-qa-tools)
- [API Testing Tools](#api-testing-tools)
- [Documentation & Code Explanation](#documentation-code-explanation)
- [Database & SQL Tools](#database-sql-tools)
- [Local Model Infrastructure](#local-model-infrastructure)
- [AI/ML Libraries & Frameworks](#ai-ml-libraries-frameworks)
- [Browser Extensions](#browser-extensions)
- [Search & Research Tools](#search-research-tools)
- [Other Tools & Infrastructure](#other-tools-infrastructure)
- [Performance Comparison Context](#performance-comparison-context)
- [Integration Matrix Summary](#integration-matrix-summary)
- [Recommendations by Use Case](#recommendations-by-use-case)
- [Tool Categories Summary](#tool-categories-summary)
- [Additional Resources](#additional-resources)
- [License](#license)

---

## AI Inference Providers

### Major Cloud Providers

#### **Anthropic**
- **Website**: https://www.anthropic.com
- **Documentation**: https://docs.anthropic.com
- **API Console**: https://console.anthropic.com
- **Models**: Claude 4 (Opus, Sonnet), Claude 3.5 Sonnet, Claude 3.7 Sonnet
- **API**: Direct API access via api.anthropic.com
- **Pricing**: Varies by model, competitive with OpenAI
- **Integration**: Native support in most coding tools
**Works with:**
- Claude Code CLI (native)
- Cline, Roo Code, Kilo Code (VS Code extensions)
- Cursor, Windsurf, Void, PearAI (IDEs)
- AWS Bedrock, Azure AI Foundry (cloud platforms)
- JetBrains AI Assistant

---

#### **OpenAI**
- **Website**: https://openai.com
- **Documentation**: https://platform.openai.com/docs
- **API Platform**: https://platform.openai.com
- **Models**: GPT-5, GPT-5-mini, GPT-4.1, o3, o4-mini, GPT-5-Codex
- **API**: OpenAI-compatible API format (industry standard)
- **Pricing**: Premium pricing, various tiers
- **Special Features**: Reasoning models (o-series), specialized coding (Codex)
**Works with:**
- OpenAI Codex CLI (native)
- GitHub Copilot (native integration)
- All major coding tools (universal OpenAI API support)
- AWS Bedrock (open weight models now available)
- Azure OpenAI Service (exclusive partnership)

---

#### **Google**
- **Website**: https://ai.google.dev
- **Documentation**: https://ai.google.dev/docs
- **AI Studio**: https://aistudio.google.com
- **Vertex AI**: https://cloud.google.com/vertex-ai
- **Platforms**: Google AI Studio, Vertex AI, DeepMind
- **Models**: Gemini 2.5 Pro, Gemini 2.0 Flash, PaLM, Gemma
- **API**: Google Cloud Platform integration
- **Special Features**: MCP support announced for Gemini (April 2025, Demis Hassabis)
**Works with:**
- Gemini CLI (native)
- Jules Tools CLI (native)
- GitHub Copilot, Cline, Kilo Code (multi-model support)
- Google Vertex AI (cloud platform)
- JetBrains AI Assistant

---

#### **DeepSeek**
- **Website**: https://www.deepseek.com
- **API Platform**: https://platform.deepseek.com
- **Models**: DeepSeek R1, DeepSeek V3, DeepSeek Coder
- **Pricing**: Ultra-competitive (~$0.28-$0.70/M input tokens)
- **Special Features**: 671B parameters, 37B active, open-source with reasoning tokens
- **Performance**: Comparable to OpenAI o1
**Works with:**
- DeepSeek CLI (dedicated)
- OpenRouter (aggregation platform)
- Codex CLI (integration guide available)
- Continue, Cline, Roo Code (OpenAI-compatible API)
- JetBrains AI Assistant (local models)

---

#### **Qwen (Alibaba)**
- **Models**: Qwen3 series, Qwen2.5-Coder
- **Special Features**: Large context windows, multilingual support
- **Integration**: Available through OpenRouter and direct API
**Works with:**
- Continue.dev + Ollama (local deployment)
- OpenRouter (cloud access)
- Various CLI tools via OpenAI-compatible endpoints
- JetBrains AI Assistant (local models)

---

#### **Mistral AI**
- **Website**: https://mistral.ai
- **Documentation**: https://docs.mistral.ai
- **Platform**: https://console.mistral.ai (La Plateforme)
- **Models**: Mistral Large, Mistral Small, Ministral 3B, Mistral-OCR-2503, Magistral (reasoning)
- **Pricing**: Pay-as-you-go token-based billing
- **Special Features**: Magistral reasoning models (June 2025) for multi-step logic
**Works with:**
- Azure AI Foundry (serverless API)
- Tabnine (third-party chat model)
- Continue.dev, Cline
- OpenRouter

---

#### **Cohere**
- **Models**: Command, Embed, Rerank families
- **Special Features**: Top-tier multilingual models, full deployment control
- **Focus**: Enterprise, multilingual, robust security
**Works with:**
- AWS Bedrock
- Enterprise deployments requiring data control
- Multi-language applications

---

#### **AI21 Labs**
- **Models**: Jamba family (Mamba-Transformer hybrid)
- **Focus**: Commercial reliability, quality, performance
- **Architecture**: Hybrid Mamba-Transformer for production use
**Works with:**
- AWS Bedrock
- Azure AI Foundry
- Enterprise applications

---

#### **Perplexity**
- **Type**: AI search/Q&A with developer API
- **Models**: State-of-the-art open-source (Llama, Mistral)
- **Pricing**: Usage-based; Pro users get $5/month pplx-api credit
- **Special Features**: Real-time internet data access, rapid model integration
**Works with:**
- Applications requiring live data (news, finance, trends)
- REST API integrations
- Research and Q&A systems

---

### Unified Routing & Aggregation Platforms

#### **OpenRouter**
- **Type**: Unified API gateway
- **Models**: 300-400+ models from multiple providers
- **Key Features**:
  - Single OpenAI-compatible endpoint
  - Automatic failover and routing
  - Cost/latency/performance optimization
  - Prompt caching
  - Unified billing
- **Providers**: Anthropic, OpenAI, Google, Meta, Mistral, DeepSeek, and more
**Works with:**
- Cline (direct integration with auto-updating model list)
- Cursor, Windsurf (custom API endpoint support)
- Continue.dev, Roo Code, Kilo Code
- Claude Code Router (proxy for Claude Code)

---

#### **Hugging Face Inference**
- **Type**: Multi-provider serverless inference
- **Models**: Hundreds of ML models
- **API**: Unified, consistent API across providers
- **Pricing**: Standard provider API rates
- **Providers**: Fal, Replicate, SambaNova, Together AI
**Works with:**
- LiteLLM
- Developer applications
- Fine-tuning workflows (with Together AI, Replicate)

---

#### **ch.at**
- **Type**: Zero-setup OpenAI-compatible chat service
- **Website**: https://ch.at
- **Pricing**: Free service
- **Key Features**:
  - No accounts, no logs, no tracking
  - Multiple access methods (HTTP, SSH, DNS)
  - Single-binary service
  - Streamed responses support
  - IP-based rate limiting
- **Endpoint**: https://ch.at/v1/chat/completions
**Works with:**
- qqqa (zero-setup backend)
- Any OpenAI-compatible client
- curl, SSH access available

---

#### **Replicate**
- **Type**: Hosted open-source model inference
- **Use Case**: Rapid model integration and testing
- **Features**: Fine-tuning, quick testing, no infrastructure setup
**Works with:**
- Hugging Face platform
- API integrations
- Development and prototyping

---

### Cloud Platform AI Services

#### **AWS Bedrock**
- **Type**: Multi-vendor AI service platform
- **Models**: Claude (Anthropic), Titan (Amazon), Llama (Meta), Cohere, AI21, Mistral, Stability AI, OpenAI (open weight)
- **Special Features**: Serverless, fully managed, OpenAI-compatible API (August 2025)
- **Integration**: Deep AWS ecosystem (Lambda, S3, CloudWatch)
**Works with:**
- Cline, Continue, Roo Code (native Bedrock support)
- Sourcegraph Cody (BYOM)
- Any tool with AWS authentication
- OpenAI SDK (via compatibility layer)

---

#### **Azure AI Foundry (Azure OpenAI)**
- **Type**: Microsoft's AI platform
- **Models**: Exclusive GPT-4/GPT-5 access, Mistral, Cohere, AI21, other models
- **Special Features**: Enterprise-grade security, compliance
- **Integration**: Deep Microsoft ecosystem (365, Active Directory, Cognitive Services)
**Works with:**
- Microsoft Copilot (native)
- GitHub Copilot (Microsoft integration)
- Continue.dev (Azure provider support)
- Any OpenAI-compatible tool (with Azure endpoints)

---

#### **Google Vertex AI**
- **Type**: Unified ML/AI platform
- **Models**: Gemini family, PaLM, Model Garden (Llama, Gemma, BERT, 3rd party)
- **Special Features**: Data-driven MLOps, analytics focus
- **Integration**: Google Cloud tools (BigQuery, Dataflow)
**Works with:**
- Cline, Continue, Roo Code (GCP Vertex provider)
- Google's native tools (Gemini CLI, Jules Tools)
- Enterprise tools requiring Google Cloud integration

---

### High-Performance Inference Providers

#### **Together AI**
- **Release**: Together Inference Engine 2.0 with Turbo and Lite endpoints
- **Models**: 200+ open-source models
- **Pricing**: Up to 11x more affordable than GPT-4
- **Focus**: High-performance open-source LLMs
- **Performance**: Sub-100ms latency, 4x faster than Bedrock, 2x faster than Azure
**Works with:**
- Hugging Face (serverless integration)
- Any tool with custom API endpoint support
- Developer-focused applications requiring speed

---

#### **Fireworks AI**
- **Focus**: Fastest model APIs
- **Performance**: 4x lower latency than vLLM
- **Technology**: Proprietary FireAttention engine
- **Compliance**: HIPAA, SOC2
- **Modalities**: Text, image, audio
**Works with:**
- Hugging Face platform
- Custom integrations via API
- Performance-critical applications

---

#### **Groq**
- **Focus**: Hardware-optimized inference
- **Performance**: 18x faster than traditional GPUs, <1 second for 100 tokens
- **Technology**: Language Processing Unit (LPU) chip
- **Deployment**: Cloud and on-premises
- **Slogan**: "Fast, low cost inference"
**Works with:**
- Cline, Continue (Groq provider support)
- Low-latency applications
- Enterprise on-prem deployments

---

#### **Cerebras**
- **Type**: Hardware accelerator manufacturer and inference provider
- **Website**: https://www.cerebras.ai
- **Documentation**: https://inference-docs.cerebras.ai
- **Key Features**:
  - Real-time AI responses
  - OpenAI API compatible
  - Pay-as-you-go or reserved capacity pricing
- **Focus**: Custom AI chips for inference
- **Performance**: 2,500+ tokens/second, 574ms for 100 tokens (fastest in class)
- **Inference Platform**: https://www.cerebras.ai/inference
- **Cloud**: https://cloud.cerebras.ai
**Works with:**
- Cline (Cerebras provider)
- High-performance computing applications
- OpenAI-compatible integrations

---

#### **SambaNova**
- **Type**: Inference provider with custom RDU hardware
- **Website**: https://sambanova.ai
- **Documentation**: https://docs.sambanova.ai
- **API**: https://sambanova.ai/fast-api
- **Key Features**:
  - Fastest inference APIs
  - RDU (Reconfigurable Dataflow Units) powered
  - OpenAI-compatible APIs
  - SambaCloud, SambaStack, and SambaManaged options
- **Cloud**: https://cloud.sambanova.ai
- **Integration**: Hugging Face serverless
**Works with:**
- Hugging Face platform
- Enterprise deployments
- OpenAI-compatible integrations
- On-premises and cloud deployments

---

#### **Fal**
- **Type**: Serverless inference provider
- **Website**: https://fal.ai
- **Key Features**:
  - 600+ production-ready models
  - Generative image, video, audio, and 3D models
  - Serverless GPUs
  - On-demand clusters
  - 4x faster model execution
- **Hugging Face**: https://huggingface.co/fal
- **Integration**: Hugging Face serverless
**Works with:**
- Hugging Face platform
- Developer applications
- Image, video, audio AI workflows

---

#### **Hyperbolic**
- **Type**: High-performance inference provider
- **Website**: https://hyperbolic.xyz
- **Key Features**:
  - Up to 80% cost savings compared to traditional providers
  - Access to top-performing models
  - No quality compromise
  - Cost-optimized infrastructure
**Works with:**
- Leading LLM models
- Enterprise applications
- Cost-conscious deployments

---

#### **Novita AI**
- **Type**: Multimodal inference platform
- **Website**: https://novita.ai
- **Key Features**:
  - 200+ production-ready APIs
  - LLM, image, video, speech generation
  - Serverless GPU endpoints
  - Dedicated GPU instances
  - Multi-modal capabilities
**Works with:**
- Multiple modalities (text, image, video, speech)
- Serverless deployments
- Dedicated GPU infrastructure

---

### Additional Model Providers

#### **Meta**
- **Type**: Open-source foundation models
- **Models**: Llama 3, Llama family, Code Llama
- **Special Features**: Code Llama built on Llama 2, free for research and commercial use
**Works with:**
- AWS Bedrock, Azure, Google Vertex AI
- Ollama, LM Studio (local deployment)
- Most AI coding tools (open model access)

---

#### **xAI**
- **Developer**: xAI (Elon Musk)
- **Website**: https://x.ai
- **Grok**: https://x.ai/grok
- **Models**: Grok-4, Grok Heavy, Grok Code Fast 1
- **Key Features**:
  - Real-time search integration
  - Advanced reasoning and coding capabilities
  - Visual processing
  - Available on X, Grok.com, and Grok app
  - Free tier with usage limits
**Works with:**
- GitHub Copilot
- Roo Code
- X integration

---

#### **Stability AI**
- **Developer**: Stability AI
- **Website**: https://stability.ai
- **Stable Image**: https://stability.ai/stable-image
- **Models**: Stable Diffusion, Stable Video
- **Key Features**:
  - Text-to-image generation
  - Image editing (inpainting, outpainting)
  - Video generation
  - Self-hosting and API options
- **Focus**: Image generation, video, multimodal
- **Integration**: Available through AWS Bedrock
**Works with:**
- AWS Bedrock
- Hugging Face
- Creative and multimodal applications
- DreamStudio (web interface)

---

## MCP Providers

The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize how AI systems integrate with external tools and data sources. MCP servers act as data and tool providers for AI coding assistants, enabling them to access databases, cloud services, development tools, and enterprise data sources.

### Official MCP Resources

#### **Anthropic MCP Server Repository**
- **Developer**: Anthropic
- **Website**: https://www.claude.com/partners/mcp
- **Repository**: https://github.com/modelcontextprotocol/servers
- **Documentation**: https://docs.claude.com/en/docs/agents-and-tools/remote-mcp-servers
- **Key Features**:
  - Reference MCP server implementations
  - Official Anthropic-maintained servers
  - Enterprise integrations
  - Open-source implementations

**Official Servers include**:
- Google Drive, Slack, GitHub, Git
- Postgres, Puppeteer, Stripe
- File system tools, Web content fetchers

---

### MCP Server Directories

#### **PulseMCP**
- **Website**: https://www.pulsemcp.com/servers
- **Key Features**:
  - 6,360+ MCP servers tracked
  - Daily updates
  - Official and community servers
  - Usage statistics (weekly downloads)
  - Release information
---

### Enterprise MCP Providers

#### **Chronograph**
- **Type**: Portfolio analytics MCP provider
- **Developer**: Chronograph
- **Website**: https://www.chronograph.pe/
- **Key Features**:
  - Private capital portfolio data access
  - Private equity, venture capital, infrastructure data
  - Natural language portfolio queries
  - Ad-hoc analysis and research
- **Integration**: Claude Partners MCP

**Use Case:** Portfolio management and analytics for private capital investors

---

#### **Box**
- **Type**: Enterprise content management MCP provider
- **Developer**: Box Inc. (community server by hmk)
- **Website**: https://www.box.com
- **Documentation**: https://learn.microsoft.com/en-us/connectors/boxmcpserver/
- **Key Features**:
  - Secure bridge to enterprise content
  - Document search and processing (PDF, Word)
  - Contract, financial records, policy access
  - Enterprise authentication and security
- **Integration**: Claude Partners MCP

**Use Case:** Enterprise document access and AI-powered document analysis

---

#### **Canva**
- **Type**: Design automation MCP provider
- **Developer**: Canva
- **Website**: https://www.canva.com
- **Integration**: Claude Partners MCP

**Use Case:** Automated design workflows and template access

---

#### **Cloudinary**
- **Type**: Media management MCP provider
- **Developer**: Cloudinary
- **Website**: https://cloudinary.com
- **Integration**: Claude Partners MCP

**Use Case:** Media asset management and optimization

---

#### **Figma**
- **Type**: Design-to-code MCP provider
- **Developer**: Figma
- **Website**: https://www.figma.com
- **Integration**: Claude Partners MCP

**Use Case:** Design file access and design-to-code generation

---

#### **HubSpot**
- **Type**: CRM data MCP provider
- **Developer**: HubSpot
- **Website**: https://www.hubspot.com
- **Integration**: Claude Partners MCP

**Use Case:** Customer relationship management data access and automation

---

#### **Intercom**
- **Type**: Customer support MCP provider
- **Developer**: Intercom
- **Website**: https://www.intercom.com
- **Integration**: Claude Partners MCP

**Use Case:** Customer support data and workflow automation

---

### Database & Cloud MCP Providers

#### **MongoDB MCP Server**
- **Type**: Database MCP provider
- **Developer**: MongoDB
- **Website**: https://www.mongodb.com/company/blog/announcing-mongodb-mcp-server
- **Repository**: https://github.com/mongodb-js/mongodb-mcp-server
- **Key Features**:
  - Connect to MongoDB databases and Atlas clusters
  - List organizations, projects, and clusters
  - Create free clusters
  - Vector search with embedding models
  - Supports stdio and HTTP transport

**Use Case:** MongoDB database access for AI agents

---

#### **Azure MCP Server**
- **Type**: Cloud services MCP provider
- **Developer**: Microsoft
- **Documentation**: https://learn.microsoft.com/en-us/azure/

**Use Case:** Azure cloud service integration

---

#### **AWS MCP Server**
- **Type**: Cloud services MCP provider
- **Developer**: Amazon
- **Website**: https://aws.amazon.com
- **Documentation**: https://aws.amazon.com/blogs/machine-learning/unlocking-the-power-of-model-context-protocol-mcp-on-aws/

**Use Case:** AWS service integration

---

#### **Cloudflare MCP Server**
- **Type**: CDN and edge services MCP provider
- **Developer**: Cloudflare
- **Website**: https://www.cloudflare.com

**Use Case:** Cloudflare service integration

---

### Development Tool MCP Providers

#### **JetBrains MCP Server**
- **Type**: IDE integration MCP provider
- **Developer**: JetBrains
- **Website**: https://www.jetbrains.com

**Use Case:** JetBrains IDE tool access and integration

---

#### **GitHub MCP Server**
- **Type**: Version control MCP provider
- **Developer**: GitHub
- **Repository**: https://github.com/modelcontextprotocol/servers
- **Documentation**: Part of official Anthropic MCP servers

**Use Case:** GitHub repository and API access

---

### Analytics & Data MCP Providers

#### **Vectara MCP Server**
- **Type**: Search and RAG MCP provider
- **Developer**: Vectara
- **Website**: https://vectara.com

**Use Case:** Neural search and retrieval-augmented generation

---

#### **Chroma MCP Server**
- **Type**: Vector database MCP provider
- **Developer**: Chroma
- **Website**: https://www.trychroma.com
- **Repository**: https://github.com/chroma-core/chroma

**Use Case:** Memory and RAG workflows

---

#### **ClickHouse MCP Server**
- **Type**: Analytics database MCP provider
- **Developer**: ClickHouse
- **Website**: https://clickhouse.com

**Use Case:** Real-time analytics data access

---

### Remote MCP Providers

#### **Vercel MCP**
- **Type**: Deployment platform MCP provider
- **Developer**: Vercel
- **Website**: https://vercel.com
- **Documentation**: https://docs.claude.com/en/docs/agents-and-tools/remote-mcp-servers

**Use Case:** Deployment and hosting integration

---

#### **Workato MCP**
- **Type**: Integration platform MCP provider
- **Developer**: Workato
- **Website**: https://www.workato.com
- **Documentation**: https://docs.claude.com/en/docs/agents-and-tools/remote-mcp-servers

**Use Case:** Workflow automation and enterprise integration

---

#### **Zapier MCP**
- **Type**: Automation platform MCP provider
- **Developer**: Zapier
- **Website**: https://zapier.com
- **Documentation**: https://docs.claude.com/en/docs/agents-and-tools/remote-mcp-servers

**Use Case:** App integration and no-code automation

---

### MCP Adoption (2025)

## CLI Tools

### Full Agentic Project-Level CLIs

#### **Aider**
- **Type**: Open-source AI pair programmer
- **Website**: https://aider.chat
- **Repository**: https://github.com/paul-gauthier/aider
- **Installation**: `python -m pip install aider-install && aider-install`
- **Models**: GPT-4o, Claude 3.5 Sonnet (recommended), any LLM
- **Pricing**: $10-20/month for moderate use (LLM API costs)
- **Key Features**:
  - Multi-file edits
  - Git integration (automated commits & diffs)
  - Conversation history
  - Free and open-source (API costs only)
**Works with:**
- OpenAI, Anthropic APIs (primary)
- Any LLM provider (flexible integration)
- Git repositories (required)
- Meta, Mistral (free models to avoid API costs)

---

#### **Augment CLI (Auggie)**
- **Type**: AI-powered agentic CLI tool
- **Developer**: Augment
- **Website**: https://augmentcode.com
- **Repository**: https://github.com/augmentcode/auggie
- **Documentation**: https://docs.augmentcode.com/cli/overview
- **Installation**: `npm install -g @augmentcode/auggie` (requires Node 22+)
- **Key Features**:
  - Interactive agentic terminal with real-time streaming responses
  - Code analysis and modification capabilities
  - Tool execution within terminal environments
  - CI/CD pipeline and workflow automation integration
  - Advanced context engine for codebase understanding
  - PR feedback and build insights
  - Compatible with zsh, bash, and fish shells
**Works with:**
- Multiple LLM providers (via Augment's platform)
- VS Code, JetBrains IDEs, Vim, Neovim (via Augment extensions)
- 100+ external tools via MCP (Model Context Protocol)
- GitHub workflows and automation frameworks
- Enterprise codebases (clients include Webflow, Uber, Snyk, Spotify, MongoDB, Vercel)

---

#### **OpenAI Codex CLI**
- **Type**: Official OpenAI coding agent
- **Website**: https://openai.com/codex
- **Repository**: https://github.com/openai/codex
- **Documentation**: https://platform.openai.com/docs/guides/codex
- **Installation**: `npm i -g @openai/codex` or `brew install codex`
- **Models**: GPT-5-Codex, GPT-5, o3/o4
- **Key Features**:
  - Lightweight, runs locally
  - Open-source
  - IDE integration (VSCode, Cursor)
  - Project editing, code generation
**Works with:**
- OpenAI models (native)
- DeepSeek (integration guide available)
- VSCode, Cursor (seamless integration)
- Any OpenAI-compatible provider (experimental)

---

#### **GitHub Copilot CLI**
- **Type**: Official Microsoft/GitHub terminal tool
- **Website**: https://githubnext.com/projects/copilot-cli
- **Documentation**: https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line
- **Installation**: `gh extension install github/gh-copilot` or `npm install -g @github/copilot`
- **Status**: Public preview (September 2025)
- **Models**: GPT-4.1 (default), GPT-5-Codex, GPT-5, Claude Sonnet 4.5, Gemini 2.5 Pro, xAI Grok
- **Key Features**:
  - `/model` command for quick model switching
  - Enhanced image support (October 2025)
  - Streamlined UI
  - GitHub workflow integration
**Works with:**
- OpenAI (hosted by GitHub/Azure)
- Anthropic (hosted by Anthropic/GCP)
- Google (hosted on GCP)
- GitHub repositories (native integration)
- No custom model support (pre-selected models only)

---

#### **Claude Code CLI**
- **Type**: Anthropic's official coding CLI
- **Website**: https://claude.ai/code
- **Documentation**: https://docs.anthropic.com/claude/docs/claude-code
- **Installation**: `npm install -g @anthropic-ai/claude-code` or `curl -fsSL https://claude.ai/install.sh | bash`
- **Models**: Claude 4, Claude 3.5 Sonnet (native)
- **Key Features**:
  - Agentic coding in terminal
  - Large context handling
  - Agent delegation
  - Lives in your terminal
**Works with:**
- Anthropic Claude models (native)
- OpenRouter (via Claude Code Router proxy)
- VS Code extension (linked operation)
- Any model via proxy (community solutions)

---

#### **Gemini CLI**
- **Type**: Google's official agent CLI
- **Website**: https://ai.google.dev/gemini-api/docs/cli
- **Documentation**: https://cloud.google.com/sdk/gcloud/reference/ai/gemini
- **Release**: Open-sourced 2025
- **Models**: Gemini 2.5, Gemini models
- **Key Features**:
  - Terminal workflows
  - Python-friendly
  - Model Context Protocol integration
**Works with:**
- Google Gemini models (native)
- Google Cloud Platform
- MCP servers

---

#### **Goose**
- **Type**: AI-powered developer agent CLI
- **Developer**: Block (formerly Square)
- **Repository**: https://github.com/block/goose
- **Documentation**: https://block.github.io/goose/docs/quickstart/
- **Installation**: `curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash`
- **Key Features**:
  - Terminal-based AI coding assistant
  - Developer workflow automation
  - Agentic task execution
  - Open-source
**Works with:**
- Multiple LLM providers
- Developer workflows
- Terminal environments

---

#### **Jules Tools CLI**
- **Type**: Google's coding agent CLI
- **Website**: https://jules.google
- **Documentation**: https://developers.google.com/jules
- **Status**: Announced update 2025, entering developer toolchains
- **Models**: Jules agent models
- **Key Features**: Terminal-based coding agent, competition with Cursor/Claude
**Works with:**
- Google AI infrastructure
- Gemini ecosystem

---

#### **OpenHands CLI**
- **Type**: All-Hands AI coding agent
- **Website**: https://www.all-hands.dev
- **Repository**: https://github.com/All-Hands-AI/OpenHands
- **Installation**: `uvx --python 3.12 openhands`
- **Status**: Recent CLI release (2025)
- **Models**: Multiple LLM support via LiteLLM
- **Key Features**:
  - Full dev agent from shell
  - Model switching
  - Custom pipelines
- **Requirements**: Powerful models (local/OSS models struggle)
**Works with:**
- LiteLLM-supported models
- DeepSeek (integration in progress, limited success with R1)
- Cloud LLM providers
- Note: Local models (Ollama DeepSeek) currently unsuccessful

---

#### **Open Interpreter**
- **Type**: Open-source AI code interpreter
- **Website**: https://openinterpreter.com
- **Repository**: https://github.com/KillianLucas/open-interpreter
- **Installation**: `pip install open-interpreter`
- **Models**: GPT-4, Claude, local models via Ollama, any LLM
- **Key Features**:
  - Natural language interface to your computer
  - Code execution in local environment
  - File system access
  - Multi-language support (Python, JavaScript, Shell, etc.)
  - Voice mode available
  - Free and open-source
**Works with:**
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude)
- Ollama (local models)
- Any OpenAI-compatible API
- Local code execution environment

---

#### **Continue CLI**
- **Type**: Open-source BYO-model agent
- **Website**: https://continue.dev
- **Repository**: https://github.com/continuedev/continue
- **Installation**: `npm i -g @continuedev/cli`
- **Models**: Any model (OpenAI, Anthropic, Ollama, etc.)
- **Key Features**:
  - Custom agent rules
  - MCP tools support
  - Highly configurable
  - Works with CLI version of VS Code extension
**Works with:**
- OpenAI, Anthropic (cloud providers)
- Ollama (local models)
- Qwen3 (local via Ollama)
- DeepSeek-R1, Codestral v2 (early 2025 support)
- Azure AI Foundry, Google AI Studio, Amazon Bedrock
- Mistral, DeepSeek APIs
- Any OpenAI-compatible API

---

#### **Mentat CLI**
- **Type**: Community/OSS GitHub-native agent
- **Website**: https://www.mentat.ai
- **Repository**: https://github.com/AbanteAI/mentat
- **Installation**: `pip install git+https://github.com/AbanteAI/mentat.git` or `brew install mentat`
- **Key Features**:
  - Multi-file edits
  - Project-wide context
  - Terminal-based operation
  - Repo context awareness
**Works with:**
- GitHub repositories
- Various LLM backends (community-configured)

---

#### **Droid**
- **Type**: Factory AI's coding agent
- **Developer**: Factory AI
- **Website**: https://factory.ai
- **Status**: Available as CLI and VS Code extension
- **Key Features**:
  - Model-agnostic (works with any LLM)
  - Multi-interface support (CLI, IDE, CI/CD)
  - Terminal, IDE integration, automation pipelines
- **Performance**: #1 on Terminal-Bench (58.75% accuracy)
- **Benchmark**: Beats Claude Code CLI (43.2%), Codex CLI (42.8%)
**Works with:**
- Any LLM provider (model-agnostic)
- VS Code (via extension)
- CI/CD pipelines
- Terminal workflows

---

#### **Boil**
- **Type**: AI boilerplate/scaffolding generator
- **Website**: https://tryboil.com
- **Repository**: https://github.com/santiagomed/boil
- **Installation**: `brew tap santiagomed/tap && brew install boil`
- **Key Features**:
  - Generates custom boilerplate from plain English
  - Natural language project setup
  - CLI-based scaffolding tool
- **Use Case**: Rapid project initialization
**Works with:**
- Command line interface
- Any development environment
- Project templates and frameworks

---

#### **ForgeCode (Forge)**
- **Type**: Terminal AI coding assistant
- **Website**: https://forgecode.dev
- **Installation**: `npx forgecode@latest`
- **Models**: 300+ models supported (Claude, GPT, Grok, Deepseek, Gemini)
- **Key Features**:
  - LSP (Language Server Protocol) integration
  - Custom agents
  - Enterprise control features
  - Multi-model support
  - Terminal-native workflow
**Works with:**
- Claude, GPT, Grok, Deepseek, Gemini
- 300+ additional models
- Language Server Protocol
- Enterprise development workflows

---

#### **Crush (Charm)**
- **Type**: Glamorous AI coding CLI
- **Stakeholder**: Charm (charmbracelet)
- **Website**: https://charm.sh
- **Repository**: https://github.com/charmbracelet/crush
- **Installation**: `brew install charmbracelet/tap/crush` or `npm install -g @charmland/crush`
- **Former Name**: OpenCode (renamed to Crush)
- **Key Features**:
  - LSP (Language Server Protocol) integration
  - MCP (Model Context Protocol) support
  - Multi-model support
  - Session management
  - Cross-platform (macOS/Linux/Windows/BSD)
  - Beautiful terminal UI (Charm aesthetic)
**Works with:**
- Multiple LLM providers
- LSP servers (language-specific tooling)
- MCP servers (tool integration)
- All major operating systems

---

#### **SST/OpenCode**
- **Type**: Provider-agnostic coding CLI
- **Stakeholder**: SST.dev
- **Website**: https://opencode.ai
- **Installation**: `curl -fsSL https://opencode.ai/install | bash`
- **Key Features**:
  - Provider-agnostic architecture
  - 75+ AI providers supported
  - Plan mode for code suggestions
  - Client/server architecture
  - SSH/Docker compatibility
  - BYOK (Bring Your Own Key) support
  - Copilot-powered AI
**Works with:**
- 75+ AI providers
- SSH/Docker environments
- Container workflows
- Any LLM with API access
- Cloud and local models

---

#### **DeepSeek CLI**
- **Type**: Dedicated DeepSeek coding assistant
- **Developer**: holasoymalva
- **Repository**: https://github.com/holasoymalva/deepseek-cli
- **Installation**: `npm install -g run-deepseek-cli`
- **Models**: DeepSeek Coder models
- **Key Features**: Leverages DeepSeek's coding-specific models
**Works with:**
- DeepSeek API (native)
- DeepSeek Coder models

---

#### **DeepAgents CLI**
- **Type**: AI coding agent CLI
- **Developer**: LangChain AI
- **Website**: https://blog.langchain.com/introducing-deepagents-cli/
- **Repository**: https://github.com/langchain-ai/deepagents
- **Installation**: `pip install deepagents`
- **Key Features**:
  - Terminal-based AI coding agent
  - Powered by LangChain framework
  - Agent-based development workflows
  - Integration with LangChain ecosystem
**Works with:**
- LangChain framework
- Multiple LLM providers
- AI agent workflows

---

#### **Qodo Command**
- **Type**: Agentic AI CLI for full SDLC
- **Developer**: Qodo (formerly Codium)
- **Website**: https://www.qodo.ai
- **Key Features**:
  - Full software development lifecycle support
  - Code generation, reviews, testing
  - Debugging and CI/CD orchestration
  - Deployment automation
  - Configurable agents for different SDLC stages
  - Built on Qodo's core agent framework
**Works with:**
- Multiple LLM providers
- CI/CD pipelines
- Development workflows
- Testing frameworks

---

### Amazon AI Coding Tools

#### **Amazon Q Developer (formerly CodeWhisperer)**
- **Type**: AWS generative AI coding assistant
- **Website**: https://aws.amazon.com/q/developer/
- **Documentation**: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html
- **Getting Started**: https://aws.amazon.com/q/developer/getting-started/
- **Rebranding**: CodeWhisperer capabilities now part of Q Developer (2024)
- **Models**: Undisclosed AWS models (trained on AWS docs)
- **Pricing**: Free tier available, $19/user/month for Pro
- **Key Features**:
  - Agentic capabilities (autonomous feature implementation, testing, refactoring)
  - Security scanning
  - AWS service integration
  - Reference tracking for open-source code
  - Software development lifecycle automation
  - 50 agentic chat interactions/month (Free Tier)
**Works with:**
- AWS ecosystem (deep integration)
- IDEs (VS Code, JetBrains, Visual Studio, Eclipse)
- CLI environments
- MCP tools
- Microsoft Teams and Slack

---

### Command-Level Assistants

#### **ai-shell**
- **Type**: Natural language → shell command translator
- **Developer**: Builder.io (OSS)
- **Website**: https://www.builder.io/blog/ai-shell
- **Repository**: https://github.com/BuilderIO/ai-shell
- **Installation**: `npm install -g @builder.io/ai-shell`
- **Use Case**: Command-level assistance (not project editing)
**Works with:**
- Various LLM backends
- Terminal command workflows

---

#### **ShellGPT**
- **Type**: GPT-powered shell assistant
- **Website**: https://github.com/TheR1D/shell_gpt#readme
- **Repository**: https://github.com/TheR1D/shell_gpt
- **Installation**: `pip install shell-gpt`
- **Commands**: `sgpt "explain X"`, `sgpt "command for..."`
- **Variants**: Multiple community forks
- **Use Case**: Command generation, explanations
**Works with:**
- OpenAI GPT models (primary)
- Terminal workflows

---

#### **aichat**
- **Type**: All-in-one LLM CLI tool with shell assistance
- **Repository**: https://github.com/sigoden/aichat
- **Installation**: `cargo install aichat`, `brew install aichat`, or package managers
- **Source**: OSS community
- **Models**: 20+ providers including OpenAI, Claude, Gemini, Ollama, Groq, Azure-OpenAI
- **Special Features**: CMD mode, REPL mode with interactive chat, RAG, function calling, AI agents, session management, built-in HTTP server
**Works with:**
- 20+ LLM providers
- Shell environments
- Custom AI agents and tools

---

#### **AICommits**
- **Type**: Git commit message generator
- **Website**: https://github.com/Nutlope/aicommits#readme
- **Repository**: https://github.com/Nutlope/aicommits
- **Installation**: `npm install -g aicommits`
- **Source**: OSS community
- **Use Case**: Automated commit messages from diffs
**Works with:**
- Git workflows
- Various LLM providers

---

#### **ask (Kagi)**
- **Type**: Lightweight bash script for AI queries
- **Developer**: Kagi Search
- **Repository**: https://github.com/kagisearch/ask
- **Installation**: Clone repo, make executable, copy to PATH
- **Models**: Mercury Coder (default), Gemini 2.5 Flash, Claude Sonnet 4, Qwen3 235B, via OpenRouter
- **Special Features**: Multiple AI model support with shorthand flags, provider routing with fallback, streaming mode, pipe input support, performance metrics display
**Works with:**
- OpenRouter API
- Various LLM models
- Unix pipes and scripts

---

#### **ask (pmarreck)**
- **Type**: Personal shell command assistant with memory
- **Developer**: pmarreck (personal dotfiles)
- **Repository**: https://github.com/pmarreck/dotfiles/blob/master/bin/ask
- **Models**: OpenAI ChatGPT API
- **Special Features**: Conversation history persistence, tool calling capabilities, weather tools integration, follow-up question support, markdown output via glow
**Works with:**
- OpenAI API
- OpenWeatherMap API
- Command-line workflows

---

#### **ask_local**
- **Type**: Local AI assistant using Ollama
- **Developer**: pmarreck (personal dotfiles)
- **Repository**: https://github.com/pmarreck/dotfiles/blob/master/bin/ask_local
- **Models**: Ollama-compatible local models (default: gpt-oss:20b)
- **Special Features**: Offline AI assistance, local-first design, configurable model selection, extended timeout for local processing
**Works with:**
- Ollama (localhost:11434)
- Local LLM models
- Command-line workflows

---

#### **clai**
- **Type**: Command Line AI with Unix pipeline integration
- **Repository**: https://github.com/baalimago/clai
- **Installation**: `go install github.com/baalimago/clai@latest`
- **Source**: OSS community
- **Models**: OpenAI, Anthropic, Mistral, Deepseek, Ollama, xAi, Google Gemini, Novita AI
- **Special Features**: MCP client support, vendor-agnostic LLM compatibility, conversation management, automatic summarization for rate limit handling, pre-prompted profiles, Unix philosophy alignment
**Works with:**
- Multiple LLM vendors
- Unix pipelines
- MCP tools

---

#### **claude command**
- **Type**: Command-line Claude chat wrapper
- **Developer**: rbitr (GitHub gist)
- **Repository**: https://gist.github.com/rbitr/bfbc43b806ac62a5230555582d63d4f7
- **Models**: Claude Sonnet 4.5
- **Special Features**: Multi-turn conversations with session persistence, local conversation caching (~/.chat/), customizable system prompts and temperature, SHA256-hashed session identifiers, 16,384 token maximum
**Works with:**
- Anthropic Claude API
- Terminal environments

---

#### **FRIDAY**
- **Type**: Natural language Linux command assistant
- **Repository**: https://github.com/Jotalea/FRIDAY
- **Installation**: Clone from GitHub
- **Source**: OSS community
- **Special Features**: Natural language to command translation, command explanation before execution, safety-first with default Cancel, interactive approval workflow
**Works with:**
- Linux systems
- Command-line environments

---

#### **git_commit_ai**
- **Type**: AI-powered git commit message generator
- **Developer**: pmarreck (personal dotfiles)
- **Repository**: https://github.com/pmarreck/dotfiles/blob/master/bin/git_commit_ai
- **Models**: OpenAI gpt-5-mini (default), local models via localhost
- **Special Features**: Generates commit messages from git diffs, supports both remote and local LLMs, automatic clipboard copying, customizable model/temperature/timeout, companion git_commit_ai_local for offline use
**Works with:**
- OpenAI API
- Local LLMs (qwen2.5-coder:32b, etc.)
- Git workflows

---

#### **llm**
- **Type**: CLI tool and Python library for LLM access
- **Developer**: Simon Willison
- **Website**: https://llm.datasette.io/
- **Repository**: https://github.com/simonw/llm
- **Installation**: `pip install llm`, `brew install llm`, or `pipx install llm`
- **Models**: OpenAI GPT, Anthropic Claude, Google Gemini, Meta Llama, Ollama, OpenAI-compatible
- **Special Features**: SQLite database for interaction storage, embedding generation and management, structured data extraction, tool execution capabilities, template system for reusable prompts, multi-modal support (images, audio, video)
**Works with:**
- OpenAI, Anthropic, Google, Meta
- Local models via Ollama plugin
- OpenAI-compatible APIs

---

#### **llm-cmd-comp**
- **Type**: LLM-powered shell completion tool
- **Repository**: https://github.com/CGamesPlay/llm-cmd-comp
- **Installation**: `llm install llm-cmd-comp` + shell config
- **Source**: OSS community
- **Models**: Works with LLM framework backends
- **Special Features**: Multi-shell support (Fish, Zsh, Bash), interactive feedback loop for refinement, natural language to command conversion, comment-based instruction enhancement, Alt-Backslash keybinding
**Works with:**
- Simon Willison's llm framework
- Fish, Zsh, Bash shells

---

#### **lmsh**
- **Type**: Natural language shell (experimental)
- **Developer**: Part of claude-code-tools
- **Repository**: https://github.com/pchalasani/claude-code-tools
- **Installation**: `uv tool install claude-code-tools`
- **Special Features**: Translates plain English to shell commands, Rust-based for fast startup (<1ms), edit commands before execution, integration with Claude Code CLI
**Works with:**
- Claude Code CLI (required)
- Terminal environments

---

#### **please**
- **Type**: Natural language command generator with interactive execution
- **Developer**: pmarreck (personal dotfiles)
- **Repository**: https://github.com/pmarreck/dotfiles/blob/master/bin/please
- **Models**: LLM via API (configurable)
- **Special Features**: Natural language to shell command translation, platform-aware command generation (OS detection), interactive execution menu (run/copy/cancel), automatic shell history integration, visual feedback via gum spinner, clipboard copying support
**Works with:**
- LLM APIs (via curl)
- Unix/Linux/macOS shells
- gum for UI components

---

#### **qqqa**
- **Type**: Fast stateless LLM shell assistant
- **Repository**: https://github.com/matisojka/qqqa
- **Installation**: `brew tap iagooar/qqqa && brew install qqqa` (macOS) or download binaries
- **Source**: OSS community
- **Models**: OpenRouter, OpenAI, Groq, Ollama, Anthropic
- **Special Features**: Two tools: qq (questions) and qa (agent tasks), stateless single-shot workflow, pipe and script compatible, built-in safety rails for files and commands, auto-copy to clipboard, terminal history integration
**Works with:**
- OpenRouter (default)
- OpenAI, Groq, Ollama, Anthropic
- Unix pipes and scripts

---

#### **Warp Terminal**
- **Type**: AI-powered terminal
- **Website**: https://www.warp.dev
- **Download**: https://www.warp.dev/download
- **Key Features**:
  - Built-in AI commands
  - Code suggestions
  - Agent mode (`warp ai` command)
  - Agentic workflows
  - Can be scripted as standalone workflows
**Works with:**
- Terminal environments
- Developer workflows

---

## Cloud-Based Agentic Coding Services

Cloud-based AI coding platforms that remotely access repositories and execute development tasks on remote infrastructure. These services provide web-based interfaces for agentic AI development, allowing developers to kick off autonomous coding workflows from anywhere without local setup.

### GitHub-Integrated Services

#### **GitHub Copilot Workspace**
- **Type**: Cloud-based Copilot-native development environment
- **Developer**: GitHub/Microsoft
- **Website**: https://githubnext.com/projects/copilot-workspace
- **Key Features**:
  - Brainstorm, plan, build, test, and run code in natural language
  - Integrated with GitHub Codespaces for cloud execution
  - Build and test code in cloud environment
  - Regional optimization for reduced latency
  - Asynchronous task execution
**Works with:**
- GitHub repositories
- GitHub Codespaces
- VS Code in the cloud
- Copilot Individual, Business, and Enterprise subscriptions

---

#### **OpenAI Codex (Web)**
- **Type**: Autonomous cloud-based coding agent
- **Developer**: OpenAI
- **Website**: https://chatgpt.com/codex
- **Repository**: https://github.com/openai/codex
- **Key Features**:
  - Single agent across terminal, IDE, cloud, and mobile
  - Isolated sandbox execution with repo access
  - Based on fine-tuned OpenAI o3 model
  - Task completion in 1-30 minutes
  - Secure containerized cloud execution
  - Internet access disabled during execution
**Works with:**
- ChatGPT Plus, Pro, Business, Edu, Enterprise plans
- GitHub repositories
- Pre-installed dependencies via setup scripts
- Multi-platform (web, terminal, IDE, mobile)

---

#### **Claude Code (Web & Mobile)**
- **Type**: Cloud-based agentic coding platform
- **Developer**: Anthropic
- **Website**: https://claude.ai
- **Repository**: https://github.com/anthropics/claude-code
- **Documentation**: https://docs.claude.com/en/docs/claude-code/github-actions
- **Key Features**:
  - Available on web and mobile (March 2025)
  - Run parallel coding tasks from anywhere
  - @claude mentions in PRs and issues
  - Anthropic-managed instance execution
  - GitHub Actions integration
  - Autonomous pull request creation
**Works with:**
- GitHub repositories
- Pull requests and issues
- Claude.ai web app
- Mobile devices
- Claude API

---

#### **Google Jules**
- **Type**: Asynchronous AI coding agent
- **Developer**: Google
- **Website**: https://jules.google
- **Key Features**:
  - Asynchronous operation in Google Cloud VMs
  - Integrates with GitHub repositories
  - Powered by Gemini 2.5 Pro
  - Audio changelogs
  - Up to 200 minutes of continuous execution
  - Jules Tools CLI companion
  - Free tier: 15 daily tasks, 3 concurrent tasks

**Pricing**:
- Free: 15 daily tasks
- Pro ($19.99/mo): ~5x limits
- Ultra ($124.99/mo): ~20x limits

**Works with:**
- GitHub repositories
- Google Cloud VMs
- Terminal (via Jules Tools)
- Gemini 2.5 Pro

---

### Full-Stack Web Development Platforms

#### **Replit Agent (Agent 3)**
- **Type**: Cloud IDE with autonomous AI agent
- **Developer**: Replit
- **Website**: https://replit.com/agent3
- **Key Features**:
  - Zero-boilerplate cloud IDE
  - Up to 200 minutes continuous execution
  - Containerized dev environments for 50+ languages
  - Automatic environment provisioning
  - Remote GitHub repository management
  - Integrated editor, terminal, and deployment
**Works with:**
- Python, Node.js, C++, Go, Rust, Java, and 50+ languages
- GitHub repositories
- Cloud deployment
- Ghostwriter AI assistant

---

#### **Bolt.new**
- **Type**: AI-powered web development platform
- **Developer**: StackBlitz
- **Website**: https://bolt.new
- **Key Features**:
  - Multi-agent system for UI, logic, backend, state
  - Browser-based development
  - Prompt-to-deployment workflow
  - Instant app deployment
  - Full-stack development
**Works with:**
- Web technologies
- Browser-based workflows
- Instant deployment

---

#### **Lovable**
- **Type**: No-code AI web app builder
- **Developer**: Lovable (formerly GPT Engineer)
- **Website**: https://lovable.dev
- **Key Features**:
  - Build full-stack apps from plain English descriptions
  - Design, code, and launch from browser
  - No-code approach
  - Rapid prototyping
  - UI-focused generation
**Works with:**
- React components
- Full-stack web applications
- Browser-based development

---

#### **v0 (by Vercel)**
- **Type**: AI-powered UI component generator
- **Developer**: Vercel
- **Website**: https://v0.dev
- **Key Features**:
  - Natural language to React components
  - Shadcn UI and Tailwind CSS
  - Instant component generation
  - Browser-based workflow

**Pricing**:
- Free: $0/month
- Premium: $20/month
- Ultra: $200/month

**Works with:**
- React
- Shadcn UI
- Tailwind CSS
- Next.js

---

## VS Code Extensions

### Autonomous Coding Agents

#### **Cline**
- **Developer**: Open-source community (cline repo)
- **Website**: https://cline.bot
- **Repository**: https://github.com/cline/cline
- **Models**: OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, GCP Vertex, Cerebras, Groq, LM Studio, Ollama
- **Key Features**:
  - Autonomous file creation/editing
  - Shell command execution
  - Browser integration
  - Human-in-the-loop approvals
  - Cost tracking (tokens & API usage)
  - MCP Marketplace (Feb 2025, v3.4)
  - Experimental Claude 4 support (v3.17.9)
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
- **Installs**: Millions

**OpenRouter Integration**:
- Fetches latest model list automatically
- Immediate access to new models

**Ollama Configuration**:
- Base URL: http://127.0.0.1:11434/v1
- Any placeholder API key (no verification needed)

**Works with:**
- All major LLM providers
- MCP servers (custom tools)
- Local models (Ollama, LM Studio)
- Any OpenAI-compatible API

---

#### **Roo Code**
- **Developer**: Roo Code (OSS)
- **Website**: https://roocode.com
- **Repository**: https://github.com/RooVetGit/Roo-Code
- **Status**: Successor/fork lineage from Roo/Cline
- **Models**: Anthropic, Claude Code, AWS Bedrock, DeepSeek, Google Gemini, Groq, Hugging Face, LiteLLM, Mistral AI, Ollama, OpenAI, OpenRouter, Requesty, xAI (Grok)
- **Key Features**:
  - Agentic assistant
  - Multi-file edits
  - Task/command execution
  - Modes: Code, Debug, Architect, Ask, Custom
  - BYOK (Bring Your Own Keys)
  - MCP integration
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline
- **Git Hub Stars**: 18k+
- **Marketplace Installs**: 750k+
**Works with:**
- OpenAI-compatible or custom models/APIs
- MCP servers
- Web MCP (Bright Data integration)
- Wide range of LLM providers

---

#### **Kilo Code**
- **Developer**: Kilo Code (OSS)
- **Website**: https://kilocode.ai
- **Repository**: https://github.com/kilocode/kilo
- **Models**: 400+ models (Gemini 2.5 Pro, Claude 4 Sonnet/Opus, GPT-5)
- **Key Features**:
  - Task orchestration
  - Error detection
  - Automated subtasks
  - Model-agnostic (many LLMs)
  - MCP Server Marketplace
  - Transparent pricing (matches provider rates)
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=kilocode.kilocode
- **Relationship**: Fork of Roo Code with enhancements
**Works with:**
- All major model providers
- MCP servers (databases, APIs, custom tools)
- Extends Roo Code capabilities
- JetBrains (in addition to VS Code)

---

#### **Continue**
- **Type**: Agentic coding extension
- **Developer**: Continue.dev (OSS)
- **Website**: https://continue.dev
- **Repository**: https://github.com/continuedev/continue
- **Models**: Anthropic, OpenAI, Azure AI Foundry, Amazon Bedrock, Google AI Studio, DeepSeek, Mistral, Ollama
- **Key Features**:
  - Custom agent rules
  - Model integration flexibility
  - Works alongside CLI version
  - Real-time code suggestions
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=Continue.continue
- **2025 Models**: Codestral v2 (Jan 2025), DeepSeek-R1

**Ollama Integration**:
- Official guide available
- Local model support (Qwen3, Gemma 3, others)
- No subscription costs
- Privacy-focused

**Works with:**
- Cloud providers (OpenAI, Anthropic, etc.)
- Local models (Ollama)
- Azure, AWS, Google cloud services
- Any OpenAI-compatible provider

---

#### **GitHub Copilot**
- **Type**: First-party VS Code extension
- **Developer**: GitHub (Microsoft)
- **Website**: https://github.com/features/copilot
- **Documentation**: https://docs.github.com/copilot
- **Status**: Now includes Agent Mode
- **Models**: GPT-4.1 (default), GPT-5-Codex, GPT-5, Claude 4 Sonnet/Opus, Gemini 2.5 Pro/2.0 Flash, xAI Grok
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- **Hosting**:
  - OpenAI models: GitHub/Azure tenant
  - Anthropic: Anthropic PBC + GCP
  - Google: GCP
**Works with:**
- Pre-selected models only (no custom models)
- GitHub repositories (deep integration)
- Microsoft ecosystem

---

### Code Completion & Assistance

#### **Tabnine**
- **Type**: Proprietary + third-party models
- **Developer**: Tabnine
- **Website**: https://www.tabnine.com
- **Models**:
  - Proprietary (code completions, private/protected)
  - Third-party chat: Mistral, GPT-4o, o1-preview, o1-mini, Claude Sonnet 3.5, Codestral
- **Key Features**:
  - Code completions
  - AI chat
  - Enterprise/self-hosted options
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode
- **Integration**: VS Code, JetBrains
**Works with:**
- Tabnine's private models (completions)
- Major LLM providers (chat)
- Enterprise deployments

---

#### **Supermaven**
- **Type**: Fast copilot with longest context
- **Developer**: Supermaven (creator of original TabNine 2018)
- **Website**: https://supermaven.com
- **Key Features**:
  - 300,000-token context window
  - Fastest code completion
  - Sub-100ms latency
- **Focus**: Speed and context depth
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=supermaven.supermaven
**Works with:**
- VS Code
- Proprietary infrastructure

---

#### **Qodo Gen (formerly Codium)**
- **Type**: Comprehensive AI coding platform
- **Developer**: Qodo
- **Website**: https://www.qodo.ai
- **Key Features**:
  - Real-time code suggestions
  - Automated test generation
  - Collaborative AI chat
  - Code review support
  - Agentic tools (MCPs)
  - Extension mode + chat mode
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=Codium.codium
**Works with:**
- Advanced AI models (unspecified providers)
- MCP tools
- VS Code workflows
- Focus on code quality and integrity

---

### Enterprise & Codebase-Aware

#### **Sourcegraph Cody**
- **Type**: Codebase-aware AI assistant
- **Developer**: Sourcegraph
- **Website**: https://sourcegraph.com/cody
- **Documentation**: https://docs.sourcegraph.com/cody
- **Models**: Claude 3.5, GPT-4o, Gemini 1.5, Mixtral-8x7B, custom via Bedrock/Azure OpenAI
- **Key Features**:
  - Search, chat, ask about code
  - Agentic interactions
  - Enterprise focus
  - Context from entire codebase
  - Model switching
  - Local models via Ollama
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai
**Works with:**
- Multiple LLM providers (Anthropic, OpenAI, Mistral, Meta)
- Amazon Bedrock (BYOM)
- Azure OpenAI (BYOM)
- Self-hosted/local models
- Enterprise codebases

---

#### **Amazon Q Developer**
- **Developer**: AWS
- **Website**: https://aws.amazon.com/q/developer
- **Documentation**: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/
- **Models**: Undisclosed AWS models (trained on AWS docs)
- **Pricing**:
  - Free tier (AWS Builder ID)
  - Pro: $19/user
- **Key Features**:
  - Agentic extension
  - MCP tools support
  - Codebase customizations (8 total, 2 active max)
  - No model choice
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode
- **Security Note**: Security incident July 2025 (keep updated)
**Works with:**
- AWS proprietary models only
- AWS ecosystem (tight integration)
- MCP tools
- No third-party model support

---

### Chat & General Assistance

#### **Windsurf Plugin (formerly Codeium)**
- **Type**: Autocomplete, chat, search
- **Developer**: Codeium/Windsurf
- **Key Features**:
  - Code completion
  - AI chat
  - Code search
- **Marketplace**: Official listing
**Works with:**
- Codeium/Windsurf infrastructure
- Windsurf IDE (companion to full IDE)

---

#### **Genie AI (ChatGPT in VS Code)**
- **Type**: Chat/commands integration
- **Developer**: Genie AI
- **Models**: OpenAI models
- **Key Features**: ChatGPT interface in VS Code
**Works with:**
- OpenAI GPT models
- VS Code command palette

---

#### **AskCodi**
- **Type**: Assistant extension
- **Developer**: AskCodi
- **Key Features**: General coding assistance
- **Integration**: Documented with Roo Code integration
**Works with:**
- Various LLM providers
- Roo Code (documented integration)

---

#### **CodeGPT: Chat & AI Agents**
- **Type**: Chat-style AI assistance
- **Developer**: DanielSanMedium / community
- **Key Features**:
  - Auto-completion
  - Code explanation
  - Error checking
  - Multi-model support
- **Note**: More assistive than fully autonomous
**Works with:**
- Multiple LLM providers
- General assistance workflows

---

#### **Gemini Code Assist**
- **Type**: Gemini-powered coding assistance
- **Developer**: Google
- **Key Features**:
  - Code suggestions
  - Context-aware responses
  - Automated review capabilities
- **Note**: More assistive than fully autonomous
**Works with:**
- Google Gemini models
- Google Cloud Platform

---

### Open-Source Copilot Alternatives

#### **TabbyML**
- **Type**: Self-hosted Copilot alternative
- **Key Features**:
  - Full function and code block suggestions
  - Self-hosted (data never leaves environment)
  - Reads code and comments for context
  - Ideal for organizations with strict data policies
- **License**: 100% free, open-source
- **Language**: Rust (performance-focused)
**Works with:**
- Local deployment
- Enterprise environments requiring data control
- Privacy-focused workflows

---

#### **FauxPilot**
- **Type**: Self-hosted Copilot alternative
- **Key Features**:
  - Complete data privacy
  - Local server deployment
  - Full control over data
- **Technology**: SalesForce CodeGen models, NVIDIA Triton Inference Server, FasterTransformer
- **Hardware**: NVIDIA GPUs required
**Works with:**
- NVIDIA GPU systems
- Privacy-critical environments
- Local infrastructure

---

#### **Twinny**
- **Type**: Free AI code completion (100% free, no paywalls)
- **Developer**: Twinny Community
- **Website**: https://twinnydotdev.github.io/twinny
- **Repository**: https://github.com/twinnydotdev/twinny
- **Models**: Ollama, LM Studio, Oobabooga, llama.cpp, any OpenAI API compatible provider
- **Key Features**:
  - FIM (Fill-In-Middle) code completion
  - Chat interface for code assistance
  - 100% local or API-hosted
  - Completely free and open source
  - Customizable provider settings
  - Multiple model support
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=rjmacarthy.twinny
**Works with:**
- Ollama (local models)
- LM Studio
- Any OpenAI-compatible API
- Self-hosted inference servers

---

#### **Flexpilot**
- **Type**: Open-source, native GitHub Copilot alternative
- **Developer**: Flexpilot AI
- **Website**: https://flexpilot.ai
- **Repository**: https://github.com/flexpilot-ai/vscode-extension
- **Models**: OpenAI, Anthropic, Google, Ollama, custom providers
- **Key Features**:
  - Native VS Code experience
  - Free and open source
  - Multiple provider support
  - Chat and completion modes
  - Privacy-focused
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=flexpilot-ai.flexpilot
**Works with:**
- Major cloud providers (OpenAI, Anthropic, Google)
- Local models (Ollama)
- Custom API endpoints

---

#### **CodeGeeX**
- **Type**: Open-source multi-language assistant
- **Key Features**:
  - Code generation
  - Code translation between languages
  - Code explanations
  - Code summaries
  - Multilingual code corpus trained
- **Scale**: 13 billion parameters
- **Languages**: 20+ programming languages
**Works with:**
- VS Code, JetBrains
- Multi-language projects
- Translation workflows

---

#### **Droid (VS Code Extension)**
- **Type**: Factory AI coding agent extension
- **Models**: Model-agnostic (works with any LLM)
- **Key Features**:
  - Autonomous coding agent in VS Code
  - Terminal integration
  - CI/CD pipeline support
  - Beats Claude Code and Codex CLI benchmarks
- **Performance**: #1 on Terminal-Bench (58.75%)
- **Also Available**: CLI, CI/CD integrations
**Works with:**
- Any LLM provider (model-agnostic)
- VS Code IDE
- Terminal workflows
- CI/CD automation

---

### AI-Powered Tools

#### **Sweep AI**
- **Type**: Intelligent open-source AI assistant
- **Platform**: GitHub
- **Key Features**:
  - Reads codebase
  - Understands tickets/feature requests
  - Plans edits
  - Generates pull requests automatically
  - Handles end-to-end workflows (not line-by-line like Copilot)
- **Languages**: Python, JS/TS, Java, Go, C#, C++, Rust
- **Deployment**: Hosted service or self-hosted
**Works with:**
- GitHub (native integration)
- "Sweep:" issues → automated PRs
- Follow-up from issue comments

---

#### **Bloop AI**
- **Type**: AI-powered code search & comprehension
- **Key Features**:
  - Understands meaning and structure of code
  - Natural language search
  - Large codebase navigation
  - Onboarding tool for new team members
- **Technology**: Semantic code search
**Works with:**
- Large, complex codebases
- Team onboarding
- Code exploration workflows

---

#### **Blackbox AI**
- **Type**: Context-aware AI coding assistant
- **Key Features**:
  - Real-time code completion
  - AI chat
  - Image-to-code conversion
  - Smart diffs
  - Automated README generation
  - Commit message generation
  - Extract code from images/videos
  - Deep web search
  - Code context protocols
- **Integration**: IDEs and browsers
**Works with:**
- VS Code (marketplace)
- Browser integration
- Multiple IDEs

---

### Specialized

#### **CoqPilot**
- **Type**: Theorem-proof assistant
- **Developer**: JetBrains-Research / community
- **Key Features**:
  - Fills "holes" in proofs (admit)
  - Verifies generated proofs
- **Domain**: Coq proof development
- **Note**: Domain-specific example of agentic extension
**Works with:**
- Coq proof systems
- Formal verification workflows

---

## JetBrains IDE Tools

### JetBrains AI Assistant

#### **Overview**
- **Type**: Official AI assistant for JetBrains IDEs
- **Developer**: JetBrains
- **Website**: https://www.jetbrains.com/ai/
- **Documentation**: https://www.jetbrains.com/help/idea/ai-assistant.html
- **Launch**: Major updates April 2025, August 2025
- **I D Es**: IntelliJ IDEA, PyCharm, WebStorm, GoLand, and others
- **Plugin**: Not bundled by default, requires installation
---

#### **Models & Providers**
- **Models2025**:
  - Claude 3.7 Sonnet
  - Google Gemini 2.5 Pro
  - Latest OpenAI models
  - Local models (Qwen2.5-Coder, DeepSeek-Coder 1.3B, CodeStral)
- **Integration**: Improved local model support
---

#### **Key Features**
- **Context Understanding**:
  - Paste images for error fixes
  - Code generation from screenshots

**Code Assistance**:
- AI-powered code completion (single lines, functions, blocks)
- Real-time suggestions
- Code generation with prompts
- Prompt Library support

**Development Tools**:
- Commit message generation
- Documentation creation
- File conversion
- Test generation

**Context & Understanding**:
- Improved Mellum model with smarter context collection
- Expanded file type support: SQL, YAML, JSON, Text, Markdown
- Image attachment in chat (Anthropic, OpenAI models)

**Local Capabilities**:
- Local code completion with multiline suggestions (Java, C++)
- Connect local models (Qwen2.5-Coder, DeepSeek-Coder 1.3B, CodeStral)
- Offline functionality

---

#### **Junie - Coding Agent**
- **Type**: Autonomous coding agent
- **Key Features**:
  - End-to-end task execution
  - IDE integration
  - Autonomous coding assistance
- **Availability**: April 2025
- **Compatible I D Es**: IntelliJ IDEA Ultimate, PyCharm Pro, WebStorm, GoLand
---

#### **Licensing & Pricing**
- **Requirements**:
  - JetBrains AI Service license
  - Explicit ToS consent
- **Free Tier**: Included with IDE licenses (2025.1+)
- **Pro Ultimate Tiers**: Different monthly credit quotas
---

#### **Works with:**
---

### Third-Party JetBrains Plugins

#### **Auto-Dev**
- **Type**: AI-powered coding wizard for JetBrains
- **Developer**: Unit Mesh
- **Repository**: https://github.com/unit-mesh/auto-dev
- **Key Features**:
  - Auto code generation 🏗️
  - Bug-slaying assistant 🐞
  - Auto testing & documentation
  - Customizable prompts 🎨
  - Agent-based development
  - Auto Dev/Testing/Document/Agent features
  - AIGC (AI Generated Content) integration
- **Language Support**: Multi-language (Java, Kotlin, Python, JavaScript, etc.)
**Works with:**
- IntelliJ IDEA and other JetBrains IDEs
- Multiple LLM providers
- Supports GenAI stack

---

#### **GitHub Copilot for JetBrains**
- **Developer**: GitHub/Microsoft
- **Models**: GPT-4o Copilot code completion model (Feb 2025)
- **Key Features**:
  - Code completion
  - AI chat
  - Agent mode
**Works with:**
- GitHub ecosystem
- JetBrains IDEs (all major)

---

#### **Kilo Code for JetBrains**
- **Type**: AI coding agent
- **Developer**: Kilo Code
- **Key Features**: Same as VS Code version
**Works with:**
- JetBrains IDEs
- 400+ AI models
- MCP servers

---

#### **Tabnine for JetBrains**
- **Type**: Code completion + chat
- **Developer**: Tabnine
**Works with:**
- JetBrains IDEs
- Proprietary and third-party models

---

## Full IDE Tools

### VS Code-Based AI IDEs

#### **Cursor**
- **Developer**: Anysphere
- **Website**: https://cursor.com
- **Download**: https://cursor.com/download
- **Models**:
  - Via Cursor subscription: Proprietary specialized models
  - BYOK: OpenAI (standard GPT models only, no o1/o3), Anthropic (all Claude models), Google
  - Limitations: Tab completion, Apply from Chat, Composer require subscription (not BYOK)
- **Key Features**:
  - AI-native IDE
  - Chat interface
  - Smart rewrites
  - Codebase queries
  - Agent mode
  - BYO model options (limited)
  - Codebase indexing with embeddings
- **Base**: VS Code fork (explicitly stated - Wikipedia)

**API Configuration**:
- OpenAI: Override base URL for proxies/enterprise
- Anthropic: Custom URL prefix (default: https://api.anthropic.com/v1)
- OpenAI-compatible providers (e.g., OpenRouter)
- Claude 3.5 Sonnet, Claude 3 Opus (coding tasks)
- GPT-4 series (standard models)

**Limitations**:
- No reasoning models via BYOK (o1, o1-mini, o3-mini)
- Some features require paid subscription + specialized models
- Recent "BYOK ban" for certain features

**Works with:**
- OpenAI, Anthropic, Google (custom API keys)
- OpenRouter (OpenAI-compatible)
- AWS Bedrock (with AWS keys)
- Cursor subscription (specialized models)

---

#### **Windsurf**
- **Developer**: Codeium
- **Website**: https://codeium.com/windsurf
- **Download**: https://codeium.com/windsurf/download
- **Key Features**:
  - AI-native editor
  - Cascade (agentic IDE)
  - Rules/flows
  - Agentic edits
  - Preview servers
  - MCP integration
  - Also ships VS Code plugin
- **Base**: VS Code fork (widely reported - IEEE Spectrum, Builder.io, CodeAnt, Prismetric)

**Models**:
- SWE-1 (in-house frontier model, Claude 3.5-level at fraction of cost)
- Claude Sonnet 4
- BYOK support (labeled in dropdown)

**OpenRouter Integration**:
- Not explicitly documented
- Community guides available
- Similar interface to other editors
- Custom API configuration possible via BYOK

**Works with:**
- Windsurf's SWE-1 model
- Major LLM providers (BYOK)
- OpenRouter (via custom API setup)
- MCP servers

---

#### **PearAI**
- **Developer**: PearAI (YC-backed, OSS)
- **Website**: https://trypear.ai
- **Repository**: https://github.com/trypear/pearai-app
- **Download**: https://trypear.ai/download
- **Key Features**:
  - Open-source AI editor
  - Continue-style agents
  - Prompt→product workflows
  - Built-in models + custom
- **Base**: VS Code fork (repo: "This is our fork of VSCode")

**Custom Models**:
- Can add your own models/API keys
- Documentation for model addition

**Works with:**
- Built-in PearAI models
- Custom API integrations
- Continue-derived AI layer

---

#### **Void**
- **Developer**: Void (YC-backed, OSS)
- **Website**: https://voideditor.com
- **Repository**: https://github.com/voideditor/void
- **Download**: https://voideditor.com/download
- **Models**: Any LLM (local or cloud)
- **Key Features**:
  - Privacy-first AI code editor
  - Fast performance
  - Local/cloud model flexibility
  - Checkpoints
  - Visualize changes
  - Agent runs on codebase
- **Base**: VS Code fork (official: "open-source Cursor alternative")
- **Local Selfhosted**: Ollama (auto-detection), vLLM, LM Studio, LiteLLM
- **Cloud**: Azure OpenAI, Google Vertex AI, AWS Bedrock, plus others (Claude, DeepSeek, OpenAI)

**Supported Providers**:

**Ollama Integration**:
- Auto-detects locally running models
- Enables them by default
- Custom endpoint configuration available

**Works with:**
- Ollama (primary local option)
- vLLM (advanced/high-performance local)
- All major cloud providers
- Any OpenAI-compatible API

---

#### **Kiro**
- **Type**: Agentic AI IDE
- **Developer**: Amazon Web Services
- **Website**: https://aws.amazon.com/kiro (limited public info)
- **Status**: Early coverage, details evolving (2025)
- **Key Features**:
  - Spec-driven agent workflows
  - VS Code settings/plugin compatibility
- **Base**: Code OSS ("Based on Code OSS ... import VS Code settings/plugins")
**Works with:**
- AWS infrastructure (likely)
- VS Code ecosystem (settings, plugins)

---

#### **Trae**
- **Developer**: ByteDance
- **Base**: VS Code fork ("ByteDance's customized fork" - community research)
- **Note**: Scrutiny over telemetry
- **Features**: AI features added to VS Code base
**Works with:**
- ByteDance infrastructure
- AI features (details limited)

---

### Standalone AI IDEs & Editors

#### **Zed**
- **Type**: High-performance, multiplayer code editor
- **Developer**: Creators of Atom and Tree-sitter
- **Website**: https://zed.dev
- **Repository**: https://github.com/zed-industries/zed
- **Download**: https://zed.dev/download
- **Status**: World's fastest AI code editor (2025)
- **Key Features**:
  - Open-source (including AI features)
  - Agentic Editing
  - Inline assistant
  - AI generation, transformation, analysis
  - MCP integration (working with protocol)
**Works with:**
- Multiple AI providers
- MCP servers
- Multiplayer collaboration

---

#### **Replit (with Ghostwriter)**
- **Type**: Browser-based IDE with AI
- **Website**: https://replit.com
- **Key Features**:
  - Real-time assistance
  - Inline completions (Complete Code)
  - Code explanations (Explain Code)
  - Code transformation (Transform Code)
  - Code generation from natural language (Generate Code)
  - Browser-based (no local setup)
  - Collaboration features
- **Use Case**: Beginners, rapid prototyping, learning
- **Ai Website**: https://replit.com/ai
- **Ai**: Ghostwriter AI assistant
**Works with:**
- Cloud infrastructure
- Real-time collaboration
- Multiple programming languages

---

#### **Bolt.new (by StackBlitz)**
- **Type**: AI-powered web app builder
- **Developer**: StackBlitz
- **Website**: https://bolt.new
- **Models**: Anthropic Claude 3.5 Sonnet
- **Key Features**:
  - Natural language → functional code
  - Full-stack development in browser
  - Complete Node.js environment (no local setup)
  - Automated package management
  - Test and deploy web applications
  - Modern framework support
- **Technology**: StackBlitz WebContainer (Node.js in browser)

**Pricing**:
- Free tier (basic features, limited AI)
- Pro: $20/month (10M tokens)
- Pro 50: $50/month (teamwork + deployment tools)

**Use Case:** Fast prototyping, full-stack developers

**Works with:**
- StackBlitz infrastructure
- Modern web frameworks
- Claude 3.5 Sonnet

---

#### **Lovable**
- **Type**: AI web development platform
- **Website**: https://lovable.dev
- **Key Features**:
  - User-friendly chat interface
  - Version control
  - Backend support
  - Live rendering
  - Instant undo
  - Live collaboration
  - One-click deployment
**Works with:**
- Web development workflows
- Team collaboration

---

### Other IDEs & Platforms

#### **v0 (by Vercel)**
- **Type**: Rapid UI component generator
- **Developer**: Vercel
- **Website**: https://v0.dev
- **Key Features**:
  - Text prompts → UI components
  - Fast design iteration
  - Component library generation
- **Focus**: Front-end development
**Works with:**
- Vercel ecosystem
- React/Next.js
- Front-end workflows

---

#### **Onlook**
- **Type**: AI-First Design Tool for React Developers
- **Developer**: Onlook Dev
- **Repository**: https://github.com/onlook-dev/onlook
- **Key Features**:
  - Visual builder for React applications
  - AI-powered styling and editing
  - Live preview and hot reload
  - Component-based design
  - Export to React code
  - Cross-platform (Windows, macOS, Linux)
  - Integration with AI models for design suggestions
  - Supports Next.js, Tailwind CSS
- **Tagline**: "The Cursor for Designers"
**Works with:**
- React and React-based frameworks
- Next.js applications
- Tailwind CSS
- Modern web development stack

---

## Code Review & Security Tools

### AI-Powered Code Analysis

#### **Snyk (DeepCode AI)**
- **Type**: AI-powered security platform
- **Key Features**:
  - Code autofix solution
  - Self-hosted (data privacy)
  - Multiple models + security-specific training
  - 25M+ data flow cases
  - 19+ supported languages
  - Finds, autofixes, and prioritizes vulnerabilities
  - Manages tech debt
  - No hallucinations (ML + security researchers)
- **Performance**: 84%+ reduction in MTTR (mean time to remediate)
- **Technology**: DeepCode AI (symbolic + generative AI)
**Works with:**
- CI/CD pipelines
- Multiple languages
- Enterprise security workflows
- Developer productivity tools

---

#### **SonarQube**
- **Type**: Code quality & technical debt platform
- **Key Features**:
  - Comprehensive code quality assessment
  - Static analysis (bugs, vulnerabilities, code smells)
  - Duplication and coverage tracking
  - CI/CD automation
  - Customizable dashboards
  - Detailed reporting
  - Clean Code AI integration (2025)
- **Clean Code A I**: Suggests specific remediation approaches
**Works with:**
- CI/CD systems
- Multiple languages
- Enterprise workflows
- Large-scale projects

---

#### **Sourcery**
- **Type**: AI-powered code review tool
- **Key Features**:
  - Analyzes pull requests
  - Catches bugs
  - Improves code quality
  - 30+ languages supported
  - Real-time code improvement
  - Refactoring suggestions
  - Quality enhancement
- **Focus**: Python developers (primary)
- **Integration**: GitHub, GitLab, VS Code, JetBrains
- **C L I**: sourcery-analytics (static analysis tool)
**Works with:**
- GitHub/GitLab (PR analysis)
- VS Code, JetBrains IDEs
- Python projects (primary focus)
- 30+ programming languages

---

#### **Refact.ai**
- **Type**: AI coding agent for enterprise
- **Status**: #1 open-source AI Agent in SWE-bench verified
- **Key Features**:
  - End-to-end task handling
  - Deep codebase understanding
  - Tool integration (GitHub, Docker, PostgreSQL)
  - Automates complex, multi-step tasks
  - Self-hosted option
  - Open-source alternative to Cursor/Copilot
- **Deployment**: On-premise or cloud
**Works with:**
- GitHub, Docker, PostgreSQL (tool integrations)
- Self-hosted or cloud deployments
- Enterprise development environments
- OpenAI-compatible APIs

---

#### **AI Code Reviewer**
- **Type**: GitHub Actions integration
- **Developer**: villesau
- **Repository**: https://github.com/villesau/ai-codereviewer
- **Key Features**:
  - AI-powered code review for pull requests
  - Uses OpenAI GPT-4 API for intelligent feedback
  - Provides suggestions to improve code quality
  - GitHub Actions workflow integration
  - Automated PR analysis
  - Saves developers time
**Works with:**
- GitHub Actions
- OpenAI GPT-4 API
- Pull requests workflow

---

#### **Claude Code Security Review**
- **Type**: AI-powered security review GitHub Action
- **Developer**: Anthropic
- **Repository**: https://github.com/anthropics/claude-code-security-review
- **Key Features**:
  - Analyzes code changes for security vulnerabilities
  - Uses Claude AI model
  - Automated security scanning
  - GitHub Actions integration
  - Focus on security best practices
**Works with:**
- GitHub Actions
- Claude AI (Anthropic)
- Security workflows

---

#### **CodeGPT**
- **Type**: CLI tool (Go)
- **Developer**: appleboy
- **Repository**: https://github.com/appleboy/CodeGPT
- **Key Features**:
  - Writes git commit messages using ChatGPT
  - Code review brief generation
  - Automatically installs git prepare-commit-msg hook
  - Uses GPT-4.1 and GPT-4o models
  - Command-line interface
**Works with:**
- Git hooks
- ChatGPT API (OpenAI)
- Command-line workflows

---

#### **CodeRabbit**
- **Type**: AI code review platform
- **Website**: https://coderabbit.ai
- **Pricing**: Free tier, Lite ($12/month), Pro ($24/month)
- **Key Features**:
  - Context-aware code reviews
  - 40+ automated analysis tools (linters, security, performance)
  - Learns from team interactions and preferences
  - CLI tool for terminal reviews
  - VS Code extension (free)
  - PR summarization and analysis
  - Zero retention (in-memory only)
  - SOC 2 & GDPR compliant
- **Architecture**: Google Cloud Run infrastructure
- **C L I Tool**: https://coderabbit.ai/cli
- **V S Code Extension**: https://coderabbit.ai/ide
- **Funding**: $60M Series B (September 2025)
- **C L I**: coderabbit (AI code reviews in terminal)
**Works with:**
- Company codebases
- GitHub, Docker, PostgreSQL
- Browser integration
- Workflow automation tools

---

#### **Graphite Diamond**
- **Type**: AI-powered PR review tool
- **Developer**: Graphite
- **Website**: https://graphite.dev/diamond
- **Documentation**: https://graphite.dev/docs
- **Key Features**:
  - Senior engineer-level code review
  - Analyzes PRs within seconds
  - Logic bugs and edge case detection
  - Performance issue identification
  - Security vulnerability detection
  - Contextual feedback on every pull request
**Works with:**
- GitHub pull requests
- GitLab merge requests
- Development workflows
- CI/CD pipelines

---

#### **CodeAnt AI**
- **Type**: Code quality and security platform
- **Website**: https://www.codeant.ai
- **Key Features**:
  - Combined code quality and security
  - Automated code reviews
  - One platform for quality and security
  - AI-powered analysis
  - GitHub integration
**Works with:**
- GitHub repositories
- CI/CD pipelines
- Security and quality workflows
- Development teams

---

#### **Codacy**
- **Type**: Code quality and security automation
- **Website**: https://www.codacy.com
- **Documentation**: https://docs.codacy.com
- **Key Features**:
  - Developer-friendly quality and security tool
  - Supports 40+ programming languages
  - AI-driven code reviews
  - Consistent coding standards
  - Automated analysis
  - Languages: JavaScript, Python, Java, C#, PHP, and more
**Works with:**
- 40+ programming languages
- GitHub, GitLab, Bitbucket
- CI/CD pipelines
- Development workflows

---

#### **Semgrep**
- **Type**: Static analysis security tool
- **Key Features**: Pattern-based code scanning, custom rules
**Works with:**
- AI-generated code analysis
- Security workflows

---

#### **CodeQL**
- **Type**: Semantic code analysis
- **Developer**: GitHub
- **Key Features**: Custom queries, security scanning
**Works with:**
- GitHub Advanced Security
- AI-generated code analysis

---

#### **Aikido Security**
- **Type**: AI-powered DevSecOps
- **Use Case**: Vulnerability remediation
**Works with:**
- DevSecOps workflows
- Security automation

---

## Testing & QA Tools

AI-powered testing and quality assurance tools that automate test generation, execution, and maintenance using machine learning and generative AI.

### AI Testing Platforms

#### **KaneAI (LambdaTest)**
- **Type**: GenAI native QA Agent-as-a-Service
- **Developer**: LambdaTest
- **Website**: https://www.lambdatest.com/kane-ai
- **Documentation**: https://www.lambdatest.com/support/docs/kane-ai/
- **Key Features**:
  - End-to-end test automation with natural language
  - Test creation, debugging, and evolution
  - Self-healing mechanisms
  - AI-powered test maintenance
  - GenAI native platform
**Works with:**
- Natural language test creation
- Multiple browsers and devices
- CI/CD pipelines
- LambdaTest platform

---

#### **TestRigor**
- **Type**: AI-powered test automation platform
- **Website**: https://testrigor.com
- **Documentation**: https://testrigor.com/docs
- **Key Features**:
  - Write tests in plain English
  - Generative AI for test creation
  - Dynamic element locators with self-healing
  - Reduces test maintenance
  - No programming required
**Works with:**
- Plain English commands
- Web, mobile, and API testing
- CI/CD integration
- Multiple platforms

---

#### **Functionize**
- **Type**: AI-powered testing platform
- **Website**: https://www.functionize.com
- **Documentation**: https://www.functionize.com/resources
- **Key Features**:
  - Automates entire QA lifecycle
  - Machine learning for adaptation
  - Generative AI techniques
  - Self-healing tests
  - Predictive analytics
  - AI-native with specialized agents
- **Product Overview**: https://www.functionize.com/product
**Works with:**
- Web and mobile applications
- CI/CD pipelines
- Enterprise QA workflows
- Cloud testing

---

#### **BrowserStack Test Observability**
- **Type**: AI-powered test observability platform
- **Website**: https://www.browserstack.com/test-observability
- **Documentation**: https://www.browserstack.com/docs/test-observability
- **Key Features**:
  - AI insights for test failures
  - Identifies product bugs vs automation issues
  - Root cause analysis
  - Test debugging acceleration
**Works with:**
- BrowserStack testing platform
- CI/CD pipelines
- Multiple test frameworks

---

## API Testing Tools

AI-powered tools for testing, debugging, and managing APIs with intelligent test generation and automation.

### Comprehensive API Testing Platforms

#### **Katalon**
- **Type**: API test automation platform
- **Website**: https://katalon.com
- **Documentation**: https://docs.katalon.com
- **Key Features**:
  - Codeless and code-driven test options
  - API test creation, management, execution
  - Wide integration support
  - Multiple protocol support (REST, SOAP, GraphQL)
  - Detailed reporting
**Works with:**
- REST, SOAP, GraphQL APIs
- CI/CD pipelines
- Enterprise workflows
- Multiple test frameworks

---

#### **Testsigma**
- **Type**: End-to-end API testing platform
- **Website**: https://testsigma.com
- **Documentation**: https://testsigma.com/docs
- **Key Features**:
  - No-code API testing
  - No framework setup required
  - AI-powered test generation
  - Natural language test creation
**Works with:**
- REST, SOAP, GraphQL APIs
- Web and mobile testing
- CI/CD integration
- Cloud and on-premise

---

### Lightweight & Open-Source API Tools

#### **Insomnia**
- **Type**: API testing and debugging tool
- **Website**: https://insomnia.rest
- **Repository**: https://github.com/Kong/insomnia
- **Key Features**:
  - REST, GraphQL, and gRPC support
  - User-friendly interface
  - Environment variables
  - Plugin system
  - Team collaboration
**Works with:**
- REST, GraphQL, gRPC, WebSocket
- OpenAPI/Swagger specs
- Plugin ecosystem
- Kong Gateway

---

#### **Hoppscotch**
- **Type**: Open-source API testing tool
- **Website**: https://hoppscotch.io
- **Repository**: https://github.com/hoppscotch/hoppscotch
- **Key Features**:
  - Web-based interface
  - REST, GraphQL, WebSocket, SSE support
  - Real-time collaboration
  - Open-source
  - Fast and lightweight
**Works with:**
- REST, GraphQL, WebSocket, SSE, MQTT
- Browser-based workflows
- Self-hosted deployments
- Team collaboration

---

#### **Bruno**
- **Type**: Open-source API client
- **Website**: https://www.usebruno.com
- **Repository**: https://github.com/usebruno/bruno
- **Key Features**:
  - Git-integrated API client
  - No cloud data sync (privacy-first)
  - Offline-first
  - Open-source
  - Collection versioning
**Works with:**
- REST, GraphQL APIs
- Git version control
- Local-first workflows
- Team collaboration via Git

---

### Enterprise API Testing

#### **SoapUI**
- **Type**: API testing tool for SOAP and REST
- **Website**: https://www.soapui.org
- **Documentation**: https://www.soapui.org/docs/
- **Key Features**:
  - SOAP and REST testing
  - Functional, regression, and load testing
  - Security testing
  - Automated test execution
  - Enterprise features
**Works with:**
- SOAP and REST APIs
- Security testing
- Load testing
- CI/CD integration

---

## Documentation & Code Explanation

### AI Documentation Tools

#### **Mintlify**
- **Type**: AI-native documentation platform
- **Key Features**:
  - Context-aware agent (drafts, edits, maintains content)
  - AI assistant (guided conversations, context-aware)
  - Automatic documentation updates (PRs, Slack, links)
  - API documentation (OpenAPI specs → human-readable)
  - AI-powered content generation
- **Performance**: Part of 70% time savings in documentation (2025)
- **Tagline**: "Beautiful out-of-the-box, built for developers"
**Works with:**
- OpenAPI specifications
- GitHub (PR integration)
- Slack
- Developer workflows

---

#### **Swimm**
- **Type**: AI-powered documentation platform
- **Key Features**:
  - Builds knowledge base from code
  - Reveals architecture, patterns, hidden logic
  - Helps understand big, complex codebases
  - Captures knowledge to fill documentation gaps
  - Auto-updates documentation when code changes
  - Eliminates "stale docs" problem
- **Technology**: AI-powered static analysis
**Works with:**
- Large codebases
- Team knowledge sharing
- Legacy code understanding
- Documentation workflows

---

#### **Docify AI**
- **Type**: Automated code comment and documentation generator
- **Website**: https://docify.ai4code.io
- **Key Features**:
  - Automated code comment generation
  - Improves code quality
  - Saves development time
  - Increases productivity
  - AI-powered documentation
**Works with:**
- Multiple programming languages
- Code documentation workflows
- Development teams

---

#### **DocuWriter.ai**
- **Type**: AI-powered documentation automation
- **Website**: https://www.docuwriter.ai
- **Key Features**:
  - Automates code and API documentation
  - Generates docs from source code
  - Auto-generated documentation
  - API documentation support
**Works with:**
- Source code files
- API documentation
- Multiple programming languages

---

#### **Bito AI Documentation Generator**
- **Type**: Multi-language documentation tool
- **Website**: https://bito.ai
- **Key Features**:
  - Supports many programming languages
  - Documentation in 50+ spoken languages
  - Python, JavaScript, Go, Rust, and more
  - Multi-lingual documentation support
**Works with:**
- Python, JavaScript, Go, Rust, and more
- 50+ spoken languages
- Global development teams

---

#### **Workik**
- **Type**: Code documentation platform
- **Website**: https://workik.com
- **Key Features**:
  - Clear and comprehensive documentation
  - Consistent formatting and style
  - Automated documentation generation
  - Context-driven AI assistance
**Works with:**
- Multiple programming languages
- Enterprise documentation workflows
- Team collaboration

---

#### **Pieces for Developers**
- **Type**: AI-powered developer productivity tool
- **Note**: Limited search results, may need further research
**Works with:**
- Developer workflows (likely)

---

### Code Explanation Tools

#### **Code Llama**
- **Type**: Advanced language model for code
- **Developer**: Meta
- **Key Features**:
  - Code generation from text prompts
  - Leading publicly available coding model
  - Streamlines workflows
  - Aids beginners in learning
- **Use Case**: Code generation, learning assistance
- **Base**: Built on Llama 2 architecture
- **License**: Free for research and commercial use
**Works with:**
- Local deployment
- Development workflows
- Educational contexts

---

## Database & SQL Tools

AI-powered tools for SQL generation, query optimization, and database management using natural language processing and machine learning.

### SQL Generation & Query Optimization

#### **AI2SQL**
- **Type**: AI-powered SQL generator and optimizer
- **Website**: https://ai2sql.io
- **Documentation**: https://ai2sql.io/docs
- **Key Features**:
  - Text2SQL natural language conversion
  - Query optimization (up to 10× faster performance)
  - SQL Bot for assistance
  - ERD AI for database design
  - Performance tuning
  - Instant query analysis
**Works with:**
- SQL databases (MySQL, PostgreSQL, SQL Server)
- NoSQL databases
- Query optimization workflows
- Database design

---

#### **Chat2DB**
- **Type**: AI-powered SQL client
- **Website**: https://chat2db.ai
- **Repository**: https://github.com/chat2db/Chat2DB
- **Key Features**:
  - Natural language to SQL
  - Visual database management
  - ER diagrams and dashboards
  - Multi-database support
  - Optimized query generation
  - Relational and non-relational databases
**Works with:**
- MySQL, PostgreSQL, MongoDB, Redis
- SQL and NoSQL databases
- Visual database tools
- Team collaboration

---

#### **Text2SQL.ai**
- **Type**: Natural language to SQL platform
- **Website**: https://text2sql.ai
- **Key Features**:
  - Plain English to SQL queries
  - Query generation, optimization, explanation
  - Debugging assistance
  - Supports SQL and NoSQL databases
  - All technical levels
  - Multiple database support
**Works with:**
- SQL databases
- NoSQL databases
- Query learning and debugging
- Database optimization

---

#### **SQLAI.ai**
- **Type**: Free SQL query generator
- **Website**: https://www.sqlai.ai
- **Key Features**:
  - Generate SQL queries in seconds
  - Free to use
  - AI-powered generation
  - Multiple database support
  - Quick query creation
**Works with:**
- Multiple SQL databases
- Query generation workflows
- Free tier development

---

## Local Model Infrastructure

### Local LLM Platforms

#### **Ollama**
- **Type**: Local LLM runtime
- **Website**: https://ollama.com
- **Documentation**: https://github.com/ollama/ollama/blob/main/README.md
- **Download**: https://ollama.com/download
- **Platform**: CLI tool (Windows, macOS, Linux)
- **Installation**: `curl https://ollama.ai/install.sh | sh`
- **Models**: Run any open-source model locally
- **API**: OpenAI-compatible endpoint (http://127.0.0.1:11434/v1)
**Works with:**
- Continue.dev (official guide)
- Cline (OpenAI-compatible provider)
- Void, PearAI (native local model support)
- Roo Code, Kilo Code (Ollama provider)
- JetBrains AI Assistant
- Jan (can use Ollama as remote server)
- Any tool supporting OpenAI-compatible APIs

---

#### **LM Studio**
- **Type**: GUI-based local LLM platform
- **Platform**: Windows, macOS, Linux
- **Use Case**: Beginner-friendly, non-technical users
- **Features**: Model discovery, download, chat interface, OpenAI-like local server
**Works with:**
- Cline (LM Studio provider)
- Jan (can use as remote server)
- Any tool with OpenAI-compatible API support
- Local development without CLI

---

#### **vLLM**
- **Type**: High-performance inference engine
- **Installation**: Python virtual environment + pip
- **Focus**: Production deployments, batch processing
- **Performance**: High throughput, low latency, GPU-optimized
- **Use Case**: Research labs, startups, production apps
**Works with:**
- Void Editor (advanced local setup option)
- Custom production deployments
- Research applications

---

#### **GPT4All**
- **Type**: Private AI chatbot for local LLMs
- **Developer**: Nomic AI
- **Platform**: Desktop (Mac M Series, AMD, NVIDIA)
- **Key Features**:
  - Runs on everyday desktops & laptops
  - No API calls or GPUs required
  - 1,000+ open-source models (LLaMa, Mistral)
  - No internet connection needed (offline)
  - LocalDocs (chat with your data privately)
  - Runs on standard consumer hardware
- **Users**: 250,000 monthly active users
- **License**: Free, open-source, commercial use
**Works with:**
- Local deployment
- Offline environments
- Privacy-focused workflows
- Consumer hardware

---

#### **Jan (Jan.ai)**
- **Type**: Open-source ChatGPT alternative (offline)
- **Platform**: Mac, Windows, Linux
- **Models**: Llama 3, Gemma, Mistral (run on your own computer)
- **Key Features**:
  - Completely offline
  - Free and open-source
  - Can integrate with Ollama and LM Studio (as remote servers)
  - Full privacy control
- **G P U Support**: NVIDIA (CUDA), AMD (Vulkan), Intel Arc
**Works with:**
- Ollama (remote server integration)
- LM Studio (remote server integration)
- Local model deployment
- Privacy-critical workflows

---

#### **LocalAI**
- **Type**: Developer-focused local LLM platform
- **Key Features**:
  - API compatibility
  - Application integration
  - Most versatile for developers
**Works with:**
- Developer applications

---

#### **oLLM**
- **Type**: Large-context LLM inference library
- **Repository**: https://github.com/Mega4alik/ollm
- **Release**: 2025
- **Key Features**:
  - 100K context on 8GB consumer GPU
  - Supports 8B-80B parameter models (GPT-OSS-20B, Qwen3-Next-80B, Llama-3.1-8B)
  - FP16/BF16 weights (no quantization)
  - FlashAttention-2 integration
  - SSD-backed KV caching
  - NVMe-class storage optimization
  - GPUDirect Storage (KvikIO/cuFile) support
- **Performance**: ~100-200 GB storage, sub-1 tok/s for large models
- **Technology**: Python library built on HuggingFace Transformers + PyTorch
- **Hardware**: Runs on $200 consumer GPU (8GB VRAM)
- **Use Cases**: Offline document analysis, compliance review, large-context summarization
**Works with:**
- Consumer GPUs (8GB VRAM minimum)
- NVMe SSDs (high-speed storage required)
- HuggingFace model ecosystem
- Offline/local workflows
- Privacy-focused deployments

---

#### **Msty**
- **Type**: Unified AI interface for local & online models
- **Website**: https://msty.ai
- **Platform**: Windows, macOS, Linux (native desktop apps)
- **Pricing**: Free + from $79/year
- **Key Features**:
  - Unified interface for local and cloud models
  - Parallel multiverse chats (compare multiple AI responses)
  - Web search integration (live data)
  - Knowledge Stack (multi-source information)
  - Privacy-first design (offline capable)
  - No data leaves user machine
  - No subscriptions or complex setup
- **Supported Models**: OpenAI, Deepseek, Claude, Ollama, Hugging Face
**Works with:**
- OpenAI, Anthropic, Deepseek (cloud providers)
- Ollama (local models)
- Hugging Face models
- Offline/online hybrid workflows
- Privacy-focused environments

---

#### **Backyard.ai**
- **Type**: Private local AI character chat platform
- **Website**: https://backyard.ai
- **Platform**: Desktop (Mac, Windows, Linux), iOS, Android
- **Pricing**: Free tier + paid cloud plans
- **Key Features**:
  - 100% local processing (zero external servers)
  - 12+ top-tier AI models
  - Custom AI character creation
  - Extensive character memory
  - Works offline (zero configuration)
  - No censorship or filters
  - Character Hub (thousands of AI characters)
  - Mobile tethering (access home models remotely)
  - Lore books, author's note, background images
- **Use Cases**: Role-play, creative writing, AI chat without restrictions
**Works with:**
- Local LLM models (12+ supported)
- Offline environments
- iOS/Android mobile apps
- Privacy-focused creative workflows
- Character-based AI interactions
- API integrations
- Local LLM workflows

---

#### **Text Generation WebUI (Oobabooga)**
- **Type**: Web interface for local text generation models
- **Repository**: https://github.com/oobabooga/text-generation-webui
- **Platform**: Windows, macOS, Linux
- **Key Features**:
  - Gradio-based web interface
  - Support for multiple model backends (llama.cpp, ExLlama, AutoGPTQ)
  - Chat and notebook modes
  - API server for model access
  - Extensions and plugins system
  - Model downloading and management
  - LoRA support
- **Use Cases**: Running local LLMs with user-friendly interface
**Works with:**
- llama.cpp, ExLlama, AutoGPTQ backends
- HuggingFace models
- GPTQ, AWQ, GGUF quantized models
- API-based integrations
- Local development workflows

---

#### **Llamafile**
- **Type**: Single-file LLM deployment
- **Developer**: Mozilla
- **Website**: https://llamafile.ai
- **Repository**: https://github.com/Mozilla-Ocho/llamafile
- **Platform**: Windows, macOS, Linux
- **Key Features**:
  - Package models into single executable files
  - Revolutionary portability approach
  - No installation or dependencies required
  - Cross-platform compatibility
  - Ideal for distribution and edge deployment
  - Mozilla-backed project
**Works with:**
- Any platform (portable executables)
- Edge deployment scenarios
- Offline environments
- Simple distribution workflows

---

#### **Nut Studio**
- **Type**: GUI-based local LLM platform (Windows)
- **Developer**: iMyFone
- **Website**: https://nutstudio.imyfone.com
- **Platform**: Windows
- **Key Features**:
  - No command line required
  - Full visual interface
  - No configuration needed
  - No setup complexity
  - Beginner-friendly alternative to Ollama
  - Windows-optimized
**Works with:**
- Windows systems
- Local model execution
- Non-technical users
- Visual workflow management

---

### Model Optimization & Deployment

#### **LiteLLM**
- **Type**: Multi-provider LLM proxy
- **Key Features**:
  - Unified API for 100+ LLMs
  - Provider abstraction layer
**Works with:**
- OpenHands CLI
- Roo Code
- Any tool needing multi-provider support

---

#### **Transformers (Hugging Face)**
- **Type**: ML library for LLMs
- **Key Features**:
  - Research and coding flexibility
  - Direct model access
**Works with:**
- Custom development
- Research applications

---

## AI/ML Libraries & Frameworks

### Python Libraries

#### **TensorFlow**
- **Type**: Open-source machine learning framework
- **Developer**: Google
- **Website**: https://www.tensorflow.org
- **Repository**: https://github.com/tensorflow/tensorflow
- **Key Features**:
  - Deep learning and neural networks
  - Production deployment
  - Mobile and edge devices (TensorFlow Lite)
  - Extensive ecosystem (Keras, TensorFlow Hub)
- **Language**: Python, JavaScript (TensorFlow.js)
- **Use Cases**: Model training, deployment, research
**Works with:**
- Python development environments
- Jupyter notebooks
- Cloud platforms (GCP, AWS, Azure)

---

#### **PyTorch**
- **Type**: Open-source machine learning framework
- **Developer**: Meta AI
- **Website**: https://pytorch.org
- **Repository**: https://github.com/pytorch/pytorch
- **Key Features**:
  - Dynamic computational graphs
  - Strong GPU acceleration
  - Research-friendly API
  - Production deployment (TorchServe)
- **Language**: Python
- **Use Cases**: Deep learning research, model development
**Works with:**
- Python development environments
- Jupyter notebooks
- HuggingFace Transformers

---

#### **LangChain**
- **Type**: Framework for developing LLM applications
- **Developer**: LangChain Inc.
- **Website**: https://www.langchain.com
- **Repository**: https://github.com/langchain-ai/langchain
- **Key Features**:
  - Chain composition for LLM workflows
  - Memory management
  - Agent systems
  - Vector store integrations
  - Document loaders and retrievers
- **Language**: Python, JavaScript/TypeScript
- **Use Cases**: RAG applications, chatbots, AI agents
**Works with:**
- OpenAI, Anthropic, Google, and other LLM providers
- Vector databases (Pinecone, Weaviate, Chroma)
- Document stores

---

#### **LangGraph**
- **Type**: Stateful agent framework built on LangChain
- **Developer**: LangChain Inc.
- **Website**: https://www.langchain.com/langgraph
- **Repository**: https://github.com/langchain-ai/langgraph
- **Documentation**: https://langchain-ai.github.io/langgraph/
- **Key Features**:
  - DAG-style workflow creation
  - Fine-grained control over agent behavior
  - Stateful multi-agent systems
  - Built on top of LangChain
  - Graph-based agent orchestration
- **Language**: Python, JavaScript/TypeScript
**Works with:**
- LangChain ecosystem
- Multiple LLM providers
- Complex agentic workflows

---

#### **AutoGen**
- **Type**: Multi-agent conversation framework
- **Developer**: Microsoft
- **Website**: https://microsoft.github.io/autogen/
- **Repository**: https://github.com/microsoft/autogen
- **Key Features**:
  - Agents communicate in natural language
  - Define multiple specialized agents (Planner, Developer, Reviewer)
  - Collaborative multi-agent systems
  - Autonomous agent-to-agent communication
- **Language**: Python
**Works with:**
- Multiple LLM providers
- Microsoft AI ecosystem
- Complex multi-agent workflows

---

#### **CrewAI**
- **Type**: Collaborative multi-agent framework
- **Developer**: CrewAI Inc.
- **Website**: https://www.crewai.com
- **Repository**: https://github.com/joaomdmoura/crewAI
- **Documentation**: https://docs.crewai.com
- **Key Features**:
  - Assign distinct roles, goals, and tools to agents
  - Role-based agent collaboration
  - Open-source framework
  - Multi-agent orchestration
- **Language**: Python
**Works with:**
- Multiple LLM providers
- Complex collaborative tasks
- Agent-based development

---

#### **OpenAI Agents SDK**
- **Type**: Minimalist agent framework
- **Developer**: OpenAI
- **Website**: https://platform.openai.com/docs/agents
- **Key Features**:
  - Core primitives: agents, tools, handoffs, guardrails
  - Minimalist design philosophy
  - Structured workflows
  - Official OpenAI implementation
- **Language**: Python, TypeScript
**Works with:**
- OpenAI models
- Structured agentic workflows
- Enterprise applications

---

#### **Semantic Kernel**
- **Type**: AI integration framework
- **Developer**: Microsoft
- **Website**: https://learn.microsoft.com/en-us/semantic-kernel/
- **Repository**: https://github.com/microsoft/semantic-kernel
- **Key Features**:
  - Integrate AI into traditional software development
  - Seamless integration with existing applications
  - Enterprise-grade framework
  - Multi-language support
- **Language**: C#, Python, Java
**Works with:**
- Microsoft ecosystem
- Enterprise applications
- Traditional software development workflows

---

#### **Haystack**
- **Type**: Open-source LLM framework
- **Developer**: deepset
- **Website**: https://haystack.deepset.ai
- **Repository**: https://github.com/deepset-ai/haystack
- **Key Features**:
  - Production-ready NLP pipelines
  - RAG and search applications
  - Modular architecture
  - Document processing
- **Language**: Python
**Works with:**
- Multiple LLM providers
- Vector databases
- Search and RAG applications

---

#### **LlamaIndex**
- **Type**: Data framework for LLM applications
- **Developer**: LlamaIndex (formerly GPT Index)
- **Website**: https://www.llamaindex.ai
- **Repository**: https://github.com/run-llama/llama_index
- **Key Features**:
  - Data ingestion and indexing
  - Query engines
  - Chat engines
  - Multi-document agents
  - RAG (Retrieval-Augmented Generation)
- **Language**: Python, TypeScript
- **Use Cases**: Knowledge bases, document Q&A, data-augmented LLM apps
**Works with:**
- OpenAI, Anthropic, HuggingFace models
- Vector databases
- Document stores

---

#### **scikit-learn**
- **Type**: Machine learning library
- **Developer**: scikit-learn developers
- **Website**: https://scikit-learn.org
- **Repository**: https://github.com/scikit-learn/scikit-learn
- **Key Features**:
  - Classification, regression, clustering
  - Model selection and evaluation
  - Preprocessing and feature engineering
  - Integration with NumPy and Pandas
- **Language**: Python
- **Use Cases**: Traditional ML, data analysis, model building
**Works with:**
- NumPy, Pandas, Matplotlib
- Jupyter notebooks
- Python data science stack

---

#### **NumPy**
- **Type**: Numerical computing library
- **Developer**: NumPy developers
- **Website**: https://numpy.org
- **Repository**: https://github.com/numpy/numpy
- **Key Features**:
  - Multi-dimensional arrays
  - Mathematical functions
  - Linear algebra operations
  - Foundation for scientific computing
- **Language**: Python
- **Use Cases**: Data manipulation, scientific computing, ML preprocessing
**Works with:**
- All Python ML/AI frameworks
- Pandas, scikit-learn, TensorFlow, PyTorch

---

#### **Pandas**
- **Type**: Data analysis and manipulation library
- **Developer**: Pandas development team
- **Website**: https://pandas.pydata.org
- **Repository**: https://github.com/pandas-dev/pandas
- **Key Features**:
  - DataFrames for structured data
  - Data cleaning and preprocessing
  - Time series analysis
  - SQL-like operations
- **Language**: Python
- **Use Cases**: Data preprocessing for ML, data analysis, ETL
**Works with:**
- NumPy, scikit-learn
- Jupyter notebooks
- ML pipelines

---

### JavaScript/TypeScript Libraries

#### **Vercel AI SDK**
- **Type**: TypeScript toolkit for AI applications
- **Developer**: Vercel
- **Website**: https://sdk.vercel.ai
- **Repository**: https://github.com/vercel/ai
- **Key Features**:
  - Streaming AI responses
  - React hooks for AI UI
  - Multi-provider support
  - Edge runtime compatible
- **Package**: https://www.npmjs.com/package/ai
- **Use Cases**: Building AI-powered web applications
**Works with:**
- OpenAI, Anthropic, Google, Mistral
- Next.js, React, Vue
- Edge functions

---

#### **OpenAI Node.js SDK**
- **Type**: Official OpenAI API client
- **Developer**: OpenAI
- **Website**: https://platform.openai.com
- **Repository**: https://github.com/openai/openai-node
- **Key Features**:
  - Full API coverage
  - TypeScript types
  - Streaming support
  - Error handling
- **Package**: https://www.npmjs.com/package/openai
- **Language**: TypeScript/JavaScript
- **Use Cases**: Integrating OpenAI models in Node.js apps
**Works with:**
- Node.js applications
- Deno (via npm compatibility)
- Edge runtimes

---

#### **OpenAI Deno SDK**
- **Type**: OpenAI SDK for Deno runtime
- **Developer**: Deno + OpenAI community
- **Website**: https://deno.com/blog/openai_sdk_deno
- **Key Features**:
  - Native Deno compatibility
  - Secure by default
  - Modern TypeScript
- **Language**: TypeScript
- **Use Cases**: Building OpenAI apps with Deno
**Works with:**
- Deno runtime
- Deno Deploy
- Fresh framework

---

## Browser Extensions

### AI Assistant Extensions

#### **WiseOne**
- **Type**: Browser extension for reading and research
- **Developer**: WiseOne
- **Website**: https://wiseone.io
- **Platform**: Chrome, Firefox, Edge
- **Key Features**:
  - AI-powered article summarization
  - Cross-reference checking
  - Fact verification
  - Research assistance
- **Use Cases**: Research, reading comprehension, fact-checking
**Works with:**
- Web browsers
- Online articles and documents

---

#### **Merlin**
- **Type**: AI assistant browser extension
- **Developer**: Merlin AI
- **Website**: https://www.getmerlin.in
- **Platform**: Chrome, Firefox, Edge
- **Key Features**:
  - ChatGPT integration in browser
  - Email writing assistance
  - Content summarization
  - Multi-platform AI access
- **Use Cases**: Productivity, content creation, research
**Works with:**
- Web browsers
- Gmail, Twitter, LinkedIn
- Various websites

---

#### **Qodo Merge AI**
- **Type**: AI code review browser extension for GitHub
- **Developer**: Qodo (formerly Codium)
- **Website**: https://www.qodo.ai/qodo-merge
- **Platform**: Chrome, Firefox, Edge
- **Key Features**:
  - AI code reviews inside GitHub PRs
  - PR chat functionality
  - No need to switch tools
  - Works directly in GitHub interface
  - Best for GitHub PR reviews
**Works with:**
- GitHub pull requests
- Browser-based workflows
- Code review processes

---

#### **Octotree**
- **Type**: GitHub enhancement extension
- **Developer**: Octotree
- **Website**: https://www.octotree.io
- **Repository**: https://github.com/ovity/octotree
- **Platform**: Chrome, Firefox, Edge, Safari
- **Key Features**:
  - IDE-like code tree in browser
  - Fast file exploration
  - Quick search functionality
  - PR review enhancement
  - Code bookmarking
  - No need to leave GitHub interface
**Works with:**
- GitHub repositories
- GitLab repositories
- Browser-based development

---

#### **daily.dev**
- **Type**: Developer news aggregator
- **Developer**: daily.dev
- **Website**: https://daily.dev
- **Platform**: Chrome, Firefox, Edge
- **Key Features**:
  - Personalized tech news feed
  - New tab replacement
  - 1,300+ developer-focused sources
  - Tech articles and discussions
  - Developer community content
**Works with:**
- Browser new tab
- Tech news sources
- Developer communities

---

## Search & Research Tools

### AI-Powered Search Engines

#### **You.com**
- **Type**: AI-powered search engine
- **Developer**: You.com
- **Website**: https://you.com
- **Key Features**:
  - AI-generated answers
  - Code search capabilities
  - Developer-friendly results
  - Privacy-focused
- **Use Cases**: Code search, research, development queries
**Works with:**
- Web browsers
- Developer workflows

---

#### **DeepAI**
- **Type**: AI research and tools platform
- **Developer**: DeepAI
- **Website**: https://deepai.org
- **Key Features**:
  - AI tools and APIs
  - Research resources
  - Model playground
- **Use Cases**: AI experimentation, research, learning
**Works with:**
- Developer tools
- Research workflows

---

## Other Tools & Infrastructure

### Model Context Protocol (MCP)

#### **Overview**
- **Type**: Open-source standard for AI-data integration
- **Developer**: Anthropic (November 2024)
- **Purpose**: Standardize how AI systems integrate with external tools and data sources

**Architecture**:
- Client-server model
- JSON-RPC 2.0 transport
- Re-uses Language Server Protocol (LSP) concepts
- Real-time context provision to LLMs

**SDKs:** Python, TypeScript, C# (Microsoft collaboration), Java, Kotlin

---

#### **MCP Server Repository**
- **Maintainer**: Anthropic (official reference implementations)
- **Available Servers**:
  - Google Drive
  - Slack
  - GitHub
  - Git
  - Postgres
  - Puppeteer
  - Stripe
  - Azure DevOps
  - Databricks
  - Many others (community contributions)
**Works with:**
- Claude Code (native)
- Cline (MCP Marketplace, v3.4+)
- Roo Code, Kilo Code (MCP integration)
- Windsurf (MCP support)
- Continue.dev (MCP tools)
- Zed (MCP integration)

---

#### **Industry Adoption (2025)**
- **Early Adopters**: Anthropic, OpenAI, Google DeepMind
- **I D Es**: Zed, Replit, Codeium, Sourcegraph
- **Google Deep Mind**: Confirmed MCP support in Gemini models (April 2025, Demis Hassabis)
- **Automation**: Microsoft Playwright MCP, Selenium, Appium integrations
---

### Generative UI & Frontend Infrastructure

#### **Thesys (C1 Generative UI API)**
- **Type**: Generative UI API for AI applications
- **Website**: https://thesys.dev
- **Documentation**: https://docs.thesys.dev
- **Key Features**:
  - Real-time UI generation (charts, forms, cards, interactive components)
  - Augments LLMs to respond with interactive UI instead of text
  - 2-line code integration
  - Works with any LLM, framework, or MCP
  - Dynamic UI based on user interaction/state
  - Natural language to UI components
  - Contextually relevant generation
  - Custom design system support
  - Tool call integration (databases, documents, APIs)
- **Use Case**: Building adaptive AI interfaces that generate during runtime (vs pre-deployment mockups)
- **Product**: C1 Generative UI API
- **Launch**: 2025 (Product Hunt launch)
- **Adoption**: 300+ teams using in production
**Works with:**
- All leading LLMs (Anthropic, OpenAI, etc.)
- Any framework (React, Vue, etc.)
- Model Context Protocol (MCP)
- Databases, documents, APIs (via tool calls)
- Company design systems
- Production AI applications

---

### Proxy & Router Solutions

#### **Claude Code Router**
- **Use Case**: Beyond Anthropic - access to 300+ models
- **Purpose**: Use Claude Code CLI with any model via OpenRouter
- **Integration**: Proxy layer between Claude Code and OpenRouter
**Works with:**
- Claude Code CLI
- OpenRouter (model access)
- Any OpenRouter-supported model

---

### Testing & Automation MCP Integrations

#### **Microsoft Playwright MCP**
- **Type**: Server-side enhancement to Playwright
- **Release**: Recent integration (2025)
- **Use Case**: Automated testing with AI
- **Purpose**: Structured browser interactions for LLMs
**Works with:**
- Playwright automation framework
- LLM-driven testing
- Browser automation

---

#### **Selenium & Appium MCP**
- **Type**: MCP integrations for testing frameworks
- **Use Case**: Mobile and web testing
- **Purpose**: AI-driven test automation
**Works with:**
- Selenium (web testing)
- Appium (mobile testing)
- AI-powered test generation

---

### Additional Platforms & Notes

#### **OpenSumi**
- **Type**: AI Native IDE Framework
- **Developer**: Ant Group (Alibaba)
- **Repository**: https://github.com/opensumi/core
- **Key Features**:
  - Framework for building AI-first IDEs
  - MCP Client support (Model Context Protocol)
  - Electron-based architecture
  - TypeScript development
  - Web IDE capabilities
  - Highly extensible and customizable
  - Pre-built AI integration patterns
  - Support for MCP tools via MCP server

**Use Cases**:
- Building custom AI-powered IDEs
- Internal development tools
- Specialized coding environments

**Works with:**
- Model Context Protocol (MCP)
- Multiple AI model providers
- Electron applications
- Web-based IDEs
- Custom development tools

---

#### **Visual Copilot (Builder.io)**
- **Type**: Figma to code AI tool
- **Developer**: Builder.io
- **Website**: https://www.builder.io/blog/figma-to-code-visual-copilot
- **Key Features**:
  - Convert Figma designs to code
  - Multiple framework support
  - Component generation
  - Design system integration
- **Use Cases**: Design-to-code workflow, rapid prototyping
**Works with:**
- Figma
- React, Vue, Angular, HTML
- Design systems

---

#### **Supabase Assistant**
- **Type**: AI assistant for Supabase Studio
- **Developer**: Supabase
- **Website**: https://supabase.com/blog/studio-introducing-assistant
- **Key Features**:
  - SQL query generation
  - Database schema assistance
  - API endpoint suggestions
  - Documentation help
- **Use Cases**: Database development, API building
**Works with:**
- Supabase Studio
- PostgreSQL
- Supabase APIs

---

#### **Civitai**
- **Type**: AI model sharing platform
- **Developer**: Civitai
- **Website**: https://civitai.com
- **Key Features**:
  - Model sharing and discovery
  - Training resources
  - Community models
  - LoRA and checkpoint hosting
- **Use Cases**: Model discovery, training, fine-tuning
**Works with:**
- Stable Diffusion
- ComfyUI
- Automatic1111
- Training tools

---

#### **SD Tools**
- **Type**: Stable Diffusion tools and utilities
- **Website**: https://sdtools.org/
- **Key Features**:
  - Stable Diffusion model utilities
  - Training and fine-tuning tools
  - LoRA support
  - Model management
- **Use Cases**: Stable Diffusion workflow optimization, model training
**Works with:**
- Stable Diffusion
- LoRA training
- Model fine-tuning workflows
- Image generation pipelines

---

#### **Eclipse Theia**
- **Type**: VS Code-compatible (not a fork)
- **Status**: Worth tracking if broadening criteria
- **Features**: Theia AI, Theia Coder
- **Technology**: MCP support
- **Note**: Architecturally independent from VS Code
**Works with:**
- Model Context Protocol (MCP)
- VS Code extensions (compatibility layer)
- AI coding tools (Theia AI, Theia Coder)
- Web-based and desktop environments

---

## Performance Comparison Context

### Fastest Inference Providers (100 tokens)

### Cost Leaders

## Integration Matrix Summary

### Universal Compatibility (OpenAI API)

### MCP Ecosystem

### Cloud Platform Integration

### Local-First Options

## Recommendations by Use Case

### For Maximum Model Flexibility

### For Enterprise/Cloud Integration

### For Privacy/Local Development

### For Cost Optimization

### For Performance

### For Agentic Workflows

### For Web Development

### For Security & Code Review

### For Documentation

### For Learning & Beginners

### For JetBrains Users

### For Open-Source & Self-Hosted

## Tool Categories Summary

### By Deployment Type

### By IDE Platform

### By Specialization

### By License Type

## Additional Resources

### Related Awesome Lists

### Official Documentation Links

### Community Resources

### Learning Resources

#### **Online Courses & Tracks**
---

#### **YouTube Tutorials**
---

#### **Technical Resources & Discussions**
---

#### **Tools & Utilities**
---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)


## Performance Comparison Context

### Fastest Inference Providers (100 tokens)
1. **Cerebras**: 574ms
2. **Groq**: 851ms
3. **FriendliAI**: 1041ms
4. **Fireworks AI**: 4x faster than vLLM
5. **Together AI**: 2x faster than Azure, 4x faster than Bedrock

### Cost Leaders
- **DeepSeek**: ~$0.28-$0.70/M input, ~$1.14-$2.50/M output
- **Together AI**: Up to 11x cheaper than GPT-4 (with Llama-3)

---

## Integration Matrix Summary

### Universal Compatibility (OpenAI API)
Almost all tools support OpenAI-compatible APIs, enabling:
- OpenRouter (300+ models)
- Ollama (local models)
- Custom providers
- Cloud platform proxies (Bedrock, Azure, Vertex)

### MCP Ecosystem
Tools with MCP support can integrate:
- 100+ official MCP servers
- Custom tool creation
- Database, API, and external service connections
- Browser automation
- Testing frameworks

### Cloud Platform Integration
- **AWS**: Bedrock native support in Cline, Continue, Roo Code, Sourcegraph Cody
- **Azure**: Native in Continue, Copilot, enterprise tools; OpenAI partnership
- **Google**: Vertex AI support in Cline, Continue, native in Gemini/Jules tools

### Local-First Options
Tools with strong local model support:
- Void (Ollama auto-detection)
- Continue.dev (Ollama guide)
- Cline (LM Studio, Ollama)
- Roo Code, Kilo Code (Ollama provider)
- JetBrains AI Assistant (local models)
- GPT4All, Jan, LocalAI

---

## Recommendations by Use Case

### For Maximum Model Flexibility
- **CLI**: Aider, Continue CLI
- **Extension**: Cline, Roo Code, Continue
- **IDE**: Void, PearAI, Cursor
- **Provider**: OpenRouter (300+ models)

### For Enterprise/Cloud Integration
- **AWS**: Amazon Q Developer, tools with Bedrock support
- **Azure**: GitHub Copilot, tools with Azure OpenAI support
- **Google**: Sourcegraph Cody, Gemini CLI, Jules Tools

### For Privacy/Local Development
- **Infrastructure**: Ollama + vLLM
- **IDE**: Void (auto-detection)
- **Extension**: Continue.dev (local guide)
- **Models**: Qwen, DeepSeek, Llama (via Ollama)
- **Platforms**: GPT4All, Jan, LocalAI
- **Self-hosted**: TabbyML, FauxPilot

### For Cost Optimization
- **Provider**: DeepSeek (via OpenRouter or direct)
- **Tools**: Kilo Code (transparent pricing), Aider (OSS)
- **Local**: Ollama + free models
- **Budget**: Free tiers (GitHub Copilot, Windsurf, JetBrains AI)

### For Performance
- **Inference**: Groq, Cerebras, Fireworks AI, Together AI
- **Tools**: GitHub Copilot CLI (optimized), Supermaven (fast completion)
- **Local**: vLLM (high throughput)

### For Agentic Workflows
- **CLI**: OpenAI Codex CLI, Claude Code CLI, GitHub Copilot CLI
- **Extension**: Cline, Kilo Code, Roo Code, Sweep AI
- **IDE**: Cursor, Windsurf (Cascade), Bolt.new
- **Protocol**: MCP-enabled tools
- **JetBrains**: Junie agent

### For Web Development
- **Rapid Prototyping**: Bolt.new, Lovable
- **Full IDE**: Cursor, Windsurf
- **Browser-Based**: Replit Ghostwriter
- **UI Components**: v0 (Vercel)

### For Security & Code Review
- **Security**: Snyk DeepCode AI, Semgrep, CodeQL
- **Code Quality**: SonarQube, Sourcery
- **AI-Generated Code**: Snyk (40% vulnerability detection)
- **Enterprise**: Refact.ai (self-hosted)
- **GitHub Actions**: AI Code Reviewer, Claude Code Security Review
- **Code Review Platform**: CodeRabbit
- **CLI Tools**: CodeGPT (commit messages & code review)

### For Documentation
- **API Docs**: Mintlify (OpenAPI specs)
- **Code Understanding**: Swimm (knowledge base from code)
- **Large Codebases**: Bloop AI (semantic search)

### For Learning & Beginners
- **Browser-Based**: Replit Ghostwriter, Bolt.new
- **GUI**: LM Studio, GPT4All, Jan
- **Beginner-Friendly**: AskCodi, CodeGeeX (multi-language)
- **Free Open-Source**: Twinny, Flexpilot

### For JetBrains Users
- **Official**: JetBrains AI Assistant (with Junie agent)
- **Third-Party**: GitHub Copilot, Kilo Code, Tabnine
- **AI Wizard**: Auto-Dev (open-source, feature-rich)

### For Open-Source & Self-Hosted
- **CLI**: Aider, Continue, Mentat
- **Extensions**: Cline, Roo Code, Continue, TabbyML, FauxPilot, Twinny, Flexpilot
- **IDEs**: Void, PearAI, Zed
- **Local**: Ollama, LM Studio, GPT4All, Jan
- **Agents**: Refact.ai, Sweep AI
- **Design Tools**: Onlook (React visual builder)
- **Frameworks**: OpenSumi (build your own AI IDE)

---

## Tool Categories Summary

### By Deployment Type
- **Cloud-Only**: GitHub Copilot, Amazon Q, Replit Ghostwriter
- **Cloud + Local**: Cursor, Windsurf, Continue, Cline
- **Local-First**: Void, GPT4All, Jan, Ollama, TabbyML, FauxPilot
- **Hybrid**: JetBrains AI, Sourcegraph Cody

### By IDE Platform
- **VS Code Native**: Cline, Roo Code, Kilo Code, Continue, GitHub Copilot
- **VS Code Forks**: Cursor, Windsurf, PearAI, Void, Kiro, Trae
- **JetBrains**: AI Assistant, GitHub Copilot, Kilo Code, Tabnine
- **Standalone**: Zed, Replit, Bolt.new
- **Multi-Platform**: Continue, Tabnine, Sourcegraph Cody

### By Specialization
- **Agentic**: Cline, Roo Code, Kilo Code, Sweep AI, Junie, Refact.ai
- **Code Completion**: Tabnine, Supermaven, TabbyML, GitHub Copilot, Twinny, Flexpilot
- **Security**: Snyk DeepCode AI, SonarQube, Sourcery, Semgrep
- **Documentation**: Mintlify, Swimm
- **Search**: Bloop AI, Sourcegraph Cody
- **Web Dev**: Bolt.new, v0, Lovable, Replit
- **Design Tools**: Onlook (AI-first design for React)
- **JetBrains**: Auto-Dev (AI wizard), JetBrains AI Assistant, GitHub Copilot
- **IDE Frameworks**: OpenSumi (MCP-enabled framework)

### By License Type
- **Open-Source**: Aider, Cline, Roo Code, Continue, Void, PearAI, Zed, Ollama, GPT4All, Jan, Sweep AI, Refact.ai, TabbyML, FauxPilot, CodeGeeX, Twinny, Flexpilot, Auto-Dev, Onlook, OpenSumi
- **Proprietary**: Cursor, GitHub Copilot, Windsurf, Tabnine, Supermaven
- **Freemium**: Replit, Bolt.new, JetBrains AI, Amazon Q

---

*Last Updated: November 2025*
*Note: This landscape is rapidly evolving. Check official documentation for the latest features and compatibility.*

---

## Additional Resources

### Related Awesome Lists

- [Awesome Artificial Intelligence](https://github.com/owainlewis/awesome-artificial-intelligence) - A curated list of Artificial Intelligence courses, books, video lectures and papers
- [Awesome Machine Learning](https://github.com/josephmisiti/awesome-machine-learning) - A curated list of awesome Machine Learning frameworks, libraries and software
- [Awesome Deep Learning](https://github.com/ChristosChristofidis/awesome-deep-learning) - A curated list of awesome Deep Learning tutorials, projects and communities
- [Awesome Python](https://github.com/vinta/awesome-python) - A curated list of awesome Python frameworks, libraries, software and resources
- [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) - A collection of awesome browser-side JavaScript libraries, resources and shiny things
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs) - Delightful Node.js packages and resources
- [Awesome GitHub](https://github.com/Kikobeats/awesome-github) - An exquisite list of awesome GitHub tools and resources
- [Awesome VS Code](https://github.com/viatsko/awesome-vscode) - A curated list of delightful VS Code packages and resources
- [Awesome Lists](https://github.com/sindresorhus/awesome) - The main awesome list of awesome lists

### Official Documentation Links
- [Anthropic Claude](https://www.anthropic.com/claude)
- [OpenAI Platform](https://platform.openai.com/)
- [Google AI Studio](https://ai.google.dev/)
- [GitHub Copilot](https://github.com/features/copilot)
- [JetBrains AI](https://www.jetbrains.com/ai/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Ollama](https://ollama.ai/)
- [Hugging Face](https://huggingface.co/)

### Community Resources
- [Awesome AI Coding Tools](https://github.com/ai-for-developers/awesome-ai-coding-tools)
- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers)
- [Continue.dev Docs](https://docs.continue.dev/)
- [Cline Documentation](https://docs.cline.bot/)
- [GPT-Crawler](https://github.com/BuilderIO/gpt-crawler) - Tool for crawling websites to create custom GPT knowledge bases

### Learning Resources

#### Online Courses & Tracks
- [HubSpot Academy AI Track](https://app.hubspot.com/academy/44669786/tracks/1161376/) - AI fundamentals and applications

#### YouTube Tutorials
- [Stable Diffusion Training](https://www.youtube.com/watch?v=dVjMiJsuR5o&ab_channel=koiboi) - LoRA and model training
- [Understanding Stable Diffusion Concepts](https://youtu.be/z2QE12p3kMM?si=LluxmuZ_J7jWAKYU) - Technical deep dive
- [freeCodeCamp AI Course](https://www.youtube.com/watch?v=UU1WVnMk4E8&t=8107s&ab_channel=freeCodeCamp.org) - Comprehensive AI introduction
- [Machine Learning Fundamentals](https://www.youtube.com/watch?v=vDDjtwQDw2k&ab_channel=freeCodeCamp.org) - freeCodeCamp ML course
- [Neural Networks Explained](https://www.youtube.com/watch?v=zxQyTK8quyY&t=679s&ab_channel=StatQuestwithJoshStarmer) - StatQuest series

#### Technical Resources & Discussions
- [Reddit: Stable Diffusion Training Discussion](https://www.reddit.com/r/StableDiffusion/comments/11m75qo/im_trying_to_understand_the_difference_between/) - Community discussions on training
- [HN: AI Visualization Tools](https://news.ycombinator.com/item?id=38513953) - Hacker News discussion
- [HN: AI Model Visualization](https://news.ycombinator.com/item?id=38505211) - Technical visualization tools
- [HN: Web Scraping for AI](https://news.ycombinator.com/item?id=38412886) - Scraping techniques for AI data
- [Medium: RAG Beyond Vector Search](https://medium.com/@dave-shap/beyond-vector-search-knowledge-management-with-generative-ai-6c2d10b481a0) - Advanced RAG techniques

#### Tools & Utilities
- [Draw.io](https://www.drawio.com/) - Diagramming tool (useful for architecture planning)
- [Excalidraw](https://excalidraw.com/) - Collaborative whiteboarding (useful for AI system design)

---

**Contributing**: This guide is a living document. For updates, corrections, or additions, please submit via the project repository.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [John Henry](https://github.com/johnhenry) has waived all copyright and related or neighboring rights to this work.

