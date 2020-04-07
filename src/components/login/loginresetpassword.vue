<template lang="pug">
  .loginresetpassword
    .LRPInput
      .top.d-flex.justify-content-between
        router-link.topbox.text-decoration-none(to="/enterverifycode") <i class="fas fa-arrow-left"></i>
        router-link.topbox.text-decoration-none(to="/enterverifycode") <i class="fas fa-times"></i>
      .d-flex.justify-content-center.align-items-center.mt-5.flex-column
        img(src="../../assets/img/login/icons8-key.png")
        h3.text-white.mt-4 重設密碼
      .enterbox.d-flex.flex-column.align-items-center.mt-40
        input(type="text").form-control.border-0.mb-20
        input(type="text").form-control.border-0
      .buttonbox.d-flex.justify-content-center
        button.btn.btn-log.mr-30.border-0(@click="popoutshow = !popoutshow") 確認
    //- 彈出視窗
    .popoutwindow.f-flex.flex-column.align-items-center(v-if="popoutshow")
      img(src="../../assets/img/login/icons8-checkmark.svg").mb-30
      p.text-danger.font-weight-bold.renewed 密碼已更新
      p.text-center 密碼更新成功!請您重新登入。
      router-link(to="/").btn.btn-outline-log.done 好的
</template>

<script>
export default {
  data() {
    return {
      popoutshow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
  .LRPInput{
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
  input{
    width: 475px;
    height: 60px;
    background: #dceafd 0% 0% no-repeat padding-box;
    border: 1px solid #C9C9C9;
    border-radius: 30px;
    background-image: url("../../assets/img/login/login_password.png");
    background-repeat: no-repeat;
    background-position: right 30px center;
    background-color: rgba(0, 0, 0, 0.2);
    &:focus{
      background-color: rgba(0, 0, 0, 0.2);
      color:white;
    }
  }
  .buttonbox{
    margin-top: 80px;
    .btn{
      width: 268px;
      height: 60px;
      box-sizing: border-box;
      box-shadow: 0px 3px 6px #00000029;
      border: 1px solid #FFFFFF;
      border-radius: 8px;
    }
  }

  // popout window
  .popoutwindow{
    width: 450px;
    height: 380px;
    box-sizing: border-box;
    background: white;
    position:fixed;
    top: 20vh;
    left: calc(50% - 225px);
    box-shadow: 0px 0px 10px #00000029;
    border: 1px solid #EFECEC;
    border-radius: 10px;
    padding-top: 70px;
  }
  .renewed{
    font-size: 22px;
    text-align: center;
  }
  .done{
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 22px;
    border-width: 2px;
    margin-top: 50px;
  }
</style>
