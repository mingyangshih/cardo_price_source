<template lang="pug">
  .voucherStoreSearch
    navbar.fixed-top
    .container-fluid.detailContent.bg-white.pt-0
      .row.px-40.justify-content-between.align-items-center.pt-40
        p.titleFontDetail.text-dark.font-weight-bold.mb-0 票券庫存總表
        searchbar
      .row.px-40
        .table-responsive.mt-4
          table.table
            thead
              tr
                td(rowspan="2").text-center.border-top-0.border-right.bg-tbprimary.text-light 商家名稱
                td(rowspan="2").text-center.border-top-0.border-right.bg-tbprimary.text-light 票券價金總張數(張)
                td(rowspan="2").text-center.border-top-0.border-right.bg-tbprimary.text-light 票券價金總金額
                td.text-center.border-top-0.bg-tbsecondary.text-light.p-0.border-right
                  p.mb-0.w-100.h-50.d-flex.align-items-center.justify-content-center 未使用
                  .row.mx-0.h-50.border-top
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 張數
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 金額
                td.text-center.border-top-0.bg-tbsecondary.text-light.p-0.border-right
                  p.mb-0.w-100.h-50.d-flex.align-items-center.justify-content-center 已使用
                  .row.mx-0.h-50.border-top
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 張數
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 金額
                td.text-center.border-top-0.bg-tbsecondary.text-light.p-0
                  p.mb-0.w-100.h-50.d-flex.align-items-center.justify-content-center 已作廢
                  .row.mx-0.h-50.border-top
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 張數
                    p.mb-0.headBottom.d-flex.align-items-center.justify-content-center 金額
            tbody.bg-light
              tr
                td.text-center.font-weight-bold.px-0 A商家
                td.text-center.font-weight-bold.ticketnum.px-0
                  router-link.text-decoration-none(to="/voucherstorelist") 500
                td.text-center.font-weight-bold.px-0 100,000
                td.text-center.p-0
                  .row.w-100.mx-0
                    p.mb-0.w-50.ticketnum 200
                    p.mb-0.w-50 45,000
                td.text-center.p-0
                  .row.w-100.mx-0
                    p.mb-0.w-50.ticketnum 200
                    p.mb-0.w-50 45,000
                td.text-center.p-0
                  .row.w-100.mx-0
                    p.mb-0.w-50.ticketnum 100
                    p.mb-0.w-50 10,000
</template>

<script>
import navbar from '../components/navbar.vue';
import searchbar from '../components/searchbar.vue';

export default {
  components: {
    navbar,
    searchbar,
  },
};
</script>

<style lang="scss" scoped>
  $fz14 : 14px;
  .detailContent{
    height: calc( 100vh - 70px);
    margin-top: 70px;
  }
  .titleFontDetail{
    font-size: 20px;
  }
  // thead setting
  thead{
    td{
      font-size: $fz14;
      vertical-align: middle;
      font-weight: bold;
      width: calc(100% / 6);
      .headBottom {
        background: #7687b4;
        width: 50%;
      }
    }
  }
  .bg-tbprimary{
    height: 64px;
  }
  .bg-tbsecondary{
    box-sizing: border-box;
    height: 32px;
  }
  // tbody setting
  tbody{
    td{
      vertical-align: middle;
      font-size: $fz14;
      color: #4B4B4B;
      height: 76px;
      box-sizing: border-box;
    }
  }
  .ticketnum{
    color: #3343F7;
  }

</style>
