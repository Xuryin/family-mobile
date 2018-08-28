<template>
    <div>
        <div class="header_page">
            <i class="icon iconfont icon-fanhui"></i>
            <span >{{pageTitle}}</span>
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
        data () {
            return {
            }
        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<style scoped lang="less">
@import "../../static/less/header";
</style>
