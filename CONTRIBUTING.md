# Contributing to Lab68 Development Platform

Thanks for helping improve the **Lab68 Development Platform**. This guide summarizes how to get set up, follow our workflow, and ship changes that integrate smoothly with the rest of the codebase.

---

## Project Overview

- **Framework:** Next.js 16 App Router with TypeScript 5
- **Package manager:** pnpm (workspace aware)
- **Styling:** Tailwind CSS, component primitives in `components/ui`
- **Localization:** Deep-merge strategy in `lib/i18n.ts` with English defaults
- **Tooling:** ESLint, Prettier, markdownlint, and custom scripts in the repo root

If you are new to the project, skim `README.md` for a high-level tour before diving in.

---

## Before You Start

### Prerequisites

- Node.js ≥ 16
- pnpm ≥ 8 (`corepack enable` is recommended)
- GitHub account with a fork or branch permissions

### Environment Setup

```bash
git clone https://github.com/lab68dev/lab68dev-platform.git
cd lab68dev-platform
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to confirm the app boots. Use `pnpm build && pnpm start` to preview a production build locally.

---

## Development Workflow

1. **Create a branch** describing your work, for example `feature/ai-tooling` or `fix/sidebar-layout`.
2. **Implement the change** alongside relevant tests, docs, or localization entries.
3. **Validate locally** before pushing: run `pnpm lint`, `pnpm build`, and any targeted scripts you touched.
4. **Commit with Conventional Commits** syntax (`feat:`, `fix:`, `docs:`, etc.).
5. **Push the branch** and open a Pull Request against `main`, filling out the PR template.

We prefer small, focused PRs that are easy to review and merge.

---

## Coding Standards

- **Language & Framework:** TypeScript with Next.js App Router patterns (`app/` directory routes, server components where possible).
- **Styling:** Favor Tailwind CSS utility classes or existing components in `components/`. Keep class lists tidy and co-locate styles with the component.
- **State & Data:** Reuse helpers in `lib/` (e.g., `lib/team.ts`, `lib/auth.ts`) rather than duplicating logic.
- **Localization:** When adding UI copy, update `lib/i18n.ts` by extending the locale object and relying on the English default keys. Avoid hard-coded strings in components.
- **Utilities:** Leverage shared functions in `lib/utils.ts` to maintain consistent behavior.

Run the formatters before committing:

```bash
pnpm prettier --write .
pnpm lint
```

---

## Testing & Quality

- **Static checks:** `pnpm lint`, `pnpm prettier --check .`
- **Build verification:** `pnpm build`
- **Feature-specific scripts:** Review the root scripts (e.g., `fix_*` helpers) if your change impacts localization or documentation automation.

Add or update tests when the change alters behavior or fixes a regression. If automated coverage is not available, document manual verification steps in the PR.

---

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

```text
<type>[optional scope]: <short summary>
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`. Keep summaries short and in the imperative mood (e.g., `fix: handle empty project list`).

---

## Pull Request Checklist

- Branch rebased on the latest `main`
- Lint, build, and relevant scripts passing locally
- Screenshots or demos attached for UI changes
- Translation keys updated when introducing user-facing text
- Documentation updated (`README.md`, `docs/`, or inline comments) if behavior changes
- PR description explains the problem, the solution, and testing performed

---

## Reporting Issues & Feature Ideas

1. Search existing [GitHub issues](https://github.com/F4P1E/lab68dev-platform/issues) to avoid duplicates.
2. Describe the problem clearly with reproduction steps and expected vs. actual behavior.
3. Attach logs, stack traces, or screenshots when relevant.
4. For enhancements, explain the use case and potential impact.

---

## Community Standards & Support

Participation is covered by our [Code of Conduct](./CODE_OF_CONDUCT.md). Be respectful, inclusive, and mindful of fellow contributors.

Need help? Reach out via GitHub Issues or mention **@F4P1E** on your PR.

---

### Thank You

Every contribution—bug report, suggestion, or pull request—helps Lab68dev grow. We appreciate your time and input!
