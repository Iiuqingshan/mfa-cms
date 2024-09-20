<template>
    <div>
        <!-- 无子级 -->
        <el-menu-item :index="path" v-if="!item.children">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <!-- 有子级 -->
        <el-submenu :index="path" v-else>
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
            </template>
            <NavItem v-for="sub in item.children" :key="sub.path" :item="sub" :path="sub.path" />
        </el-submenu>
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: ['item', 'path'],
    data() {
        return {}
    }
}
</script>

<style></style>