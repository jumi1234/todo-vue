<template>
  <ul class="list">
    <li class="list-item" v-for="todoItem in propsdata" v-bind:key="todoItem.item">
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
      <button class="list-delete" v-on:click="removeTodo(todoItem, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ["propsdata"],
    methods: {
      removeTodo(todoItem, index) {
        this.$emit("removeItem", todoItem, index);
      },
      toggleComplete(todoItem) {
        this.$emit("toggleItem", todoItem);
      }
    },
  }
</script>
