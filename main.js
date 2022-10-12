const app = {
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      editableId: "",
      newContent: ""
    }
  },
  methods: {
    isEmpty(content) {
      return content === ""
    },
    addTask() {
      if (this.isEmpty(this.newContent)) { 
        alert('Please enter a letter')
        return
      }
      this.tasks.push({
        id: Date.now(),
        content: this.newContent})
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.content = ""
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
}
Vue.createApp(app).mount('#app')
