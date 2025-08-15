# Contributing to Angular Admin Panel

Thank you for your interest in contributing to the Angular Admin Panel project! This guide will help you get started with contributing to our repository.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Submitting Changes](#submitting-changes)
4. [Getting Help](#getting-help)
5. [Code of Conduct](#code-of-conduct)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 22 or higher)
- **npm** (comes with Node.js)
- **Git**

### Cloning the Repository

1. Clone the repository directly to your local machine:

```bash
git clone https://github.com/marvin-aroza/angular-admin-panel.git
cd angular-admin-panel
```

### Setting Up the Development Environment

1. **Install Dependencies**

```bash
npm install
```

2. **Environment Configuration**

Currently, this project doesn't require specific environment variables. If any are needed in the future, they will be documented here.

3. **Running the Development Server**

```bash
npm start
```

This will start the Angular development server at `http://localhost:4200`. The application will automatically reload when you make changes to the source files.

4. **Running Tests**

```bash
# Run tests once
npm test

# Run tests in CI mode (for continuous integration)
npm run test:ci
```

5. **Building the Project**

```bash
# Build for production
npm run build

# Build and watch for changes
npm run watch
```

## Development Workflow

### Code Style and Best Practices

#### Angular Conventions
- Follow the [Angular Style Guide](https://angular.io/guide/styleguide)
- Use TypeScript strict mode
- Implement proper component lifecycle management
- Use reactive programming patterns with RxJS

#### Code Formatting
- The project uses Prettier for code formatting
- Configuration is included in `package.json`
- Code will be automatically formatted on commit using Husky hooks

#### Testing Guidelines
- Write unit tests for all new components and services
- Maintain or improve code coverage
- Use Angular Testing Utilities and Jasmine/Karma
- Test files should be named `*.spec.ts`

#### Documentation
- Document all public APIs using JSDoc comments
- Update README.md if you add new features
- Include inline comments for complex logic
- Update this CONTRIBUTING.md if you change the development process

### Branch Naming Convention

Create branches using the following format:

```
<type>/<ticket-number>-<brief-description>
```

**Examples:**
- `feat/aap123-user-authentication`
- `fix/aap456-dashboard-loading-issue`
- `docs/aap789-update-readme`

**Types:**
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

## Submitting Changes

### Commit Message Format

Follow the conventional commit format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Structure:**
- **type**: The type of change (feat, fix, docs, style, refactor, test, chore)
- **scope**: The ticket number (e.g., AAP123)
- **description**: A brief description of the change

**Examples:**
```
feat(AAP123): add user authentication module

fix(AAP456): resolve dashboard loading spinner issue

docs(AAP789): update installation instructions in README

style(AAP101): format components according to prettier rules

refactor(AAP202): optimize data fetching in user service

test(AAP303): add unit tests for login component
```

### Pull Request Process

1. **Pull latest changes** (ensure you're working with the latest code from the default `develop` branch):
```bash
git checkout develop
git pull origin develop
```

2. **Create and switch to your feature branch**:
```bash
git checkout -b feat/aap123-your-feature-description
```

3. **Make your changes and commit**:
```bash
git add .
git commit -m "feat(AAP123): add your feature description"
```

4. **Push to the repository**:
```bash
git push --set-upstream origin feat/aap123-your-feature-description
```

5. **Create a Pull Request**:
   - Navigate to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch and target the `develop` branch (default branch)
   - Fill out the PR template with the required information

### Pull Request Requirements

Your PR description should include:

1. **Task Description**: What does this PR accomplish?
2. **Changes Made**: List the key changes
3. **Testing**: How was this tested?
4. **Screenshots**: If applicable, include before/after screenshots
5. **Breaking Changes**: Note any breaking changes
6. **Related Issues**: Reference any related issues or tickets

**PR Title Format:**
```
[AAP123] Brief description of the change
```

**Example PR Description:**
```markdown
## Task Description
Implements user authentication module with login/logout functionality.

## Changes Made
- Added login component with form validation
- Implemented authentication service
- Added route guards for protected routes
- Updated navigation to show user status

## Testing
- Added unit tests for authentication service
- Tested login/logout flow manually
- Verified route protection works correctly

## Related Issues
Closes #AAP123
```

### Review Process

1. All PRs require at least one approval from a maintainer
2. All tests must pass
3. Code coverage should not decrease
4. Follow-up on any requested changes promptly

## Getting Help

### Documentation
- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Project README](./README.md)

### Community Support
- Create an issue for bugs or feature requests
- Join discussions in existing issues
- Reach out to maintainers for guidance

### Reporting Bugs
When reporting bugs, please include:
- Angular version
- Node.js version
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Console errors (if any)

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior include:

- The use of sexualized language or imagery
- Personal attacks or insulting/derogatory comments
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Project maintainers are responsible for clarifying standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct.

### Reporting

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team. All complaints will be reviewed and investigated promptly and fairly.

---

Thank you for contributing to Angular Admin Panel! 🚀
