<template>
  <div class="controller">
    <div class="select">
      <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
        <option value="date-asc">날짜 오름차순</option>
        <option value="date-desc">날짜 내림차순</option>
      </select>
    </div>
    <button class="clear" v-on:click="clearTodo">전체 삭제</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: "date-asc"
      }
    },
    methods: {
      sortTodo() {
        this.$emit("sortItem", { value: this.selected })
      },
      clearTodo() {
        this.$emit("clearAll")
      }
    }
  }
</script>

<style>
  .controller {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  select {
    border: 1px solid lightgray;
  }
  button {
    border: 0;
  }
</style>
