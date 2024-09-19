<template>
  <el-table :data="parks" stripe style="width: 100%">
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
      }
    }
  }
</script>

<style>
  .el-table__header-wrapper {
    line-height: 1;
  }
</style>