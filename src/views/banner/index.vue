<template>
  <div>
    <div class="group">
      <el-button type="warning" icon="el-icon-plus" size="small" @click="jumpBannerPage">Create Banner</el-button>
    </div>
    <div>
      <el-table :data="banners" stripe style="width: 100%" cell-class-name="table-center"
        header-cell-class-name="active-header">
        <el-table-column prop="title" label="Title" width="180">
        </el-table-column>
        <el-table-column prop="order" label="Display Order" width="180">
        </el-table-column>
        <el-table-column label="Start Time">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.startDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="End Time">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.endDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Active">
          <template v-slot="scope">
            <CommonSwitch v-model="scope.row.active" :value="scope.row.active"></CommonSwitch>
          </template>

        </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template v-slot="scope">
            <el-button type="success" icon="el-icon-edit" size="small" circle
              @click="handleEdit(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" circle
              @click="handleDelete(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import CommonSwitch from "@/components/commonSwitch/index.vue";
import { getBanners } from '@/apis/banner'
export default {
  components: {
    CommonSwitch
  },
  data() {
    return {
      banners: []
    }
  },
  mounted() {
    this.fetchBanner()
  },
  methods: {
    async fetchBanner() {
      const res = await getBanners()
      console.log(res)
      this.banners = res.data.data.content
    },
    jumpBannerPage() {
      this.$router.push({ name: 'BannerDetail' })
    },
    handleEdit(row) {
      this.$router.push({ name: 'BannerDetail', params: { id: row.id } })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .active-header {
  text-align: center;
}

/deep/ .table-center {
  text-align: center;
}

.group {
  background-color: #fff;
  margin-bottom: 10px;
}
</style>