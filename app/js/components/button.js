const Button= {
  name: 'Component',
  props: [],
  template: require('../../templates/buttons.html'),
  mixins: [],
  components: {},
  data() {
    return {
      buttonName: 'v-on:calculate-num="calculateNum"',
      randVal : 2,
      value: 0,
      buttonArray :[
        {toSend: '7', objClass: 'numberKeys', display:7},
        {toSend: '8', objClass: 'numberKeys', display:8},
        {toSend: '9', objClass: 'numberKeys', display:9},
        {toSend: 'add', objClass: 'operator', display:'+'},
        {toSend: '4', objClass: 'numberKeys', display:4},
        {toSend: '5', objClass: 'numberKeys', display:5},
        {toSend: '6', objClass: 'numberKeys', display:6},
        {toSend: 'subtract', objClass: 'operator', display:'-'},
        {toSend: '3', objClass: 'numberKeys', display:3},
        {toSend: '2', objClass: 'numberKeys', display:2},
        {toSend: '1', objClass: 'numberKeys', display:1},
        {toSend: 'multiply', objClass: 'operator', display:'x'},
        {toSend: '0', objClass: 'numberKeys', display:0},
        {toSend: '.', objClass: 'numberKeys', display:'.'},
        {toSend: 'calculate', objClass: 'importantOperator', display:'='},
        {toSend: 'divide', objClass: 'operator', display:'÷'}
      ]
    }
  },
  methods: {
    calculateNum : function (value) {
      console.log ('In buttons.js and value is: ' + value),
      this.value = value + this.randVal
    },
    buttonClicked : function (val) {
      this.$emit('button-clicked', val)
    }
  },
  created() {
  },
  computed: {
    message() {
      console.log('this random value: '+ this.value)
    }
  },
}
export default Button