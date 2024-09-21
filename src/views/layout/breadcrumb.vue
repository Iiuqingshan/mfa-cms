<template>
    <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="i in list" :key="i.path">
                <router-link :to="i.path">{{ i.meta.title }}</router-link> 
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getBreadcrumb(matched) {
            if (matched[0].path === '') {
                matched = matched.slice(1)
            }
            this.list = matched
        }
    },
    watch: {
        $route(to, from) {
            // 监听路由变化
            this.getBreadcrumb(to.matched)
        }
    },
    mounted() {
        // 首次加载更新面包屑
        this.getBreadcrumb(this.$route.matched)
    }
}
</script>

<style>
.breadcrumb {
    padding: 10px 10px 10px 0;
}
</style>