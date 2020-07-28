<template>
    <div class="login_box">
        <!-- 输入账号密码的部分 -->
        <div class="input_box">
            <!-- 登录 -->
            <div style="width: 35vw;
                height: 5vh;
                line-height: 5vh;
                color: black;
                text-align: left;
                font-weight: bold;">
                手机短信登录
            </div>

            <div>
                <input class="input_style_box" placeholder="请输入手机号" />
            </div>

            <div style="margin-top: 20px"></div>

            <div>
                <input class="input_style_box" placeholder="请输入手机验证码" />
            </div>

            <div style="margin-top: 5vh;"></div>

            <div style="font-size: 1vw; color: grey">
                未注册手机验证后自动登录
            </div>

            <div style="margin-top: 2vh;"></div>

            <van-button style="width: 80vw" type="default">确定</van-button>
        </div>

        <!-- 别的登录部分 -->
        <div class="qq_box">
            <div style="font-size: 2vw; color: grey">
                其他登录方式
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
            <div style="width: 80vw; height: 8vh; font-size: 2vw; color: grey">
                注册即代表您同意《用户协议》和《隐私保护手册》
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserLogin"
    }
</script>

<style scoped>
    .login_box {
        width: 100vw;
        height: 95vh;
        /*background-color: red;*/
    }

    .login_box .input_box{
        width: 85vw;
        height: 30vh;

        position: absolute;
        margin-top: 20vh;
        left: 0;
        right: 0;
        top:0;
        bottom:0;
        margin-left: auto;
        margin-right: auto;

    }

    .input_style_box{
        width: 80vw;
        height: 5vh;
        border: 0;
        border-bottom: 1px solid lightgrey;
        font-size: 4vw;
    }

    .qq_box{
        width: 80vw;
        height: 20vh;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 75vh;
    }
    .bottom_login_box{
        width: 70vw;
        height: 10vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .select_login_box{
        width: 12vw;
        height: 18vw;
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
        background-color: red;
    }
</style>