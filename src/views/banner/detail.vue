<template>
    <div>
        <el-form ref="form" :model="banner" label-width="80px">
            <el-form-item label="Name">
                <el-input v-model="banner.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-switch v-model="banner.active"></el-switch>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker v-model="computedDateRange" type="daterange" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { createBanner } from '@/apis/banner'
import CommonSwitch from "@/components/commonSwitch/index.vue";
export default {
    data() {
        return {
            banner: {
                name: '',
                startDate: '',
                endDate: '',
                active: false
            }
        }
    },
    methods: {
        async onSubmit() {
            createBanner(this.banner)
                .then(res => {
                    this.$notify({
                        title: 'Success!',
                        message: 'Create banner successfully!',
                        type: 'success'
                    })
                    this.$router.push({ name: 'Banner' })
                })
        }
    },
    computed: {
        computedDateRange: {
            get() {
                return [this.banner.startDate, this.banner.endDate]
            },
            set(value) {
                this.banner.startDate = value[0]
                this.banner.endDate = value[1]
            }
        }
    }
}
</script>

<style></style>