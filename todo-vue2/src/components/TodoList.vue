<template>
  <ul class="list">
    <b-list-group class="list-item" v-for="todoItem in propsdata" v-bind:key="todoItem.item">
      <b-list-group-item>
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
      <b-button class="list-delete" variant="warning" v-on:click="removeTodo(todoItem, index)">삭제</b-button>
    </b-list-group-item>
    </b-list-group>
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

<style>
  .list {
    padding-left: 0;
  }
  .list .list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .list-group-item label {
    margin-bottom: 0;
  }
  .list-group-item label p {
    margin-bottom: 0;
    color: #43494f;
    font-weight: bold;
  }
  p.list-date {
    margin-bottom: 0;
    position: absolute;
    right: 10%;
    font-size: 14px;
color: #7a848c;
  }
  input:checked + label p {
    color: #b0b5c1;
    text-decoration: line-through;
  }
</style>
