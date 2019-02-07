/* eslint-disable */
import Buttons from './button.js'
let x = 0
let y = 0
let switchVariable = false
let operator = null
let isNotNumber = false
let runningSum =0
const Calculator= {
  name: 'Component',
  props: [],
  template: require('../../templates/calculator.html'),
  mixins: [],
  components: {
    Buttons,
  },
  data() {
    return {
    }
  },
  methods : {
    getResult: function(x,y, operator) {
      console.log('In the get result function the x val is: '+x + 'the y val is: '+y)
        switch(operator){
        case 'add':
        return parseFloat(x) + parseFloat(y)
        case 'subtract':
        return parseFloat(x) - parseFloat(y)
        case 'multiply':
        return parseFloat(x)*parseFloat(y)
        case 'divide':
        return parseFloat(x)/parseFloat(y)
        }
    },
    clear() {
      console.log('In computed'),
      x =0
      y=0
      switchVariable = false
      operator = null
    },
    // catchClicked : function (val) {
    //   alert(`A button was clicked, with value of ${val}`)
    // },
    calculateNum: function (value) {
      console.log('In calculate Num, was passed: ' + value)
      isNotNumber = false
      if (value == 'clear') {
        this.clear()
        isNotNumber = true
      }
      if (value == 'calculate') {
        x = this.getResult(x,y,operator)
        console.log(x)
        operator = null
        isNotNumber = true
        y=0
      }
      if (value == 'add' || value =='subtract'|| value=='multiply'||value=='divide'){
        if (switchVariable) {
          console.log('in the switchVar if and x val is: '+x+' y val is: '+y
          + ' the operator is '+operator + ' the value is: '+value)
          runningSum = this.getResult(x,y,operator) //pass opperator and compute
          x= runningSum
          y=0
        }
        switchVariable = true
        operator = value
        isNotNumber = true
      }
      if (switchVariable && !isNotNumber) {
        y += value
      } else if (!switchVariable && !isNotNumber) {
        x += value
      }
    }
  },
  computed: {
    welcomeMessage() {
      return `Hello ${this.firstname} ${this.lastname}!`
    }
  },
}
export default Calculator