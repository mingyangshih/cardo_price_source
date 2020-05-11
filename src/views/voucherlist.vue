<template lang="pug">
  .voucherlist
    .navtop.container-fluid.d-flex.align-items-center.fixed-top
      router-link(to="/vouchersearch").arrowBox.text-decoration-none <i class="fas fa-arrow-left "></i>
      p.mb-0.text-white.font-weight-bold.back 返回
      p.mb-0.companyName.ml-auto xxx股份有限公司
    .container-fluid.detailContent
      .row.px-40.pt-40.align-items-center
        p.titleFontDetail.text-dark.font-weight-bold.mb-0.mr-auto 商品列表
        searchbar
      .row.px-40
      .table-responsive.mt-4.border-top-0
        table.table.border-left.border-right.border-bottom
          thead
            tr

</template>

<script>
import searchbar from '../components/searchbar.vue';

export default {
  components: {
    searchbar,
  },
};
</script>

<style lang="scss" scoped>
  .navtop{
    background: transparent linear-gradient(89deg, #1B79F4 0%, #27489A 53%, #3B44A9 100%) 0% 0%;
    box-shadow: 0px 2px 4px #00000029;
    height: 70px;
    box-sizing: border-box;
    padding:0 50px;
  }
  .arrowBox{
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255,255,255,.4);
    cursor: pointer;
  }
  .back{
    font-size: 18px;
    margin-left: 20px;
  }
  .companyName{
    background: rgba(0,0,0,.4);
    font-size: 18px;
    padding:5px 22px;
    box-sizing: border-box;
    color: white;
    border-radius:19px;
  }
  // detailcontent
  .detailContent{
    height: calc( 100vh - 70px);
    margin-top: 70px;
  }
  .titleFontDetail{
    font-size: 20px;
  }
</style>
