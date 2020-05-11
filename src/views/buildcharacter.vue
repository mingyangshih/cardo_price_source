<template lang="pug">
  .buildcharacter
    newcharactermodal
    editcharactermodal
    navbar.fixed-top
    .container-fluid.detailContent
      .row.px-40.pt-40
        p.titleFontDetail.text-dark.font-weight-bold.mb-0 角色權限列表
      .row.px-40.pt-40.align-items-center
        .addCharacter.d-flex.align-items-center.justify-content-center(data-toggle="modal" data-target="#newcharacter")
          p.plus.mb-0 +
          p.mb-0 新增角色
        input.form-control.ml-auto(type="text" placeholder="輸入角色名稱" )
      .row.px-40
        .table-responsive.mt-4.border-top-0
          table.table.border-left.border-right.border-bottom
            thead
              tr
                th 角色名稱
                th 權限列表
                th 編輯
            tbody
              tr
                td 商家資料建立人員
                td
                  .d-flex.justify-content-center.align-items-center.flex-column.h-100
                    span.text-log.font-weight-bold 票券庫存查詢
                    span.text-log.font-weight-bold 商家資料建立與總表－編輯
                    span.text-log.font-weight-bold 角色建立
                    span.text-log.font-weight-bold 管理使用者
                    span.text-log.font-weight-bold 票券商品查詢
                td
                  .d-flex.justify-content-center.align-items-center.h-100
                    .table-btn.table-btn-green(data-toggle="modal" data-target="#editcharactermodal") <i class="fas fa-pencil-alt"></i>
                    .table-btn.table-btn-danger.ml-3 <i class="fas fa-trash"></i>
</template>

<script>
import navbar from '../components/navbar.vue';
import newcharactermodal from '../components/newcharactermodal.vue';
import editcharactermodal from '../components/editcharactermodal.vue';

export default {
  components: {
    navbar,
    newcharactermodal,
    editcharactermodal,
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
  .plus{
    width: 30px;
    height: 30px;
    background: #1E84F6;
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    margin-right: 16px;
  }
  .addCharacter{
    font-weight: bold;
    width: 150px;
    height: 50px;
    color: #8E8D8D;
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #1B79F4;
    border-radius: 32px;
    cursor: pointer;
    font-size: 15px;
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
  // table btn
  .table-btn{
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
  }
  .table-btn-green{
    background: #17800E;
    color: white;
  }
  .table-btn-danger{
    background: #FC4524;
    color: white;
  }
</style>
