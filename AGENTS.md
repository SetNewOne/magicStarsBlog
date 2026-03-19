# AGENTS.md

This file provides essential information for agentic coding assistants working in this repository.

## Project Overview

This is a VuePress v2 static site generator for a personal technical blog. It serves as a comprehensive documentation site covering frontend, backend, and AI topics in both Chinese and English.

## Build and Development Commands

### Essential Commands
- `npm run dev` - Start development server (typically at localhost:8080)
- `npm run build` - Build production site to `.vuepress/dist/`
- `npm run deploy` - Build for deployment (same as build)

### Development Workflow
1. Run `npm run dev` to start the dev server
2. Edit markdown files or TypeScript config files
3. Site will hot-reload automatically
4. Run `npm run build` to verify production build

### Testing and Linting
- No test framework is currently configured
- No linting tools are set up
- When adding tests or linting, document commands here

## Project Structure

```
E:\myblog\
├── docs/                    # Documentation source files
│   ├── .vuepress/          # VuePress configuration (TypeScript)
│   │   ├── config.ts       # Main config (entry point)
│   │   ├── index.ts        # Alternative config
│   │   ├── config/         # Modular config files
│   │   │   ├── navbar.ts   # Navigation bar configuration
│   │   │   └── sidebar.ts  # Sidebar configuration
│   │   └── theme/
│   │       └── index.ts   # Theme configuration
│   ├── zh/                 # Chinese content (primary)
│   │   ├── frontend/       # Frontend docs (HTML, CSS, JavaScript)
│   │   ├── backend/        # Backend docs (Java, Python)
│   │   ├── ai/             # AI docs (OpenCode)
│   │   ├── posts/          # Blog posts
│   │   └── about/          # About page
│   └── en/                 # English content (secondary)
│       └── frontend/       # Frontend docs
├── .vuepress/dist/         # Build output (generated, in .gitignore)
├── package.json
└── README.md
```

## Code Style Guidelines

### TypeScript Configuration Files

**Imports**
- Use ES6 import syntax at the top of files
- Import from VuePress core and vuepress-theme-hope
- Keep imports grouped by library

**Export Pattern**
- Export default for all configuration objects
- Use `defineUserConfig` from vuepress for user configs
- Use `hopeTheme` for theme configurations

**Configuration Organization**
- Separate concerns: navbar.ts, sidebar.ts, theme/index.ts
- Use modular config pattern for maintainability
- Main config imports and combines modular configs

**Examples**
```typescript
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  bundler: viteBundler(),
  theme: hopeTheme({}),
});
```

### Markdown Content Files

**File Organization**
- Use kebab-case for filenames: `basic-tags.md`, `spring-boot.md`
- Include README.md in each directory section
- Maintain parallel structure between zh/ and en/ locales

**Content Guidelines**
- Write documentation in Chinese for zh/ directories
- Write documentation in English for en/ directories
- Use proper Markdown formatting for headings, lists, code blocks
- Include code examples with appropriate syntax highlighting

**Frontmatter**
- VuePress automatically handles frontmatter
- Add frontmatter when needed for page-specific configuration

### Naming Conventions

**TypeScript**
- Use camelCase for variables and functions
- Use PascalCase for types and interfaces
- Use kebab-case for module imports where appropriate

**Markdown**
- Use kebab-case for all filenames
- Use descriptive names that reflect content

**Configuration Keys**
- Use camelCase for configuration properties
- Use consistent naming across config files

### Locale Handling

**Supported Locales**
- `zh-CN` - Simplified Chinese (primary)
- `en-US` - English (secondary)

**Locale Pattern**
- Chinese content in `docs/zh/`
- English content in `docs/en/`
- Configure both locales in config.ts

### Path References

**Relative Paths**
- All content paths start with `/zh/` or `/en/`
- Use trailing slash for directories in links: `/zh/frontend/`
- Use full paths including `.md` for specific files

**Sidebar/Navbar Links**
- Use array format for sidebar items: `["/zh/frontend/html/README.md", "HTML 入门"]`
- Use string format for directory links: `/zh/frontend/html/`
- Include activeMatch in navbar for better UX

## Dependencies

### Core Dependencies
- `vuepress@^2.0.0-rc.0` - Static site generator
- `@vuepress/bundler-vite@^2.0.0-rc.26` - Vite bundler
- `vuepress-theme-hope@^2.0.0-rc.0` - Default theme

### Build Dependencies
- `vite@^7.1.12` - Build tool
- `vue@^3.4.0` - Vue framework
- `sass-embedded@^1.98.0` - SCSS support

## Important Notes

- Build output directory: `.vuepress/dist/` (ignore in Git)
- Cache directories: `.vuepress/.cache/`, `.vuepress/.temp/` (ignore in Git)
- No test coverage configured
- No linting configured
- The project uses TypeScript strictly for configuration files
- All content is in Markdown format
- Documentation is primarily in Chinese with partial English translation
