
module.exports = {
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      keyframes:{
        'moveUpDown':{
          '0%': { backgroundPosition: '0% 0%' },
          '10%': { backgroundPosition: '0.1% 10%' },
          '20%': { backgroundPosition: '0.2% 20%' },
          '30%': { backgroundPosition: '0.3% 30%' },
          '40%': { backgroundPosition: '0.4% 40%' },
          '50%': { backgroundPosition: '0.5% 50%' },
          '60%': { backgroundPosition: '0.6% 60%' },
          '70%': { backgroundPosition: '0.7% 70%' },
          '80%': { backgroundPosition: '0.8% 80%' },
          '90%': { backgroundPosition: '0.9% 90%' },
          '100%': { backgroundPosition: '1% 100%' },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        'move-up-down': 'moveUpDown 3s ease-in-out  alternate infinite',
      },
      backgroundSize: {
        '300%': '300%',
        '700%': '700%',

      },
      backgroundImage: {
        'fondoEstrellado1': "url('/fondoEstrelladoDark.png')",
        'fondoEstrellado2': "/fondoEstrellado2.jpeg')",
      },
    }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  plugin:[
    require('flowbite/plugin')
  ]
}