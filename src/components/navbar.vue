<template lang="pug">
  nav.container-fluid.nav.d-flex.align-items-center
    div( @click="activeNav = '票券庫存查詢'")
      router-link(to="/voucherstoresearch" :class="{active : activeNav === '票券庫存查詢'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/voucherstoresearch.png" class="mr-2"> 票券庫存查詢
    div( @click="activeNav = '商家資料建立與總表'")
      router-link(to="/shoplist" :class="{active : activeNav === '商家資料建立與總表'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/shopdata.png" class="mr-2"> 商家資料建立與總表
    div( @click="activeNav = '角色建立'")
      router-link(to="/buildcharacter" :class="{active : activeNav === '角色建立'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/buildcharacter.png" class="mr-2"> 角色建立
    div( @click="activeNav = '管理使用者'")
      router-link(to="/adminuser" :class="{active : activeNav === '管理使用者'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/adminuser.png" class="mr-2"> 管理使用者
    div( @click="activeNav = '價金票券商品查詢'")
      router-link(to="/vouchersearch" :class="{active : activeNav === '價金票券商品查詢'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/vouchersearch.png" class="mr-2"> 價金票券商品查詢
    div( @click="activeNav = 'Log異動查詢'")
      router-link(to="/logsearch" :class="{active : activeNav === 'Log異動查詢'}").mb-0.text-decoration-none.font-weight-bold.text-white.link
        <img src="../assets/img/nav/loglogo.png" class="mr-2"> Log異動查詢
    .nickName.ml-auto 暱
      .nickNameBox.flex-column
        p.mb-20.insideNickName 暱
        p.text-dark.font-weight-bold.mb-2.name 王曉明
        p.text-dark.font-weight-bold.name wang@mail.com.tw
        hr
        router-link(to="/resetpassword").btn.btn-outline-log.btnStyle.mb-3.d-flex.justify-content-center.align-items-center 變更密碼
        router-link(to="/").btn.btn-log.btnStyle.d-flex.justify-content-center.align-items-center.text-light 登出帳戶
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
    }
  }
  // nickname
  .nickName{
    font-size: 24px;
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    border:2px solid white;
    position:relative;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      color:rgba(256,256,256,.4);
      border: 2px solid rgba(256,256,256,.4);
      .nickNameBox{
        display: flex;
      }
    }
  }
  .nickNameBox{
    position:absolute;
    top:48px;
    right:15px;
    background: white;
    width: 340px;
    height: 360px;
    display:none;
    align-items: center;
    box-shadow: 0px 3px 6px #00000029;
    border: 0.5px solid #C3D0DC;
    border-radius: 3px;
    padding-top: 40px;
    z-index: 10000000;
    hr{
      width: 100%;
      border-top: 1px solid #C3D0DC;
      margin-bottom: 24px;
    }
    .btnStyle{
      width: 140px;
      height: 39px;
      border-radius: 23px;
      margin-left: 0;
      color: #1b79f4;
      border-width: 2px;
      &:hover{
        color: white;
      }
    }
    .name{
      font-size: 16px;
    }
  }
  .insideNickName{
    font-size: 24px;
    color: #C3D0DC;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    border:2px solid #2F7BFB;
    position:relative;
  }
</style>
