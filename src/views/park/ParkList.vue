<template>

  <div>
    <!-- 搜索 -->
    <div class="header">
      <div class="search">
        <el-form :inline="true" :model="search" class="demo-form-inline">
          <el-form-item label="Name">
            <el-input v-model="search.name" placeholder="Park Name"></el-input>
          </el-form-item>
          <el-form-item label="AEM Tag">
            <el-input v-model="search.aemTag" placeholder="AEM Tag"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="small" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="group">
        <el-button type="primary" icon="el-icon-circle-plus" size="small">Create NEW</el-button>
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
      search: {
        name: '',
        aemTag: ''
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
.header {
  background-color: #fff;
  padding: 10px 10px;
  margin-bottom: 5px;
  .search,
  .group {
    text-align: left;
    margin: 10px 0;
    form {
      height: 40px;
    }
  }
}
</style>