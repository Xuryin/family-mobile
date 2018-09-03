<template>
    <div @touchmove.prevent>
        <div class="main">
            <yd-cell-group>
                <yd-cell-item>
                    <img  slot="left" src="~static/images/login_phone.png" alt="手机号" class="login_phone">
                    <yd-input slot="right" v-model.trim="ruleForm.cellphone" :show-success-icon="false" :show-error-icon="false" :max=11 placeholder="请输入手机号码" ref="cellphone"></yd-input>
                </yd-cell-item>
                <yd-cell-item>
                    <img slot="left" src="~static/images/login_password.png" alt="登录密码" class="login_password">
                    <yd-input slot="right" type="password" v-model="ruleForm.password" required :show-success-icon="false" :show-error-icon="false" placeholder="请输入登陆密码"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <div class="footer">
                <div class="left">
                    <span>还没注册？</span>
                    <router-link :to="{name: 'register'}">点我注册</router-link>
                </div>
                <div class="right">
                    <router-link :to="{name: 'forgetPassword'}">忘记密码？</router-link>
                </div>
            </div>
            <div align="center">
                <button class="submit" :disabled="isSubmit" @click="check">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import {requestLogin} from '@/api/personal';
import {getUserInfo, setLoginInfo} from '@/api/ajax';
import {mapState, mapMutations} from 'vuex';
import {msgToast, setItem, validLogin, msgLoadingOpen, msgLoadingClose} from '@/tools/methods';
import {bus} from '@/tools/bus';
import JSEncrypt from 'jsencrypt';

let crypt = new JSEncrypt()
let public_key = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8yY4yneut770arIb+hhuwPbV4
qP75ZtfSZmEMK64pldpcGeCbp4uFaOqwXMy7cszsYnD9YnMJLN82zt2ttOU9APcC
HWS1Qi72AkxnyROTIICYU0oi+I+5elogPgkOxKyi2bWb6pR9IkDR3EYmYear0biw
D0DJ3ztdzWa+W1IbOQIDAQAB`
crypt.setKey(public_key)

export default {
    data() {	
        return {
            title: '登录',
            ruleForm: {
                cellphone: '',
                password: ''
            },
            password: '',
        }
    },
    computed: {
        ...mapState(['isSubmit'])
    },
    methods: {
        ...mapMutations(['initSubmit']),
        // 设置焦点事件
        setFocusHander() {
            this.$refs.cellphone.setFocus()
        },
        check() {
            let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            let regTest = reg.test(this.ruleForm.cellphone)
            if (this.ruleForm.cellphone == '') {
                msgToast('请输入手机号码')
            } else if (!regTest) {
                msgToast('请输入正确的手机号码')
            } else if (this.ruleForm.password == '') {
                msgToast('请输入登录密码')
            } else {
                this.login()
            }
        },
        login() {
            let _this = this
            this.initSubmit()
            msgLoadingOpen('登录中')
            this.password = crypt.encrypt(this.ruleForm.password)
            requestLogin({username: this.ruleForm.cellphone, password: this.password})
            .then((res) => {
                if (res.status == 1) {
                    setLoginInfo(res.data)
                    msgLoadingClose()
                    msgToast('登录成功')
                    getUserInfo().then((res) => {
                        _this.$router.push('/')
                    })
                } else {
                    msgLoadingClose()
                    msgToast(res.msg)
                }
            })
            .then((res) => {
                _this.initSubmit()
            })
        }
    },
    mounted() {
        bus.$emit('pageTitle', this.title)
        bus.$emit('closeBack', false)
        this.setFocusHander()
    },
    created() {
        let _this = this
        let access_token = this.$route.query.access_token
        if (access_token) {
            setLoginInfo({'access_token': access_token})
            getUserInfo().then(res => {
                if (validLogin()) {
                    _this.$router.push({path: "/"})
                }
            }).catch((error) => {
                console.log(error)
            })
        }    
    }
}
</script>

<style scoped lang="less">
@import "~static/less/reset.less";
@import "~static/less/login.less";
</style>