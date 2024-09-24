<template>
  <div>
    <!-- 搜索 -->
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
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearch">Search</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="group">
        <el-button type="warning" icon="el-icon-plus" size="small" @click="jumpParkPage">Create Park</el-button>
        <el-button type="danger" icon="el-icon-delete" size="small" @click="handleBatchDelete">Batch Delete</el-button>
      </div>
    </div>

    <!-- 列表 -->
    <div class="content">
      <el-table :data="parks" stripe style="width: 100%" cell-class-name="table-center"
        header-cell-class-name="active-header">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="Name" width="300"></el-table-column>
        <el-table-column prop="coordinates" label="Coordinates" width="300"></el-table-column>
        <el-table-column prop="active" label="Active">
          <template v-slot="scope">
            <CommonSwitch v-model="scope.row.active" :value="scope.row.active" @change="handleActiveSwitch(scope.row)">
            </CommonSwitch>
          </template>
        </el-table-column>
        <el-table-column prop="mapDisplay" label="Map Display">
          <template v-slot="scope">
            <CommonSwitch v-model="scope.row.mapDisplay" :value="scope.row.mapDisplay"
              @change="handleMapDisplaySwitch(scope.row)"></CommonSwitch>
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
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/pagination/index.vue"
import CommonSwitch from '@/components/commonSwitch/index.vue'
import { getParks, deletePark, changeActive, changeMapDisplay } from "@/apis/park";
export default {
  components: {
    Pagination,
    CommonSwitch
  },
  data() {
    return {
      parks: [],
      search: {
        name: "",
        aemTag: ""
      }
    };
  },
  created() {
    this.fetchParks()
  },
  methods: {
    jumpParkPage() {
      this.$router.push({ name: 'ParkDetail' });
    },
    async fetchParks() {
      try {
        const res = await getParks();
        this.parks = res.data.data.content;
      } catch (err) {
        console.error("Error fetching data:", err);
        this.$message.error(err);
      }
    },

    handleSearch() {
      console.log("handleSearch!");
    },

    handleEdit(obj) {
      this.$router.push({ name: 'ParkDetail', params: { id: obj.id } });
    },

    async handleActiveSwitch(row) {
      try {
        await changeActive(row.id, row.active)
          .then(res => {
            this.$message({
              message: 'Success!',
              type: 'success'
            });

            this.fetchParks();
          })
      } catch (err) {
        this.$message.error(err);
      }
    },

    async handleMapDisplaySwitch(row) {
      try {
        await changeMapDisplay(row.id, row.mapDisplay)
          .then(res => {
            this.$message({
              message: 'Success!',
              type: 'success'
            });

            this.fetchParks();
          })
      } catch (err) {
        this.$message.error(err);
      }
    },

    handleBatchDelete() {
      console.log("handleBatchDelete");
    },

    async handleDelete(idx, obj) {
      this.$confirm('Are you sure you want to delete?', '提示', {
        confirmButtonText: 'yes',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        deletePark(obj.id);
        this.$message({
          type: 'success',
          message: 'Success!'
        });
        this.fetchParks();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Cancel'
        });
      });
    }
  }
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

.content {
  background-color: #fff;

  /deep/ .active-header {
    color: #333;
    text-align: center;
  }

  /deep/ .table-center {
    text-align: center;
  }
}
</style>