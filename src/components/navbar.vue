<template>
	<div class="navbar">
		<ul id="main">
			<li><router-link  to="/food" >商品</router-link></li>
			<li><router-link  to="/rating">评价</router-link></li>
			<li><router-link  to="/seller">商家</router-link></li>

		</ul>
		
            <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view></router-view>
	</div>
</template>

<script>
export default{
	data(){
		return {
			child:''
		}
	},
	created(){
		
	},
	methods: {
		/*getTab:function(event){
			 var el = event.currentTarget;
			// console.log(el)
			 this.$emit('getChildValue',el.innerHTML)
		}*/
	}

}
</script>

<style scoped lang="stylus">

* 
  box-sizing: border-box
#main 
	margin:0 auto
	position: relative
	list-style: none
	font-weight: 400
	font-size: 0
	text-transform: uppercase
	display: flex
	text-align:center
	// background:red

#main li
	flex:1
	font-size: 1.4rem
	display: inline-block
	// position: relative;
	float:left
	padding: 10px
	cursor: pointer
	border-bottom:1px solid #eee;
#main li a
	text-decoration:none
	color:#333;
/*	font-weight:700*/
.navbar span
	display:block;
	border-bottom:1px solid #EBEBEB
</style>