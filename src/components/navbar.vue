<template lang="pug">
  nav.container-fluid.nav.d-flex.align-items-center
    div( @click="activeNav = '票券庫存查詢'")
      router-link(to="/voucherstoresearch" :class="{active : activeNav === '票券庫存查詢'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/voucherstoresearch.png" class="mr-2"> 票券庫存查詢
    div( @click="activeNav = '商家資料建立與總表'")
      router-link(to="/shoplist" :class="{active : activeNav === '商家資料建立與總表'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/shopdata.png" class="mr-2"> 商家資料建立與總表
    p.mb-0.text-white.ml-auto Hi, XXX
    router-link(to='/').text-decoration-none.btn.btn-light.p-0 Log Out
</template>

<script>
export default {
  data() {
    return {
      activeNav: '',
    };
  },
};
</script>

<style lang="scss" scoped>
  .nav{
    background: transparent linear-gradient(89deg, #1B79F4 0%, #27489A 53%, #3B44A9 100%) 0% 0%;
    box-shadow: 0px 2px 4px #00000029;
    height: 70px;
    box-sizing: border-box;
    padding:0 50px;
    .link{
      width: 210px;
      height: 50px;
      box-sizing: border-box;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      padding:0 10px;
      opacity: .4;
      &.active{
        background: rgba(0,0,0,.3);
        opacity: 1;
      }
    }
    .btn{
      width: 89px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 15px;
      font-size: 14px;
      color:#3343F7;
      font-weight: bold;
      margin-left: 50px;
    }
  }
</style>
