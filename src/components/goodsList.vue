<template>
    <div>
        <ul>
            <li v-for="item in data" @click="goodsDetails(item.id)" :key="item.id">
                <div class="goods_img">
                    <img :src="item.imgUrls" alt="">
                </div>
                <div class="goods_info">
                    <div class="goods_introduce">
                        <span>【{{item.gname}}】{{item.profile}}</span>
                    </div>

                    <div class="goods_price">
                        <span>￥{{item.vipPrice}}</span>
                        <span>￥{{item.originPrice}}</span>
                    </div>

                </div>
            </li>
        </ul>
        <p v-if="!data.length">暂无数据</p>
    </div>
</template>

<script>
    export default {
        name: "goodsList",
        props: {
            data: {
                type: Array,
                default: [
                    {
                        gname: '电脑',
                        imgUrls: 'https://img.yzcdn.cn/2.jpg',
                        originPrice: 5000,
                        vipPrice: 5000,
                        id: 2,
                        profile: '这个是一个非常好的商品啊啊啊啊'
                    }
                ]
            }
        },
        methods: {
            goodsDetails(id) {
                console.log(id)
                this.$router.push({name: 'details', params: {id: id}})
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../static/less/reset";
    @import "../../static/less/goods";
    p {
        margin-top: 0.5rem;
        width: 100%;
        text-align: center;
        font-size: 0.4rem;
    }

    ul {
        padding: 0 0.15rem;
    }

    li {
        height: 3.28rem;
        background-color: @fff;
        border-radius: 5px;
        margin-top: 0.1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: flex-start;
    }
</style>
