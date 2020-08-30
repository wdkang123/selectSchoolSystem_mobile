<template>
  <div>
    <!-- 我的院校模块 -->
    <div class="wrapper">
        <!--文字 -->
        <div class="wrapper_title">
            <span> 我的院校 </span>
        </div>

        <!--学校 -->
        <div class="school_wrapper">
            <!--文字 -->
            <div class="school_wrapper_title1_row">
                <div style="margin-left: 10px">三一学校</div>
                <div style="margin-left: 10px">9.2分</div>
                <div>（冲刺校）</div>
            </div>
            <div class="school_wrapper_title2">Trinity School-CA</div>
            <!--喜欢 -->
            <div class="school_wrapper_like">
                <div v-on:click="liked = !liked" v-if="liked">
                    <font-awesome-icon :icon="like" style="font-size: 6vw; color: #fff" />
                </div>
                <div v-on:click="liked = !liked" v-else>
                    <font-awesome-icon :icon="['fas', 'heart']" style="font-size: 6vw; color: #f8a362" />
                </div>
            </div>
        </div>
    </div>
    
    <!-- 院校对比模块 -->
    <div class="wrapper" style="margin-top: 15px">
        <!--文字 -->
        <div class="wrapper_title">
            <span> 院校对比 </span>
        </div>

        <!--学校对比 -->
        <div class="select_wrapper">
            <v-select :options="options" class="select"></v-select>
            <v-select :options="options" class="select"></v-select>
        </div>

        <!--信息对比 -->
        <div class="information_wrapper">
            <div><p>第一名</p></div>
            <div><p class="information_text1">排名</p></div>
            <div><p>第二名</p></div>
        </div>
        <div class="information_wrapper">
            <div><p>第一名</p></div>
            <div><p class="information_text1">地区</p></div>
            <div><p>第二名</p></div>
        </div>
        <div class="information_wrapper">
            <div><p>第一名</p></div>
            <div><p class="information_text1">类型</p></div>
            <div><p>第二名</p></div>
        </div>

        <!--添加对比项 -->
        <div class="button" v-on:click="onAdd"><p style="color: #fff; font-weight: bold">添加对比项</p></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, fas)

import Vue from 'vue'
import vSelect from 'vue-select'
// import "vue-select/src/scss/vue-select.scss";
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

export default {
  name: 'SchoolView',
  components: {
      FontAwesomeIcon
  },
  props: {
  },
  created() {
  },
  data() {
    return {
        like: faHeart,
        solid: fas,
        liked: true,
        options: ["三一学校"],
    }
  },
  methods: {
        onAdd() {
            console.log("add");
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        width: 95vw;
        height: max-content;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 1px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .wrapper_title {
        width: 90vw;
        height: 10vw;
        line-height: 10vw;
        font-size: 5.5vw;
        font-weight: bold;
        color: #6c7277;
        margin-left: 10px;
        margin-top: 5px;
        text-align: left;
    }
    .school_wrapper {
        width: 90vw;
        height: 25vw;
        background-color: antiquewhite;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        padding-top: 10px;
        border-radius: 10px;
        background-image: url("../assets/img/interesting_school_1.png");
        background-size: cover;
    }
    .school_wrapper_title1_row {
        display: flex;
        font-size: 5vw;
        font-weight: bold;
        line-height: 5vw;
        color: #fff;
    }
    .school_wrapper_title2 {
        display: flex;
        font-size: 4.5vw;
        font-weight: bold;
        line-height: 5vw;
        color: #fff;
        margin-left: 10px;
        margin-top: 8px;
    }
    .school_wrapper_like {
        text-align: end;
        margin-right: 15px;
        margin-top: 2vh;
        line-height: 6vw;
    }
    .select_wrapper {
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .select {
        width: 40vw;
    }
    .information_wrapper {
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;
    }
    .information_text1 {
        font-weight: bold;
        color: #6c7277;
    }
    .button {
        width: 50vw;
        line-height: 10vw;
        background-color: #f8a362;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }
</style>

<!-- cannot modify the default css under "scoped" attribute -->
<style>
    .select .vs__search::placeholder,
    .select .vs__dropdown-toggle,
    .select .vs__dropdown-menu {
        background: #fff;
        border: #000 1px solid;
        color: #000;
        text-transform: lowercase;
        font-variant: small-caps;
        min-width: auto;
    }
</style>