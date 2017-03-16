<template>
	
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
</style>