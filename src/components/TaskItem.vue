<script setup>
import { useTaskStore } from '../stores/taskStore'
defineProps({ task: Object })
const store = useTaskStore()
</script>

<template>
  <div class="item" :class="{ done: task.finished }">
    <div class="info">
      <input type="checkbox" :checked="task.finished" @change="store.toggleTask(task.id)">
      <span>{{ task.title }}</span>
    </div>
    <button @click="store.deleteTask(task.id)" class="del">×</button>
  </div>
</template>

<style scoped>
.item { display: flex; justify-content: space-between; padding: 10px; background: white; margin-bottom: 8px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); align-items: center; transition: all 0.3s; }
.done { opacity: 0.6; text-decoration: line-through; }
.info { display: flex; gap: 10px; align-items: center; }
.del { background: none; border: none; color: red; font-size: 1.2rem; cursor: pointer; }
</style>