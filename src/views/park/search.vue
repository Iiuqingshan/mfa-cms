<template>
    <div class="header">
        <div class="search">
            <el-form :inline="true" :model="search" class="demo-form-inline">
                <el-form-item label="Name">
                    <el-input v-model="search.name" placeholder="Park Name" size="small"></el-input>
                </el-form-item>
                <el-form-item label="AEM Tag">
                    <el-input v-model="search.aemTag" placeholder="AEM Tag" size="small"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" size="small"
                        @click="handleSearch">Search</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="group">
            <el-button type="warning" icon="el-icon-plus" size="small" @click="jumpParkPage">Create Park</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: {
                name: "",
                aemTag: ""
            },
        };
    },
    methods: {
        handleSearch() {
            this.$emit("search", this.search);
        },
        jumpParkPage() {
            this.$router.push({ name: "ParkDetail" });
        },
    },
};
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    padding: 10px 10px;
    margin-bottom: 5px;

    .search,
    .group {
        text-align: left;
        margin: 20px 0;

        form {
            height: 40px;
        }
    }
}
</style>