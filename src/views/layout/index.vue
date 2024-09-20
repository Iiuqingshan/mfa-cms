<template>
  <el-container>
    <Menu />
    <el-container>
      <el-header>
        <el-button type="primary" @click="goLogin">退出</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './menu.vue'
export default {
  name: 'AppLayout',
  components: {
    Menu
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
  background-color: #B3C0D1;
  text-align: right;
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
