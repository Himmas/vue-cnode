<template>
    <form class="create-form">
        <div class="form-plat">
            <label>选择板块</label>
            <select v-model="selected">
                <option v-for="plat in plats" :value="plat.value">{{plat.name}}</option>
            </select>
        </div>
    </form>
</template>
<style rel="stylesheet/less" lang="less">
    .create-form{
        width: 100%;
        height: auto;
        margin: 10px auto;
        .form-plat{
            width: 100%;
            height: auto;
            display: flex;
            flex-flow:row nowrap;
            justify-content: space-around;//内容对齐方式
            align-items: center;//轴线上对齐方式
            //align-content: center;//多条轴线上对齐方式
            label{
                flex-basis: 100px;
                flex-grow: 0;
            }
            select{
                flex-grow: 1;
                margin-left: 10px;
                border:1px solid #fefef0;
                border-radius: 3px;
                color: #666;
                padding: 2px 5px;
                box-sizing: border-box;
                outline: none;
            }
        }
    }
</style>
<script>

    export default {
      data(){
        return{
            selected:'',
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
      components: {

      }
    }


</script>
