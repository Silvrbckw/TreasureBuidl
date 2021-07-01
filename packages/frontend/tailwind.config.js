module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBlue: '#212B38',
      darkerBlue: '#1E272E',
      purple: {
        DEFAULT: '#726EFF',
        dark: '#5855c6',
        darker: '#3f3d8d',
      },
      black: '#000000',
      white: '#FFFFFF',
      offWhite: '#C4C3D0',
      aave: '#B6509E',
      uniswap: '#FF007A',
      compound: '#00D395',
    },
    fontFamily: {
      body: ['Open Sans'],
      display: ['Gidole']
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
