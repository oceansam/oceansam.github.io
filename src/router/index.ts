import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",

		component: () => import("../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		console.log(to, savedPosition);

		const selector = { el: to.hash };
		console.log(selector);
		return selector;
	},
});

export default router;
