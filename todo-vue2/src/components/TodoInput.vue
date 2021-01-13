<template>
  <div class="add">
    <input
      type="text"
      class="add-input"
      placeholder="할 일을 입력하세요"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodoItem" />
    <button class="add-button" variant="outline-primary" v-on:click="addTodoItem">
      <span class="blind">➕</span>
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

<style>
  .add {
    display: flex;
    justify-content: center;
  }
  .add input {
    width: 300px;
    background: rgba(255, 255, 255, .65);
    border: 0;
    border-radius: 20px;
    padding: 8px;
  }
  .add input:focus {
    outline:none;
  }
  .add-button {
    background: rgba(255, 255, 255, .85);
    width: 40px;
    border-radius: 24px;
    margin-left: 2px;
  }
  .add-button:focus {
    outline:0;
  }
</style>
