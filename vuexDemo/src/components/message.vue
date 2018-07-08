<template>
    <div>
      <router-link class="m-hello" to="HelloWorld">HELLOWORD</router-link>

    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style scoped>
  .m-hello{
    text-transform: lowercase;
  }
</style>
