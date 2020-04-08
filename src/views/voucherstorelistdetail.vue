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
    .container.voucherstatuscontainer.py-30
      .row.justify-content-center.align-items-center.voucherstatusbox
        .voucherstatusboxleft.d-flex.justify-content-center.align-items-center
          p.mb-0.text-light 票券狀態
        .voucherstatusboxright.d-flex.align-items-center
          .dashline
          .circle.bg-log.d-flex.flex-column.align-items-center
            p.mb-0.status.font-weight-bold 未使用
            p.mb-0.time 發行時間 2019-10-03 00:00:00
    .container.voucherinfodetail.bg-white
      p.title.mb-3.text-left 票券詳細資訊
      hr
      .d-flex
        .col-6.pl-0
          <span class="badge badge-log">票券資訊</span>
          table.table.mt-30
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券訂單編號
              td.border-top-0.text-left.text-secondary 000023
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券編號
              td.border-top-0.text-left.text-secondary 20
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券型態
              td.border-top-0.text-left.text-secondary <span class="badge badge-blue font-weight-bold">電子自銷</span>
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券條碼
              td.border-top-0.text-left.text-secondary 1234567890123456789012345
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券商品名稱
              td.border-top-0.text-left.text-secondary 票券商品B
        .col-6
          <span class="badge badge-orange">價金資訊</span>
          table.table.mt-30
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券原價
              td.border-top-0.text-left.text-secondary 1,000
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 價金保管金額 (實際售價)
              td.border-top-0.text-left.text-secondary 1,000
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 價金保管到期日
              td.border-top-0.text-left.text-secondary <span class="badge badge-gray font-weight-bold">2021-04-03 已到期</span>
          <span class="badge badge-log">票券異動時間</span>
          table.table
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 票券使用(作廢)時間
              td.border-top-0.text-left.text-secondary YYYY/MM/DD 00:00:00
      hr
      .d-flex
        .col-6.pl-0
          <span class="badge badge-purple">發行商資料</span>
          table.table.mt-30
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 發行商家
              td.border-top-0.text-left.text-secondary 發行商家名稱
            tr
              td.border-top-0.text-left.pl-0.font-weight-bold 發行票券廠商統編
              td.border-top-0.text-left.text-log.font-weight-bold 22006252

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
  // voucher status
  .voucherstatuscontainer{
    background: rgba(75,75,75,0.1);
    border-radius: 5px;
    margin:30px auto;
  }
  .voucherstatusboxleft{
    width: 207px;
    height: 128px;
    box-sizing: border-box;
    background: transparent linear-gradient(138deg, #1B79F4 0%, #1D70E3 5%, #2551AA 50%, #27489A 63%, #3B44A9 100%) 0% 0% no-repeat;
    border-radius: 40px 0 0 40px;
    font-size: 20px;
    box-shadow: 0px 2px 4px #00000029;
  }
  .voucherstatusboxright{
    width: 343px;
    height: 128px;
    background: white;
    border-radius: 0 40px 40px 0;
    box-shadow: 0px 2px 4px #00000029;
    .dashline{
      border: 1px dashed rgba(75,75,75,0.4);
      width: 50%;
    }
    .circle{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      position: relative;
      .status{
        margin-top: -20px;
        left:0;
        font-size: 14px;width: 100px;
      }
      .time{
        margin-top: 20px;
        font-size: 14px;
        width: 300px;
      }
    }
  }
  // .voucherinfodetail
  .voucherinfodetail{
    padding:30px 60px;
    .title{
      font-size: 18px;
      color: #4B4B4B;
      font-weight: bold;
    }
  }
  .badge{
    width: 115px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .badge-purple{
    background: #6E65DE;
    color:white;
  }
  // 票券詳細資料表格
  td{
    .badge{
      padding: auto 16px;
      height: 20px;
    }
    .badge-blue{
      color: #1B79F4;
      background: rgba(27,121,224,.1);
    }
    .badge-gray{
      color: #555151;
      background: rgba(85,81,81,.1);
    }
  }
  </style>
