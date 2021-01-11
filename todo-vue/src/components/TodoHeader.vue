<template>
  <header class="header">
    <h1 class="logo">Vue Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        timestamp: ""
      }
    },
    created() {
      const now = new Date()
      const month = now.getMonth() + 1
      const date = now.getDate()
      const weekList = new Array("일", "월", "화", "수", "목", "금", "토")
      const week = weekList[now.getDay()]
      this.timestamp = `${month}/${date} ${week}`
    }
  }
</script>
