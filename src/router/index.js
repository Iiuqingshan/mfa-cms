import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout.vue";

import ParkList from "@/views/park/ParkList.vue";
import BannerList from "@/views/banner/BannerList.vue";
import AnimalList from "@/views/animal/AnimalList.vue";
import DineList from "@/views/dine/DineList.vue";
import PresentationList from "@/views/presentation/PresentationList.vue";
import ShopList from "@/views/shop/ShopList.vue";
import RestroomList from "@/views/restroom/RestroomList.vue";
import WaterRefillList from "@/views/water-refill/WaterRefillList.vue";
import ZoneList from "@/views/zone/ZoneList.vue";
import ServiceList from "@/views/service-category/ServiceList.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: ParkList
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