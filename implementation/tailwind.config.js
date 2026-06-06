export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
          dark: '#0f766e',
          bg: '#f0fdfa'
        },
        dark: '#09090b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        teal: '0 4px 24px rgba(13,148,136,0.18)'
      }
    }
  },
  plugins: []
};
