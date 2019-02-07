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
      value: 0
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