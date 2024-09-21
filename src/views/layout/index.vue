<template>
  <el-container>
    <NavMenu />
    <el-container>
      <el-header>
        <Breadcrumb />
        <el-button type="primary" @click="goLogin">退出</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from './navMenu'
import Breadcrumb from './breadcrumb.vue'
export default {
  name: 'AppLayout',
  components: {
    NavMenu,
    Breadcrumb
  },
  data() {
    return {
    }
  },
  methods: {
    goLogin() {
      this.$router.push('/login')
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
  text-align: right;
  line-height: 16px;
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
