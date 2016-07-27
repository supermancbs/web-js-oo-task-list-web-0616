// Initialize

// $(function() { // on document ready
//   listController = new ListsController();
//   listController.init();
//   tasksController = new TasksController();
//   tasksController.init();
// });

$(document).on('ready', function(){

  $('#add_list').on('submit', function(event) {
    event.preventDefault()
    ListsController()

    $('button.destroy-list').on('click', function(event){
      event.preventDefault()
      var id = this.id
      listDestroy(id)
    })

  })

  $('#add_task').on('submit', function(event) {
    event.preventDefault()
    tasksController()

    $('button.destroy-task').on('click', function(event){
      event.preventDefault()
      var id = this.id
      taskDestroy(id)
    })
  })


})
