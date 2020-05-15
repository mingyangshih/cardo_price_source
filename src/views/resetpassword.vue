<template lang="pug">
  .resetpassword
    navbar.fixed-top
    .container-fluid.detailContent.d-flex.justify-content-center
      .row.w-50.h-100.justify-content-center.align-items-center.flex-column
        img(src="../assets/img/login/icons8-key.png")
        .title 重設密碼
        input(type="text" placeholder="請輸入新密碼").form-control.input.my-3
        input(type="text" placeholder="請重新輸入新密碼").form-control.input.my-3
        div.d-flex.mt-30
          button.btn-box.btn-outline 取消
          button.btn-box.btn-fill(@click="$store.commit('resetPasswordModalAction', true)") 設定完成
    resetpasswordmodal(v-if="resetPasswordModal")
</template>

<script>
import { mapFields } from 'vuex-map-fields';

import navbar from '../components/navbar.vue';
import resetpasswordmodal from '../components/resetpasswordmodal.vue';

export default {
  components: {
    navbar,
    resetpasswordmodal,
  },
  computed: {
    ...mapFields(['resetPasswordModal']),
  },
  created() {
    this.$store.commit('resetPasswordModalAction', false);
  },
};
</script>

<style lang="scss" scoped>
  .detailContent{
    height: calc( 100vh - 70px);
    margin-top: 70px;
    background: white;
  }
  .title{
    color: #3B44A9;
    font-weight: bold;
    font-size: 32px;
    margin-top: 30px;
  }
  .input{
    width: 475px;
    height: 60px;
    border-radius: 30px;
    background: rgba(27,121,244,.1);
    &::placeholder{
      color:rgba(141,141,141,.4);
      font-size: 14px;
    }
  }
  .btn-box{
    width: 268px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 12px;
    font-size: 18px;
  }
  .btn-outline{
    border: 1px solid #1B79F4;
    color: #1b76d4;
    background: white;
    font-weight: bold;
    outline: none;
    &:hover{
      background: #1B79F4;
      color: white;
    }
  }
  .btn-fill{
    background: #1b79f4;
    border: 1px solid #1B79F4;
    color: white;
    font-weight: bold;
    outline: none;
    &:hover{
      background: white;
      color: #1b79f4;
    }
  }
</style>
