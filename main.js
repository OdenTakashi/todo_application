const app = {
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      editable_id: "",
      content: ""
    }
  },
  methods: {
    isEmpty(content) {
      return content === ""
    },
    addTask() {
      if (this.isEmpty(this.content)) { 
        alert('Please enter a letter')
        return
      }
      this.tasks.push({
        id: Date.now(),
        content: this.content})
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
      //TODO line:12と処理が同じ、共通化したい。
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
