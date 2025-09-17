import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  // Only look inside components folder
  stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  async viteFinal(base) {
    return mergeConfig(base, {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../src/components'),
        },
      },
    });
  },
};

export default config;
