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
import getDate from "../assets/common/getDate";
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
            date: `${getDate().date} ${getDate().week}`,
            completed: false 
          }
          // JSON.stringify() 객체를 JSON 문자열로 변환
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
