<template>
    <!-- 这里布局绝对定位-->
    <div>
        <!-- 顶部的橙色块儿 -->
        <div class="top_box">
            <img class="top_box" src="../assets/img/tuoyuan.jpg">
        </div>
        <!-- 顶部的搜索框 -->
        <div class="search_box">
            <form action="/" style="width: 88vw; height: 7vh; float: left; color: #d1cdd7">
                <van-search
                    v-model="search_value"
                    placeholder="在此输入您的目标院校"
                    background="#f8a362"
                    shape="round"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
            <van-icon name="more-o" size="8vw" color="white" v-on:click="switchPanel()"
                    
                      style="
                            width: 8vw; height: 8vw;
                            margin-top: 1.5vh;
                            float: left;" />
        </div>

        <transition name="fade" mode :duraion="5000">
            <!-- 可能感兴趣的院校 模块 -->
            <!--文字 -->
            <div class="interesting_box" v-show="switch_interesting">
                <div style="
                            width: 90vw;
                            height: 10vw;
                            line-height: 10vw;
                            font-size: 5.5vw;
                            font-weight: bold;
                            color: #6c7277;
                            margin-left: 10px;
                            margin-top: 5px;
                            text-align: left;">

                    <span class=" animate__fadeIn">
                        您可能感兴趣的院校
                    </span>
                </div>

                <!-- 轮播 -->
                <van-swipe class="my-swipe"
                           :loop="false"
                           :width="swipe_width"
                           style="height: 105vw"
                           indicator-color="white">
                    <van-swipe-item>
                        <div class="interesting_img_box">
                            <img class="interesting_img" src="../assets/img/interesting_school_1.png" />
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="interesting_img_box">
                            <img class="interesting_img" src="../assets/img/interesting_school_1.png" />
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="interesting_img_box">
                            <img class="interesting_img" src="../assets/img/interesting_school_1.png" />
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div class="interesting_img_box">
                            <img class="interesting_img" src="../assets/img/interesting_school_1.png" />
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </transition>

        <transition name="fade" mode :duraion="5000">
            <!-- 选择学校的模块 模块 -->
            <div class="select_school_box" v-show="switch_select_box" style="margin-bottom: 85px" >
                <!--文字 -->
                <div style="
                            width: 90vw;
                            height: 10vw;
                            line-height: 10vw;
                            font-size: 5.5vw;
                            font-weight: bold;
                            color: #6c7277;
                            margin-left: 10px;
                            margin-top: 5px;
                            text-align: left;">
                    <span>
                        选校助手
                    </span>
                </div>
                
                <!-- form box -->
                <div>
                    <van-form @submit="onSubmit" class="select_form_box">
                        <div class="form_line_box">
                            <div class="select_school_lable">
                                学校排名
                            </div>

                            <div style="width: 1vw; height: 5vh; margin-left: 25vw; float: left"></div>

                            <!-- 左边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="rank_left" class="select_school_input" />
                            </div>

                            <!-- 一条灰色的线 -->
                            <div style="width: 5vw; height: 1px; margin-top: 2.2vh; border-top: 1px solid lightgrey; float: left">

                            </div>
                            <!-- 右边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="rank_right" class="select_school_input" />
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                全年学费
                            </div>

                            <div style="width: 1vw; height: 5vh; margin-left: 25vw; float: left"></div>

                            <!-- 左边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="cost_left" class="select_school_input" />
                            </div>

                            <!-- 一条灰色的线 -->
                            <div style="width: 5vw; height: 1px; margin-top: 2.2vh; border-top: 1px solid lightgrey; float: left">

                            </div>
                            <!-- 右边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="cost_right" class="select_school_input" />
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                TOFEL
                            </div>

                            <div style="width: 1vw; height: 5vh; margin-left: 25vw; float: left"></div>

                            <!-- 左边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="tofel_left" class="select_school_input" />
                            </div>

                            <!-- 一条灰色的线 -->
                            <div style="width: 5vw; height: 1px; margin-top: 2.2vh; border-top: 1px solid lightgrey; float: left">

                            </div>
                            <!-- 右边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="tofel_right" class="select_school_input" />
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                SSAT
                            </div>

                            <div style="width: 1vw; height: 5vh; margin-left: 25vw; float: left"></div>

                            <!-- 左边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="ssat_left" class="select_school_input" />
                            </div>

                            <!-- 一条灰色的线 -->
                            <div style="width: 5vw; height: 1px; margin-top: 2.2vh; border-top: 1px solid lightgrey; float: left">

                            </div>
                            <!-- 右边的input -->
                            <div style="width: 20vw; height: 2.5vh; float: left;">
                                <input type="text" v-model="ssat_right" class="select_school_input" />
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                学校类型
                            </div>
                        </div>
                        <div class="form_line_box">
                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="woman">
                                <label for="woman">
                                    女校
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="man">
                                <label for="man">
                                    男校
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="all">
                                <label for="all">
                                    混合男女
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                地理位置
                            </div>
                        </div>
                        <div class="form_line_box">
                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="xinyingelan">
                                <label for="xinyingelan">
                                    新英格兰
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="xibudiqu">
                                <label for="xibudiqu">
                                    西部地区
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="zhongbudiqu">
                                <label for="zhongbudiqu">
                                    中部地区
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                附近环境
                            </div>
                        </div>
                        <div class="form_line_box">
                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="xiangcun">
                                <label for="xiangcun">
                                    城郊/乡村
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="chengshi">
                                <label for="chengshi">
                                    城市
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                开设年级
                            </div>
                        </div>
                        <div class="form_line_box">
                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="k12">
                                <label for="k12">
                                    K-12
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="712">
                                <label for="712">
                                    7-12
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="512">
                                <label for="512">
                                    5-12
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>
                        </div>

                        <div class="form_line_box">
                            <div class="select_school_lable">
                                宗教信仰
                            </div>
                        </div>
                        <div class="form_line_box">
                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="wuzongjiao">
                                <label for="wuzongjiao">
                                    无宗教
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>

                            <div class="my_checkbox">
                                <input type="checkbox" name="sex2" id="jidu">
                                <label for="jidu">
                                    基督教
                                </label>
                                <div class="right_box">
                                    √
                                </div>
                            </div>
                        </div>
                    </van-form>
                </div>

                <!-- 更多偏好 -->
                <div style="width: 20vw;
                height: 3vh;
                color: lightgrey;
                font-size: 15px;
                line-height: 3vh; float: right;" is-link @click="showPopup">
                    更多偏好▼
                </div>

                <!-- 中间留一些缝隙 -->
                <div style="margin-top: 5vh"></div>

                <van-button v-on:click="selectSchools()" type="warning">
                    院校匹配
                </van-button>

            </div>
        </transition>

        <!-- 匹配到的院校 -->
        <div class="match_scool" v-show="match_box">
            <SchoolList v-bind:school_list="match_school_box" />

        </div>


        <!-- 近期活动模块 -->
        <div class="last_activity_box" :style="{'top': last_activity_top}" v-show="switch_interesting">
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


        <!-- 登录窗口 -->
        <van-popup v-model="show" round>
            <div style="width: 85vw; height: 30vh;">
                <div style="width: 85vw; height: 5vh; ">

                </div>
                <!-- title -->
                <div style="width: 85vw;
                height: 5vh;
                font-weight: bold;
                line-height: 5vh;
                font-size: 2.5vh;
                ">
                    登录使用更多功能
                </div>

                <!-- button -->
                <!-- 中间留一些缝隙 -->
                <div style="margin-top: 3vh"></div>

                <van-button v-on:click="UserLogin" style="width: 60vw" type="warning">
                    现在登录
                </van-button>

                <!-- 中间留一些缝隙 -->
                <div style="margin-top: 3vh"></div>

                <!-- 体验 -->
                <div style="width: 85vw; height: 5vh; line-height: 5vh; font-size: 2vh; color: #f8a362">
                    体验初级偏好检索
                </div>
            </div>
        </van-popup>

        <van-popup v-model="login_ing">
            <!-- 控制条 -->
            <div style="
            width: 100vw;
            height: 5vh; font-size: 20px; line-height: 5vh;">
                <div v-on:click="CloseLogin" style="margin-left: 5vw; color: black; font-weight: lighter; float: left">
                    X
                </div>
                <div style="width: 90vw; font-size: 2vh;">
                    登录
                </div>
            </div>
            <UserLogin />
        </van-popup>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import UserLogin from "./UserLogin";
    import SchoolList from "./SchoolList";

    export default {
        name: "MainView",
        components: {
            UserLogin,
            SchoolList
        },
        mounted () {
            let orderWidth = document.documentElement.clientWidth;
            // window.console.log(orderWidth);
            this.swipe_width = orderWidth / 414 * 300;
        },
        data() {
            return {
                show: false,
                login_ing: false,
                search_value: '',

                //轮播宽度
                swipe_width: 300,
                last_activity_top: '155vw',
                switch_interesting: true,
                switch_select_box: false,
                rank_left: 1,
                rank_right: 80,
                cost_left: 15000,
                cost_right: 70000,
                tofel_left: 80,
                tofel_right: 120,
                ssat_left: 0.75,
                ssat_right: 1.0,
                school_type_group: [],
                //匹配到的学校的列表
                match_box: false,
                match_school_box: "",
            };
        },
        methods: {
            switchPanel() {
                if (this.switch_interesting) {
                    this.switch_interesting = false;
                    this.switch_select_box = true;
                } else {
                    this.switch_interesting = true;
                    this.switch_select_box = false;
                }
                this.match_box = false;
            },
            selectSchools() {
                this.$get('/school/getAllSchool', {

                }).then(res => {
                    //window.console.log(res.data);
                    //接收到消息之后 返回的数据
                    this.match_box = true;
                    this.switch_select_box = false;
                    this.match_school_box = res.data;
                    window.console.log(this.match_school_box);
                });
            },
            onSubmit() {
                
            },
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
            showPopup() {
                this.show = true;
            },
            UserLogin() {
                this.show = false;
                this.login_ing = true;
            },
            CloseLogin() {
                this.login_ing = false;
            }
        },
    }
