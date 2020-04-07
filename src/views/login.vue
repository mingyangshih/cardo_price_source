<template lang="pug">
  .login
    .container-fluid.login-container
      .row
        .col-sm-12
          router-view
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
