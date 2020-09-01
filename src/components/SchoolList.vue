<template>
    <!-- 按照条件选择学校之后 学校的列表 -->
    <div class="match_select_box">
        <!-- 学校list的div -->
        <div>
            <!-- 学校列表 -->
            <div class="school_item" v-for="(index, key) in school_list" v-show="key < 4" :key="key" :id="index.id">
                <!-- 底部的图片 -->
                <div class="item_img">
                    <img class="item_img_img" src="../assets/img/interesting_school_1.png" />
                </div>
                <!-- 顺序标号 -->
                <div class="item_left_box">
                    <div style="width: 5vw;
                                height: 12vw;
                                position: absolute;
                                left: 0;
                                ">
                        <img style="width: 5vw;
                                height: 12vw;
                                position: absolute;
                                left: 0;
                                "
                             src="../assets/img/rank_tag.png" />
                    </div>
                    <div style="width: 5vw; height: 5vw; position: absolute; font-size: 4vw; margin-top: 3vw; color: white; ">
                        {{ key + 1 }}
                    </div>
                </div>
                <!-- 学校信息 -->
                <div class="item_name_box">
                    <!-- 中文名 -->
                    <div class="item_name_box_up">
                        {{ index.name }}
                    </div>
                    <!-- 英文名 -->
                    <div class="item_name_box_down">
                        {{ index.name }}
                    </div>
                </div>
                <!-- 加入心仪学校的按钮 -->
                <div class="item_button">
                    <van-button class="item_button" style="color: white; background-color: #f8a362; border: #f8a362">
                        加入心仪的院校
                    </van-button>
                </div>
            </div>

            <van-button style="width: 30vw; height: 10vw; margin-top: 5vw; color: white; background-color: #f8a362; border: #f8a362">
                回到首页
            </van-button>

            <!-- 留个空 -->
            <div style="width: 100vw; height: 10vh;">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SchoolList",
        props:[
            "school_list"
        ],
    }
</script>

<style scoped>
    .match_select_box{
        width: 95vw;
        height: auto;
        position: absolute;
        top: 10vh;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;

    }
    .school_item{
        width: 95vw;
        height: 40vw;
        margin-top: 5vw;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        overflow: hidden;
    }

    .item_img{
        width: 95vw;
        height: 40vw;
        position: absolute;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .item_img_img{
        width: 95vw;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
    }

    .item_left_box{
        width: 5vw;
        height: 10vw;
        position: absolute;
        margin-left: 5vw;
    }
    .item_name_box{
        width: 80vw;
        height: 10vw;
        position: absolute;
    }
    .item_name_box_up{
        width: 80vw;
        height: 5vw;
        margin-top: 1.5vw;
        color: white;
        font-weight: bold;
        font-size: 4vw;
        float: left;
    }
    .item_name_box_down{
        width: 80vw;
        height: 5vw;
        color: white;
        font-weight: bold;
        font-size: 2vw;
        float: left;
    }
    .item_button{
        width: 30vw;
        height: 7vw;
        position: absolute;
        right: 2vw;
        margin-top: 15vw;
        font-size: 2vw;
    }
</style>