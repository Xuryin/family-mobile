<template>
    <div>
        <Header/>
        <div>
            <div>

            </div>
            <div>
                <ul>
                    <li>
                        <img src="" alt="">
                        <span>会员专属</span>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>限时清仓</span>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>会员专属</span>
                    </li>
                    <li>
                        <img src="" alt="">
                        <span>会员专属</span>
                    </li>
                </ul>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "shop",
        components: {
            Header, Footer
        },
        methods: {
            getGoods () {}
        },
        mounted () {}
    }
</script>

<style scoped>

</style>
