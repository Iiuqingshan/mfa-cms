<template>
    <el-container>
        <el-aside width="200px">
          <el-row>
            <el-col>
              <el-menu
                default-active="/parks"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="/parks">
                  <i class="el-icon-menu"></i>
                  <span slot="title">Park</span>
                </el-menu-item>
                <el-menu-item index="/banners">
                  <i class="el-icon-setting"></i>
                  <span slot="title">Banner</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-position"></i>
                  <span slot="title">Zone</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-fork-spoon"></i>
                  <span slot="title">Animal</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <i class="el-icon-fork-spoon"></i>
                  <span slot="title">Dine</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <i class="el-icon-setting"></i>
                  <span slot="title">Presentation</span>
                </el-menu-item>
                <el-menu-item index="7">
                  <i class="el-icon-s-goods"></i>
                  <span slot="title">Shop</span>
                </el-menu-item>
                <el-menu-item index="8">
                  <i class="el-icon-setting"></i>
                  <span slot="title">Restroom</span>
                </el-menu-item>
                <el-menu-item index="9">
                  <i class="el-icon-setting"></i>
                  <span slot="title">WaterRefill</span>
                </el-menu-item>
                <el-menu-item index="10">
                  <i class="el-icon-setting"></i>
                  <span slot="title">Service</span>
                </el-menu-item>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Things To Do</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">Keeper Talk</el-menu-item>
                    <el-menu-item index="1-2">Animal Feeding</el-menu-item>
                    <el-menu-item index="1-3">Wildlife Experience</el-menu-item>
                    <el-menu-item index="1-3">Rides</el-menu-item>
                    <el-menu-item index="1-3">Kids</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'AppLayout',
    methods: {
      handleSelect(index) {
        if(this.$router.currentRoute.path !== index) {
          this.$router.push(index)
        }
      }
    }
}
</script>

<style>
  .el-container {
    height: 100%;
  }
  
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-menu {
    border: none;
  }

  .el-dropdown-menu__item, .el-menu-item {
    text-align: left;
  }

  .el-submenu__title {
    text-align: left;
  }
</style>
