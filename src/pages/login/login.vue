<template>
    <div class="loginPage">
        <Header/>
        <div class="loginForm">

        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import Header from '@/components/Header.vue'
    export default {
        name: "login",
        components: {
            Header
        },
        data () {
            return {
                title: '登陆',
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapMutations({
                 setTitle: 'SET_TITLE'
            })
        },
        mounted () {
            this.setTitle(this.title)
        }
    }
</script>

<style scoped lang="less">

</style>
