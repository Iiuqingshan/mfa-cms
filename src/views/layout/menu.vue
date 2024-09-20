<template>
    <el-aside width="200px">
        <el-menu :default-active="activeMenu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            router>
            <el-menu-item index="/parks">
                <i class="el-icon-menu"></i>
                <span slot="title">Park</span>
            </el-menu-item>
            <el-menu-item index="/banners">
                <i class="el-icon-setting"></i>
                <span slot="title">Banner</span>
            </el-menu-item>
            <el-menu-item index="/zones">
                <i class="el-icon-position"></i>
                <span slot="title">Zone</span>
            </el-menu-item>
            <el-menu-item index="/animals">
                <i class="el-icon-fork-spoon"></i>
                <span slot="title">Animal</span>
            </el-menu-item>
            <el-menu-item index="/dines">
                <i class="el-icon-fork-spoon"></i>
                <span slot="title">Dine</span>
            </el-menu-item>
            <el-menu-item index="/presentations">
                <i class="el-icon-setting"></i>
                <span slot="title">Presentation</span>
            </el-menu-item>
            <el-menu-item index="/shops">
                <i class="el-icon-s-goods"></i>
                <span slot="title">Shop</span>
            </el-menu-item>
            <el-menu-item index="/restrooms">
                <i class="el-icon-setting"></i>
                <span slot="title">Restroom</span>
            </el-menu-item>
            <el-menu-item index="/waterrefills">
                <i class="el-icon-setting"></i>
                <span slot="title">WaterRefill</span>
            </el-menu-item>
            <el-menu-item index="/services">
                <i class="el-icon-setting"></i>
                <span slot="title">Service</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Things To Do</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">Keeper Talk</el-menu-item>
                    <el-menu-item index="1-2">Animal Feeding</el-menu-item>
                    <el-menu-item index="1-3">Wildlife Experience</el-menu-item>
                    <el-menu-item index="1-3">Rides</el-menu-item>
                    <el-menu-item index="1-3">Kids</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
            activeMenu: '/parks'
        }
    }
}
</script>

<style lang="less" scoped>
.is-active {
    background-color: rgb(66, 129, 175) !important;
}
</style>