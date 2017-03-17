<template>
	<router-link :to="{name: 'create'}" class="create">&nbsp;新建问卷</router-link>
</template>
<script>
import store from '../store'
export default {
	created () {
		var cookie = store.fetch();
		if(!cookie.token) this.$router.push({name: 'login'});
	},
}
</script>
<style>
.list{
	margin: 0 auto;
	width: 96%;
	line-height: 1.5rem;
	color: #555;
}
.list thead tr{
	font-size: 1.2rem;
}
.list thead tr th:nth-child(1){
	width: 25%;
}
.list thead tr th:nth-child(2){
	width: 20%;
}
.list thead tr th:nth-child(3){
	width: 10%;
}
.list thead tr th:nth-child(4){
	width: 45%;
}
.list tbody tr td{
	border-bottom: 1px solid #ccc;
	font-size: 1rem;
	height: 3rem;
	line-height: 3rem;
}
.create{
  cursor: pointer;
  display: inline-block;
  margin: 2rem 0;
  padding: .5rem 1.5rem;
  font-size: 1.6rem;
  background-color: #ee7416;
  box-shadow: 0 .05em .25em rgba(0,0,0,.5);
  text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
  color: #fff;
  border-radius: .2rem;
  text-decoration: none;
}
.create:before{
  content: '\+';
}
</style>