<template>
    <form id="createForm" class="create-form" @submit.prevent="submitForm">
        <div class="form-plat">
            <label>选择板块</label>
            <select v-model="topics.tab" name="tab">
                <option v-for="plat in plats" :value="plat.value">{{plat.name}}</option>
            </select>
        </div>
        <div class="form-input">
            <label>标题</label>
            <input type="text" name="title" v-model="topics.title" placeholder="标题不少于10个字">
        </div>
        <div class="form-md">
            <textarea name="content" v-model="topics.content" placeholder="add multiple lines"></textarea>
        </div>
        <div class="form-btn">
            <input type="submit" value="提交">
        </div>
    </form>
</template>
<style rel="stylesheet/less" lang="less">
    .create-form{
        width: 100%;
        height: 100%;
        margin: 10px auto;
        overflow-y: scroll;
        .form-plat{
            width: 100%;
            height: auto;
            display: flex;
            flex-flow:row nowrap;
            justify-content: flex-start;//内容对齐方式
            align-items: center;//轴线上对齐方式
            //align-content: center;//多条轴线上对齐方式
            label{
                min-width: 60px;
                flex-grow: 0;
                margin: 0 10px;
                text-align: right;
            }
            select{
                flex-grow: 0;
                flex-basis: auto;
                border:1px solid #999;
                border-radius: 3px;
                color: #666;
                padding: 2px 5px;
                box-sizing: border-box;
                outline: none;
                option{
                    outline: none;
                }
            }
        }
        .form-input{
            width: 100%;
            height: auto;
            margin: 10px auto;
            display: flex;
            flex-flow:row nowrap;
            justify-content: flex-start;//内容对齐方式
            align-items: center;//轴线上对齐方式
            //align-content: center;//多条轴线上对齐方式
            label{
                min-width: 60px;
                flex-grow: 0;
                margin: 0 10px;
                text-align: right;
            }
            input{
                flex-basis: auto;
                border: 1px solid #999;
                border-radius: 3px;
                outline: none;
                color: #666;
                padding: 2px 5px;
            }
        }
        .form-md{
            margin: 10px auto;
            textarea{
                border: 1px solid #999;
            }
        }
    }
</style>
<script>
    export default {
      data(){
        return{
            topics:{
                accesstoken:'bec977cb-1b56-4f52-bed8-8cf378f29213',
                tab:'',
                title:'',
                content:''
            },
            plats:[{
               name:'请选择',
               value:''
            },
            {
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
           }]
        }
      },
      methods:{
         submitForm(event){
            var formD = new FormData(event.target)
            formD.append('accesstoken','bec977cb-1b56-4f52-bed8-8cf378f29213')
            this.$http.post('/topics',this.topics)
            .then((res)=>{
                event.target.reset()
                this.$router.push({path:'/',query:{tab:'all'}})
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
         }
      },
      components: {
      }
    }


</script>
