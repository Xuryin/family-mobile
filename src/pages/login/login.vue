<template>
    <div class="loginPage">
        <div class="loginForm">
            <van-cell-group>
                <van-field
                    v-model="userData.username"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                    rows="1"
                    autosize
                />

                <van-field
                    v-model="userData.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    rows="1"
                    autosize
                />
            </van-cell-group>

            <p class="login_mention">
                没有账号，请点击 <router-link to="/register">注册</router-link>
            </p>

            <div class="login_button">
                <van-button size="large" :disabled="submitLogin" @click="submit" type="danger">登录</van-button>
            </div>

            <div class="loading">
                <van-loading v-if="submitLogin"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                title: '登陆',
                userData: {
                    username: "",
                    password: ""
                },
                submitLogin: false
            }
        },
        methods: {
            ...mapMutations({
                setTitle: 'SET_TITLE'
            }),
            submit() {
                this.submitLogin = true
            }
        },
        mounted() {
            this.setTitle(this.title)
        }
    }
</script>

<style scoped lang="less">
    @import "~static/less/reset.less";

    .loginPage {
        margin: 0 auto;
    }

    .login_button {
        margin-top: 1.5rem;
        width: 8rem;
        margin-left: 10%;
    }

    .login_mention {
        margin-top: 0.5rem;
        text-align: right;
        padding-right: 1rem;
        font-size: 0.4rem;
        a {
            color: @red;
            font-weight: bold;
        }
    }
</style>
