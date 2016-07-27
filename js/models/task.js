'use strict';
// Task Model

const Task = (function(){
  var counter = 1
  return class {
    constructor(description, priority, listID) {
      var listID = parseInt(listID)
      this.id = counter++
      this.description = description
      this.priority = priority
      this.listID = listID
      store.tasks.push(this)
    }

    build() {
      $(`ul#list-${this.listID}`).append(
        `<li id="data-${this.id}">
        <button class="destroy-task" id=${this.id}>x</button> ${this.description}, ${this.priority}
        </li>`
      )
    }


    destroy(){
      var id = this.id
      $(`li#data-${id}`).remove()
      // <li id="data-undefined">
      store.tasks = _.filter(store.tasks, function(item) {
        return item.id !== id
      });

     }

  }

}())
