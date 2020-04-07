<template lang="pug">
  .enterverifycode
    .EVCInput
      .top.d-flex.justify-content-between
        router-link.topbox.text-decoration-none(to="/forgetpassword") <i class="fas fa-arrow-left"></i>
        router-link.topbox.text-decoration-none(to="/forgetpassword") <i class="fas fa-times"></i>
      .d-flex.justify-content-center.align-items-center.mt-5.flex-column
        img(src="../../assets/img/login/verifycode.png")
        h3.text-white.mt-4 輸入認證碼
      .enterbox.d-flex
        input(type="number" min="0" max="9").form-control.mr-40
        input(type="number" min="0" max="9").form-control.mr-40
        input(type="number" min="0" max="9").form-control.mr-40
        input(type="number" min="0" max="9").form-control
      .buttonbox.d-flex.justify-content-center
        button.btn.btn-outline-white.mr-30 重新傳送認證碼(59s)
        router-link(to="/loginresetpassword").btn.btn-log.border-0.d-flex.justify-content-center.align-items-center 下一步
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .EVCInput{
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
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 76px;
  }
  input{
    width: 74px;
    height: 100px;
    box-sizing: border-box;
    background: #00000066 0% 0% no-repeat padding-box;
    border: 1px solid #1B79F4;
    border-radius: 12px;
    color:white;
    font-size: 40px;
    text-align: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
  input[type="number"]{
      -moz-appearance: textfield;
  }
  .btn{
    width: 268px;
    height: 60px;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
  }
  .btn-outline-white{
    color:white;
    &:hover{
      background:white;
      color: black;
    }
  }
</style>
