<template>
	<div class="tip">
		<div class="tip-btn" @click="showD($event)">
			<span class="iconfont icon-plus-copy"></span>
		</div>
		<transition name="tip-move">
			<div v-show="isShow" class="tip-menu">
				<div class="inner inner-up" @click="backUP">
					<span class="iconfont icon-iconup"></span>
				</div>
				<div class="inner inner-reload">
					<span class="iconfont icon-shuaxin1"></span>
				</div>
			</div>
		</transition>
	</div>
</template>
<style lang="less" scoped>
	.tip{
		position: fixed;
		right:10px;
		bottom: 30px;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		z-index: 10;
		.tip-btn{
			width: 100%;
			height:100%;
			border-radius: 50%;
			background: rgba(0,0,0,.4);
			span.iconfont{
				display: block;
				width: 100%;
				height: 100%;
				pointer-events: none;
				text-align: center;
				line-height: 45px;
				color: #ffffff;
				transition: all .3s ease-in-out;
			}
			&.open{
				span{
					transform: rotateZ(45deg);
				}
			}
		}
		.tip-menu{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			transition: all .4s ease-in-out;
			.inner{
				position: absolute;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background: rgba(0,0,0,.4);
				text-align: center;
				line-height: 30px;
				color: #ffffff;
				transition: all .4s ease-in-out;
				&.inner-up{
					right: 7.5px;
					bottom: 55px;
				}
				&.inner-reload{
					right: 55px;
					bottom: 7.5px;
				}
				span{
					pointer-events: none;
				}
			}
			&.tip-move-enter-active{
				.inner{
					transition-timing-function: cubic-bezier(0, .57, .44, 1.97);
					&.inner-up{
						transition-delay: 0s;
					}
					&.inner-reload{
						transition-delay: .1s;
					}
				}
			}
			&.tip-move-enter,
			&.tip-move-leave-active{
				.inner{
					transition-timing-function: ease-in-out;
					&.inner-up{
						transform: translate3d(0,50px,0);
						transition-delay: .1s;
					}
					&.inner-reload{
						transform: translate3d(50px,0,0);
						transition-delay: 0;
					}
				}
			}
		}
	}
</style>
<script>
  export default{
    data(){
      return {
      	isShow: false
      }
    },
    methods:{
    	showD(event){
    		this.isShow = !this.isShow
    		event.target.classList.toggle('open')
    	},
    	backUP(){
    	  document.body.scrollTop = 0
    	}
    },
    components: {

    }
  }
</script>
