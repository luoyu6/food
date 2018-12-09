<template>
	<div class="food">
		<div class="clearfix">
			<div class="menu_wrapper fl">
				<ul>
					<li v-for="item in goods"><span>{{item.name}}</span></li>  <!--左侧的菜单栏-->
				</ul>
			</div>
			<div class="food_wrapper fl">
				<dl v-for="items in goods">    <!--遍历goods数组-->
					<!--外层的name，和菜单栏的每个选项一样的--> 
					<dt class="category_title"><strong class="category_name" >{{items.name}}</strong> <span class="fooddetails_desc">{{items.description}}</span><p class="line"></p></dt>
					<!--得到对象里面的foods数组，it  是foods里面的每个属性  对象可以点-->
					<dd class="fooddetails_root clearfix" v-for="it in items.foods"> 
						<!--显示图片-->
						<span class="img_logo fl" style="height: 71px;"><img :src="it.image_path" alt="" :onerror="defaultImg"  /></span>
						<section class="fooddetails_info fl">
							<!--显示foods里面对象的name-->
							<p class="fooddetails_name">{{it.name}}</p>   
							<!--显示foods里面对象的description-->
							<p class="fooddetails_desc">{{it.description}}</p>
							<!--显示foods里面对象的tips-->
							<p class="fooddetails_sales">{{it.tips}}</p>
	<!--显示foods里面第一个specfoods的priece,数据里面有多个specfoods,也就有多个price,但是值都是一样的，而我们只需要显示一遍-->
							<p class="salesInfo_price"><span>￥</span>{{it.specfoods[0].price}} <span>起</span></p>

						</section>
					</dd>
				</dl>

			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				goods: [],
				 defaultImg: 'this.src="' + require('../assets/logo.png') + '"'
//				 defaultImg: 'this.src="' + ('../static/img/1.png') + '"'
			}
		},

		created() {
			this.goodsList(); //实例化

		},
		methods: {
			goodsList() {
				var tempList = [];
				var self = this;
				this.http.get('static/goods.json').then(function(response) {
					self.goods = response.data;
					console.log(self.goods)

				}).catch(function(error) {
					console.log(error);
				})

			}

		}

	}
</script>
@import '../../static/css/common.styl';
<style lang="stylus">
</style>
<style scoped="">
	.fooddetails_root {
		margin-bottom: 2.5rem;
	}
	.fooddetails_desc,.fooddetails_sales,.salesInfo_price{
		padding:5px 0 0 0;
	}
	.salesInfo_price{
		color: #FF6600;
		font-weight: 700;
		font-size: 1.4rem;
	}
	.salesInfo_price span{
		font-weight: 400;
		font-size:1.2rem
	}
	.fooddetails_desc{
		color: #999;
	}
	.fooddetails_sales{
		color: #666;
	}
	.fooddetails_name{
		font-weight: 700;
    font-size: 1.5rem;
	}
	.line{
		
		border: 1px solid #FBFBFB;
		
		
	}
	.category_name{
		display: inline-block;
		padding:8px 0;
		font-size: 1.2rem;
		color: #666;
	} 
	.img_logo {
		display: inline-block;
		width: 25%;
	}
	
	.img_logo img {
		width: 100%;
	}
	
	.fooddetails_info {
		width: 70%;
		padding: 0 0 0 1rem;
	}
	.fooddetails_info p{
		/*line-height: 2rem;*/
	}
	.fooddetails_info>p.fooddetails_desc,.fooddetails_info>p.fooddetails_sales{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.fooddetails_root {
		/*display: flex;*/
	}
	
	.category_title {
		padding-bottom: 10px;
		color: #666;
		/*padding:1rem;*/
	}
	
	li {
		list-style: none;
	}
	
	.fl {
		float: left;
	}
	
	.clearfix:after {
		display: block;
		content: "";
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.menu_wrapper {
		width: 20%;
	}
	
	.food_wrapper {
		width: 80%;
		padding: 0px 0 0 10px;
		box-sizing: border-box;
		/*background: red;*/
	}
	
	.menu_wrapper li {
		background: #F8F8F8;
		padding: 1.5rem 0.5rem;
		font-size: 1.2rem;
		border-bottom: 1px solid #e8e8e8;
		
		
		color: #666;
	}
</style>