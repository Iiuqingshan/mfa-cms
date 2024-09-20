import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/index.vue";

import Parks from "@/views/park/index.vue";
import ParkDetail from "@/views/park/detail.vue";
import Banners from "@/views/banner/index.vue";
import Animals from "@/views/animal/index.vue";
import Dines from "@/views/dine/index.vue";
import Presentations from "@/views/presentation/index.vue";
import Shops from "@/views/shop/index.vue";
import Restrooms from "@/views/restroom/index.vue";
import WaterRefills from "@/views/water-refill/index.vue";
import Zones from "@/views/zone/index.vue";
import Services from "@/views/service-category/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/parks'
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/parks',
                component: Parks
            },
            {
                path: 'park/new',
                component: ParkDetail
            },
            {
                path: 'banners',
                component: Banners
            },
            {
                path: 'animals',
                component: Animals
            },
            {
                path: 'dines',
                component: Dines
            },
            {
                path: 'presentations',
                component: Presentations
            },
            {
                path: 'shops',
                component: Shops
            },
            {
                path: 'restrooms',
                component: Restrooms
            },
            {
                path: 'waterrefills',
                component: WaterRefills
            },
            {
                path: 'zones',
                component: Zones
            },
            {
                path: 'services',
                component: Services
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;