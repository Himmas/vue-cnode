<template>
    <div>
        <my-message routename="readmessage" readmsg="历史消息"
                    @tstart="touchStart"
                    @tmove="touchMove"
                    @tend="touchEnd"
        ></my-message>
        <my-message routename="unreadmessage"
                    readmsg="未读消息"
                    :deltaN="fdeltaN"
                    :speed="fspeed"
                    @tstart="touchStart"
                    @tmove="touchMove"
                    @tend="touchEnd"
        >
            <span slot="label" class="label"></span>
            <div slot="mark"
                 class="mark-message"
                 :style="{width:-fdeltaN+'px',transition:fspeed}"
                 @click="markAllMessage"
            >
                {{markmsg}}
            </div>
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
    import { ACCESS_TOKEN } from '../../config.js'

    export default{
        data(){
            return{
              markmsg:'标记已读',
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
          touchStart(){
            let e = event || window.event

            this.start.x = e.touches[0].pageX
          },
          touchMove(){
            let e = event || window.event

            this.delta.x = e.touches[0].pageX - this.start.x

            switch(event.target.getAttribute('data-name')){
                case 'readmessage':
                    if(this.delta.x != 0){
                         this.delta.x = 0
                    }
                    break;
                case 'unreadmessage':
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
                   break;
                default:
                   break;
            }
          },
          touchEnd(){
            let e = event || window.event

            let endX = e.changedTouches[0].pageX

            switch(event.target.getAttribute('data-name')){
                case 'readmessage':
                    if(endX == this.start.x && this.delta.x == 0){
                        this.$router.push({name:"readmessage"})
                    }
                    break;
                case 'unreadmessage':
                    if(endX === this.start.x && this.fdeltaN === 0){
                         this.$router.push({name:'unreadmessage'})
                    }else if(endX === this.start.x && this.fdeltaN == -100){
                         this.fdeltaN = 0
                     }

                    if(-this.delta.x >= this.maxDelta){
                        this.fdeltaN = -this.maxDelta
                        this.delta.x = 0
                    }else if(-this.delta.x < this.minDelta){
                        this.fdeltaN = 0
                    }
                    break;
            }

            e.preventDefault()
          },
          markAllMessage(){
            this.$http.post('/message/mark_all',{
                accesstoken: ACCESS_TOKEN
            })
            .then((res)=>{
               this.fdeltaN = 0
               console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
          }
        },
        components:{
          myMessage
        }
    }
</script>
