import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'rounded-2 border border-color-transparent px-2 py-1 cursor-pointer transition-duration-250 transition-property-border-color bg-#f9f9f9  color-black hover:border-color-#646cff inline-block'],
    ['vue', 'ml8px px12px py4px rounded-8px bg-#42b883 hover:bg-white color-black hover:color-#42b883 text-center relative'],
    ['react', 'ml12px hover:color-#087ea4 cursor-pointer'],
    ['html', 'ml12px hover:color-#dd4b25 cursor-pointer'],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
