<template lang="pug">
  .shoptotalinfo
    navbar.fixed-top
    .container-fluid.bg-white.py-3.breadcrumbbox
      .row.px-40.align-items-center
        .arrowbox
          router-link.text-decoration-none(to="/shoplist") <i class="fas fa-arrow-left"></i>
        p.mb-0.title.font-weight-bold 商家資料總表
        p.mb-0.title |
        p.mb-0.font-weight-bold.actiontitle 新增商家資料
        button.btn.btn-success.ml-auto(@click="editStatus='save'" v-if="editStatus==='edit'") 存檔
        button.btn.btn-edit.ml-auto(@click="editStatus='edit'" v-if="editStatus==='save'") <i class="fas fa-pencil-alt mr-1"></i>繼續編輯
    .container.mt-40
      .boxhead.d-flex.justify-content-start.align-items-center
        span.text-light 商家基本資料
        div.notice.mb-0.d-flex.align-items-center
          div.mb-0.redpoint
          span.ml-2 為必填欄位。
      .boxbody.bg-white.p-30.mb-30
        .row
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left 商家名稱
                td.border-top-0
                  input.form-control(type="text" disabled value="商家名稱" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 統一編號
                td.border-top-0
                  input.form-control(type="text" disabled value="22006252" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 商家代號
                td.border-top-0
                  input.form-control(type="text" disabled value="000001" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left.text-log
                  .d-flex.align-items-center
                    div.mb-0.redpoint.mr-1
                    p.mb-0 豐收款商店代號
                td.border-top-0
                  input.form-control(type="text"  value="000001" :disabled="editStatus === 'save'" :class="{'save' : editStatus === 'save'}")
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left 發行系統
                td.border-top-0
                  input.form-control(type="text" disabled value="永豐紙業電子票券平台（預設）" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 發行票券商註記
                td.border-top-0
                  input.form-control(type="text" disabled value="發行票券商（預設）" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 可發行之票券類型
                td.border-top-0
                  input.form-control(type="text" disabled value="電子自銷（預設）" :class="{'save' : editStatus === 'save'}")
      .boxhead.d-flex.justify-content-start.align-items-center
        span.text-light 負責人資料
        div.notice.mb-0.d-flex.align-items-center
          div.mb-0.redpoint
          span.ml-2 為必填欄位。
      .boxbody.bg-white.p-30
        .row
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left 公司負責人
                td.border-top-0
                  input.form-control(type="text" disabled value="陳小春" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 負責人職稱
                td.border-top-0
                  input.form-control(type="text" disabled value="CEO" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 手機號碼
                td.border-top-0
                  input.form-control(type="text" disabled value="0900000000" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 身分證字號
                td.border-top-0
                  input.form-control(type="text"  value="A000000000" disabled :class="{'save' : editStatus === 'save'}")
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left 公司地址
                td.border-top-0
                  input.form-control(type="text" disabled value="新北市土城區中央路一段365巷7號6樓" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 電子信箱
                td.border-top-0
                  input.form-control(type="text" disabled value="AAA@email.com" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 公司電話
                td.border-top-0
                  input.form-control(type="text" disabled value="00-00000000" :class="{'save' : editStatus === 'save'}")
              tr
                td.font-weight-bold.border-top-0.text-left 傳真電話
                td.border-top-0
                  input.form-control(type="text" disabled value="00-00000000" :class="{'save' : editStatus === 'save'}")
      .boxfooter.mb-30.row.mx-0
        .w-50.d-flex.align-items-center
          .boxfooterleft.bg-log.text-white
            .mb-0.redpoint.mr-1
            p.mb-0 系統窗口負責人
          .boxfooterright
            input.form-control(type="text" :disabled="editStatus === 'save'" :class="{'save' : editStatus === 'save'}").border-0.rouneded-0.h-100
        .w-50.d-flex
          .boxfooterleft.bg-log.text-white
            .mb-0.redpoint.mr-1
            p.mb-0 窗口聯絡電話
          .boxfooterright
            input.form-control(type="text" :disabled="editStatus === 'save'" :class="{'save' : editStatus === 'save'}").border-0.rouneded-0.h-100
      .boxhead.d-flex.justify-content-start.align-items-center
        span.text-light 信託相關資料
        div.notice.mb-0.d-flex.align-items-center
          div.mb-0.redpoint
          span.ml-2 為必填欄位。
      .boxbody.bg-white.p-30.mb-30
        .row
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left
                  .d-flex.align-items-center
                    div.mb-0.redpoint.mr-1
                    p.mb-0 信託期間長度
                td.border-top-0
                  input.form-control(type="text"  value="18個月(預設)" :disabled="editStatus === 'save'" :class="{'save' : editStatus === 'save'}")
          .col-6
            table.table
              tr
                td.font-weight-bold.border-top-0.text-left
                  .d-flex.align-items-center
                    div.mb-0.redpoint.mr-1
                    p.mb-0 信託契約起始時間
                td.border-top-0
                  input.form-control(type="date" value="" :disabled="editStatus === 'save'" :class="{'save' : editStatus === 'save'}")
</template>

<script>
import navbar from '../components/navbar.vue';

export default {
  components: {
    navbar,
  },
  data() {
    return {
      editStatus: 'save',
    };
  },
};
</script>

<style lang="scss" scoped>
// breadcrumbbox
  .breadcrumbbox{
    margin-top: 70px;
    .btn{
      width: 100px;
      height: 45px;
      font-weight: bold;
    }
    .btn-edit{
      color:#1B79F4;
      width: 130px;
      border: 2px solid #1B79F4;
      &:hover{
        background: #1b79f4;
        color: white;
      }
    }
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
  .title{
    font-size: 18px;
    color: #838080;
    margin-left: 20px;
  }
  .actiontitle{
    font-size: 18px;
    color:#2D3486;
    margin-left: 20px;
  }
// 下方表格
.boxhead{
  background: #0F4690;
  padding: 10px 22px;
  border-radius: 5px 5px 0px 0px;
  .notice{
    background: rgba(256,256,256,.56);
    padding: 4px 40px;
    font-size: 10px;
    border-radius: 14px;
    margin-left: 16px;
  }
}
.boxfooterleft{
  width: 30%;
  padding: 10px 20px;
  height: 41px;
  box-sizing: border-box;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.boxfooterright{
  width: 70%;
  height: 41px;
  .form-control{
    font-size: 14px;
  }
  .form-control:disabled{
    border: 0.5px solid rgba(131,128,128,.1);
    background: #EFECEC;
    color: #C1C1C1;
    &.save{
      border-width: 0;
      background: white;
      color: black;
    }
  }
}
.redpoint{
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 50%;
}
tr{
  td{
    vertical-align: middle;
    .form-control{
      font-size: 14px;
    }
    .form-control:disabled{
      border: 0.5px solid rgba(131,128,128,.1);
      background: #EFECEC;
      color: #C1C1C1;
      &.save{
        border-width: 0;
        background: rgba(0,0,0,0);
        color: black;
      }
    }
  }
  td:first-child{
    color:black;
  }
}
</style>
