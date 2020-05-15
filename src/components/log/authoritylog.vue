<template lang="pug">
  .table-responsive.mt-4.border-top-0
    table.table.border-left.border-right.border-bottom
      thead
        tr
          th 序號
          th 異動人員
          th 異動時間
          th 異動內容
          th 登入IP位置
      tbody
        tr
          td 1
          td 使用者名稱
          td 2020-06-01 12:45:55
          td 新增人員/刪除人員
          td IP位：000.000.00
        tr
          td 2
          td 使用者名稱
          td 2020-06-01 12:45:55
          td 新增人員/刪除人員
          td IP位：000.000.00
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
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
      height: 64px;
    }
  }
</style>
