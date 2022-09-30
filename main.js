const app = new Vue({
  el: '#app',
  data: {
    tasks:  JSON.parse(localStorage.getItem("tasks")) || []
  },
  methods: {
    isEmpty(content) {
      if (content == "") {
        alert('Please enter a letter')
        return true
      }
    },
    addTask() {
      if (this.isEmpty(this.$refs.content.value)) { return }
      this.tasks.push({
        id: Date.now(),
        content: this.$refs.content.value, 
        editable: false})
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        const textForm = document.getElementById("content")
        textForm.value = ""
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    editTask(task) {
      task.editable = true
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    updateTask(task) {
      if (this.isEmpty(task.content)) { return }
      task.editable = false
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})


