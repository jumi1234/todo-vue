<template>
  <div class="title">
    <p class="title-message">{{ message }}</p>
    <p class="title-task">
      <span class="title-task-top">남은 할 일</span><br />
      <span class="title-task-count">
        <em class="title-task-left">{{ propsdata.left }}</em>
        <em v-if="propsdata.total" class="title-task-total">&nbsp;/ {{ propsdata.total }}</em>
      </span>
      <span class="title-task-info"></span>
    </p>
  </div>
</template>

<script>
  export default {
    props: ["propsdata"],
    data() {
      return {
        message: "안녕, shab",
      }
    }
  }
</script>

<style>
  .title-task-count {
    font-size: 30px;
  }
  .title-task-total {
    font-weight: bold;
  }
</style>
