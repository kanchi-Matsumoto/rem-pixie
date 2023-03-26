import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'RemPixie - convert alternating px and rem.',
  version: '1.0.0',
  permissions: ['storage'],
  action: {
    default_popup: 'index.html',
  },
  icons: {
    '16': 'icon/icon16.png',
    '48': 'icon/icon48.png',
    '128': 'icon/icon128.png',
  },
});

export default defineConfig({
  plugins: [react(), tsconfigPaths(), crx({ manifest })],
});
