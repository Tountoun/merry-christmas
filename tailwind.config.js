/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'tree-left': 'treeLeft 3s ease-in-out infinite',
        'tree-right': 'treeRight 3s ease-in-out infinite',
      },
      keyframes: {
        treeLeft: {
          '0%, 100%': { transform: 'translateY(-50%) translateY(-10px) scale(0.75)' },
          '50%': { transform: 'translateY(-50%) translateY(10px) scale(0.75)' },
        },
        treeRight: {
          '0%, 100%': { transform: 'translateY(-50%) translateY(10px) scale(0.75)' },
          '50%': { transform: 'translateY(-50%) translateY(-10px) scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
}

