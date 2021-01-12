<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox">
        <option value="date-asc">날짜 오름차순</option>
        <option value="date-desc">날짜 내림차순</option>
        <option value="name-asc">이름 오름차순</option>
        <option value="name-desc">이름 내림차순</option>
      </select>
    </div>
    <button class="clear" v-on:click="clearTodo">전체 삭제</button>
  </div>
</template>

<script>
  export default {
    methods: {
      clearTodo() {
        localStorage.clear()
      }
    }
  }
</script>
