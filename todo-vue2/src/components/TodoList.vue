<template>
  <ul class="list">
    <li class="list-item" v-for="todoItem in todoItems" v-bind:key="todoItem.item">
      <input
        type="checkbox"
        v-bind:id="todoItem.item"
        v-bind:checked="todoItem.completed === true"
        v-on:change="toggleComplete(todoItem)"
        />
      <label v-bind:for="todoItem.item" class="list-label">
        <p class="list-text">{{ todoItem.item }}</p>
      </label>
      <p class="list-date">{{ todoItem.date }}</p>
      <!--
      <button class="list-delete">삭제</button> -->
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        todoItems: []
      }
    },
    created() {
      if(localStorage.length > 0) {
        for(let i=0; i<localStorage.length; i++) {
          if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
            this.todoItems.push(
              // JSON.parse() JSON 문자열의 구문을 분석해서 JavaScript 값이나 객체를 생성
              JSON.parse(localStorage.getItem(localStorage.key(i)))
            )
          }
        }
      }
    },
    methods: {
      toggleComplete(todoItem) {
        todoItem.completed = !todoItem.completed
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      }
    }
  }
</script>
