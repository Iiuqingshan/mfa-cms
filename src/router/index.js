import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout.vue";

import Parks from "@/views/park/index.vue";
import ParkDetail from "@/views/park/detail.vue";
import BannerList from "@/views/banner/index.vue";
import AnimalList from "@/views/animal/index.vue";
import DineList from "@/views/dine/index.vue";
import PresentationList from "@/views/presentation/index.vue";
import ShopList from "@/views/shop/index.vue";
import RestroomList from "@/views/restroom/index.vue";
import WaterRefillList from "@/views/water-refill/index.vue";
import ZoneList from "@/views/zone/index.vue";
import ServiceList from "@/views/service-category/index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Parks
            },
            {
                path: 'park/detail',
                component: ParkDetail
            },
            {
                path: 'banners',
                component: BannerList
            },
            {
                path: 'animals',
                component: AnimalList
            },
            {
                path: 'dines',
                component: DineList
            },
            {
                path: 'presentations',
                component: PresentationList
            },
            {
                path: 'shops',
                component: ShopList
            },
            {
                path: 'restrooms',
                component: RestroomList
            },
            {
                path: 'waterrefills',
                component: WaterRefillList
            },
            {
                path: 'zones',
                component: ZoneList
            },
            {
                path: 'services',
                component: ServiceList
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;