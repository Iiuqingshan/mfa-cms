import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/index.vue";

import Parks from "@/views/park/index.vue";
import ParkDetail from "@/views/park/detail.vue";
import Banners from "@/views/banner/index.vue";
import BannerDetail from "@/views/banner/detail.vue";
import Animals from "@/views/animal/index.vue";
import Dines from "@/views/dine/index.vue";
import Presentations from "@/views/presentation/index.vue";
import Shops from "@/views/shop/index.vue";
import Restrooms from "@/views/restroom/index.vue";
import WaterRefills from "@/views/water-refill/index.vue";
import Zones from "@/views/zone/index.vue";
import Services from "@/views/service-category/index.vue";
import KeeperTalk from "@/views/things-to-do/keeper-talk/index.vue"
import Login from '@/views/login/index.vue'
import Home from '@/views/home.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/parks'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: Layout,
        redirect: 'parks',
        children: [
            {
                path: 'parks',
                name: 'Park',
                meta: { title: 'Parks'},
                component: Parks
            },
            {
                path: 'parks/park/:id?',
                name: 'ParkDetail',
                meta: { title: 'Park Detail'},
                component: ParkDetail
            },
            {
                path: 'banners',
                name: 'Banner',
                meta: { title: 'Banners'},
                component: Banners
            },
            {
                path: 'banners/banner/:id?',
                name: 'BannerDetail',
                meta: { title: 'Banner Detail'},
                component: BannerDetail
            },
            {
                path: 'animals',
                name: 'Animal',
                meta: { title: 'Animals'},
                component: Animals
            },
            {
                path: 'dines',
                name: 'Dine',
                meta: { title: 'Dines'},
                component: Dines
            },
            {
                path: 'presentations',
                name: 'Presentation',
                meta: { title: 'Presentations'},
                component: Presentations
            },
            {
                path: 'shops',
                name: 'Shop',
                meta: { title: 'Shops'},
                component: Shops
            },
            {
                path: 'restrooms',
                name: 'Restroom',
                meta: { title: 'Restrooms'},
                component: Restrooms
            },
            {
                path: 'water-refills',
                name: 'WaterRefill',
                meta: { title: 'Water Refills'},
                component: WaterRefills
            },
            {
                path: 'zones',
                name: 'Zone',
                meta: { title: 'Zones'},
                component: Zones
            },
            {
                path: 'services',
                name: 'Service',
                meta: { title: 'Services'},
                component: Services
            },
            {
                path: 'things-to-do',
                name: 'ThingsToDo',
                meta: { title: 'Things To Do'},
                redirect: '/things-to-do/keeper-talks',
                children: [
                    {
                        path: 'keeper-talks',
                        name: 'KeeperTalk',
                        meta: { title: 'Keeper Talks'},
                        component: KeeperTalk
                    },
                    {
                        path: 'animal-feedings',
                        name: 'AnimalFeeding',
                        meta: { title: 'Animal Feedings'},
                        component: KeeperTalk
                    },
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;