<template>
  <div style="height: 100%">
    <!-- 搜索 -->
    <el-form :inline="true" :model="search" class="search" size="small">
      <el-form-item label="Name">
        <el-input v-model="search.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="parks" stripe height="100%" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="300"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="300"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column  label="操作" align="center" width="160">
        <template v-slot="scope">
          <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" style="cursor: pointer; margin-right: 10px;"></i>
          <i class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" style="cursor: pointer;"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: {
          name: ''
        },
        parks: []
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
      resetSearch() {
        this.search.name = ''
      },
      handleSearch() {
        // 处理搜索逻辑
      }
    }
  }
</script>

<style>
  .el-table__header-wrapper {
    line-height: 1;
  }
  .search {
    background-color: #fff;
    text-align: left;
    height: 40px;
    margin: 0 0 10px 0;
    padding: 10px 10px;
  }
</style>