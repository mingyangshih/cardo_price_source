<template lang="pug">
  .login
    .container-fluid.login-container
      .row
        .col-sm-12
          .typer
            vue-typer(text="Welcome Back ; -)" :repeat="Infinity" :pre-type-delay="1000")
          form.loginInput
            h4.login.text-white.text-center.w-100 Log In
            //- vee validate plug in
            ValidationProvider(name="信箱" rules="required|email" v-slot="{ errors }")
              <span class="text-danger">{{ errors[0] }}</span>
              input(type="text" id='id' required  v-model="name" placeholder='輸入帳號' :class='{"border-danger": errors[0]}').form-control.mb-4
            ValidationProvider(name="密碼" rules="required|minmax:3,8" v-slot="{ errors }")
              <span class="text-danger">{{ errors[0] }}</span>
              input(type='password' id='password' required v-model="password" placeholder='輸入密碼' :class='{"border-danger": errors[0]}').form-control
              .text-right.mb-3.mt-3
            .text-right.mb-3
              a(href="#").forgetPassword.font-weight-bold Forgot password?
            button(type="submit").btn.btn-light.text-log.btn-lg.btn-block.loginBtn 登入
    footer.bg-white.d-flex.align-items-center.px-8.footer
      p.font-weight-bold.mb-0.webSiteName 價金保管查詢平台
      p.contactInfo.ml-auto.mb-0 +886 (02) 2266-8944 • 服務時間 MON-FRI / 9AM-6PM ©2019 CARDO • All Rights Reserved • Terms of Service
      p.mb-0.logoIcon.bg-primary.d-flex.justify-content-center.align-items-center
        img(src="../assets/img/login/cdIcon _login.png")
      p.mb-0.d-flex.justify-content-center.align-items-cneter.mx-30
        img(src="../assets/img/login/x.png")
      p.mb-0.d-flex.justify-content-center.align-items-center
        img(src="../assets/img/login/yfb_icon.png")
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  // 設定登入畫面背景
  background-image: url("../assets/img/login/newLogin.png");
  background-size: 100vw calc(100vh - 10vh);
  background-repeat: no-repeat;
  height: 90vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  // 設定輸入帳號密碼樣式
  .form-control {
    width: 100%;
    height: 60px;
    background: rgba(256, 256, 256, 0.2);
    border-radius: 5px;
    color: rgb(256, 256, 256);
    border-color:transparent;
    box-sizing: border-box;
    &::-webkit-input-placeholder {
      color: rgba(256, 256, 256, 0.5);
    }
  }
  // type effect 套件設定
  .typer {
    width: 35vw;
    margin: 16vh auto 15px;
    font-size: 28px;
    font-weight: bold;
  }
  .loginInput {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 14px #00000029;
    border-radius: 8px;
    opacity: 1;
    padding-top: 50px;
    padding-left: 64px;
    padding-right: 64px;
    padding-bottom: 50px;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    .login {
      margin-bottom: 40px;
    }
  }
  #id{
    padding-left: 30px;
    background-image: url('../assets/img/login/login_member.png');
    background-repeat: no-repeat;
    background-position: right 30px center;
  }
  #password{
    padding-left: 30px;
    background-image: url('../assets/img/login/login_password.png');
    background-repeat: no-repeat;
    background-position: right 30px center;

  }
  .forgetPassword {
    color: #ff5b34;
    font-style: italic;
    text-decoration: none;
  }
  .loginBtn {
    height: 60px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 6px 0;
    font-size: 18px;
    font-weight: bold;
  }
}
// footer
.footer {
  height: 10vh;
  box-sizing: border-box;
  font-size: 26px;
  .logoIcon {
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 50%;
    img {
      width: 25px;
      height: auto;
    }
  }
}
.webSiteName {
  color: #0f4690;
}
.contactInfo {
  font-size: 12px;
  width: 374px;
  color: #8e8e8e;
}
</style>
