<template>
  <div>
    <MainView />
    <!-- 切换条 -->
    <div class="bottom_box">
      <van-tabbar class="bottom_box" v-model="active" active-color="#f8a362" inactive-color="#000">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">心仪学校</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

import MainView from "./MainView";

export default {
  name: 'IndexPage',
  components: {MainView},
  props: {
    
  },
  data() {
    return {
      active: 0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom_box{
    width: 100vw;
    position: fixed;
    top: 92vh;
    height: 8vh;
    font-size:20px;
  }
  .van-tabbar-item {
    width: 33vw;
  }
</style>
