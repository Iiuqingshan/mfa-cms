import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout.vue";

import ParkList from "@/views/park/ParkList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'parks',
                component: ParkList
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;