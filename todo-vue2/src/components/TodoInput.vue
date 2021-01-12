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
          // 할일 추가 시 바로 추가되도록 상위 컴포넌트에 알려줌
          this.$emit("addItem", this.newTodoItem)
          this.clearInput()
        }
      },
      clearInput() {
        this.newTodoItem = ""
      }
    }
  }
</script>
