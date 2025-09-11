# React Components: InputField & DataTable
Got it — here’s a concise, submission-ready README focused only on GitHub Pages (for the demo and Storybook) and Vercel. Replace <USERNAME>, <REPO>, and links after deploying.

## React Components: InputField & DataTable

Two UI components built with React, TypeScript, TailwindCSS, and Storybook. Includes a small demo app and documentation via Storybook. Deployed with GitHub Pages and Vercel.[1][2]

## Tech

- React + TypeScript + Vite.[1]
- TailwindCSS.[1]
- Storybook for component docs.[2]

## Quick start

- Install: npm install.[1]
- Dev app: npm run dev.[1]
- Build app: npm run build (outputs dist).[1]
- Storybook: npm run storybook (local).[2]
- Build Storybook: npm run build-storybook (outputs storybook-static).[2]

## Components

- InputField: label, placeholder, helper/error text, disabled/invalid/loading, variants (filled | outlined | ghost), sizes (sm | md | lg), optional clear/password toggle, basic ARIA. [2]
- DataTable: tabular data, sortable columns, single/multi row select, loading/empty states, basic ARIA.[2]

## Scripts

- dev: Vite dev server.[1]
- build: Vite production build.[1]
- preview: Serve dist locally.[1]
- storybook: Run Storybook at :6006.[2]
- build-storybook: Output static Storybook.[2]
- test: Run unit tests.[1]

## Live links

- App (GitHub Pages): https://<USERNAME>.github.io/<REPO>/[3]
- App (Vercel): https://your-app.vercel.app[4]
- Storybook (GitHub Pages): https://<USERNAME>.github.io/<REPO>-storybook/ or Pages env URL[3]
- Optional Storybook (Chromatic): https://<id>.chromatic.com[2]

## Deploy: GitHub Pages

1) Enable Pages via Actions  
- Repo → Settings → Pages → Source: GitHub Actions.[3]

2) Vite base path (important)  
- If deploying under https://<USERNAME>.github.io/<REPO>/, set base in vite.config.ts:  
  export default defineConfig({ base: '/<REPO>/' })  
- For a root repo (https://<USERNAME>.github.io) or Vercel, base should be '/'.[1]

3) Add workflow for the app (.github/workflows/pages.yml)  
- This builds and deploys dist on push to main: checkout → setup-node → npm ci → npm run build → upload-pages-artifact path ./dist → deploy-pages.[3][1]

4) Add workflow for Storybook (.github/workflows/storybook-pages.yml)  
- Builds Storybook to storybook-static and deploys via Pages artifact + deploy-pages.[3][2]

5) Push to main and get URLs from the Actions runs  
- App will be served under https://<USERNAME>.github.io/<REPO>/.  
- Storybook will be served under the Pages environment URL (same domain; separate run).[3][1]

Troubleshooting  
- Blank page or broken assets on Pages: base path is wrong — ensure base: '/<REPO>/' and rebuild. For root domain repos or custom domains, base: '/'.[1]
- Pages still shows README: confirm Pages source is GitHub Actions (or gh-pages if using that method).[3]

## Deploy: Vercel

Option A — Import from GitHub (recommended)  
- Go to Vercel → New Project → Import <REPO>. Vercel auto-detects Vite; keeps Build Command npm run build and Output Directory dist. Each push gets a preview URL; main deploys to production.[5][4]

Option B — CLI  
- npm i -g vercel  
- vercel to link; vercel --prod to ship to a .vercel.app domain.[4][5]

Notes  
- If vite.config.ts used base: '/<REPO>/' for Pages, switch base to '/' (or make it conditional via env) before Vercel to avoid broken asset paths.[1]
- Add environment variables in Vercel Project Settings if needed; use VITE_ prefix to expose at build time.[6]

## Testing

- Run npm test locally and in CI if configured.[1]

## Folder structure

- src/components: InputField, DataTable.[1]
- src/stories: Storybook stories and MDX.[2]
- .storybook: Storybook config (main.ts, preview.ts).[2]
- .github/workflows: pages.yml (app), storybook-pages.yml (Storybook).[3]

## Acknowledgements

- Vite static deploy docs.[1]
- GitHub Pages publishing via Actions.[3]
- Storybook publishing guide.[2]
- Vercel deployment docs.[5][4]

[1](https://vite.dev/guide/static-deploy)
[2](https://storybook.js.org/docs/sharing/publish-storybook)
[3](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
[4](https://vercel.com/guides/deploying-react-with-vercel)
[5](https://vercel.com/docs/deployments)
[6](https://vercel.com/docs/frameworks/frontend/vite)
[7](https://www.youtube.com/watch?v=AabItDECy20)
[8](https://dev.to/fab_builder/deploying-react-apps-with-vite-the-complete-guide-49j)
[9](https://buildwithmatija.com/blog/how-to-deploy-a-vite-react-app-on-vercel-and-connect-to-an-external-api-server)
[10](https://github.com/marketplace/actions/vite-github-pages-deployer)
[11](https://www.heliverse.com/blog/how-to-deploy-vite-app-on-vercel-for-free)
[12](https://stackoverflow.com/questions/74518887/blank-page-when-deploying-a-react-app-to-github-pages-and-vite)
[13](https://gautham10.hashnode.dev/react-vite-app-a-comprehensive-guide-from-creation-to-vercel-deployment)
[14](https://dev.to/ishmam_abir/automate-github-page-deployment-using-vue3vite-12h2)
[15](https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e)
[16](https://www.krishangtechnolab.com/blog/how-to-build-react-apps-with-vite/)
[17](https://www.youtube.com/watch?v=hn1IkJk24ow)
[18](https://stackoverflow.com/questions/78131377/why-im-not-able-to-deploy-my-vite-app-on-vercel)
[19](https://www.youtube.com/watch?v=hAuyNf0Uk-w)
[20](https://savaslabs.com/blog/deploying-vite-github-pages-single-github-action)
[21](https://dev.to/railsstudent/day-21-deploy-the-github-profile-project-to-github-pages-p39)
[22](https://github.com/sitek94/vite-deploy-demo)
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# uzence
