/* eslint-disable */
import Buttons from './button.js'
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
      displayNum: 0,
      x: 0,
      y: 0,
      switchVariable: false,
      operator: null,
      isNotNumber: false,
      runningSum: 0
    }
  },
  methods : {
    getResult: function (x,y, operator) {
      switch (operator) {
      case 'add':
        return parseFloat(x) + parseFloat(y)
      case 'subtract':
        return parseFloat(x) - parseFloat(y)
      case 'multiply':
        return parseFloat(x) * parseFloat(y)
      case 'divide':
        return parseFloat(x) / parseFloat(y)
      default:
        return 'error'
      }
    },
    clear() {
      this.x =0
      this.y=0
      this.switchVariable = false
      this.operator = null
      this.displayNum = 0
    },
    calculateNum: function (value) {
      this.isNotNumber = false
      if (value === 'clear') {
        this.clear()
        this.isNotNumber = true
      }
      if (value === 'calculate') {
        this.x = this.getResult(this.x,this.y, this.operator)
        this.displayNum = this.x
        this.operator = null
        this.isNotNumber = true
        this.y=0
      }
      if (value === 'add' || value ==='subtract'|| value ==='multiply'||value ==='divide') {
        if (this.switchVariable) {
          this.runningSum = this.getResult(this.x,this.y,this.operator)
          this.x= this.runningSum
          this.displayNum = parseFloat(this.x)
          this.y=0
        }
        this.switchVariable = true
        this.operator = value
        this.isNotNumber = true
      }
      if (this.switchVariable && !this.isNotNumber) {
        this.y += value
        this.displayNum = parseFloat(this.y)
      } else if (!this.switchVariable && !this.isNotNumber) {
        this.x += value
        this.displayNum = parseFloat(this.x)
      }
    }
  },
  computed: {
    display() {
      return `${this.displayNum}`
    }
  },
}
export default Calculator