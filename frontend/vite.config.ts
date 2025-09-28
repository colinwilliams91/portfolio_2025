import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  define: {
    __BUILD_VERSION__: JSON.stringify(
      (process as any)?.env?.DEPLOY_ID || // Netlify
        (process as any)?.env?.BUILD_VERSION ||
        new Date().toISOString(),
    ),
    __BUILD_COMMIT__: JSON.stringify(
      ((process as any)?.env?.COMMIT_REF || (process as any)?.env?.GITHUB_SHA || '')
        .toString()
        .slice(0, 7),
    ),
  },
})
