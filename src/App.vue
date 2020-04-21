<template>

  <div id="app">
    <a-button></a-button>
    
  
    <selectvue></selectvue>
    <checkbox></checkbox>

  </div>
  
</template>

<script>
import selectvue from './components/selectvue.vue'
import checkbox from './components/CheckBox.vue'



export default {
  name: 'App',
  components: {
    selectvue,checkbox
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  
  }

}
</script>

