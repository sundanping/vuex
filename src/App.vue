<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <child></child>
  </div>
</template>

<script>
import child from './components/child'
import http from './api'
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
     console.log(http)
    //  https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
     const rest = await http.get('http://www.hletong.com/web/public/hletong/contents/alllist')
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
