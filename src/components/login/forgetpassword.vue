<template lang="pug">
  .forgetpassword
    .FGPInput
      .top.d-flex.justify-content-between
        router-link(to="/" class="topbox text-decoration-none") <i class="fas fa-arrow-left"></i>
        router-link(to="" class="topbox text-decoration-none") <i class="fas fa-times"></i>
      .forgetpasswordpic.d-flex.justify-content-center.align-items-center.mt-5.flex-column
        img(src="../../assets/img/login/forgetpassword.png")
        h3.text-white.mt-4 忘記密碼
      .enterbox.d-flex
        .iconbox(@click="sendWay = 'phone'" :class="{'iconcolor':sendWay === 'phone'}")
          i.fas.fa-mobile-alt
        .iconbox(@click="sendWay = 'email'" :class="{'iconcolor':sendWay === 'email'}")
          i.fas.fa-envelope-open-text
        input.form-control.border-0(type="text" placeholder="請輸入手機號碼" v-if="sendWay === 'phone'")
        input.form-control.border-0(type="text" placeholder="請輸入信箱" v-if="sendWay === 'email'")
      .buttonbox
        router-link.btn.btn-log(to="/enterverifycode") 傳送認證碼
</template>

<script>
export default {
  data() {
    return {
      sendWay: 'phone',
    };
  },
};
</script>

<style lang="scss" scoped>
  .FGPInput{
    width: 50vw;
    height: 70vh;
    box-sizing: border-box;
    background: rgba(0,0,0,.55);
    box-shadow: 0px 10px 20px #00000029;
    border: 1px solid #707070;
    border-radius: 10px;
    margin: 5vh auto;
    padding:30px;
  }
  .topbox{
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background:rgba(27,121,244,.5);
    border-radius: 50%;
    color:white;
    cursor: pointer;
    &:hover{
      background:rgba(27,121,244,.2)
    }
  }
  .enterbox{
    margin-top: 100px;
    padding-left: 100px;
    box-sizing: border-box;
  }
  .iconbox{
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    background: rgba(0,0,0,.55);
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    &.iconcolor{
      color:white;
    }
  }
  .fa-envelope-open-text{
    font-size: 30px;
  }
  .fa-mobile-alt{
    font-size: 30px;
  }
  input.form-control{
    width: 570px;
    height: 60px;
    border-radius: 30px;
    box-sizing: border-box;
    background: #000000 0% 0% no-repeat padding-box;
  }
  .buttonbox{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn{
    width: 268px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
