# Awesome AI Tools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> **Last Updated:** October 2025
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
- [CLI Tools](#cli-tools)
- [VS Code Extensions](#vs-code-extensions)
- [JetBrains IDE Tools](#jetbrains-ide-tools)
- [Full IDE Tools](#full-ide-tools)
- [Code Review & Security Tools](#code-review--security-tools)
- [Documentation & Code Explanation](#documentation--code-explanation)
- [Local Model Infrastructure](#local-model-infrastructure)
- [AI/ML Libraries & Frameworks](#aiml-libraries--frameworks)
- [Browser Extensions](#browser-extensions)
- [Search & Research Tools](#search--research-tools)
- [Other Tools & Infrastructure](#other-tools--infrastructure)
- [Performance Comparison Context](#performance-comparison-context)
- [Integration Matrix Summary](#integration-matrix-summary)
- [Recommendations by Use Case](#recommendations-by-use-case)
- [Tool Categories Summary](#tool-categories-summary)
- [Additional Resources](#additional-resources)

---

## AI Inference Providers

### Major Cloud Providers

#### **Anthropic**
- **Website**: https://www.anthropic.com
- **API Console**: https://console.anthropic.com
- **Documentation**: https://docs.anthropic.com
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
- **API Platform**: https://platform.openai.com
- **Documentation**: https://platform.openai.com/docs
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
- **AI Studio**: https://aistudio.google.com
- **Vertex AI**: https://cloud.google.com/vertex-ai
- **Documentation**: https://ai.google.dev/docs
- **Models**: Gemini 2.5 Pro, Gemini 2.0 Flash, PaLM, Gemma
- **Platforms**: Google AI Studio, Vertex AI, DeepMind
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
- **Platform**: https://console.mistral.ai (La Plateforme)
- **Documentation**: https://docs.mistral.ai
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
- **Focus**: Enterprise, multilingual, robust security
- **Special Features**: Top-tier multilingual models, full deployment control

**Works with:**
- AWS Bedrock
- Enterprise deployments requiring data control
- Multi-language applications

---

#### **AI21 Labs**
- **Models**: Jamba family (Mamba-Transformer hybrid)
- **Architecture**: Hybrid Mamba-Transformer for production use
- **Focus**: Commercial reliability, quality, performance

**Works with:**
- AWS Bedrock
- Azure AI Foundry
- Enterprise applications

---

#### **Perplexity**
- **Type**: AI search/Q&A with developer API
- **Models**: State-of-the-art open-source (Llama, Mistral)
- **Special Features**: Real-time internet data access, rapid model integration
- **Pricing**: Usage-based; Pro users get $5/month pplx-api credit

**Works with:**
- Applications requiring live data (news, finance, trends)
- REST API integrations
- Research and Q&A systems

---

### Unified Routing & Aggregation Platforms

#### **OpenRouter**
- **Type**: Unified API gateway
- **Models**: 300-400+ models from multiple providers
- **Providers**: Anthropic, OpenAI, Google, Meta, Mistral, DeepSeek, and more
- **Key Features**:
  - Single OpenAI-compatible endpoint
  - Automatic failover and routing
  - Cost/latency/performance optimization
  - Prompt caching
  - Unified billing

**Works with:**
- Cline (direct integration with auto-updating model list)
- Cursor, Windsurf (custom API endpoint support)
- Continue.dev, Roo Code, Kilo Code
- Claude Code Router (proxy for Claude Code)

---

#### **Hugging Face Inference**
- **Type**: Multi-provider serverless inference
- **Providers**: Fal, Replicate, SambaNova, Together AI
- **Models**: Hundreds of ML models
- **API**: Unified, consistent API across providers
- **Pricing**: Standard provider API rates

**Works with:**
- LiteLLM
- Developer applications
- Fine-tuning workflows (with Together AI, Replicate)

---

#### **Replicate**
- **Type**: Hosted open-source model inference
- **Features**: Fine-tuning, quick testing, no infrastructure setup
- **Use Case**: Rapid model integration and testing

**Works with:**
- Hugging Face platform
- API integrations
- Development and prototyping

---

### Cloud Platform AI Services

#### **AWS Bedrock**
- **Type**: Multi-vendor AI service platform
- **Models**: Claude (Anthropic), Titan (Amazon), Llama (Meta), Cohere, AI21, Mistral, Stability AI, OpenAI (open weight)
- **Integration**: Deep AWS ecosystem (Lambda, S3, CloudWatch)
- **Special Features**: Serverless, fully managed, OpenAI-compatible API (August 2025)

**Works with:**
- Cline, Continue, Roo Code (native Bedrock support)
- Sourcegraph Cody (BYOM)
- Any tool with AWS authentication
- OpenAI SDK (via compatibility layer)

---

#### **Azure AI Foundry (Azure OpenAI)**
- **Type**: Microsoft's AI platform
- **Models**: Exclusive GPT-4/GPT-5 access, Mistral, Cohere, AI21, other models
- **Integration**: Deep Microsoft ecosystem (365, Active Directory, Cognitive Services)
- **Special Features**: Enterprise-grade security, compliance

**Works with:**
- Microsoft Copilot (native)
- GitHub Copilot (Microsoft integration)
- Continue.dev (Azure provider support)
- Any OpenAI-compatible tool (with Azure endpoints)

---

#### **Google Vertex AI**
- **Type**: Unified ML/AI platform
- **Models**: Gemini family, PaLM, Model Garden (Llama, Gemma, BERT, 3rd party)
- **Integration**: Google Cloud tools (BigQuery, Dataflow)
- **Special Features**: Data-driven MLOps, analytics focus

**Works with:**
- Cline, Continue, Roo Code (GCP Vertex provider)
- Google's native tools (Gemini CLI, Jules Tools)
- Enterprise tools requiring Google Cloud integration

---

### High-Performance Inference Providers

#### **Together AI**
- **Focus**: High-performance open-source LLMs
- **Models**: 200+ open-source models
- **Performance**: Sub-100ms latency, 4x faster than Bedrock, 2x faster than Azure
- **Pricing**: Up to 11x more affordable than GPT-4
- **Release**: Together Inference Engine 2.0 with Turbo and Lite endpoints

**Works with:**
- Hugging Face (serverless integration)
- Any tool with custom API endpoint support
- Developer-focused applications requiring speed

---

#### **Fireworks AI**
- **Focus**: Fastest model APIs
- **Technology**: Proprietary FireAttention engine
- **Performance**: 4x lower latency than vLLM
- **Compliance**: HIPAA, SOC2
- **Modalities**: Text, image, audio

**Works with:**
- Hugging Face platform
- Custom integrations via API
- Performance-critical applications

---

#### **Groq**
- **Focus**: Hardware-optimized inference
- **Technology**: Language Processing Unit (LPU) chip
- **Performance**: 18x faster than traditional GPUs, <1 second for 100 tokens
- **Deployment**: Cloud and on-premises
- **Slogan**: "Fast, low cost inference"

**Works with:**
- Cline, Continue (Groq provider support)
- Low-latency applications
- Enterprise on-prem deployments

---

#### **Cerebras**
- **Focus**: Custom AI chips for inference
- **Performance**: 574ms for 100 tokens (fastest in class)
- **Type**: Hardware accelerator manufacturer

**Works with:**
- Cline (Cerebras provider)
- High-performance computing applications

---

#### **SambaNova**
- **Type**: Inference provider
- **Integration**: Hugging Face serverless

**Works with:**
- Hugging Face platform
- Enterprise deployments

---

#### **Fal**
- **Type**: Inference provider
- **Integration**: Hugging Face serverless

**Works with:**
- Hugging Face platform
- Developer applications

---

### Additional Model Providers

#### **Meta**
- **Models**: Llama 3, Llama family, Code Llama
- **Type**: Open-source foundation models
- **Special Features**: Code Llama built on Llama 2, free for research and commercial use

**Works with:**
- AWS Bedrock, Azure, Google Vertex AI
- Ollama, LM Studio (local deployment)
- Most AI coding tools (open model access)

---

#### **xAI**
- **Models**: Grok, Grok Code Fast 1
- **Provider**: xAI (Elon Musk)

**Works with:**
- GitHub Copilot
- Roo Code

---

#### **Stability AI**
- **Focus**: Image generation, multimodal
- **Integration**: Available through AWS Bedrock

**Works with:**
- AWS Bedrock
- Creative and multimodal applications

---

## CLI Tools

### Full Agentic Project-Level CLIs

#### **Aider**
- **Type**: Open-source AI pair programmer
- **Website**: https://aider.chat
- **Repository**: https://github.com/paul-gauthier/aider
- **Models**: GPT-4o, Claude 3.5 Sonnet (recommended), any LLM
- **Key Features**:
  - Multi-file edits
  - Git integration (automated commits & diffs)
  - Conversation history
  - Free and open-source (API costs only)
- **Pricing**: $10-20/month for moderate use (LLM API costs)

**Works with:**
- OpenAI, Anthropic APIs (primary)
- Any LLM provider (flexible integration)
- Git repositories (required)
- Meta, Mistral (free models to avoid API costs)

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
- **Installation**: NPM-installable, Node.js based
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
- **Models**: Gemini 2.5, Gemini models
- **Release**: Open-sourced 2025
- **Key Features**:
  - Terminal workflows
  - Python-friendly
  - Model Context Protocol integration

**Works with:**
- Google Gemini models (native)
- Google Cloud Platform
- MCP servers

---

#### **Jules Tools CLI**
- **Type**: Google's coding agent CLI
- **Website**: https://jules.google
- **Documentation**: https://developers.google.com/jules
- **Models**: Jules agent models
- **Status**: Announced update 2025, entering developer toolchains
- **Key Features**: Terminal-based coding agent, competition with Cursor/Claude

**Works with:**
- Google AI infrastructure
- Gemini ecosystem

---

#### **OpenHands CLI**
- **Type**: All-Hands AI coding agent
- **Website**: https://www.all-hands.dev
- **Repository**: https://github.com/All-Hands-AI/OpenHands
- **Models**: Multiple LLM support via LiteLLM
- **Status**: Recent CLI release (2025)
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

#### **Continue CLI**
- **Type**: Open-source BYO-model agent
- **Website**: https://continue.dev
- **Repository**: https://github.com/continuedev/continue
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
- **Repository**: https://github.com/AbanteAI/mentat
- **Website**: https://www.mentat.ai
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
- **Performance**: #1 on Terminal-Bench (58.75% accuracy)
- **Benchmark**: Beats Claude Code CLI (43.2%), Codex CLI (42.8%)
- **Key Features**:
  - Model-agnostic (works with any LLM)
  - Multi-interface support (CLI, IDE, CI/CD)
  - Terminal, IDE integration, automation pipelines
- **Status**: Available as CLI and VS Code extension

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
- **Website**: https://opencode.ai
- **Stakeholder**: SST.dev
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
- **Repository**: holasoymalva/deepseek-cli
- **Models**: DeepSeek Coder models
- **Key Features**: Leverages DeepSeek's coding-specific models

**Works with:**
- DeepSeek API (native)
- DeepSeek Coder models

---

### Amazon AI Coding Tools

#### **Amazon Q Developer (formerly CodeWhisperer)**
- **Type**: AWS generative AI coding assistant
- **Rebranding**: CodeWhisperer capabilities now part of Q Developer (2024)
- **Models**: Undisclosed AWS models (trained on AWS docs)
- **Key Features**:
  - Agentic capabilities (autonomous feature implementation, testing, refactoring)
  - Security scanning
  - AWS service integration
  - Reference tracking for open-source code
  - Software development lifecycle automation
- **Pricing**: Free for individuals, $19/user for Pro

**Works with:**
- AWS ecosystem (deep integration)
- IDEs (VS Code, JetBrains, Visual Studio)
- CLI environments
- MCP tools

---

### Command-Level Assistants

#### **ai-shell**
- **Type**: Natural language → shell command translator
- **Developer**: Builder.io (OSS)
- **Repository**: https://github.com/BuilderIO/ai-shell
- **Website**: https://www.builder.io/blog/ai-shell
- **Use Case**: Command-level assistance (not project editing)

**Works with:**
- Various LLM backends
- Terminal command workflows

---

#### **ShellGPT**
- **Type**: GPT-powered shell assistant
- **Repository**: https://github.com/TheR1D/shell_gpt
- **Website**: https://github.com/TheR1D/shell_gpt#readme
- **Variants**: Multiple community forks
- **Commands**: `sgpt "explain X"`, `sgpt "command for..."`
- **Use Case**: Command generation, explanations

**Works with:**
- OpenAI GPT models (primary)
- Terminal workflows

---

#### **AICommits**
- **Type**: Git commit message generator
- **Source**: OSS community
- **Repository**: https://github.com/Nutlope/aicommits
- **Website**: https://github.com/Nutlope/aicommits#readme
- **Use Case**: Automated commit messages from diffs

**Works with:**
- Git workflows
- Various LLM providers

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

## VS Code Extensions

### Autonomous Coding Agents

#### **Cline**
- **Developer**: Open-source community (cline repo)
- **Website**: https://cline.bot
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
- **Repository**: https://github.com/cline/cline
- **Installs**: Millions
- **Models**: OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, GCP Vertex, Cerebras, Groq, LM Studio, Ollama
- **Key Features**:
  - Autonomous file creation/editing
  - Shell command execution
  - Browser integration
  - Human-in-the-loop approvals
  - Cost tracking (tokens & API usage)
  - MCP Marketplace (Feb 2025, v3.4)
  - Experimental Claude 4 support (v3.17.9)

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
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline
- **Repository**: https://github.com/RooVetGit/Roo-Code
- **Status**: Successor/fork lineage from Roo/Cline
- **GitHub Stars**: 18k+
- **Marketplace Installs**: 750k+
- **Models**: Anthropic, Claude Code, AWS Bedrock, DeepSeek, Google Gemini, Groq, Hugging Face, LiteLLM, Mistral AI, Ollama, OpenAI, OpenRouter, Requesty, xAI (Grok)
- **Key Features**:
  - Agentic assistant
  - Multi-file edits
  - Task/command execution
  - Modes: Code, Debug, Architect, Ask, Custom
  - BYOK (Bring Your Own Keys)
  - MCP integration

**Works with:**
- OpenAI-compatible or custom models/APIs
- MCP servers
- Web MCP (Bright Data integration)
- Wide range of LLM providers

---

#### **Kilo Code**
- **Developer**: Kilo Code (OSS)
- **Website**: https://kilocode.ai
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=kilocode.kilocode
- **Repository**: https://github.com/kilocode/kilo
- **Relationship**: Fork of Roo Code with enhancements
- **Models**: 400+ models (Gemini 2.5 Pro, Claude 4 Sonnet/Opus, GPT-5)
- **Key Features**:
  - Task orchestration
  - Error detection
  - Automated subtasks
  - Model-agnostic (many LLMs)
  - MCP Server Marketplace
  - Transparent pricing (matches provider rates)

**Works with:**
- All major model providers
- MCP servers (databases, APIs, custom tools)
- Extends Roo Code capabilities
- JetBrains (in addition to VS Code)

---

#### **Continue**
- **Developer**: Continue.dev (OSS)
- **Website**: https://continue.dev
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=Continue.continue
- **Repository**: https://github.com/continuedev/continue
- **Type**: Agentic coding extension
- **Models**: Anthropic, OpenAI, Azure AI Foundry, Amazon Bedrock, Google AI Studio, DeepSeek, Mistral, Ollama
- **Key Features**:
  - Custom agent rules
  - Model integration flexibility
  - Works alongside CLI version
  - Real-time code suggestions
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
- **Developer**: GitHub (Microsoft)
- **Website**: https://github.com/features/copilot
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- **Documentation**: https://docs.github.com/copilot
- **Type**: First-party VS Code extension
- **Models**: GPT-4.1 (default), GPT-5-Codex, GPT-5, Claude 4 Sonnet/Opus, Gemini 2.5 Pro/2.0 Flash, xAI Grok
- **Status**: Now includes Agent Mode
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
- **Developer**: Tabnine
- **Website**: https://www.tabnine.com
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode
- **Type**: Proprietary + third-party models
- **Models**:
  - Proprietary (code completions, private/protected)
  - Third-party chat: Mistral, GPT-4o, o1-preview, o1-mini, Claude Sonnet 3.5, Codestral
- **Key Features**:
  - Code completions
  - AI chat
  - Enterprise/self-hosted options
- **Integration**: VS Code, JetBrains

**Works with:**
- Tabnine's private models (completions)
- Major LLM providers (chat)
- Enterprise deployments

---

#### **Supermaven**
- **Developer**: Supermaven (creator of original TabNine 2018)
- **Website**: https://supermaven.com
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=supermaven.supermaven
- **Type**: Fast copilot with longest context
- **Key Features**:
  - 300,000-token context window
  - Fastest code completion
  - Sub-100ms latency
- **Focus**: Speed and context depth

**Works with:**
- VS Code
- Proprietary infrastructure

---

#### **Qodo Gen (formerly Codium)**
- **Developer**: Qodo
- **Website**: https://www.qodo.ai
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=Codium.codium
- **Type**: Comprehensive AI coding platform
- **Key Features**:
  - Real-time code suggestions
  - Automated test generation
  - Collaborative AI chat
  - Code review support
  - Agentic tools (MCPs)
  - Extension mode + chat mode

**Works with:**
- Advanced AI models (unspecified providers)
- MCP tools
- VS Code workflows
- Focus on code quality and integrity

---

### Enterprise & Codebase-Aware

#### **Sourcegraph Cody**
- **Developer**: Sourcegraph
- **Website**: https://sourcegraph.com/cody
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai
- **Documentation**: https://docs.sourcegraph.com/cody
- **Models**: Claude 3.5, GPT-4o, Gemini 1.5, Mixtral-8x7B, custom via Bedrock/Azure OpenAI
- **Type**: Codebase-aware AI assistant
- **Key Features**:
  - Search, chat, ask about code
  - Agentic interactions
  - Enterprise focus
  - Context from entire codebase
  - Model switching
  - Local models via Ollama

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
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode
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
- **Security Note**: Security incident July 2025 (keep updated)

**Works with:**
- AWS proprietary models only
- AWS ecosystem (tight integration)
- MCP tools
- No third-party model support

---

### Chat & General Assistance

#### **Windsurf Plugin (formerly Codeium)**
- **Developer**: Codeium/Windsurf
- **Type**: Autocomplete, chat, search
- **Marketplace**: Official listing
- **Key Features**:
  - Code completion
  - AI chat
  - Code search

**Works with:**
- Codeium/Windsurf infrastructure
- Windsurf IDE (companion to full IDE)

---

#### **Genie AI (ChatGPT in VS Code)**
- **Developer**: Genie AI
- **Type**: Chat/commands integration
- **Models**: OpenAI models
- **Key Features**: ChatGPT interface in VS Code

**Works with:**
- OpenAI GPT models
- VS Code command palette

---

#### **AskCodi**
- **Developer**: AskCodi
- **Type**: Assistant extension
- **Integration**: Documented with Roo Code integration
- **Key Features**: General coding assistance

**Works with:**
- Various LLM providers
- Roo Code (documented integration)

---

#### **CodeGPT: Chat & AI Agents**
- **Developer**: DanielSanMedium / community
- **Type**: Chat-style AI assistance
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
- **Developer**: Google
- **Type**: Gemini-powered coding assistance
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
- **License**: 100% free, open-source
- **Language**: Rust (performance-focused)
- **Key Features**:
  - Full function and code block suggestions
  - Self-hosted (data never leaves environment)
  - Reads code and comments for context
  - Ideal for organizations with strict data policies

**Works with:**
- Local deployment
- Enterprise environments requiring data control
- Privacy-focused workflows

---

#### **FauxPilot**
- **Type**: Self-hosted Copilot alternative
- **Technology**: SalesForce CodeGen models, NVIDIA Triton Inference Server, FasterTransformer
- **Hardware**: NVIDIA GPUs required
- **Key Features**:
  - Complete data privacy
  - Local server deployment
  - Full control over data

**Works with:**
- NVIDIA GPU systems
- Privacy-critical environments
- Local infrastructure

---

#### **Twinny**
- **Developer**: Twinny Community
- **Website**: https://twinnydotdev.github.io/twinny
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=rjmacarthy.twinny
- **Repository**: https://github.com/twinnydotdev/twinny
- **Type**: Free AI code completion (100% free, no paywalls)
- **Models**: Ollama, LM Studio, Oobabooga, llama.cpp, any OpenAI API compatible provider
- **Key Features**:
  - FIM (Fill-In-Middle) code completion
  - Chat interface for code assistance
  - 100% local or API-hosted
  - Completely free and open source
  - Customizable provider settings
  - Multiple model support

**Works with:**
- Ollama (local models)
- LM Studio
- Any OpenAI-compatible API
- Self-hosted inference servers

---

#### **Flexpilot**
- **Developer**: Flexpilot AI
- **Website**: https://flexpilot.ai
- **Marketplace**: https://marketplace.visualstudio.com/items?itemName=flexpilot-ai.flexpilot
- **Repository**: https://github.com/flexpilot-ai/vscode-extension
- **Type**: Open-source, native GitHub Copilot alternative
- **Models**: OpenAI, Anthropic, Google, Ollama, custom providers
- **Key Features**:
  - Native VS Code experience
  - Free and open source
  - Multiple provider support
  - Chat and completion modes
  - Privacy-focused

**Works with:**
- Major cloud providers (OpenAI, Anthropic, Google)
- Local models (Ollama)
- Custom API endpoints

---

#### **CodeGeeX**
- **Type**: Open-source multi-language assistant
- **Scale**: 13 billion parameters
- **Languages**: 20+ programming languages
- **Key Features**:
  - Code generation
  - Code translation between languages
  - Code explanations
  - Code summaries
  - Multilingual code corpus trained

**Works with:**
- VS Code, JetBrains
- Multi-language projects
- Translation workflows

---

#### **Droid (VS Code Extension)**
- **Type**: Factory AI coding agent extension
- **Performance**: #1 on Terminal-Bench (58.75%)
- **Models**: Model-agnostic (works with any LLM)
- **Key Features**:
  - Autonomous coding agent in VS Code
  - Terminal integration
  - CI/CD pipeline support
  - Beats Claude Code and Codex CLI benchmarks
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
- **Languages**: Python, JS/TS, Java, Go, C#, C++, Rust
- **Key Features**:
  - Reads codebase
  - Understands tickets/feature requests
  - Plans edits
  - Generates pull requests automatically
  - Handles end-to-end workflows (not line-by-line like Copilot)
- **Deployment**: Hosted service or self-hosted

**Works with:**
- GitHub (native integration)
- "Sweep:" issues → automated PRs
- Follow-up from issue comments

---

#### **Bloop AI**
- **Type**: AI-powered code search & comprehension
- **Technology**: Semantic code search
- **Key Features**:
  - Understands meaning and structure of code
  - Natural language search
  - Large codebase navigation
  - Onboarding tool for new team members

**Works with:**
- Large, complex codebases
- Team onboarding
- Code exploration workflows

---

#### **Blackbox AI**
- **Type**: Context-aware AI coding assistant
- **Integration**: IDEs and browsers
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

**Works with:**
- VS Code (marketplace)
- Browser integration
- Multiple IDEs

---

### Specialized

#### **CoqPilot**
- **Developer**: JetBrains-Research / community
- **Type**: Theorem-proof assistant
- **Domain**: Coq proof development
- **Key Features**:
  - Fills "holes" in proofs (admit)
  - Verifies generated proofs
- **Note**: Domain-specific example of agentic extension

**Works with:**
- Coq proof systems
- Formal verification workflows

---

## JetBrains IDE Tools

### JetBrains AI Assistant

#### **Overview**
- **Developer**: JetBrains
- **Type**: Official AI assistant for JetBrains IDEs
- **Launch**: Major updates April 2025, August 2025
- **IDEs**: IntelliJ IDEA, PyCharm, WebStorm, GoLand, and others
- **Plugin**: Not bundled by default, requires installation

---

#### **Models & Providers**
- **Models (2025)**:
  - Claude 3.7 Sonnet
  - Google Gemini 2.5 Pro
  - Latest OpenAI models
  - Local models (Qwen2.5-Coder, DeepSeek-Coder 1.3B, CodeStral)
- **Integration**: Improved local model support

---

#### **Key Features**

**Code Assistance:**
- AI-powered code completion (single lines, functions, blocks)
- Real-time suggestions
- Code generation with prompts
- Prompt Library support

**Development Tools:**
- Commit message generation
- Documentation creation
- File conversion
- Test generation

**Context & Understanding:**
- Improved Mellum model with smarter context collection
- Expanded file type support: SQL, YAML, JSON, Text, Markdown
- Image attachment in chat (Anthropic, OpenAI models)
  - Paste images for error fixes
  - Code generation from screenshots

**Local Capabilities:**
- Local code completion with multiline suggestions (Java, C++)
- Connect local models (Qwen2.5-Coder, DeepSeek-Coder 1.3B, CodeStral)
- Offline functionality

---

#### **Junie - Coding Agent**
- **Type**: Autonomous coding agent
- **Availability**: April 2025
- **Compatible IDEs**: IntelliJ IDEA Ultimate, PyCharm Pro, WebStorm, GoLand
- **Key Features**:
  - End-to-end task execution
  - IDE integration
  - Autonomous coding assistance

---

#### **Licensing & Pricing**
- **Free Tier**: Included with IDE licenses (2025.1+)
  - Unlimited code completion
  - Local AI models
  - Credit-based cloud AI assistance
- **Pro/Ultimate Tiers**: Different monthly credit quotas
- **Requirements**:
  - JetBrains AI Service license
  - Explicit ToS consent

---

#### **Works with:**
- Claude (Anthropic)
- GPT models (OpenAI)
- Gemini (Google)
- Qwen, DeepSeek, CodeStral (local models)
- JetBrains IDE ecosystem

---

### Third-Party JetBrains Plugins

#### **Auto-Dev**
- **Developer**: Unit Mesh
- **Repository**: https://github.com/unit-mesh/auto-dev
- **Type**: AI-powered coding wizard for JetBrains
- **Language Support**: Multi-language (Java, Kotlin, Python, JavaScript, etc.)
- **Key Features**:
  - Auto code generation 🏗️
  - Bug-slaying assistant 🐞
  - Auto testing & documentation
  - Customizable prompts 🎨
  - Agent-based development
  - Auto Dev/Testing/Document/Agent features
  - AIGC (AI Generated Content) integration

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
- **Developer**: Kilo Code
- **Type**: AI coding agent
- **Key Features**: Same as VS Code version

**Works with:**
- JetBrains IDEs
- 400+ AI models
- MCP servers

---

#### **Tabnine for JetBrains**
- **Developer**: Tabnine
- **Type**: Code completion + chat

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
- **Base**: VS Code fork (explicitly stated - Wikipedia)
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

**API Configuration**:
- OpenAI: Override base URL for proxies/enterprise
- Anthropic: Custom URL prefix (default: https://api.anthropic.com/v1)
- OpenAI-compatible providers (e.g., OpenRouter)

**Recommended Models** (BYOK):
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
- **Base**: VS Code fork (widely reported - IEEE Spectrum, Builder.io, CodeAnt, Prismetric)
- **Key Features**:
  - AI-native editor
  - Cascade (agentic IDE)
  - Rules/flows
  - Agentic edits
  - Preview servers
  - MCP integration
  - Also ships VS Code plugin

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
- **Base**: VS Code fork (repo: "This is our fork of VSCode")
- **Key Features**:
  - Open-source AI editor
  - Continue-style agents
  - Prompt→product workflows
  - Built-in models + custom

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
- **Base**: VS Code fork (official: "open-source Cursor alternative")
- **Models**: Any LLM (local or cloud)
- **Key Features**:
  - Privacy-first AI code editor
  - Fast performance
  - Local/cloud model flexibility
  - Checkpoints
  - Visualize changes
  - Agent runs on codebase

**Supported Providers**:
- **Local/Self-hosted**: Ollama (auto-detection), vLLM, LM Studio, LiteLLM
- **Cloud**: Azure OpenAI, Google Vertex AI, AWS Bedrock, plus others (Claude, DeepSeek, OpenAI)

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
- **Developer**: Amazon Web Services
- **Website**: https://aws.amazon.com/kiro (limited public info)
- **Base**: Code OSS ("Based on Code OSS ... import VS Code settings/plugins")
- **Type**: Agentic AI IDE
- **Key Features**:
  - Spec-driven agent workflows
  - VS Code settings/plugin compatibility
- **Status**: Early coverage, details evolving (2025)

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
- **Developer**: Creators of Atom and Tree-sitter
- **Website**: https://zed.dev
- **Download**: https://zed.dev/download
- **Repository**: https://github.com/zed-industries/zed
- **Type**: High-performance, multiplayer code editor
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
- **AI Website**: https://replit.com/ai
- **AI**: Ghostwriter AI assistant
- **Key Features**:
  - Real-time assistance
  - Inline completions (Complete Code)
  - Code explanations (Explain Code)
  - Code transformation (Transform Code)
  - Code generation from natural language (Generate Code)
  - Browser-based (no local setup)
  - Collaboration features
- **Use Case**: Beginners, rapid prototyping, learning

**Works with:**
- Cloud infrastructure
- Real-time collaboration
- Multiple programming languages

---

#### **Bolt.new (by StackBlitz)**
- **Type**: AI-powered web app builder
- **Website**: https://bolt.new
- **Developer**: StackBlitz
- **Technology**: StackBlitz WebContainer (Node.js in browser)
- **Models**: Anthropic Claude 3.5 Sonnet
- **Key Features**:
  - Natural language → functional code
  - Full-stack development in browser
  - Complete Node.js environment (no local setup)
  - Automated package management
  - Test and deploy web applications
  - Modern framework support

**Pricing**:
- Free tier (basic features, limited AI)
- Pro: $20/month (10M tokens)
- Pro 50: $50/month (teamwork + deployment tools)

**Use Case**: Fast prototyping, full-stack developers

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
- **Website**: https://v0.dev
- **Developer**: Vercel
- **Focus**: Front-end development
- **Key Features**:
  - Text prompts → UI components
  - Fast design iteration
  - Component library generation

**Works with:**
- Vercel ecosystem
- React/Next.js
- Front-end workflows

---

#### **Onlook**
- **Developer**: Onlook Dev
- **Repository**: https://github.com/onlook-dev/onlook
- **Type**: AI-First Design Tool for React Developers
- **Tagline**: "The Cursor for Designers"
- **Key Features**:
  - Visual builder for React applications
  - AI-powered styling and editing
  - Live preview and hot reload
  - Component-based design
  - Export to React code
  - Cross-platform (Windows, macOS, Linux)
  - Integration with AI models for design suggestions
  - Supports Next.js, Tailwind CSS
  
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
- **Technology**: DeepCode AI (symbolic + generative AI)
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
- **Clean Code AI**: Suggests specific remediation approaches

**Works with:**
- CI/CD systems
- Multiple languages
- Enterprise workflows
- Large-scale projects

---

#### **Sourcery**
- **Type**: AI-powered code review tool
- **Focus**: Python developers (primary)
- **Integration**: GitHub, GitLab, VS Code, JetBrains
- **Key Features**:
  - Analyzes pull requests
  - Catches bugs
  - Improves code quality
  - 30+ languages supported
  - Real-time code improvement
  - Refactoring suggestions
  - Quality enhancement
- **CLI**: sourcery-analytics (static analysis tool)

**Works with:**
- GitHub/GitLab (PR analysis)
- VS Code, JetBrains IDEs
- Python projects (primary focus)
- 30+ programming languages

---

#### **Refact.ai**
- **Type**: AI coding agent for enterprise
- **Deployment**: On-premise or cloud
- **Status**: #1 open-source AI Agent in SWE-bench verified
- **Key Features**:
  - End-to-end task handling
  - Deep codebase understanding
  - Tool integration (GitHub, Docker, PostgreSQL)
  - Automates complex, multi-step tasks
  - Self-hosted option
  - Open-source alternative to Cursor/Copilot

**Works with:**
- GitHub, Docker, PostgreSQL (tool integrations)
- Self-hosted or cloud deployments
- Enterprise development environments
- OpenAI-compatible APIs

---

#### **AI Code Reviewer**
- **Developer**: villesau
- **Repository**: https://github.com/villesau/ai-codereviewer
- **Type**: GitHub Actions integration
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
- **Developer**: Anthropic
- **Repository**: https://github.com/anthropics/claude-code-security-review
- **Type**: AI-powered security review GitHub Action
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
- **Developer**: appleboy
- **Repository**: https://github.com/appleboy/CodeGPT
- **Type**: CLI tool (Go)
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
- **CLI Tool**: https://coderabbit.ai/cli
- **VS Code Extension**: https://coderabbit.ai/ide
- **Funding**: $60M Series B (September 2025)
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
- **CLI**: coderabbit (AI code reviews in terminal)

**Works with:**
- GitHub, GitLab, Azure DevOps
- VS Code, Cursor, Windsurf (via extension)
- AI coding agents (Claude Code, Cursor CLI, Gemini)
- CI/CD pipelines
- Static analyzers and linters
- Google Cloud Platform

**Works with:**
- Company codebases
- GitHub, Docker, PostgreSQL
- Browser integration
- Workflow automation tools

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

## Documentation & Code Explanation

### AI Documentation Tools

#### **Mintlify**
- **Type**: AI-native documentation platform
- **Tagline**: "Beautiful out-of-the-box, built for developers"
- **Key Features**:
  - Context-aware agent (drafts, edits, maintains content)
  - AI assistant (guided conversations, context-aware)
  - Automatic documentation updates (PRs, Slack, links)
  - API documentation (OpenAPI specs → human-readable)
  - AI-powered content generation
- **Performance**: Part of 70% time savings in documentation (2025)

**Works with:**
- OpenAPI specifications
- GitHub (PR integration)
- Slack
- Developer workflows

---

#### **Swimm**
- **Type**: AI-powered documentation platform
- **Technology**: AI-powered static analysis
- **Key Features**:
  - Builds knowledge base from code
  - Reveals architecture, patterns, hidden logic
  - Helps understand big, complex codebases
  - Captures knowledge to fill documentation gaps
  - Auto-updates documentation when code changes
  - Eliminates "stale docs" problem

**Works with:**
- Large codebases
- Team knowledge sharing
- Legacy code understanding
- Documentation workflows

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
- **Base**: Built on Llama 2 architecture
- **License**: Free for research and commercial use
- **Key Features**:
  - Code generation from text prompts
  - Leading publicly available coding model
  - Streamlines workflows
  - Aids beginners in learning
- **Use Case**: Code generation, learning assistance

**Works with:**
- Local deployment
- Development workflows
- Educational contexts

---

## Local Model Infrastructure

### Local LLM Platforms

#### **Ollama**
- **Type**: Local LLM runtime
- **Website**: https://ollama.com
- **Download**: https://ollama.com/download
- **Documentation**: https://github.com/ollama/ollama/blob/main/README.md
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
- **Features**: Model discovery, download, chat interface, OpenAI-like local server
- **Use Case**: Beginner-friendly, non-technical users

**Works with:**
- Cline (LM Studio provider)
- Jan (can use as remote server)
- Any tool with OpenAI-compatible API support
- Local development without CLI

---

#### **vLLM**
- **Type**: High-performance inference engine
- **Focus**: Production deployments, batch processing
- **Performance**: High throughput, low latency, GPU-optimized
- **Installation**: Python virtual environment + pip
- **Use Case**: Research labs, startups, production apps

**Works with:**
- Void Editor (advanced local setup option)
- Custom production deployments
- Research applications

---

#### **GPT4All**
- **Developer**: Nomic AI
- **Type**: Private AI chatbot for local LLMs
- **Platform**: Desktop (Mac M Series, AMD, NVIDIA)
- **Users**: 250,000 monthly active users
- **Key Features**:
  - Runs on everyday desktops & laptops
  - No API calls or GPUs required
  - 1,000+ open-source models (LLaMa, Mistral)
  - No internet connection needed (offline)
  - LocalDocs (chat with your data privately)
  - Runs on standard consumer hardware
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
- **GPU Support**: NVIDIA (CUDA), AMD (Vulkan), Intel Arc
- **Models**: Llama 3, Gemma, Mistral (run on your own computer)
- **Key Features**:
  - Completely offline
  - Free and open-source
  - Can integrate with Ollama and LM Studio (as remote servers)
  - Full privacy control

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
- **Technology**: Python library built on HuggingFace Transformers + PyTorch
- **Release**: 2025
- **Hardware**: Runs on $200 consumer GPU (8GB VRAM)
- **Key Features**:
  - 100K context on 8GB consumer GPU
  - Supports 8B-80B parameter models (GPT-OSS-20B, Qwen3-Next-80B, Llama-3.1-8B)
  - FP16/BF16 weights (no quantization)
  - FlashAttention-2 integration
  - SSD-backed KV caching
  - NVMe-class storage optimization
  - GPUDirect Storage (KvikIO/cuFile) support
- **Performance**: ~100-200 GB storage, sub-1 tok/s for large models
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
- **Pricing**: Free tier + paid cloud plans
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
- **Developer**: Google
- **Website**: https://www.tensorflow.org
- **Repository**: https://github.com/tensorflow/tensorflow
- **Type**: Open-source machine learning framework
- **Language**: Python, JavaScript (TensorFlow.js)
- **Key Features**:
  - Deep learning and neural networks
  - Production deployment
  - Mobile and edge devices (TensorFlow Lite)
  - Extensive ecosystem (Keras, TensorFlow Hub)
- **Use Cases**: Model training, deployment, research

**Works with:**
- Python development environments
- Jupyter notebooks
- Cloud platforms (GCP, AWS, Azure)

---

#### **PyTorch**
- **Developer**: Meta AI
- **Website**: https://pytorch.org
- **Repository**: https://github.com/pytorch/pytorch
- **Type**: Open-source machine learning framework
- **Language**: Python
- **Key Features**:
  - Dynamic computational graphs
  - Strong GPU acceleration
  - Research-friendly API
  - Production deployment (TorchServe)
- **Use Cases**: Deep learning research, model development

**Works with:**
- Python development environments
- Jupyter notebooks
- HuggingFace Transformers

---

#### **LangChain**
- **Developer**: LangChain Inc.
- **Website**: https://www.langchain.com
- **Repository**: https://github.com/langchain-ai/langchain
- **Type**: Framework for developing LLM applications
- **Language**: Python, JavaScript/TypeScript
- **Key Features**:
  - Chain composition for LLM workflows
  - Memory management
  - Agent systems
  - Vector store integrations
  - Document loaders and retrievers
- **Use Cases**: RAG applications, chatbots, AI agents

**Works with:**
- OpenAI, Anthropic, Google, and other LLM providers
- Vector databases (Pinecone, Weaviate, Chroma)
- Document stores

---

#### **LlamaIndex**
- **Developer**: LlamaIndex (formerly GPT Index)
- **Website**: https://www.llamaindex.ai
- **Repository**: https://github.com/run-llama/llama_index
- **Type**: Data framework for LLM applications
- **Language**: Python, TypeScript
- **Key Features**:
  - Data ingestion and indexing
  - Query engines
  - Chat engines
  - Multi-document agents
  - RAG (Retrieval-Augmented Generation)
- **Use Cases**: Knowledge bases, document Q&A, data-augmented LLM apps

**Works with:**
- OpenAI, Anthropic, HuggingFace models
- Vector databases
- Document stores

---

#### **scikit-learn**
- **Developer**: scikit-learn developers
- **Website**: https://scikit-learn.org
- **Repository**: https://github.com/scikit-learn/scikit-learn
- **Type**: Machine learning library
- **Language**: Python
- **Key Features**:
  - Classification, regression, clustering
  - Model selection and evaluation
  - Preprocessing and feature engineering
  - Integration with NumPy and Pandas
- **Use Cases**: Traditional ML, data analysis, model building

**Works with:**
- NumPy, Pandas, Matplotlib
- Jupyter notebooks
- Python data science stack

---

#### **NumPy**
- **Developer**: NumPy developers
- **Website**: https://numpy.org
- **Repository**: https://github.com/numpy/numpy
- **Type**: Numerical computing library
- **Language**: Python
- **Key Features**:
  - Multi-dimensional arrays
  - Mathematical functions
  - Linear algebra operations
  - Foundation for scientific computing
- **Use Cases**: Data manipulation, scientific computing, ML preprocessing

**Works with:**
- All Python ML/AI frameworks
- Pandas, scikit-learn, TensorFlow, PyTorch

---

#### **Pandas**
- **Developer**: Pandas development team
- **Website**: https://pandas.pydata.org
- **Repository**: https://github.com/pandas-dev/pandas
- **Type**: Data analysis and manipulation library
- **Language**: Python
- **Key Features**:
  - DataFrames for structured data
  - Data cleaning and preprocessing
  - Time series analysis
  - SQL-like operations
- **Use Cases**: Data preprocessing for ML, data analysis, ETL

**Works with:**
- NumPy, scikit-learn
- Jupyter notebooks
- ML pipelines

---

### JavaScript/TypeScript Libraries

#### **Vercel AI SDK**
- **Developer**: Vercel
- **Website**: https://sdk.vercel.ai
- **Repository**: https://github.com/vercel/ai
- **Package**: https://www.npmjs.com/package/ai
- **Type**: TypeScript toolkit for AI applications
- **Key Features**:
  - Streaming AI responses
  - React hooks for AI UI
  - Multi-provider support
  - Edge runtime compatible
- **Use Cases**: Building AI-powered web applications

**Works with:**
- OpenAI, Anthropic, Google, Mistral
- Next.js, React, Vue
- Edge functions

---

#### **OpenAI Node.js SDK**
- **Developer**: OpenAI
- **Website**: https://platform.openai.com
- **Package**: https://www.npmjs.com/package/openai
- **Repository**: https://github.com/openai/openai-node
- **Type**: Official OpenAI API client
- **Language**: TypeScript/JavaScript
- **Key Features**:
  - Full API coverage
  - TypeScript types
  - Streaming support
  - Error handling
- **Use Cases**: Integrating OpenAI models in Node.js apps

**Works with:**
- Node.js applications
- Deno (via npm compatibility)
- Edge runtimes

---

#### **OpenAI Deno SDK**
- **Developer**: Deno + OpenAI community
- **Website**: https://deno.com/blog/openai_sdk_deno
- **Type**: OpenAI SDK for Deno runtime
- **Language**: TypeScript
- **Key Features**:
  - Native Deno compatibility
  - Secure by default
  - Modern TypeScript
- **Use Cases**: Building OpenAI apps with Deno

**Works with:**
- Deno runtime
- Deno Deploy
- Fresh framework

---

## Browser Extensions

### AI Assistant Extensions

#### **WiseOne**
- **Developer**: WiseOne
- **Website**: https://wiseone.io
- **Type**: Browser extension for reading and research
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
- **Developer**: Merlin AI
- **Website**: https://www.getmerlin.in
- **Type**: AI assistant browser extension
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

## Search & Research Tools

### AI-Powered Search Engines

#### **You.com**
- **Developer**: You.com
- **Website**: https://you.com
- **Type**: AI-powered search engine
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
- **Developer**: DeepAI
- **Website**: https://deepai.org
- **Type**: AI research and tools platform
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
- **Developer**: Anthropic (November 2024)
- **Type**: Open-source standard for AI-data integration
- **Purpose**: Standardize how AI systems integrate with external tools and data sources

**Architecture**:
- Client-server model
- JSON-RPC 2.0 transport
- Re-uses Language Server Protocol (LSP) concepts
- Real-time context provision to LLMs

**SDKs**: Python, TypeScript, C# (Microsoft collaboration), Java, Kotlin

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
- **IDEs**: Zed, Replit, Codeium, Sourcegraph
- **Google DeepMind**: Confirmed MCP support in Gemini models (April 2025, Demis Hassabis)
- **Automation**: Microsoft Playwright MCP, Selenium, Appium integrations

---

### Generative UI & Frontend Infrastructure

#### **Thesys (C1 Generative UI API)**
- **Type**: Generative UI API for AI applications
- **Website**: https://thesys.dev
- **Product**: C1 Generative UI API
- **Documentation**: https://docs.thesys.dev
- **Launch**: 2025 (Product Hunt launch)
- **Adoption**: 300+ teams using in production
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
- **Purpose**: Use Claude Code CLI with any model via OpenRouter
- **Use Case**: Beyond Anthropic - access to 300+ models
- **Integration**: Proxy layer between Claude Code and OpenRouter

**Works with:**
- Claude Code CLI
- OpenRouter (model access)
- Any OpenRouter-supported model

---

### Testing & Automation MCP Integrations

#### **Microsoft Playwright MCP**
- **Type**: Server-side enhancement to Playwright
- **Purpose**: Structured browser interactions for LLMs
- **Use Case**: Automated testing with AI
- **Release**: Recent integration (2025)

**Works with:**
- Playwright automation framework
- LLM-driven testing
- Browser automation

---

#### **Selenium & Appium MCP**
- **Type**: MCP integrations for testing frameworks
- **Purpose**: AI-driven test automation
- **Use Case**: Mobile and web testing

**Works with:**
- Selenium (web testing)
- Appium (mobile testing)
- AI-powered test generation

---

### Additional Platforms & Notes

#### **OpenSumi**
- **Developer**: Ant Group (Alibaba)
- **Repository**: https://github.com/opensumi/core
- **Type**: AI Native IDE Framework
- **Key Features**:
  - Framework for building AI-first IDEs
  - MCP Client support (Model Context Protocol)
  - Electron-based architecture
  - TypeScript development
  - Web IDE capabilities
  - Highly extensible and customizable
  - Pre-built AI integration patterns
  - Support for MCP tools via MCP server
  
**Works with:**
- Model Context Protocol (MCP)
- Multiple AI model providers
- Electron applications
- Web-based IDEs
- Custom development tools

**Use Cases:**
- Building custom AI-powered IDEs
- Internal development tools
- Specialized coding environments

---

#### **Visual Copilot (Builder.io)**
- **Developer**: Builder.io
- **Website**: https://www.builder.io/blog/figma-to-code-visual-copilot
- **Type**: Figma to code AI tool
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
- **Developer**: Supabase
- **Website**: https://supabase.com/blog/studio-introducing-assistant
- **Type**: AI assistant for Supabase Studio
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
- **Developer**: Civitai
- **Website**: https://civitai.com
- **Type**: AI model sharing platform
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

#### **Eclipse Theia**
- **Type**: VS Code-compatible (not a fork)
- **Features**: Theia AI, Theia Coder
- **Technology**: MCP support
- **Note**: Architecturally independent from VS Code
- **Status**: Worth tracking if broadening criteria

**Works with:**
- Model Context Protocol (MCP)
- VS Code extensions (compatibility layer)
- AI coding tools (Theia AI, Theia Coder)
- Web-based and desktop environments

---

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

*Last Updated: October 2025*
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
- [SD Tools](https://sdtools.org/) - Stable Diffusion tools and utilities
- [Draw.io](https://www.drawio.com/) - Diagramming tool (useful for architecture planning)
- [Excalidraw](https://excalidraw.com/) - Collaborative whiteboarding (useful for AI system design)

---

**Contributing**: This guide is a living document. For updates, corrections, or additions, please submit via the project repository.

---

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [John Henry](https://github.com/johnhenry) has waived all copyright and related or neighboring rights to this work.

