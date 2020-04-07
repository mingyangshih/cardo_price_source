<template lang="pug">
  .voucherstorelist
    navbar.fixed-top
    .container-fluid.detailContent.bg-white.pt-0
      .row.px-40.justify-content-between.align-items-center.pt-40
        p.titleFontDetail.text-dark.font-weight-bold.mb-0 票券庫存明細列表
        searchbar
      .row.px-40
        .table-responsive.mt-4.border-top-0
          table.table.border-left.border-right.border-bottom
            thead
              tr
                td.first.border-top-0 交易訂單編號
                td.border-top-0 票券編號
                td.border-top-0 票券商品名稱
                td.border-top-0 票券條碼
                td.border-top-0 票券狀態
                td.border-top-0 商品原價
                td.border-top-0 價金保管金額
                td.border-top-0 價金保管到期日
                td.border-top-0 付款資訊
                td.border-top-0.last 請款狀態
            tbody
              tr
                td 000001
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 3
                td 票券商品名稱Ａ
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.unused 未使用
                  p.mb-0 發行(購票)時間 2019-10-03 00:00:00
                td 500
                td 480
                td <span class="badge badge-orange">2021-04-03 止</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00001
                td 無
              tr
                td 000023
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 20
                td 票券商品名稱B
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.unused 未使用
                  p.mb-0 發行(購票)時間 2019-10-03 00:00:00
                td 100
                td 100
                td <span class="badge badge-due">2021-04-03 已到期</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00006
                td 無
              tr
                td 000333
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 231
                td 票券商品名稱Ｃ
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.used 已使用
                  p.mb-0 使用時間 2019-10-03 00:00:00
                td 300
                td 300
                td <span class="badge badge-orange">2021-04-03 止</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00002
                td 無
              tr
                td 000465
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 349
                td 票券商品名稱D
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.used 已使用
                  p.mb-0 使用時間 2021-05-01 00:00:00
                td 300
                td 300
                td <span class="badge badge-due">2021-04-03 已到期</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00003
                td 無
              tr
                td 000789
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 4981
                td 票券商品名稱E
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.cantuse 已作廢
                  p.mb-0 作廢時間 2019-10-04 00:00:00
                td 500
                td 500
                td <span class="badge badge-orange">2021-04-03 止</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00004
                td 無
              tr
                td 003284
                td.text-log.font-weight-bold
                  router-link.text-decoration-none(to="/voucherstorelistdetail") 95063
                td 票券商品名稱F
                td 1234567890123456789012345
                td
                  p.mb-0.voucherStatus.cantuse 已作廢
                  p.mb-0 作廢時間 2021-04-04 00:00:00
                td 500
                td 500
                td <span class="badge badge-due">2021-04-03 已到期</span>
                td
                  p.mb-0.voucherStatus.creditCard 信用卡
                  p.mb-0.text-lightgray.font-weight-bold 豐收款交易編號 00005
                td 無

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
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      &:not(:last-child){
        background: #4B4B4B;
        color: #EFECEC;
      }
      &:last-child{
        background: #F45029;
        color:#EFECEC;
      }
      &.first{
        // border-radius: 5px 0 0 0;
      }
      &.last{
        // border-radius: 0 5px 0 0;
      }
    }
  }
  tbody{
    td{
      font-size: 14px;
      text-align: center;
      vertical-align: middle;
      height: 100px;
      box-sizing: border-box;
    }
    .voucherStatus{
      width: 90px;
      height: 30px;
      box-sizing:border-box;
      display:flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin: 0 auto;
      border-radius: 3px;
      &.unused{
        background: rgba(27,121,244,.14);
        color: rgb(27,121,244)
      }
      &.creditCard{
        background: rgba(103,227,108,.14);
        color: #33C666;
      }
      &.used{
        background: rgba(110,101,222,.14);
        color: #6E65DE;
      }
      &.cantuse{
        background: rgba(131,128,128,.14);
        color:#838080;
      }
    }
    .badge-due{
      background: rgba(0,0,0,.13);
      color: #555151;
    }
  }
</style>
