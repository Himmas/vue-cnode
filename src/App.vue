<template>
  <div id="app">
  	<div id="top">
  		<a id="logo" href="/"><img id="logoimg" src="img/logo.png"/></a>
		<form id="search" method="get" action="http://www.baidu.com/s">
			<input type="text" name="wd" id="text1"  autocomplete="off" />			
		</form>

  	</div>
    
  </div>
</template>

<script>
export default {
	data(){
		return {
			
		}
	}
}
</script>

<style>
	*{
	  padding:0px;
	  margin:0px;
	}
	#top{
		width: 100%;
		height: 25px;
		background-color: #444;
	}
	#logo{
		margin-left: 40px;
	}
	#logoimg{
		height: 100%;
		width: 60px;
	}
	#search{
		margin-top: -26px;
		margin-left:105px;
	}
	#text1{
		height: 10px;
		width: 100px;
	}
	

</style>
