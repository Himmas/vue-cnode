<template>
    <div >
        <div id="top">
            <div id="logo">
                <router-link to="/"><img src="../../assets/cnodejs_light.svg"/></router-link>
            </div>
            
        </div>
        <router-link to="/login">login</router-link>
    </div>
</template>
<style lang="less">
   
    #logo {
        img {
         width: 50%;
         height：10%;
        } 
    }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
