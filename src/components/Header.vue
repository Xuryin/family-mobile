<template>
    <div>
        <div class="header_page">

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Header",
        computed: {
            ...mapGetters({})
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
@import "../../static/less/header";
</style>
