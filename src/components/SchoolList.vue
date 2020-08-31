<template>
    <!-- 按照条件选择学校之后 学校的列表 -->
    <div class="match_select_box">
        <!-- 学校list的div -->
        <div>
            <!-- 学校列表 -->
            <div class="school_item" v-for="(index, key) in school_list" :key="key" :id="index.id">
                <!-- 顺序标号 -->
                <div class="item_left_box">
                    <div style="width: 5vw; height: 5vw; position: absolute; font-size: 4vw; margin-top: 3vw; color: white; ">
                        {{ key }}
                    </div>
                </div>
                <!-- 学校信息 -->
                <div>
                    
                </div>
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
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    .item_left_box{
        width: 5vw;
        height: 10vw;
        background-color: orange;
        margin-left: 5vw;
    }
</style>