import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Error404 from "../views/Error404Page.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/:catchAll(.*)*",
		component: Error404,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
