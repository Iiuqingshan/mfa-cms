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
import { getParkById, createPark, updatePark } from "@/apis/park";
export default {
  name: "ParkDetail",
  data() {
    return {
      parkId: null,
      park: {
        name: "",
        active: false,
        mapDisplay: false,
        address: "",
        description: "",
        shortDescription: "",
        announcement: "",
        lastEntry: "",
        latitude: "",
        longitude: "",
        staticMapLinkEn: "",
        staticMapLinkCn: ""
      },
    };
  },
  methods: {
    async savePark() {
      const parkId = this.$route.params.id;
      console.log(parkId);
      try {
        if (parkId) {
          await updatePark(parkId, this.park);
        } else {
          await createPark(this.park);
        }
        this.$message({
          showClose: true,
          message: "Success!",
          type: "success",
        });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async loadPark() {
      const id = this.$route.params.id;
      if (id) {
        const res = await getParkById(this.$route.params.id);
        this.park = res.data.data;
      } else {
        this.park = {};
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.loadPark();
  },
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  padding: 20px 10px;
}
</style>