<template>
    <div class="footer_page">
        <ul class="footer_list">
            <li :class="{selectTab: tab == 'shop'}" @click="changeTab('shop')">
                <i class="icon iconfont icon-shouye"  v-if="tab != 'shop'"></i>
                <i class="iconfont icon-shouye2"  v-if="tab == 'shop'"></i>
                <p>商城</p>
            </li>
            <li :class="{selectTab: tab == 'cart'}" @click="changeTab('cart')">
                <i class="iconfont icon-daohanggouwuche" v-if="tab != 'cart'"></i>
                <i class="iconfont icon-gouwuche"  v-if="tab == 'cart'"></i>
                <p>购物车</p>
            </li>
            <li :class="{selectTab: tab == 'personalCenter'}" @click="changeTab('personalCenter')">
                <i class="iconfont icon-gerenzhongxin1"  v-if="tab == 'personalCenter'"></i>
                <i class="iconfont icon-gerenzhongxin"  v-if="tab != 'personalCenter'"></i>
                <p>个人中心</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data () {
            return {
                tab: ''
            }
        },
        methods: {
            changeTab (name) {
                this.$router.push({name: name})
                this.tab = name
            }
        },
        mounted () {
            this.tab = this.$route.name
        }
    }
</script>


<style scoped lang="less">
    @import "../../static/less/header";
</style>
