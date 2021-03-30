module.exports = {
  purge: {
    enabled: true,
    content: [
      './index.html',
    ]
  },  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'DarkViolet': 'hsl(256, 26%, 20%)',
        'GrayishBlue': 'hsl(216, 30%, 68%)',
        'VeryDarkViolet': 'hsl(270, 9%, 17%)',
        'DarkGrayishViolet': 'hsl(273, 4%, 51%)',
        'VeryLightGray': 'hsl(0, 0%, 98%)'
      }, 

      fontFamily: {
        'DMSerifDisplay': ['DM Serif Display'],
        'Karla': ['Karla'] 
      }, 
      
      backgroundImage: theme => ({
        'bg-pattern-footer-desktop': "url('images/bg-pattern-footer-desktop.svg')",
        'bg-pattern-footer-mobile': "url('images/bg-pattern-footer-mobile.svg')",
        'bg-pattern-how-we-work-desktop': "url('images/bg-pattern-how-we-work-desktop.svg')",
        'bg-pattern-how-we-work-mobile': "url('images/bg-pattern-how-we-work-mobile.svg')",
        'bg-pattern-intro-left-desktop': "url('images/bg-pattern-intro-left-desktop.svg')",
        'bg-pattern-intro-left-mobile': "url('images/bg-pattern-intro-left-mobile.svg')",
        'bg-pattern-intro-right-desktop': "url('images/bg-pattern-intro-right-desktop.svg')",
        'bg-pattern-intro-right-mobile': "url('images/bg-pattern-intro-right-mobile.svg')",
        'bg-pattern-mobile-nav': "url('images/bg-pattern-mobile-nav.svg')",
        'image-intro-desktop': "url('images/image-intro-desktop.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
