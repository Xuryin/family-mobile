<template>
    <div class="loginPage">
        <Header/>
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

                <van-field
                    v-model="userData.code"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="danger">发送验证码</van-button>
                </van-field>
            </van-cell-group>

            <div class="login_button">
                <van-button size="large" :disabled="submitRegister" @click="submit" type="danger">注册</van-button>
            </div>

            <div class="loading">
                <van-loading v-if="submitRegister"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import Header from '@/components/Header.vue'
    import axios from 'axios'
    import {requestRegister} from "../../api/personal";

    export default {
        name: "register",
        components: {
            Header
        },
        data() {
            return {
                title: '注册',
                userData: {
                    username: "",
                    password: "",
                    code: ""
                },
                submitRegister: false
            }
        },
        methods: {
            ...mapMutations({
                setTitle: 'SET_TITLE'
            }),
            submit() {
                this.submitRegister = true
                  axios.get('http://localhost:5000/register',{
                      params: this.userData
                  })
                      .then((response) => {
                          console.log(response);
                      }).then(() => {
                      this.submitRegister = false
                      }).catch((error) => {
                          console.log(error);
                      });
                console.log(this.userData)
            /*   requestRegister(this.userData)
                    .then((response) => {
                        console.log(response);
                    }).then(() => {
                    this.submitRegister = false
                }).catch((error) => {
                    console.log(error);
                });*/
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
        margin-top: 2rem;
        width: 8rem;
        margin-left: 10%;
    }
</style>
