<template>
	<form>
		<input type="text" id="account" placeholder="请输入账号" v-model="account">
		<input type="password" v-model="password" id="password" placeholder="请输入密码">
		<input type="password" v-model="repwd" id="repwd" placeholder="再次输入密码" @keyup.enter="register">
		<span class="warn">{{warn}}</span>
		<button type="button" @click="register">注册</button>
		<span class="reg" @click="tologin">去登录-></span>
	</form>
</template>
<script>
import store from '../store.js'
export default {
	data () {
		return {
			account: '',
			password: '',
			repwd: '',
			warn: ''
		}
	},
	created () {
		var cookie = store.fetch();
		if(cookie.token) this.$router.push({name: 'list'});
	},
	methods: {
		register () {
			if(!this.account.trim() || !this.password.trim() || !this.repwd.trim()) this.warn = '账号或密码不能为空';
			else if(this.password !== this.repwd) this.warn = '密码不一致';
			else {
				let user = {
					account: this.account,
					password: this.password,
				}
				this.$http.post('/api/login/createAccount', user).then(response => {
					// console.log(response);
					store.save(response.body);
					this.$router.push({name: 'list'});
				}, err => {
					console.log(err);
				})
			}
		},
		tologin () {
			this.$router.push({name: 'login'});
		}
	}
}
</script>
<style>
@import '/static/form.css';
</style>