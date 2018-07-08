<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--out-in 先出後進  -->
    <transition name="fade" mode="out-in" duration="300  ">
      <router-view/>

    </transition>
    <!--<child></child>-->
  </div>
</template>

<script>
import child from './components/child'
export default {
  name: 'App',
  components:{
    child
  },
  data() {
      return {
        transitionName: 'slide-left'
      }
  },
  mounted() {
   this.sendAjax()
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transform: translate(-100%,  200px) scale(1.3);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(0,  0) scale(1);
}
  .router-link-active{
    color:red;
  }

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
