<template>
    <div>
        <div class="header_page">
            <i class="icon iconfont icon-fanhui" @click="back"></i>
            <span>{{pageTitle}}</span>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Header",
        computed: {
            ...mapGetters({
                pageTitle: 'title'
            })
        },
        data() {
            return {}
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    @import "../../static/less/header";
</style>
