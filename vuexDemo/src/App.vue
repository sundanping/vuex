<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <child></child>
  </div>
</template>

<script>
import child from './components/child'
export default {
  name: 'App',
  components:{
    child
  },
  mounted() {
   this.sendAjax()
  },
  methods: {
   async sendAjax () {
    //  https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
     const rest = await  this.$http.get('http://www.hoge.cn/m2o/pub/pub.php?column_id=56&count=8&offset=0')
     console.log(rest)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
