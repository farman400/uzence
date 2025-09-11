// .storybook/main.ts (Vite)
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  async viteFinal(base) {
    const merged = mergeConfig(base, {
      resolve: {
        alias: { components: path.resolve(__dirname, '../src/components') },
      },
      build: {
        rollupOptions: {
          output: {
            entryFileNames: '[name].js',    // stable JS filenames
            chunkFileNames: '[name].js',    // stable chunk filenames
            assetFileNames: '[name].[ext]'  // stable asset filenames
          }
        }
      }
    });

    console.log('[SB] Vite aliases:', merged.resolve?.alias);
    return merged;
  },
};

export default config;
