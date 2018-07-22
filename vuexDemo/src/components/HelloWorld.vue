<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{token}}</h2>
    {{check}} ----此处会报错  用checks方法
    <h2>{{checks}}</h2>
    <p id='p'>{{userinfo.a}}</p>
    <p>getters===> {{group}}</p>
    <button @click="add">ADD</button>
    <button @click="less">LESS</button>
    <router-link to="message">TOMESSAHE</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions ,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aaa: ''
    }
  },
  computed: {
    ...mapGetters(['group']),
    ...mapState(['token','userinfo','check']),
    checks () { //有commit 事件在mapState 的获取值或报错
      return this.$store.state.check
    }
  },
  mounted() {
    // this.aaa = this.checks
    //document.getElementById('p').parentElement.style.background = 'red'
    document.getElementById('p').nextSibling.nextElementSibling.style.color = 'red'
   console.log(document.getElementById('p').previousSibling)
  },
  methods:{
    ...mapMutations(['RESET_STATE','check']),
    ...mapActions(['check']),
    add() {
      //console.log(this.RESET_STATE)
      // this.store.commit('increment')
      this.RESET_STATE(44);
    },
    less() {
      this.$store.dispatch('check');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button{
  padding: 15px;
}
a {
  color: #42b983;
}
</style>
