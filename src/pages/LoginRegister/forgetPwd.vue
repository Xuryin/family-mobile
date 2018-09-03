<template>
    <div @touchmove.prevent>
        <div class="main">
            <yd-cell-group>
                <yd-cell-item>
                    <img  slot="left" src="~static/images/login_phone.png" alt="手机号" class="login_phone">
                    <yd-input slot="right" v-model.trim="ruleForm.cellphone" required :show-success-icon="false" :show-error-icon="false" :max=11 placeholder="请输入手机号码"></yd-input>
                </yd-cell-item>
                <v-piccode  @getcaptchaid="getcaptIdPwd"
                            @getcaptdata="getcaptDataPwd"
                            @getcaptcode="getcaptCodePwd">
                </v-piccode>
                <yd-cell-item>
                    <img slot="left" src="~static/images/login_sms.png" alt="手机验证码" class="login_sms">
                    <yd-input slot="right" v-model.trim="ruleForm.phoneCode" required :show-success-icon="false" :show-error-icon="false" placeholder="请输入手机验证码"></yd-input>                    yd
                    <yd-sendcode slot="right"
                        v-model="start"
                        second="60"
                        @click.native="sendCode"
                        bgcolor="#EA3939"
                        size="small" style="width: 50%">
                    </yd-sendcode>
                </yd-cell-item>
                <yd-cell-item>
                    <img slot="left" src="~static/images/login_password.png" alt="登录密码" class="login_password">
                    <yd-input slot="right" type="password" v-model="ruleForm.password" required :show-success-icon="false" :show-error-icon="false" :min=6 :max=20 placeholder="请设置登陆密码"></yd-input>
                </yd-cell-item>
            </yd-cell-group>
            <div align="center">
                <button class="submit" :disabled="isSubmit" @click="check">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
import {getBackPassword, getGetBackSms} from '@/api/personal';
import {mapState, mapMutations} from 'vuex';
import {msgToast, getItem, setItem, validLogin, msgLoadingOpen, msgLoadingClose} from '@/tools/methods';
import vPiccode from '@/components/picCode.vue';
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
            title: '忘记密码',
            ruleForm: {
                picCode: '',
                picData: '',
                picId: '',
                cellphone: '',
                phoneCode: '',
                password: ''
            },
            password: '',
            start: false,
        }
    },
    components: {
        vPiccode
    },
    computed: {
        ...mapState(['isSubmit'])
    },
    methods: {
        ...mapMutations(['initSubmit']),
        getcaptIdPwd (obj) {
            this.ruleForm.picId = obj
        },
        getcaptDataPwd (obj) {
            this.ruleForm.picData = obj
        },
        getcaptCodePwd (obj) {
            this.ruleForm.picCode = obj
        },
        check() {
            let reg1 = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            let reg2 = /^[0-9a-zA-Z_#]{6,20}$/
            let regPhone = reg1.test(this.ruleForm.cellphone)
            let regPwd = reg2.test(this.ruleForm.password)
            if (this.ruleForm.cellphone == '') {
                msgToast('请输入手机号码')
            } else if (!regPhone) {
                msgToast('请输入正确的手机号码')
            } else if (this.ruleForm.picCode == '') {
                msgToast('请输入图形验证码')
            } else if (this.ruleForm.phoneCode == '') {
                msgToast('请输入短信验证码')
            } else if (this.ruleForm.password == '') {
                msgToast('请输入密码')
            } else if (!regPwd) {
                msgToast('密码由6-20位数字或字母组成')
            } else {
                this.forget()
            }
        },
        forget() {
            let _this = this
            this.initSubmit()
            msgLoadingOpen('修改中')
            this.password = crypt.encrypt(this.ruleForm.password)
            getBackPassword({cellphone: this.ruleForm.cellphone, phoneCode: this.ruleForm.phoneCode, password: this.password})
            .then((res) => {
                if (res.status == 1) {
                    msgLoadingClose()
                    msgToast('设置成功，请重新登录')
                    _this.$router.push('/login/UserLogin')
                } else {
                    msgLoadingClose()
                    msgToast(res.msg)
                }
            })
            .then((res) => {
                _this.initSubmit()
            })
        },
        sendCode() {
            if (this.ruleForm.cellphone == '') {
                    msgToast('请输入手机号码')
                    return false
                }
            if (this.ruleForm.picCode == '') {
                msgToast('请输入图形验证码')
                return false
            }
            getGetBackSms({
                cellphone: this.ruleForm.cellphone,
                captchaId: this.ruleForm.picId,
                captchaCode: this.ruleForm.picCode
            })
            .then((res) => {
                if (res.status == 1) {
                    this.$dialog.loading.open('发送中...')
                    setTimeout(() => {
                        this.start = true
                        this.$dialog.loading.close()
                        this.$dialog.toast({
                            mes: '已发送',
                            icon: 'success',
                            timeout: 1500
                        })
                    }, 1000)
                } else {
                    msgToast(res.msg)
                    this.clear()
                }
            })
        },
        clear() {
            bus.$emit('clearPicCode')
        }
    },
    mounted() {
        bus.$emit('pageTitle', this.title)
        bus.$emit('closeBack', true)
    }
}
</script>

<style scoped lang="less">
@import "~static/less/reset.less";
@import "~static/less/login.less";
</style>