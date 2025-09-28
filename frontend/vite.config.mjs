import react from '@vitejs/plugin-react'

const BUILD_VERSION = process.env.DEPLOY_ID || process.env.VITE_BUILD_VERSION || new Date().toISOString()
const BUILD_COMMIT = (process.env.COMMIT_REF || process.env.GITHUB_SHA || '').slice(0, 7)

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  server: { port: 5173 },
  define: {
    __BUILD_VERSION__: JSON.stringify(BUILD_VERSION),
    __BUILD_COMMIT__: JSON.stringify(BUILD_COMMIT),
  },
}
