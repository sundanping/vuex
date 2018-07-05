<template>
    <div>
        <p>child-token:{{token}}</p>
        <p>child-check:{{check}}</p>
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


