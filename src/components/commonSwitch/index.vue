<template>
    <el-switch v-model="localValue" active-color="#13ce66" inactive-color="#ff4949" @change="changeSwitch">
    </el-switch>
</template>

<script>
export default {
    // 用于接收父组件传来的值，只接收boolean类型，默认 为false
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localValue: this.value
        }
    },
    methods: {
        changeSwitch() {
            // 向父组件发送一个事件， 父组件可以使用@change触发
            this.$emit('change', this.value);
        }
    }
}
</script>

<style></style>