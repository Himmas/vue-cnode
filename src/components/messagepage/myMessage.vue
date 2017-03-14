<template>
    <div class="my-message">
        <div class="message-panl iconfont"
             :data-name="routename"
             :style="{transition:speed}"
             @touchstart="tstart"
             @touchmove="tmove"
             @touchend="tend"
        >
            {{readmsg}}
            <slot name="label" v-if="count != 0"></slot>
        </div>
        <slot name="mark" v-if="routename == 'unreadmessage'"></slot>
    </div>
</template>
<script>
    import { ACCESS_TOKEN } from '../../config.js'

    export default{
        data(){
            return{
                count:0
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
            },
            speed:{
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
          transform: translateX(0);
          &:after {
              float: right;
              padding-right: 10px;
              content: "\e603"
          }
          .label{
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
      .mark-message{
        height: inherit;
        background: goldenrod;
        color: #fff;
        line-height: 32px;
        text-align: center;
      }
    }
</style>



