const app = new Vue({
  el: '#app',
  data: {
    image: "./assets/images/space_ship.jpg",
    tasks:  JSON.parse(localStorage.getItem("tasks")) || []
  },
  methods: {
    addTask() {
      this.tasks.push({
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
      task.editable = false
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})


