<template>
  <div class="title">
    <p class="title-message">{{ message }}</p>
    <p class="title-task">
      <span class="task-total">{{ taskTotal }}</span> tasks today.
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "안녕, shab",
        taskTotal: 5
      }
    }
  }
</script>
