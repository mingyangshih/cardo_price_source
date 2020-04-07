<template lang="pug">
  .searchbar.d-flex.align-items-center
    .searchBarContent.d-flex.align-items-center
      p.mb-0.title(v-if="toggle && location === '#/voucherstorelist'") 票券狀態
      .btn-group.btn-group-sm.btn-outline-group.btn-group-toggle.mx-2(v-if="toggle && location === '#/voucherstorelist'")
        button.btn.btn-outline-log.font-weight-bold.first(@click="multiselect(['all','unused','used','due','cantuse'])" :class="{'bg-primary' : filterStatus.length === 5, 'text-white' : filterStatus.length === 5}") 全部
        button.btn.btn-outline-log.font-weight-bold(@click="checkInclude('unused')" :class="{'bg-primary' : filterStatus.includes('unused'), 'text-white' : filterStatus.includes('unused')}") 未使用
        button.btn.btn-outline-log.font-weight-boldd(@click="checkInclude('used')" :class="{'bg-primary' : filterStatus.includes('used'), 'text-white' : filterStatus.includes('used')}") 已使用
        button.btn.btn-outline-log.font-weight-boldd(@click="checkInclude('due')" :class="{'bg-primary' : filterStatus.includes('due'), 'text-white' : filterStatus.includes('due')}") 已到期
        button.btn.btn-outline-log.font-weight-bold.last(@click="checkInclude('cantuse')" :class="{'bg-primary' : filterStatus.includes('cantuse'), 'text-white' : filterStatus.includes('cantuse')}") 已作廢
      p.mb-0.title(v-if="toggle") 票券價金保管期間（待確定）
      input.form-control.mr-2(type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" v-if="toggle")
      input.form-control.mr-2(type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" v-if="toggle")
      button.toggleBtn.btn.font-weight-bold(:class="{'false' : !toggle,'true' : toggle}" @click="toggle = !toggle") +篩選
    button(v-if="location === '#/voucherstorelist'").btn.btn-success.excel <i class="far fa-file-excel mr-2"></i>匯出
    label.mb-0
      input.form-control(type="text" placeholder="搜尋商家或商家統一編號" v-if="location === '#/voucherstoresearch'")
      input.form-control(type="text" placeholder="搜尋交易訂單編號或票券編號" v-if="location === '#/voucherstorelist'")
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      location: '',
      filterStatus: [],
    };
  },
  created() {
    const vm = this;
    const location = window.location.hash;
    vm.location = location;
  },
  methods: {
    multiselect(ary) {
      const vm = this;
      if (vm.filterStatus.length === 5) {
        vm.filterStatus = [];
      } else {
        vm.filterStatus = ary;
      }
    },
    checkInclude(par) {
      const vm = this;
      if (vm.filterStatus.includes(par)) {
        const idx = vm.filterStatus.indexOf(par);
        vm.filterStatus.splice(idx, 1);
      } else {
        vm.filterStatus.push(par);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .searchBarContent{
    padding:10px 16px;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 18px;
    box-sizing: border-box;
    .title{
      font-size: 14px;
      color: #C1C1C1;
    }
  }
  // 收闔篩選
  .toggleBtn{
    width: 105px;
    height: 45px;
    box-sizing: border-box;
    outline: none;
    border-radius: 23px;
  }
  .toggleBtn.false{
    background: #EAF1FA 0% 0%;
    box-shadow: 0px 0px 6px #00000029;
    color: #3343F7;
  }
  .toggleBtn.true{
    background: #3343F7;
    color: #eaf1fa;
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
  label{
    position: relative;
  }
  label::after{
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f002";
    position:absolute;
    top:26%;
    right:16px;
    z-index: 100;
    color: #1B79F4;
  }
  input[type="date"]{
    width: 168px;
    height: 45px;
    border-radius: 25px;
    box-sizing: border-box;
    border: 1px solid #82B3F4;
    font-size: 14px;
  }
  // 篩選票券狀態btn group
  .btn-group{
    .btn{
      width: 60px;
      height: 40px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .btn.first{
      border-radius: 20px 0 0 20px;
    }
    .btn.last{
      border-radius: 0 20px 20px 0;
    }
  }
  // excel
  .btn.excel{
    width: 100px;
    height: 45px;
    box-sizing: border-box;
    border-radius: 3px;
    font-weight: bold;
    margin-left: 16px;
  }
</style>
