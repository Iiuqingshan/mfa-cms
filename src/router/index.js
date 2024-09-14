import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;