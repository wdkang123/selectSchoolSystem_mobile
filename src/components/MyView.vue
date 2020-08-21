<template>
    <div>
        <!-- 顶部的橙色块儿 -->
        <div class="top_box">
            <img class="top_box" src="../assets/img/tuoyuan.jpg">
        </div>

        <!-- 登录块儿 -->
        <div class="login_box">
            <!-- 别的登录部分 -->
            <div class="qq_box">
                <div style="font-size: 5vw; font-weight: bold; color: black; margin-top: 3vw;">
                    登录使用更多功能
                </div>
                <div style="margin-top: 2vh;"></div>
                <!-- 三种方式 -->
                <div class="bottom_login_box">
                    <div class="select_login_box">
                        <div style="width: 10vw;">
                            <img src="../assets/img/wechat.png" />
                        </div>
                    </div>

                    <div style="margin-left: 17vw; margin-right: 17vw;" class="select_login_box">
                        <div style="width: 10vw">
                            <img src="../assets/img/qq.png" />
                        </div>
                    </div>

                    <div class="select_login_box">
                        <div style="width: 10vw">
                            <img src="../assets/img/weibo.png" />
                        </div>
                    </div>
                </div>

                <!-- 注册表示您···· -->
                <div style="width: 80vw; height: 5vw; font-size: 2vw; color: grey; text-align: center">
                    手机短信登录
                </div>
            </div>
        </div>

        <div class="last_activity_box" :style="{'top': last_activity_top}" v-show="switch_login">
            <!-- title -->
            <div class="title_box">
                <span>
                    近期活动
                </span>
            </div>
            <!-- content -->
            <div class="content_box">
                <div style="width: 95vw">
                    <img style="width: 95vw" src="../assets/img/activity_1.png">
                </div>
            </div>
            <van-divider />
            <div class="content_box">
                <div style="width: 95vw">
                    <img style="width: 95vw" src="../assets/img/activity_2.png">
                </div>
            </div>
            <van-divider />
            <div class="content_box">
                <div style="width: 95vw">
                    <img style="width: 95vw" src="../assets/img/activity_3.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyView",
        created() {

        },
        data() {
            return {
                switch_login: true,
                last_activity_top: '60vw',
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .top_box{
        width: 100vw;
        height: 20vh;
        background-color: #f8a362;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .login_box{
        width: 95vw;
        height: 40vw;
        position: absolute;
        top: 15vw;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    .qq_box{
        width: 80vw;
        height: 15vw;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }

    .bottom_login_box{
        width: 70vw;
        height: 15vw;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .select_login_box{
        width: 12vw;
        height: 15vw;
        float: left;
    }

    .select_login_box img {
        width: 38px;
        height: 38px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }

    .last_activity_box{
        width: 95vw;
        height: 45vh;

        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

        margin-bottom: 10vh;
    }
    .last_activity_box .title_box{
        width: 90vw;
        height: 10vw;
        text-align: left;
        line-height: 10vw;
        font-size: 5.5vw;
        margin-left: 10px;
        margin-top: 5px;
        font-weight: bold;
        color: #6c7277;
    }
    .last_activity_box .content_box{
        width: 95vw;
        height: 10vh;
    }
</style>