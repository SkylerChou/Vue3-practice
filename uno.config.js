import {
  defineConfig, presetUno,
} from 'unocss';

import presetAttributify from '@unocss/preset-attributify';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerVariantGroup()],
  rules: [
    ['border-r-gray', { 'border-right-color': '#707070' }],
    ['text-yellow-550', { color: 'rgb(239, 200, 98)' }],
    ['text-41', { 'font-size': '41px' }],
    ['text-28', { 'font-size': '41px' }],
    ['text-21', { 'font-size': '21px' }],
    ['bottom-10', { bottom: '5%' }],
    ['-bottom-3px', { bottom: '-3px' }],
    ['tracking-2', { 'letter-spacing': '0.2em' }],
    ['tracking-4', { 'letter-spacing': '0.4em' }],
    ['-z-1', { 'z-index': '-1' }],
  ],
  theme: {
    breakpoints: {
      sm: '470px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
    },
  },
});
