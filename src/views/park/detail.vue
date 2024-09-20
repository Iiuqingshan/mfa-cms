<template>
  <div class="content">
    <el-form ref="form" :model="park" label-width="150px">
      <el-form-item label="Name">
        <el-input v-model="park.name"></el-input>
      </el-form-item>
      <el-form-item label="Active">
        <el-switch v-model="park.active"></el-switch>
      </el-form-item>
      <el-form-item label="Map Display">
        <el-switch v-model="park.mapDisplay"></el-switch>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="park.description"></el-input>
      </el-form-item>
      <el-form-item label="Announcement">
        <el-input type="textarea" v-model="park.announcement"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="park.address"></el-input>
      </el-form-item>
      <el-form-item label="Short Description">
        <el-input v-model="park.shortDescription"></el-input>
      </el-form-item>
      <el-form-item label="Last Entry">
        <el-input v-model="park.lastEntry"></el-input>
      </el-form-item>
      <el-form-item label="Latitude">
        <el-input v-model="park.latitude"></el-input>
      </el-form-item>
      <el-form-item label="Longitude">
        <el-input v-model="park.longitude"></el-input>
      </el-form-item>
      <el-form-item label="Static Map LinkEn">
        <el-input v-model="park.staticMapLinkEn"></el-input>
      </el-form-item>
      <el-form-item label="Static Map LinkEn">
        <el-input v-model="park.staticMapLinkCn"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      park: {
        name: '',
        active: false,
        mapDisplay: false,
        address: '',
        description: '',
        shortDescription: '',
        announcement: '',
        lastEntry: '',
        latitude: '',
        longitude: '',
        staticMapLinkEn: '',
        staticMapLinkCn: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px 10px;
}
</style>></style>