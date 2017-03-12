<template>
    <div class="create-topic-div">
        <form id="createForm" class="create-form" @submit.prevent="submitForm">
            <!--选择版块-->
            <div class="form-first-line">
                <div class="form-plat">
                    <label>版块</label>
                    <input @click="showModel" name="tab" :value="platName" readonly placeholder="请选择板块">
                </div>
                <!--提交按钮-->
                <div class="form-btn">
                    <input :disabled="isDisabled" :class="{active:!isDisabled}" type="submit" value="提交">
                </div>
            </div>
            <!--标题-->
            <div class="form-title">
                <label>标题</label>
                <input @blur="checkTitle"
                       type="text" name="title"
                       v-model="topics.title"
                       placeholder="标题不少于10个字"
                       autocomplete="off"
                >
            </div>
            <!--内容-->
            <div class="form-content">
                <textarea @blur="checkContent" name="content" v-model="topics.content" placeholder="输入内容"></textarea>
            </div>
        </form>
        <!--弹框-->
        <action-sheet :isSheetShow="isModelShow" @selectTab="selectCreamTab"></action-sheet>
    </div>
</template>
<style rel="stylesheet/less" lang="less">
    .create-form{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow-y: auto;
        .form-first-line{
            width: 100%;
            padding: 5px 10px;
            box-sizing: border-box;
            border-bottom: 1px solid gainsboro;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            div{
                flex-grow: 1;
                &.form-plat{
                    flex-basis: 70%;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 14px;
                    label{
                        flex-grow: 1;
                        flex-basis: 30%;
                        color: #666;
                    }
                    input{
                        flex-grow: 1;
                        flex-basis: 70%;
                        color: #666;
                         -webkit-tap-highlight-color: transparent;
                    }
                }
                &.form-btn{
                    flex-basis: 30%;
                    text-align: right;
                    input{
                        -webkit-tap-highlight-color: transparent;
                        background: transparent;
                        color:rgba(30, 144, 255, .2);
                        -webkit-tap-highlight-color: transparent;
                        &.active{
                            color: dodgerblue;
                        }
                    }
                }

            }
        }
        .form-title{
            width: 100%;
            padding: 5px 10px;
            box-sizing: border-box;
            border-bottom: 1px solid gainsboro;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            color:#666;
            font-size: 14px;
            label{
                flex-grow: 1;
                flex-basis: 21%;
            }
            input{
                flex-grow: 1;
                flex-basis: 79%;
                color: #666;
                -webkit-tap-highlight-color: transparent;
            }
        }
        .form-content{
            width: 100%;
            height: auto;
            border-bottom: 1px solid gainsboro;
            textarea{
                width: 100%;
                min-height: 100px;
                padding: 5px 10px;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent;
            }
        }
    }
</style>
<script>
    import { ACCESS_TOKEN } from '../../config'
    import actionSheet from '../commonpage/actionSheet'

    export default {
      data(){
        return{
            topics:{
                accesstoken:ACCESS_TOKEN,
                tab : '',
                title : '',
                content : ''
            },
            platName : '',
            isDisabled : true,
            isModelShow : false
        }
      },
      methods:{
         submitForm(event){
            this.$http.post('/topics',this.topics)
            .then((res)=>{
                event.target.reset()
                this.$router.push({path:'/',query:{tab:'all'}})
            })
            .catch((error)=>{
                console.log(error)
            })
         },
         showModel(){
            this.isModelShow = true
         },
         selectCreamTab(val,name){
            this.topics.tab = val
            this.platName = name
            this.isModelShow = false
            if(this.topics.tab && this.topics.title.length>=10 && this.topics.content){
                this.isDisabled = false
            }
         },
         checkTitle(){
            if(this.topics.tab && this.topics.title.length>=10 && this.topics.content){
                 this.isDisabled = false
            }

         },
         checkContent(){
            if(this.topics.tab && this.topics.title.length>=10 && this.topics.content){
                this.isDisabled = false
            }
         }
      },
      components: {
        actionSheet
      }
    }


</script>
