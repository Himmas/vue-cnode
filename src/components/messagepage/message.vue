<template>
    <div>
        <my-message :style="{transform:'translateX('+n+'px)'" routename="readmessage" readmsg="历史消息"
                    @tstart="touchStart"
                    @tmove="touchMove"
                    @tend="touchEnd"
        ></my-message>
        <my-message routename="unreadmessage" readmsg="未读消息"
                    @tstart="touchStart"
                    @tmove="touchMove"
                    @tend="touchEnd"
        >
            <span slot="label"></span>
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
                n:0,
                drag:{
                    _n:'',
                    _startX:'',
                    _scorllWidth:'',
                }
            }
        },
        method:{
            touchStart(event){
                let e = event || window.event
                this.drag._n = this.n
                this.drag._startX = e.touches[0].clientX
                this.drag._scorllWidth = e.currentTarget.scrollWidth
            },
            touchMove(event){
                let e = event || window.event
                let nowX = e.touches[0].clientX
                let moveX = nowX - this.drag._startX
                let percent = ( moveX / this.drag._scorllWidth )*100;
                if(this.n == 0 && moveX > 0 ){
                    this.n = (this.drag._length-1) *100 - percent
                }else if (this.n == (this.drag._length-1) *100 && moveX < 0){
                    this.n = 0 - percent
                }else{
                    this.n = this.drag._n - percent
                }
                e.preventDefault()
            },
            touchEnd(event){
                this.n = this.drag._n;
                let e = event || window.event
                let endX = e.changedTouches[0].clientX
                let dragDistance = endX-this.drag._startX;
                if(dragDistance && dragDistance > this.drag._scorllWidth/2){
                    this.turnPrev()
                }else{
                    if(Math.abs(dragDistance) > this.drag._scorllWidth/2){
                        this.turnNext()
                    }
                }
            }
        },
        components:{
          myMessage
        }
    }
</script>
