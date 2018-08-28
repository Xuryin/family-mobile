<template>
    <div class="footer_page">
        <ul class="footer_list">
            <li :class="{selectTab: tab == 'shop'}" @click="changeTab('shop')">
                <i class="icon iconfont icon-shouye"></i>
                <i class="icon iconfont icon-shouye1"  v-if="false"></i>
                <p>商城</p>
            </li>
            <li :class="{selectTab: tab == 'cart'}" @click="changeTab('cart')">
                <i class="icon iconfont icon-qicheqianlian-"></i>
                <p>购物车</p>
            </li>
            <li :class="{selectTab: tab == 'personalCenter'}" @click="changeTab('personalCenter')">
                <i class="icon iconfont icon-wode"></i>
                <i class="icon iconfont icon-wodedamaijihuo" v-if="false"></i>
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
