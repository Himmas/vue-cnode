<template>
    <div v-show="isSheetShow" class="create-topic-model">
        <div class="create-topic-content">
            <span @click="selectTab(plat.value,plat.name)" v-for="plat in plats">{{plat.name}}</span>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .create-topic-model{
        position: fixed;
        top:0;
        background: rgba(0,0,0,.4);
        z-index: 2;
        width: 100%;
        height: 100%;
        .create-topic-content{
            width: 100%;
            height: auto;
            position: fixed;
            bottom:0;
            z-index: 3;
            background: #fff;
            span{
                display: block;
                width: 100%;
                height: 30px;
                text-align: center;
                line-height: 30px;
                color: #666;
                &:not(:last-child){
                    border-bottom: 1px solid gainsboro;
                }
            }
        }
    }
</style>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                plats:[{
                    name:'分享',
                    value:'share'
                },
                {
                    name:'问答',
                    value:'ask'
                },
                {
                    name:'招聘',
                    value:'job'
                }],
            }
        },
        props:{
          isSheetShow:{
            type:Boolean,
            default:false
          }
        },
        methods:{
            selectTab(val,name){
              this.$emit('selectTab',val,name)
            }
        }
    }
</script>
