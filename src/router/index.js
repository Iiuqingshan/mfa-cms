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
import KeeperTalk from "@/views/things-to-do/keeper-talk/index.vue"
import Login from '@/views/login/index.vue'


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
        path: '/',
        component: Layout,
        redirect: '/parks',
        children: [
            {
                path: '/parks',
                meta: { title: 'Parks'},
                component: Parks
            },
            {
                path: 'park/new',
                meta: { title: 'Create Park'},
                component: ParkDetail
            },
            {
                path: 'banners',
                meta: { title: 'Banners'},
                component: Banners
            },
            {
                path: 'animals',
                meta: { title: 'Animals'},
                component: Animals
            },
            {
                path: 'dines',
                meta: { title: 'Dines'},
                component: Dines
            },
            {
                path: 'presentations',
                meta: { title: 'Presentations'},
                component: Presentations
            },
            {
                path: 'shops',
                meta: { title: 'Shops'},
                component: Shops
            },
            {
                path: 'restrooms',
                meta: { title: 'Restrooms'},
                component: Restrooms
            },
            {
                path: 'water-refills',
                meta: { title: 'Water Refills'},
                component: WaterRefills
            },
            {
                path: 'zones',
                meta: { title: 'Zones'},
                component: Zones
            },
            {
                path: 'services',
                meta: { title: 'Services'},
                component: Services
            },
            {
                path: 'things-to-do',
                meta: { title: 'Things To Do'},
                component: KeeperTalk,
                redirect: '/things-to-do/keeper-talks',
                children: [
                    {
                        path: '/things-to-do/keeper-talks',
                        meta: { title: 'Keeper Talks'},
                        component: KeeperTalk
                    },
                    {
                        path: '/things-to-do/animal-feedings',
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