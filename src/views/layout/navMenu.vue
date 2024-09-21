<template>
    <el-aside width="200px">
        <el-menu :default-active="$route.path" exact background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" router>
            <!-- 遍历menus，动态加载menu item 和path 是传参-->
            <NavItem v-for="item in menus" :key="item.path" :item="item" :path="item.path" />
        </el-menu>
    </el-aside>
</template>

<script>
import NavItem from './navItem.vue'
export default {
    components: {
        NavItem
    },
    data() {
        return {
            activeMenu: '/parks',
            // 统一管理menu
            menus: [
                {
                    name: 'Park',
                    path: '/parks',
                    icon: 'el-icon-menu'
                },
                {
                    name: 'Banner',
                    path: '/banners',
                    icon: 'el-icon-position'
                },
                {
                    name: 'Zone',
                    path: '/zones',
                    icon: 'el-icon-position'
                },
                {
                    name: 'Animal',
                    path: '/animals',
                    icon: 'el-icon-fork-spoon'
                },
                {
                    name: 'Dine',
                    path: '/dines',
                    icon: 'el-icon-fork-spoon'
                },
                {
                    name: 'Presentation',
                    path: '/presentations',
                    icon: 'el-icon-setting'
                },
                {
                    name: 'Shop',
                    path: '/shops',
                    icon: 'el-icon-s-goods'
                },
                {
                    name: 'Restroom',
                    path: '/restrooms',
                    icon: 'el-icon-setting'
                },
                {
                    name: 'WaterRefill',
                    path: '/water-refills',
                    icon: 'el-icon-setting'
                },
                {
                    name: 'Service',
                    path: '/services',
                    icon: 'el-icon-setting'
                },
                {
                    name: 'Things To Do',
                    path: '/things-to-dos',
                    icon: 'el-icon-setting',
                    children: [{
                        name: 'Keeper Talks',
                        path: '/things-to-do/keeper-talks',
                    }, {
                        name: 'Aniaml Feeding',
                        path: '/things-to-do/animal-feedings',
                    }]
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.is-active {
    background-color: rgb(66, 129, 175) !important;
}
</style>