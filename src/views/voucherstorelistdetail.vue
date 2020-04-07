<template lang="pug">
  .voucherstorelistdetail
    navbar.fixed-top
    .container-fluid.bg-white.py-3.breadcrumbbox
      .row.px-40.align-items-center
        .arrowbox
          router-link.text-decoration-none(to="/voucherstorelist") <i class="fas fa-arrow-left"></i>
        .breadcrumb.before.ml-4
          router-link(to="/voucherstoresearch").text-decoration-none 票券庫存總表 <i class="fas fa-chevron-right ml-30"></i>
        .breadcrumb.before.ml-4
          router-link(to="/voucherstorelist").text-decoration-none 票券庫存明細列表 <i class="fas fa-chevron-right ml-30"></i>
        .breadcrumb.before.ml-4 票券商品名稱 <i class="fas fa-chevron-right ml-30"></i>
        .breadcrumb.now.ml-4 票券編號

</template>

<script>
import navbar from '../components/navbar.vue';

export default {
  components: {
    navbar,
  },
};
</script>

<style lang="scss" scoped>
  .breadcrumbbox{
    margin-top: 70px;
  }
  .arrowbox{
    width: 40px;
    height: 40px;
    display:flex;
    align-items: center;
    justify-content: center;
    background: rgba(234,241,250,.6);
    border-radius: 50%;
    color: #3343F7;
  }
  .breadcrumb{
    padding: 8px 16px;
    height: 35px;
    box-sizing: border-box;
    border-radius: 17px;
    font-size: 14px;
    margin-bottom: 0;
    font-weight: bold;
    display: flex;
    align-items: center;
    &.before{
      background: #EAF1FA;
      color: #1B79F4;
    }
    &.now{
      background: white;
      color:#4B4B4B;
      box-shadow: 0px 0px 6px #00000029;
    }
  }
</style>
