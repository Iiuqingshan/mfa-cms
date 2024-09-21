<template>
    <div>
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
    methods: {},
    watch: {
        $route(to, from) {
            // 监听路由变化
            this.list = to.matched
        }
    },
    mounted() {
        // 首次加载更新面包屑
        this.list = this.$route.matched
        console.log(this.$route.matched)
    }
}
</script>

<style></style>