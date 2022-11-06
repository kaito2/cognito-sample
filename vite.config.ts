import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // NOTE: https://github.com/aws-amplify/amplify-js/issues/678#issuecomment-1100924867
  define: {
    "global": {},
  },
})
