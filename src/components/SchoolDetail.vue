<template>
  <div>
    <!-- 左上角返回 -->
    <div v-on:click="onGoBack" class="return_button">
        <font-awesome-icon :icon="goBackIcon" style="font-size: 6vw; color: #fff;" />
    </div>

    <!-- 图片 -->
    <div class="image_wrapper"></div>

    <!-- 内容 -->
    <div class="content_wrapper">
        <div style="width: 90vw;
                    margin-left: auto;
                    margin-right: auto;">
            <!-- 标题 -->
            <div style="display: flex;
                        font-size: 5vw;
                        font-weight: bold;
                        color: #000;">
                <p>格罗顿学校</p>
            </div>
            <div style="display: flex;
                        font-size: 4vw;
                        font-weight: bold;
                        color: #000;">
                <p>Gronton</p>
            </div>
            <div style="display: flex;
                        font-size: 3.5vw;
                        color: #000;
                        justify-content: space-between;
                        margin-bottom: 20px">
                <p style="height: max-content; margin-bottom: 0px; margin-top: auto;">美国马萨诸塞州格罗顿镇</p>
                <div class="add_button" v-on:click="onAdd"><p style="color: #fff; font-weight: bold">加入选校</p></div>
            </div>

            <!-- 学校简介 -->
            <div style="display: flex;
                        font-size: 4vw;
                        font-weight: bold;
                        color: #000;">
                <p>学校简介</p>
            </div>
            <div style="display: flex;
                        font-size: 3.5vw;
                        color: #000;
                        text-align: start;
                        margin-top: 5px">
                <p>格罗顿学校（Groton School）是一所位于美国马萨诸塞州格罗顿镇的高中。在2003年的美国高中排名，格罗顿学校的教学质量位居美国第二。</p>
            </div>
            <div v-on:click="translated = !translated" class="translate_button">
                <font-awesome-icon :icon="translateIcon" style="font-size: 6vw; color: #f8a362;" />
            </div>
            <div style="display: flex;
                        font-size: 4vw;
                        font-weight: bold;
                        color: #000;
                        margin-top: 5px;" v-if="translated">
                <p>School profile</p>
            </div>
            <div style="display: flex;
                        font-size: 3.5vw;
                        color: #000;
                        text-align: start;
                        margin-top: 5px" v-if="translated">
                <p>Groton School was founded in 1884 by the Rev. Endicott Peabody, a member of a prominent Massachusetts family and an Episcopal clergyman.</p>
            </div>

            <!-- 基本信息 -->
            <div style="display: flex;
                        font-size: 4vw;
                        font-weight: bold;
                        color: #000;
                        margin-top: 5px">
                <p>基本信息</p>
            </div>
            <div style="display: flex;
                        font-size: 3.5vw;
                        color: #000;
                        margin-top: 5px;
                        justify-content: space-between;">
                <p style="color: #6c7277">院校排名</p>
                <p>全美第33名私立高中</p>
            </div>
            <div style="display: flex;
                        font-size: 3.5vw;
                        color: #000;
                        margin-top: 5px;
                        justify-content: space-between;">
                <p style="color: #6c7277">创始年份</p>
                <p>1884</p>
            </div>
        </div>

        <!-- 学长学姐点评 -->
        <div class="review_wrapper">
            <!-- 标题 -->
            <div class="review_wrapper_title">
                <span> 学长学姐点评 </span>
            </div>

            <!-- 点评 -->
            <div class="review_content_wrapper">
                <div style="width: 20vw;"><img class="review_image" src="../assets/img/1.jpg"/></div>
                <div style="width: 70vw; 
                            text-align: start;
                            font-size: 3.5vw;
                            color: #000;
                            margin-right: 2.5vw">
                    <p>学校周边环境很好，安全性高。学校里华人很少，适合提高语言能力，学校的老师也比较负责任。</p>
                </div>
            </div>

            <div class="review_more" v-on:click="onMore">
                <p style="margin-right: 2.5vw;">更多点评</p>
            </div>

        </div>
        
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faLanguage } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'SchoolDetail',
  components: {
      FontAwesomeIcon
  },
  props: {
  },
  data() {
    return {
        goBackIcon: faChevronLeft,
        translateIcon: faLanguage,
        translated: false,
    }
  },
  methods: {
        onGoBack() {
            console.log("goBack");
        },
        onAdd() {
            console.log("add");
        },
        onMore() {
            console.log("more");
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .return_button {
        margin-top: 5vw;
        margin-left: 5vw;
        position: absolute;
    }
    .image_wrapper {
        width: 100vw;
        height: 30vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        background-image:linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0)), url("../assets/img/interesting_school_1.png");
        background-size: cover;
    }
    .content_wrapper {
        position: absolute; 
        top: 26vh; 
        bottom: 0;
        left: 0;
        right: 0;
        height: max-content;
    }
    .add_button {
        width: 25vw;
        line-height: 8vw;
        background-color: #f8a362;
    }
    .translate_button {
        margin-top: 5px;
        text-align: end;
    }
    .review_wrapper {
        width: 95vw;
        height: max-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        padding-bottom: 1px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .review_wrapper_title {
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
    .review_content_wrapper {
        display: flex; 
        width: 90vw; 
        margin-left: auto; 
        margin-right: auto
    }
    .review_image {
        width: 13vw;
        height: 13vw;
        object-fit: cover;
        border-radius: 10vw;
        margin-bottom: auto;
    }
    .review_more {
        width: 90vw; 
        margin-left: auto; 
        margin-right: auto;
        text-align: end;
        font-size: 3.5vw;
        color: #6c7277;;
        margin-top: 5px;
    }
</style>
