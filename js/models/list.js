'use strict';
// List Model
const store = {
  lists: [],
  tasks: []
}

const List = (function(){
  var counter = 1
  return class {
    constructor(title) {
      this.id = counter++
      this.title = title
      store.lists.push(this)
    }

    allTasks(){
      var id = this.id
      _.filter(store.tasks, function(item) {
        return item.listID === id
      });
    }

    build(){
      $('#lists').append(
        `<div class='list' id=${this.id}>
        <h2><button class="destroy-list" id= ${this.id}>x</button> ${this.title}</h2>
        <ul id="list-${this.id}"  data-id="${this.id}">  </ul> `
      )

      $('#select_list').append(`<option value="${this.id}">${this.title}</option>`)
    }

    destroy(){
      var id = this.id
      $(`div#${this.id}`).remove()
      $(`option[value="${this.id}"]`).remove()

      store.lists = _.filter(store.lists, function(item) {
        return item.id !== id
      });

      store.tasks = _.filter(store.tasks, function(item) {
        return item.listID !== id
      });



     }


  }
}())
