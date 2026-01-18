# portfolio

## GitHub Pages Deployment

This portfolio is configured for static deployment to GitHub Pages via GitHub Actions.

### Repository Name Configuration

The `next.config.js` file automatically detects the repository name from the `GITHUB_REPOSITORY` environment variable (provided by GitHub Actions) or the `REPO_NAME` environment variable. 

- **In GitHub Actions**: The repo name is automatically extracted from `github.event.repository.name`
- **For local development**: If neither env var is set, it defaults to `"portfolio"`

If your repository name differs from "portfolio", you can set it explicitly:
- Set the `REPO_NAME` environment variable before building
- Or modify the default in `next.config.js` if you want to change the local dev default

The site will be available at: `https://<your-username>.github.io/<repo-name>/`

### Building Locally

```bash
npm install
npm run build
```

The static export will be in the `/out` directory.