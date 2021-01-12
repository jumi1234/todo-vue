<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <!-- TodoInput에서 $emit으로 받아온 newTodoItem 데이터를 가지고 addOneItem 실행 -->
    <TodoInput v-on:addItem="addOneItem" />
    <TodoController />
    <TodoList v-bind:propsdata="todoItems"/>
    <TodoFooter />
  </div>
</template>

<script>
import TodoController from './components/TodoController';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoTitle from './components/TodoTitle';
import getDate from "./assets/common/getDate";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  },
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
    addOneItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      }
      // JSON.stringify() 객체를 JSON 문자열로 변환
      localStorage.setItem(todoItem, JSON.stringify(value))
      this.todoItems.push(value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
