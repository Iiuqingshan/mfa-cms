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
            // 当开关状态发生变化时，更新 localValue，并通知父组件
            this.$emit('input', this.localValue); // 触发 input 事件，将最新值传递给父组件
            this.$emit('change', this.localValue); // 可选：用于额外的逻辑处理
        }
    },
    watch: {
        value(newValue) {
            // 如果父组件的值改变，更新 localValue
            this.localValue = newValue
        }
    }
}
</script>

<style></style>