<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.image" />
            </van-swipe-item>
        </van-swipe>
        <van-goods-action>
            <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
            <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
            <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
            <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
        </van-goods-action>
        <div class="goods_details_info">
            <p>给肌肤来一场春雨</p>
            <p>papa recipe 春雨蜂蜜面膜 <span>25g*5</span><span>片</span></p>
            <p>￥49.5 <span>￥99</span></p>
        </div>

        <ul class="goods_details_vip">
            <li>
                <p>会员特权</p>
                <p>激活后半价</p>
            </li>
            <li>
                <p>包邮政策</p>
                <p>包邮</p>
            </li>
        </ul>


        <van-tabs v-model="active" sticky>
            <van-tab v-for="index in indexTitle" :title="index.name" :key="index.type">
                <goodInfo :data="goodInformation"></goodInfo>
            </van-tab>
        </van-tabs>


    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import {getGoodsDetails} from "../../api/personal";
    import goodInfo from '@/components/goodInfo'

    export default {
        name: "details",
        data () {
            return {
                title: '商品详情',
                id: '',
                goodData: [],
                images: [],
                active: '',
                indexTitle: [
                    {
                        type: 1,
                        name: '详情'
                    },
                    {
                        type: 2,
                        name: '评价'
                    },
                ],
                goodInformation: ""
            }
        },
        components: {
            goodInfo
        },
        methods: {
            ...mapMutations({
                setTitle: 'SET_TITLE'
            }),
            getData () {
                getGoodsDetails({id: this.id})
                    .then((res) => {
                        if (res.status == 1) {
                            let images = []
                            this.goodData = res.data[0]
                            images = this.goodData.imgUrls.split(',')
                            this.images = images.map((item, index) => {
                                return {
                                    index: index,
                                    image: item
                                }
                            })
                            console.log(this.images)
                        }
                    })
            },
            onClickMiniBtn () {},
            onClickBigBtn () {}
        },
        mounted () {
            this.setTitle(this.title)
            this.id = this.$route.params.id
            this.getData()
        }
    }
</script>

<style scoped lang="less">
    @import "../../../static/less/goods";
    img {
        width: 100%;
        height: 7rem;
    }
</style>
