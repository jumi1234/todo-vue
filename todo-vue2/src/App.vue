<template>
  <div id="app">
    <div class="top">
      <TodoHeader />
      <TodoTitle v-bind:propsdata="checkCount" />
      <!-- TodoInput에서 $emit으로 받아온 newTodoItem 데이터를 가지고 addOneItem 실행 -->
      <TodoInput v-on:addItem="addOneItem" />
    </div>
    <div class="middle">
      <TodoController
        v-on:clearAll="clearAllItem"
        v-on:sortItem="sortAllItem"
      />
      <TodoList
        v-bind:propsdata="todoItems"
        v-on:toggleItem="toggleOneItem"
        v-on:removeItem="removeOneItem"
      />
      <TodoFooter />
    </div>
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
      todoItems: [],
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
        date: `${getDate().month}/${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      }
      // JSON.stringify() 객체를 JSON 문자열로 변환
      localStorage.setItem(todoItem, JSON.stringify(value))
      this.todoItems.push(value)
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItem() {
      this.todoItems = []
      localStorage.clear()
    },
    sortTodoLatest() {
      this.todoItems.sort((a, b) => {
        return b.time - a.time
      })
    },
    sortTodoOldest() {
      this.todoItems.sort((a, b) => {
        return a.time - b.time
      })
    },
    sortAllItem(selectedSort) {
      if(selectedSort.value === "date-desc") {
        this.sortTodoLatest()
      } else if(selectedSort.value === "date-asc") {
        this.sortTodoOldest()
      }
    }
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for (let i = 0; i < this.todoItems.length; i++) {
          if (this.todoItems[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      };

      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      };
      return count;
    }
  },
  mounted() {
    this.sortTodoOldest()
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
  }
  .top {
    padding: 30px;
    background: #9796f0; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #9796f0, #fbc7d4); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #9796f0, #fbc7d4);
  }
  .middle {
    padding: 24px;
  }
</style>
