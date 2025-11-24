import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        // Tenta carregar do localStorage ou inicia vazio
        tasks: JSON.parse(localStorage.getItem('av2Tasks')) || [],
        filter: 'all'
    }),
    getters: {
        // Lógica de filtragem automática [cite: 88]
        filteredTasks: (state) => {
            if (state.filter === 'pending') return state.tasks.filter(t => !t.finished)
            if (state.filter === 'completed') return state.tasks.filter(t => t.finished)
            return state.tasks
        }
    },
    actions: {
        addTask(title) {
            this.tasks.push({
                id: Date.now(),
                title,
                finished: false
            })
            this.saveLocal()
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id)
            this.saveLocal()
        },
        toggleTask(id) {
            const task = this.tasks.find(t => t.id === id)
            if (task) task.finished = !task.finished
            this.saveLocal()
        },
        setFilter(value) {
            this.filter = value
        },
        saveLocal() {
            localStorage.setItem('av2Tasks', JSON.stringify(this.tasks))
        }
    }
})