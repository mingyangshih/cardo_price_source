<template lang="pug">
  .logsearch
    navbar.fixed-top
    .container-fluid.detailContent
      .row.px-40.pt-40.justify-content-center
        .situationBar.d-flex
          .situationBarOption(@click="situation = '登入LOG紀錄'" :class="{'active': situation === '登入LOG紀錄'}")
            router-link(to="/logsearch").text-decoration-none 登入LOG紀錄
          .situationBarOption(@click="situation = '人員權限設定Log'" :class="{'active': situation === '人員權限設定Log'}")
            router-link.mx-auto.text-decoration-none(to="/logsearch/authoritylog") 人員權限設定Log
          .situationBarOption(@click="situation = '異動Log紀錄'" :class="{'active': situation === '異動Log紀錄'}")
            router-link.mx-auto.text-decoration-none(to="/logsearch/changelog") 異動Log紀錄
      .row.px-40.mt-40
        input.form-control(type="text" placeholder="搜尋異動人員(使用者名稱)" )
        input.form-control.mr-2.ml-auto(type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" )
        input.form-control.mr-2(type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}")
        button.toggleBtn.btn.font-weight-bold +篩選
      .row.px-40.mt-4
        router-view

</template>

<script>
import navbar from '../components/navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
      situation: '登入LOG紀錄',
    };
  },
};
</script>

<style lang="scss" scoped>
  .detailContent{
    height: calc( 100vh - 70px);
    margin-top: 70px;
    background: white;
  }
  .situationBar{
    width: 720px;
    height: 70px;
    background: #F7F7F7;
    border-radius: 35px;
    padding:10px 14px;
    box-sizing: border-box;
  }
  .situationBarOption{
    width: 210px;
    height: 48px;
    border-radius: 24px;
    color:#3343F7;
    font-size: 18px;
    font-weight: bold;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    &.active{
      background: white;
    }
  }
  input[type="text"]{
    width: 280px;
    height: 45px;
    background: rgba(193,193,193,.4);
    border-radius: 11px;
    color:#838080;
    font-size: 14px;
    border-width: 0;
    position:relative;
    z-index: 1;
  }
  input[type="date"]{
    width: 168px;
    height: 45px;
    border-radius: 25px;
    box-sizing: border-box;
    border: 1px solid #82B3F4;
    font-size: 14px;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
  // 按鈕
  .toggleBtn{
    width: 105px;
    height: 45px;
    box-sizing: border-box;
    outline: none;
    border-radius: 23px;
    color: white;
    background: #3343F7;
  }
</style>
