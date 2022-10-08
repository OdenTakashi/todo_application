const app = new Vue({
  el: '#app',
  data: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    editable_id: ""
  },
  methods: {
    isEmpty(content) {
      return content === ""
    },
    addTask() {
      if (this.isEmpty(this.$refs.content.value)) { 
        alert('Please enter a letter')
        return
      }
      this.tasks.push({
        id: Date.now(),
        content: this.$refs.content.value})
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
      this.editable_id = task.id
    },
    updateTask(task) {
      if (this.isEmpty(task.content)) {
        alert('Please enter a letter')
        return 
      }
        this.editable_id = ""
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})
