<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('/')
        }
    }
}
</script>

<style></style>