// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      themes: {
      light: {
          primary: '#69F0AE', // Change the primary color to your desired color
          secondary: '#00E676', // Change the secondary color
          accent: '#015524', // Change the accent color
      },
    },
  },
  }
)
