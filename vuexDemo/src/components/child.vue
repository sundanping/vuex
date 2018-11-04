<template>
    <div>
        <p>child-token:{{token}}</p>
        <p>child-check:{{check}}哈哈哈</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'child',
    computed:{
        ...mapState(['token','check'])
    }
}
</script>
<style>

</style>


