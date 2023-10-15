module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#02241A',
      'white': '#FFFFFF',
      'grey': '#535756',
      'lightGrey': '#A9B0AF',
      'yellow': '#E0AC26',
      'green': '#1BB688',
      'greyStroke': '#E3E3E3',
      'focusedStroke': '#6C7375',
      'primary-50': '#EAF8FC',
      'primary-100': 'E0F4FA',
      'primary-200': '#BFE8F5',
      'primary-300': '#30B5E0',
      'primary-400': '#2BA3CA',
      'primary-500': '#2691B3',
      'primary-600': '#2488A8',
      'primary-700': '#1D6D86',
      'primary-800': '#165165',
      'primary-900': '#113F4E'
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}