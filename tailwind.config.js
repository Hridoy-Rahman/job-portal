/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#b500f7",
        
"secondary": "#49ff62",
        
"accent": "#375bb7",
        
"neutral": "#231E29",
        
"base-100": "#FFFFFF",
        
"info": "#7D9DE3",
        
"success": "#70E6A3",
        
"warning": "#B39109",
        
"error": "#EB194A",
        },
      },
    ],
  },
}

