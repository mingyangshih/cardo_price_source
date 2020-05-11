<template lang="pug">
  .vouchersearch
    navbar.fixed-top
    .container-fluid.detailContent
      .row.px-40.pt-40
        p.titleFontDetail.text-dark.font-weight-bold.mb-0 商家總表(1)
        input.form-control.ml-auto(type="text" placeholder="搜尋 商家名稱/統編/信託編號" )
      .row.px-40
        .table-responsive.mt-4.border-top-0
          table.table.border-left.border-rigth.border-bottom
            thead
              tr
                th 價金編號
                th 統編
                th 商家名稱
                th 目前架上票券數量 (發行總數量)
            tbody
              tr
                td 0001
                td 38029421
                td
                  router-link(to="/voucherlist").text-log.font-weight-bold.text-decoration-none 剪刀股份有限公司
                td 4/(5)
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
  .detailContent{
    height: calc( 100vh - 70px);
    margin-top: 70px;
  }
  .titleFontDetail{
    font-size: 20px;
  }
  input[type="text"]{
    width: 280px;
    height: 45px;
    background: rgba(193,193,193,.4);
    border-radius: 11px;
    color:#838080;
    font-size: 14px;
    border-width: 0;
    margin-left: 16px;
    position:relative;
    z-index: 1;
  }
  // table
  .table{
    th{
      background: #4B4B4B;
      color: white;
      vertical-align: middle;
    }
    td{
      color: #4B4B4B;
      font-weight: bold;
      vertical-align: middle;
      font-size: 14px;
      padding: 16px 0;
    }
  }
</style>
