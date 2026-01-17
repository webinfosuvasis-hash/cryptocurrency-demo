import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ENV_PREFIX = ['VITE_']

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  server: { port: 3000, host: '127.0.0.1' },
  assetsInclude: ["**/*.glb"],
  define: {
    'process.env.ANCHOR_BROWSER': true,
  },
  resolve: {
    alias: {
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
    },
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}))