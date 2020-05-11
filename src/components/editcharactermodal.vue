<template lang="pug">
  #editcharactermodal.modal.fade
    .modal-dialog(role='document')
      .modal-content
        .modal-header.d-flex.justify-content-center
          h5.modal-title.font-weight-bold 編輯角色權限
        .modal-body.px-40.d-flex.flex-column.justify-content-center
          .d-flex.align-items-center.justify-content-start.mb-3
            span.subtitle.font-weight-bold 權限列表
          .w-100.d-flex.justify-content-center
            .w-75.d-flex.flex-column.justify-content-center.align-items-start.list
              .custom-control.custom-checkbox.my-3
                input#voucherStoreSearch.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="voucherStoreSearch") 票券庫存查詢
              .custom-control.custom-checkbox.my-3
                input#shoplist.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="shoplist") 商家資料建立與總表-編輯
              .custom-control.custom-checkbox.my-3
                input#buildCharacter.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="buildCharacter") 角色建立
              .custom-control.custom-checkbox.my-3
                input#adminUser.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="adminUser") 管理使用者
              .custom-control.custom-checkbox.my-3
                input#voucherSearch.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="voucherSearch") 票券商品查詢
              .custom-control.custom-checkbox.my-3
                input#logSearch.custom-control-input(type='checkbox')
                label.custom-control-label.font-weight-bold.text-dark(for="logSearch") Log異動記錄查詢
        .modal-footer.d-flex.justify-content-center.align-items-center
          button.btn.btn-cancel(type='button' data-dismiss='modal') 取消
          button.btn.btn-confirm.ml-3(type='button') 確定新增
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .modal-title{
    color: #4B4B4B;
    font-size: 22px;
  }
  .modal-dialog{
    margin-top: 150px;
    max-width: 650px
  }
  .modal-content{
    width: 650px;
    // height: 390px;
    border: 1px solid #707070;
    border-radius: 20px;
  }
  .subtitle{
    color: #3B44A9;
    font-size: 20px;
  }
  .list{
    background: #EAF1FA;
    padding: 0 16px;
    border-radius: 3px;
  }
  // modal footer
  .modal-footer{
    .btn{
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
    .btn-cancel{
      border: 2px solid #8E8D8D;
      &:hover{
        background: #8E8D8D;
        color: white;
      }
    }
    .btn-confirm{
      background: #1B79F4;
      border: 2px solid #1B79F4;
      color: white;
      &:hover{
        color:#1B79F4;
        background: white;
      }
    }
  }
</style>
