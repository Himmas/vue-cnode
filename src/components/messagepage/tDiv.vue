<template>
  <div class="f">
    <div :style="{transform:'translateX('+(deltaN-deltaN)+'px)',transition:speed}" class="t-div"
         @touchstart='tstart'
         @touchmove='tmove'
         @touchend='tend'
    >11111</div>
    <div class="aaaa" :style="{transition:speed}">2222222</div>
  </div>

</template>
<style lang="less">
  .f{
    width: 100%;
    //display: flex;
    //flex-flow: row nowrap;
  }
  .t-div {
    float: left;
    height: 32px;
    background: green;
    width: 100%;
  }
  .aaaa{
    float: left;
    transform: translateX(50%);
    width: 100px;
    height: 32px;
    background: goldenrod;
    margin-bottom: 50px;
  }
</style>
<script>

    export default{
        data(){
            return{
               start:{
			           x: 0,
			           y: 0
		           },
               delta : {
                x: 0,
                y: 0
               },
               moveFlag:true,
               speed: 'all 0s',
               deltaN: 0,
               maxDelta : 100,
               minDelta : 10
            }
        },
        methods:{
          tstart(event){
            let e = event || window.event

            this.start.x = e.touches[0].pageX; //计算初始手指距离

            if(this.deltaN != 0){ //判断是否已经滑动了
              this.deltaN = 0
            }
          },
          tmove(event){
            let e = event || window.event

            this.delta.x = e.touches[0].pageX - this.start.x //计算手指在x轴滑动的距离

            if(this.delta.x <= 0){//判断滑动方向 小于0，向左滑动
                this.speed = 'all 0s'
                this.deltaN = this.delta.x
                if(-this.delta.x >= this.maxDelta) {
                  this.speed = 'all .2s ease-in-out'
                  this.deltaN = -this.maxDelta-10
                }
            }else{
              return;
            }
          },
          tend(event){
            let e = event || window.event

            let endX = e.changedTouches[0].pageX

            if(-this.delta.x >= this.maxDelta){
                this.deltaN = -this.maxDelta
            }else if(-this.delta.x < this.minDelta){
                this.deltaN = 0
            }

            if(endX === this.start.x){
              this.deltaN = 0
            }
            e.preventDefault()
          }
        },
        components:{

        }
    }


</script>
