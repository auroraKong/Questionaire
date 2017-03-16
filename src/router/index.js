import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List'
import Login from '../components/Login'
import Reg from '../components/Reg'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home', 
			component: List,
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/reg',
			name: 'reg',
			component: Reg
		},
		{
			path: '/list',
			name: 'list',
			component: List
		}
	]
})
