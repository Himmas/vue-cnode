<template>
    <div>
        <!--<my-message routename="readmessage" readmsg="历史消息"></my-message>-->
        <my-message routename="unreadmessage"
                    readmsg="未读消息"
                    :deltaN="fdeltaN"
                    :speed="fspeed"
                    @tstart="touchStart"
                    @tmove="touchMove"
                    @tend="touchEnd"
        >
            <span slot="label" class="label"></span>
        </my-message>

        <transition name="slide-left">
            <router-view :key="$route.params.id"></router-view>
        </transition>
    </div>
</template>
<style lang="less">
    .slide-left-enter-active,
    .slide-left-leave-active{
        transition: all .3s ease-in-out;
    }
    .slide-left-enter{
        transform: translate(100%);
    }
    .slide-left-leave-active{
        transform: translate(100%);
    }
</style>
<script>
    import myMessage from './myMessage'

    export default{
        data(){
            return{
              start:{
                x:0,
                y:0
              },
              delta:{
                x:0,
                y:0
              },
              maxDelta:100,
              minDelta:10,
              fdeltaN:0,
              fspeed:'all 0s'
            }
        },
        methods:{
          pushPage(name){
            console.log(this.fdeltaN)
            if(this.fdeltaN != 0) return ;
            this.$router.push({name:name})
          },
          touchStart(event){
            let e = event || window.event

            this.start.x = e.touches[0].pageX

          },
          touchMove(event){
            let e = event || window.event

            this.delta.x = e.touches[0].pageX - this.start.x

            if(this.delta.x < 0){
              this.fspeed = 'all 0s'
              this.fdeltaN = -this.delta.x
              if(-this.delta.x >= this.maxDelta) {
                 this.fspeed = 'all .2s ease-in-out'
                 this.fdeltaN = -this.maxDelta-10
              }
            }else{
              return;
            }
          },
          touchEnd(event){
            let e = event || window.event

            let endX = e.changedTouches[0].pageX

            if(-this.delta.x >= this.maxDelta){
                this.fdeltaN = -this.maxDelta
            }else if(-this.delta.x < this.minDelta){
                this.fdeltaN = 0
            }

            if(endX === this.start.x && this.fdeltaN === 0){
              console.log( this.fdeltaN)
              this.$router.push({name:'unreadmessage'})
            }else if(endX === this.start.x && this.fdeltaN == -100){
              console.log( this.fdeltaN)
              this.fdeltaN = 0
            }
            e.preventDefault()
          }
        },
        components:{
          myMessage
        }
    }
</script>
