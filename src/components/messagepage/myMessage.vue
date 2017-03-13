<template>
    <div @touchstart="tstart"
         @touchmove="tmove"
         @touchend="tend"
         class="my-message">
        <router-link class="message-panl iconfont" :to="{name:routename}">
            {{readmsg}}
            <slot name="label" class="label" v-if="count != 0"></slot>
        </router-link>
    </div>
</template>
<script>
    import { ACCESS_TOKEN } from '../../config.js'
    export default{
        data(){
            return{
                count:0,
                n:0
            }
        },
        props:{
            routename:{
                type:String,
                default:''
            },
            readmsg:{
                type:String,
                default:''
            }
        },
        created(){
            this.getMessageCount()
        },
        methods:{
           getMessageCount(){
                this.$http.get(`/message/count?accesstoken=${ACCESS_TOKEN}`)
                .then((res)=>{
                    this.count = res.data.data
                })
                .catch((error)=>{
                    console.log(error)
                })
           },
           tstart(){
                this.$emit('tstart')
            },
            tmove(){
                this.$emit('tmove')
                //console.log(this.n)
            },
            tend(){
                this.$emit('tend')
            }
        }
    }
</script>
<style lang="less">
    .my-message {
        width: 100%;
        height: 32px;
        line-height: 32px;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid gainsboro;
        .message-panl {
            flex-basis: 100%;
            font-size: 12px;
            color: #666;
            position: relative;
            &:after {
                float: right;
                padding-right: 10px;
                content: "\e603"
            }
            span{
                position: absolute;
                top: 6px;
                left:48px;
                display: block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: red;
            }
        }
    }
</style>



