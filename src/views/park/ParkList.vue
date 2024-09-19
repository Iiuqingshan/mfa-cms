<template>

  <div>
    <!-- 搜索 -->
    <div class="header">
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="group">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
      </div>
    </div>

    <!-- 列表 -->
    <div class="content">
      <el-table :data="parks" stripe style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="300"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="300"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template v-slot="scope">
            <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"
              style="cursor: pointer; margin-right: 10px;"></i>
            <i class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" style="cursor: pointer;"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parks: [],
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  mounted() {
    this.fetchParks()
  },
  methods: {
    async fetchParks() {
      try {
        const res = await this.$http.get("/cms/parks")
        this.parks = res.data.content
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    },

    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="less" scoped>
.search,
.group {
  text-align: left;
  padding: 10px 10px;
}
</style>