## https://dicoding-notes-react.vercel.app/

Random tailwind class : https://github.com/sonofmagic/tailwindcss-mangle/tree/main/packages/unplugin-tailwindcss-mangle

- npm i -D unplugin-tailwindcss-mangle tailwindcss-patch
- npx tw-patch install
- add script :

```json
  "scripts": {
    "prepare": "tw-patch install"
  },
```

- npx tw-patch extract
- register plugin (vite.config.js):

```js
import utwm from "unplugin-tailwindcss-mangle/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [utwm()],
});
```

- run the script : npm run build (build) / npm run serve (preview)
