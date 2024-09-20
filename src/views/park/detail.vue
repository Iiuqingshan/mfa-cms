<template>
  <div class="content">
    <el-form ref="form" :model="park" label-width="150px">
      <el-form-item label="Name">
        <el-input v-model="park.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Active">
        <el-switch v-model="park.active"></el-switch>
      </el-form-item>
      <el-form-item label="Map Display">
        <el-switch v-model="park.mapDisplay"></el-switch>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="park.description" placeholder="Description"></el-input>
      </el-form-item>
      <el-form-item label="Announcement">
        <el-input type="textarea" v-model="park.announcement" placeholder="Announcement"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="park.address" placeholder="Address"></el-input>
      </el-form-item>
      <el-form-item label="Short Description">
        <el-input v-model="park.shortDescription" placeholder="Short Description"></el-input>
      </el-form-item>
      <el-form-item label="Last Entry">
        <el-input v-model="park.lastEntry" placeholder="Last Entry"></el-input>
      </el-form-item>
      <el-form-item label="Latitude">
        <el-input v-model="park.latitude" placeholder="Latitude"></el-input>
      </el-form-item>
      <el-form-item label="Longitude">
        <el-input v-model="park.longitude" placeholder="Longitude"></el-input>
      </el-form-item>
      <el-form-item label="Static Map LinkEn">
        <el-input v-model="park.staticMapLinkEn" placeholder="Static Map LinkEn"></el-input>
      </el-form-item>
      <el-form-item label="Static Map LinkEn">
        <el-input v-model="park.staticMapLinkCn" placeholder="Static Map LinkCn"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="savePark">Create</el-button>
        <el-button @click="goBack">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getPark, savePark } from '@/apis/park'
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
    async savePark() {
      try{
        const res = await savePark(this.park)
        console.log("111111111", res)
      }catch (err) {
        console.log(err)
      }
      
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px 10px;
}
</style>