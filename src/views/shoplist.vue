<template lang="pug">
  .shoplist
    navbar.fixed-top
    .container-fluid.detailContent
      .row.px-40.pt-40
        p.titleFontDetail.text-dark.font-weight-bold.mb-0 商家資料總表
      .row.px-40
        .table-responsive.mt-4.border-top-0
          table.table.border-left.border-right.border-bottom
            thead
              tr
                td.border-right 建立日期
                td.border-right 發行商家名稱
                td.border-right 統一編號
                td.border-right 編輯
                td 可售票
            tbody
              tr
                td 2019-10-10 00:00:00
                td ＯＯＯＯＯ股份有限公司
                td 39019425
                td
                  .d-flex.justify-content-center
                    router-link(to="/shoptotalinfo").btn.btn-outline-green 繼續編輯
                td 否
              tr
                td 2020-01-13 08:00:00
                td ＯＯＯ股份有限公司
                td 39019426
                td
                  .d-flex.justify-content-center
                    router-link(to="/shoptotalinfo").btn.btn-outline-log 查看詳情
                td 是
              tr
                td 2020-01-13 08:00:00
                td ＯＯＯ股份有限公司
                td 39019427
                td
                  .d-flex.justify-content-center
                    router-link(to="/shoptotalinfo").btn.btn-outline-log 查看詳情
                td
                  span.text-orange 暫停
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
  thead{
    td{
      font-size: 14px;
      color: white;
      background: #4B4B4B;
      vertical-align: middle;
    }
  }
  tbody{
    td{
      font-size: 14px;
      font-weight: bold;
      height: 65px;
      vertical-align: middle;
      &:last-child{
        font-size: 14px;
      }
      .btn{
        padding: auto 20px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: bold;
        height: 30px;
        border-radius: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        border-width: 2px;
      }
      .btn-outline-green{
        border-color:#37A75D;
        color: #37A75D;
        &:hover{
          background: #37A75D;
          color: white;
        }
      }
    }
  }
</style>
