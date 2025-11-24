<script setup>
const today = new Date().toLocaleDateString('pt-BR', { dateStyle: 'full' })
</script>

<template>
  <header>
    <h1>Minhas Tarefas</h1>
    <p class="date">{{ today }}</p>
  </header>
</template>

<style scoped>
header { text-align: center; margin-bottom: 2rem; }
h1 { color: #2c3e50; }
.date { color: #666; text-transform: capitalize; }
</style>