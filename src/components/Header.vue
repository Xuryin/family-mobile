<template>
    <div>
        <van-nav-bar
            :title="pageTitle"
            left-text="返回"
            left-arrow
            @click-left="back"
        />
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
