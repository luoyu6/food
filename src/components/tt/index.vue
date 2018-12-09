<template>
	<div class="wrap full">
		<div class="left full">
			<ul>
				<li>
					<a href="javascript:;" class="iconfont icon-caidan" @click='switchDisplay($event)'></a>
				</li>
				<li>
					<a href="javascript:;" class="iconfont icon-shezhi" @click='switchDisplay($event)'></a>
				</li>
				<li>
					<a href="javascript:;" class="iconfont icon-qiapianxingshi" @click='switchDisplay($event)'></a>
				</li>
				<li>
					<a href="javascript:;" class="iconfont icon-gonglve" @click='switchDisplay($event)'></a>
				</li>
				<li>
					<a href="javascript:;" class="iconfont icon-leimu" @click='switchDisplay($event)'></a>
				</li>
			</ul>

		</div>
		<div class="right full">
			<transition :name="transitionName">
				<router-view class="child-view"></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
			}
		},
		created:function(){
			this.init();
		},
		methods:{
			switchDisplay:function(event){
				  var el = event.currentTarget;
				  var switchPages =  document.querySelectorAll(".tab-card");
				  console.log(el)
			},
			
			init:function(){
				var _this = this;
				this.$http.get("/static/data/goods.json").then(res => {
					    // success callback
					     var result = res.data;
					     _this.lists = result;
					 }, res => {
					    // error callback
					})
				}
			
		}
	}
</script>

<style type="text/css">
	@import url("../../static/icofont/iconfont.css");
	@import url("../../static/css/animcate.css");
	.left {
		background: #000;
		width: 8%;
		float: left;
	}
	
	.right {
		background: #ccc;
		width: 92%;
		float: left;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.wrap .left li a {
		display: block;
		font-size: 4rem;
		text-align: center;
		margin-top: 13px;
		text-decoration: none;
		color: #fff;
	}
	
		.wrap .left li a:hover{
	    background: #444;
	}
	
	
	/*手机*/
	@media  screen  and (max-width: 650px) {
		.wrap .left{
			width: 16%;
		}
		
		.wrap .left li a{
			font-size: 2rem;
		}
	}
</style>