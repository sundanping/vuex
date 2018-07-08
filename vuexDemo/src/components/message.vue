<template>
    <div>
      <span class="m-add-shop-car" @click="addAnimation(event)">+</span>

      <router-link class="m-hello" to="HelloWorld">HELLOWORD</router-link>
      <button @click="launchFullScreen()">全屏</button>
      <div style="height:400px">

      </div>
      <div >
        list
      </div>
      <button ref="list">购物车{{num}}</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {aa :122,num:0}
        },
      methods:{
        addAnimation:function(){
            this.num++
          console.log(event.target);
          var clone = event.target.cloneNode(true);
          document.body.appendChild(clone)
          let {top,left} =event.target.getBoundingClientRect()
          clone.style.cssText=`position:absolute;
                                top:${top}px;left:${left}px;
                                background-color:red;
                                transitiom:all 2s;
                                transfrom:scale(.3)`
            console.log(clone)
          let {top:sourceTop,left:sourceLeft} =this.$refs.list.getBoundingClientRect()
          let resultTop = sourceTop -top
          let resultLeft = sourceLeft -left
          let moveTop=top
          let moveLeft = left
          let scale = .05
          let times = 20
          function moveToshopCart(){
            times--
            scale++
            moveTop += (resultTop/20)
            moveLeft += (resultLeft/20)

            console.log(resultTop/20,resultLeft)
              setTimeout(
                  function(){
                    clone.style.top = moveTop+'px'
                    clone.style.left = moveLeft+'px'
                    clone.style.transform ="scale("+ 1- scale+")"
                    if(times>0){
                      moveToshopCart()
                    }
                    if(times===0){
                        setTimeout(()=>{
                          document.body.removeChild(clone)

                        },34)
                    }
                  },17)
          }
          moveToshopCart()
          console.log(event.target.getBoundingClientRect());
          console.log(this.$refs.list.getBoundingClientRect())
        },
         launchFullScreen:()=> {
           var docElm = document.documentElement;
           if (docElm.requestFullscreen) {
             docElm.requestFullscreen();
           } else if (docElm.mozRequestFullScreen) {
             docElm.mozRequestFullScreen();
           } else if (docElm.webkitRequestFullScreen) {
             docElm.webkitRequestFullScreen();
           } else if (elem.msRequestFullscreen) {
             elem.msRequestFullscreen();
           }else{
               alert("your window can not provide FullScreen")
           }
    }
      }
    }
</script>
<style scoped>
.m-add-shop-car{
  padding: 10px;
  background-color: yellow;
  border-radius: 50%;
  position: relative;
  left:300px;
}

  .m-hello{
    text-transform: lowercase;
  }
</style>
