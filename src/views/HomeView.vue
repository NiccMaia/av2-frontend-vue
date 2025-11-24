<script setup>
import TheHeader from '../components/TheHeader.vue'
import TaskInput from '../components/TaskInput.vue'
import TaskFilter from '../components/TaskFilter.vue'
import TaskItem from '../components/TaskItem.vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div class="home">
    <TheHeader />
    <TaskInput />
    <TaskFilter />

    <TransitionGroup name="list" tag="div">
      <TaskItem v-for="task in store.filteredTasks" :key="task.id" :task="task" />
    </TransitionGroup>

    <p v-if="store.tasks.length === 0" class="empty">Nenhuma tarefa ainda...</p>
  </div>
</template>

<style scoped>
.home { max-width: 500px; margin: 0 auto; }
.empty { text-align: center; color: #999; margin-top: 20px; }

/* CSS da Animação */
.list-enter-active, .list-leave-active { transition: all 0.4s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateX(30px); }
</style>