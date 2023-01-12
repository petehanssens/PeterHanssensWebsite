const { web } = require("projen");
const { NodePackageManager } = require("projen/lib/javascript");
const project = new web.NextJsProject({
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.NPM,
  name: "peter-hanssens-website",
  deps: [
    "autoprefixer",
    "disqus-react",
    "gray-matter",
    "next",
    "postcss",
    "react",
    "react-dom",
    "react-markdown",
    "react-syntax-highlighter",
    "rehype-raw",
    "remark-gfm",
    "@headlessui/react",
    "@heroicons/react",
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/forms",
    "@tailwindcss/line-clamp",
    "@tailwindcss/typography"
  ],
  outdir: 'out_publish/',
  tailwind: true,
});
project.gitignore.addPatterns('./out_publish/')
project.gitignore.addPatterns('.env.local')
project.gitignore.addPatterns('.DS_Store')
project.synth();