<template>
  <el-container>
    <NavMenu />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from './navMenu.vue'
export default {
  name: 'AppLayout',
  components: {
    NavMenu
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.el-container {
  height: 100%;
}

.el-card__body,
.el-main {
  padding: 10px;
}

.el-header {
  background-color: #B3C0D1;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
}

.el-menu {
  border: none;
}

.el-dropdown-menu__item,
.el-menu-item {
  text-align: left;
}
</style>
