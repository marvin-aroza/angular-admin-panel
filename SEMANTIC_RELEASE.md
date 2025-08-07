# Semantic Release Guide

## 🚀 Automatic Versioning & Releases for Angular Applications

This Angular application uses **semantic-release** to automatically determine version numbers, generate changelogs, create GitHub releases, and update package.json based on commit messages. The application is deployed to GitHub Pages automatically on each release.

## 📋 Commit Message Format

Use **Conventional Commits** format:

```
type(scope): description

[optional body]

[optional footer]
```

### 🏷️ Types & Version Impact

| Type | Description | Version Bump | Example |
|------|-------------|--------------|---------|
| `feat` | New feature | **Minor** (1.1.0) | `feat(auth): add OAuth login` |
| `fix` | Bug fix | **Patch** (1.0.1) | `fix(api): handle null responses` |
| `perf` | Performance improvement | **Patch** (1.0.1) | `perf(db): optimize queries` |
| `security` | Security fix | **Patch** (1.0.1) | `security(auth): prevent XSS` |
| `refactor` | Code refactoring | **Patch** (1.0.1) | `refactor(utils): simplify logic` |
| `revert` | Revert changes | **Patch** (1.0.1) | `revert: undo feature X` |
| `docs` | Documentation | **No release** | `docs: update API guide` |
| `style` | Code style | **No release** | `style: fix formatting` |
| `test` | Tests | **No release** | `test: add user tests` |
| `chore` | Maintenance | **No release** | `chore: update deps` |
| `ci` | CI/CD changes | **No release** | `ci: update workflow` |
| `build` | Build system | **No release** | `build: update webpack` |

### 💥 Breaking Changes (Major Version)

Add `BREAKING CHANGE:` in the footer:

```bash
feat(api)!: redesign user endpoints

BREAKING CHANGE: User API endpoints now require authentication
```

This will bump to **Major** version (2.0.0).

## 🔄 Release Workflow

### 1. **Development on `develop` branch**
```bash
git checkout develop
git add .
git commit -m "feat(dashboard): add user analytics"
git push origin develop
```

### 2. **Create Pull Request to `main`**
- PR runs CI tests, coverage, and security audits
- All checks must pass before merge

### 3. **Merge to `main` triggers release**
When merged to `main`:
1. ✅ **Semantic Release** analyzes commits since last release
2. 📦 **Determines version** based on commit types
3. 📝 **Generates CHANGELOG.md** 
4. 🏷️ **Creates Git tag** (e.g., `v1.2.0`)
5. 🚀 **Creates GitHub Release** with changelog and release notes
6. 💻 **Updates package.json** version
7. 🌐 **Deploys Angular app to GitHub Pages**
8. 🔄 **Reverse merges** changes back to `develop`

## 📊 Release Examples

### Example Commits:
```bash
feat(auth): add two-factor authentication    # Minor: 1.1.0
fix(login): resolve password validation      # Patch: 1.1.1
feat(api)!: redesign user endpoints         # Major: 2.0.0
```

### Generated Release Notes:
```markdown
## [1.2.0] - 2025-01-15

### 🚀 Features
- **auth**: add two-factor authentication
- **dashboard**: add user analytics

### 🐛 Bug Fixes  
- **login**: resolve password validation
- **api**: handle timeout errors

### 📦 Dependencies
- update Angular to 20.1.4
- update TypeScript to 5.8.3
```

## 🎯 Best Practices

### ✅ Good Commit Messages:
```bash
feat(user-profile): add avatar upload functionality
fix(dashboard): resolve chart rendering issue  
perf(api): reduce response time by 50ms
security(auth): prevent session fixation
```

### ❌ Avoid These:
```bash
updated stuff              # Too vague
Fixed bug                  # Missing scope
Add new feature           # Missing type syntax
WIP: work in progress     # Not production ready
```

## 🔧 Configuration Files

- **`.releaserc.json`** - Semantic release configuration
- **`commitlint.config.js`** - Commit message linting rules
- **`.husky/commit-msg`** - Git hook for commit validation
- **`.github/workflows/ci.yml`** - CI/CD pipeline with release

## 🚨 Important Notes

1. **Never push directly to `main`** - Always use pull requests
2. **Use descriptive scopes** - Help others understand the change area
3. **Include ticket numbers** - e.g., `feat(ABC-123): add feature`
4. **Test locally first** - Ensure your code works before committing
5. **Review generated releases** - Check GitHub releases after merge

## 🔍 Monitoring Releases

- **GitHub Releases**: https://github.com/marvin-aroza/angular-admin-panel/releases
- **Live Site**: https://marvin-aroza.github.io/angular-admin-panel/
- **CI Pipeline**: Check Actions tab for release status

This automated workflow ensures consistent versioning, comprehensive release notes, and streamlined deployments! 🎉
