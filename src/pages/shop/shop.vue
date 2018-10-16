<template>
    <div>
        <div>
            <van-search
                v-model="keywords"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
            >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>

            <van-tabs v-model="active" sticky>
                <van-tab v-for="index in indexTitle" :title="index.name" :key="index.type">
                    <goodList :data="goodsLists"></goodList>
                </van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import goodList from '@/components/goodsList.vue'
    import Footer from '@/components/Footer.vue'
    import {mapActions, mapMutations} from 'vuex'
    import {getGoodsList} from "../../api/personal";
    export default {
        name: "shop",
        components: {
            goodList, Footer
        },
        data () {
            return {
                keywords: "",
                title: "商城",
                goodsLists: [],
                indexTitle: [
                    {
                        type: 1,
                        name: '会员专属'
                    },
                    {
                        type: 2,
                        name: '限时清仓'
                    },
                    {
                        type: 3,
                        name: '精品云集'
                    },
                    {
                        type: 4,
                        name: '纯原手作'
                    },
                ],
                active: 0
            }
        },
        methods: {
            ...mapMutations({
                setTitle: 'SET_TITLE'
            }),
            getGoods () {
                getGoodsList({type: this.active})
                    .then((res) => {
                       this.goodsLists = res.data
                    }).catch(err => {
                        console.log(err)
                })
                /*this.goodsLists = [
                    {
                        gname: '电脑',
                        imgUrls: 'https://img.yzcdn.cn/2.jpg',
                        originPrice: 5000,
                        vipPrice: 5000,
                        id: 2,
                        profile: '这个是一个非常好的商品啊啊啊啊'
                    }
                ]*/
            },
            onSearch () {}
        },
        watch: {
            active (newVal, oldVal) {
                this.getGoods(newVal)
            }
        },
        mounted () {
            this.setTitle(this.title)
            this.getGoods()
        }
    }
</script>

<style scoped>

</style>
