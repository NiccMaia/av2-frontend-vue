<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <nav>
      <RouterLink to="/">Tarefas</RouterLink> |
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
body { font-family: sans-serif; background: #f4f4f4; margin: 0; }
.app-container { padding: 20px; }
nav { text-align: center; margin-bottom: 20px; }
nav a { text-decoration: none; color: #333; font-weight: bold; }
nav a.router-link-active { color: #8d799a; }
</style>