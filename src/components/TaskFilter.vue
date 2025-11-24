<script setup>
import { useTaskStore } from '../stores/taskStore'
const store = useTaskStore()
</script>

<template>
  <div class="filters">
    <button @click="store.setFilter('all')" :class="{ active: store.filter === 'all'}">Todas</button>
    <button @click="store.setFilter('pending')" :class="{ active: store.filter === 'pending'}">Pendentes</button>
    <button @click="store.setFilter('completed')" :class="{ active: store.filter === 'completed'}">Feitas</button>
  </div>
</template>

<style scoped>
.filters { display: flex; gap: 5px; justify-content: center; margin-bottom: 20px; }
button { background: none; border: 1px solid #ccc; padding: 5px 10px; border-radius: 20px; cursor: pointer; }
button.active { background: #8d799a; color: white; border-color: #8d799a; }
</style>