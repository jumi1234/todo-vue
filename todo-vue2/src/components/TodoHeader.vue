<template>
  <header class="header">
    <h1 class="logo">Vue Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </header>
</template>

<script>
import getDate from "../assets/common/getDate";
  export default {
    data() {
      return {
        timestamp: ""
      }
    },
    created() {
      this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
    }
  }
</script>
