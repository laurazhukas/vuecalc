// External Libs
import Vue from 'vue'
require('bootstrapJs')

// Import Styles
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('css/main.scss')

// Mixins

// Components
import Calculator from './components/calculator.js'

// Interfaces

new Vue({
  name: 'Vue Typescript Boilerplate',
  mixins: [],
  el: '#vue-main',
  components: {
    Calculator,
  },
  data() {
    return {
      name: 'Derp'
    }
  },
  methods: {
  },
  mounted() {
    console.log('Mounted Main')
    this.name = 'Bob'
  },
})