</script>

<style scoped>
    /*
    vw和vh都是相对于浏览器的根元素（HTML元素）的font-size计算的。
    vw：相对于视窗的宽度，视窗宽度是100vw
    vh：相对于视窗的高度，视窗高度是100vh
    vmin：vw和vh中的较小值
    vmax：vw和vh中的较大值
    */
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
    .search_box{
        width: 98vw;
        height: 7vh;
        position: absolute;
        top: 4vh;
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
    }

    .interesting_box{
        width: 95vw;
        height: 125vw;
        position: absolute;
        top: 12vh;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .interesting_img_box{
        width: 80vw;
        height: auto;
        float: left
    }
    .interesting_img{
        width: 70vw;
        height: auto;
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

    .select_school_box{
        width: 95vw;
        height: 95vh;
        position: absolute;
        top: 12vh;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .select_form_box{
        width: 100%;
        height: 72vh;
        text-align: center;
    }
    .form_line_box{
        width: 95vw;
        height: 5vh;
        text-align: center;
        
    }
    .input_box {
        width: 20vw; 
        height: 4vh;
        border-radius: 5px; 
        border: 1px solid lightgray;
        text-align: center;
        float: left;
    }

    .select_school_input {
        width: 20vw;
        position: relative;
        height: 2.5vh;
        margin-top: 1vh;
        opacity: 100%;
        border-radius: 5px;
        float: left;
        font-size: 2vw;
        text-align: center;
        border: 1px solid lightgray
    }

    .select_school_lable {
        width: 20vw;
        height: 5vh;
        float: left;
        color: #6c7277;
        font-size: 4vw;
        line-height: 5vh;
    }

    .van-cell{
        padding: 2vw 2vw;
    }
    .van-search__content--round{
        border-radius: 10px;
        height: 4.5vh;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .van-search .van-cell{
        padding: 0.8vh 1vh 1vh 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


    input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
    }

    label {
        width: 20vw;
        height: 4vh;
        display:block;
        font-size: 2vw;
    }

    .my_checkbox {
        width: 20vw;
        height: 3.5vh;
        line-height: 3.5vh;
        text-align: center;
        border: 1px solid orange;
        background-color: white;
        -webkit-user-select: none;
        -moz-user-select: none;
        position: relative;
        margin-left: 10px;
        font-weight: bold;
        float: left;
    }

    .my_checkbox .right_box{
        width: 12px;
        height: 12px;
        line-height: 12px;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
    }

    input[type="checkbox"]:checked ~ .right_box{
        background-color: orange;
    }

    input[type="checkbox"] + label {
        color: lightgray;
    }

    input[type="checkbox"]:checked + label {
        color: black;
    }

    .match_scool{

    }
</style>