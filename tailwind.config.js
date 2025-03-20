/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vista-blue': '#8f95d3',
        'caribbean': '#08605f',
        'celeste': '#aeecef',
        'fire-brick': '#4ECDC4',
        'lavender': '#E9E6FF',
        'thistle': '#93E8ED',
        'robin': '#45C9D0',
        'ruddy': '#5EA3D8',
      },
      fontFamily: {
        // Add your custom fonts here
      },
      spacing: {
        // Add custom spacing if needed
      },
    },
  },
  plugins: [],
}