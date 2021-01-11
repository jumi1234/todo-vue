<template>
  <div class="add">
    <input
      type="text"
      class="add-input"
      placeholder="할 일을 입력하세요"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodoItem" />
    <button class="add-button" v-on:click="addTodoItem">
      <span class="blind">추가</span>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodoItem: ""
      }
    },
    methods: {
      addTodoItem() {
        if(this.newTodoItem !== "") {
          var value = {
            item: this.newTodoItem,
            date: `${new Date().getMonth() + 1}${new Date().getDate()}`
          }
          localStorage.setItem(this.newTodoItem, JSON.stringify(value))
          this.clearInput()
        }
      },
      clearInput() {
        this.newTodoItem = ""
      }
    }
  }
</script>
