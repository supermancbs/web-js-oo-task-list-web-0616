'use strict';
// Tasks Controller

function tasksController(){

  var description = $('#task_description').val()
  var priority = $('#task_priority').val()
  var listID = $('#select_list').val()

  var task = new Task(description, priority, listID)
  task.build()
}

function taskDestroy(taskIDd){
  var taskIDd = parseInt(taskIDd)
  var task = _.where(store.tasks, {id: taskIDd})[0]
  task.destroy()
}
