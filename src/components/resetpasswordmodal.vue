<template lang="pug">
  .resetPassWordModal.flex-column
    img(src="../assets/checkmark.svg")
    p.title.font-weight-bold.mt-3 密碼已更新！
    p.secondTitle 密碼更新成功！請您重新登入。
    router-link(to="/").text-decoration-none.btn.btn-outline-log 好的
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .resetPassWordModal{
    width: 450px;
    height: 380px;
    background: white;
    box-shadow: 0px 0px 10px #00000029;
    border: 1px solid #EFECEC;
    border-radius: 10px;
    position:fixed;
    left: calc(50% - 225px);
    top:25%;
    display:flex;
    align-items:center;
    justify-content: center;
  }
  .title{
    font-size: 22px;
    color: red;
  }
  .secondTitle{
    font-size: 18px;
    color: #555151;
    font-weight: bold;
  }
  .btn-outline-log{
    width: 100px;
    height: 40px;
    border: 2px solid #1B79F4;
    border-radius: 20px;
    margin-top: 60px;
    font-weight: bold;
    font-size: 18px;
  }
</style>
