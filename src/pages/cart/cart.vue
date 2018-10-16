<template>
    <div>
      this is cart
        <Footer></Footer>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import Footer from '@/components/Footer.vue'
    export default {
        name: 'cart',
        components: {
            Footer
        },
        data () {
            return {
                title: '购物车'
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
