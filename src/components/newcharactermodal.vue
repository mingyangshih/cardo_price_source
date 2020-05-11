<template lang="pug">
  #newcharacter.modal.fade(tabindex='-1' role='dialog' aria-hidden='true')
    .modal-dialog(role='document')
      .modal-content
        .modal-header.d-flex.justify-content-center
          h5.modal-title.font-weight-bold 新增角色
        .modal-body.px-40.d-flex.flex-column.justify-content-center
          .d-flex.align-items-center.justify-content-start.mb-3
            span.text-danger *
            span.subtitle.font-weight-bold 輸入角色名稱
          .w-100
            input(type="text" required).form-control
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
    margin-top: 200px;
    max-width: 650px
  }
  .modal-content{
    width: 650px;
    height: 390px;
    border: 1px solid #707070;
    border-radius: 20px;
  }
  .subtitle{
    color: #3B44A9;
    font-size: 20px;
  }
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
