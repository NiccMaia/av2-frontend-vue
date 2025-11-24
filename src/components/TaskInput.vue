<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
const text = ref('')

const handleSubmit = () => {
  if (text.value.trim()) {
    store.addTask(text.value)
    text.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="input-wrap">
    <input v-model="text" placeholder="O que precisa ser feito?" />
    <button type="submit">+</button>
  </form>
</template>

<style scoped>
.input-wrap { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 8px; }
button { background: #8d799a; color: white; border: none; padding: 0 15px; border-radius: 8px; cursor: pointer; font-size: 1.2rem; }
</style>