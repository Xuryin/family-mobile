<template>
    <div>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import Footer from '@/components/Footer.vue'
    export default {
        name: 'personalCenter',
        components: {
            Footer
        },
        data () {
            return {
                title: '个人中心'
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

<style scoped>

</style>
