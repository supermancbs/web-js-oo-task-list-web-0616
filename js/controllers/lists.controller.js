'use strict';
// Lists Controller

function ListsController() {
  var title = $('#list_title').val()
  var list = new List(title)
  list.build()
}


function listDestroy(listIDd){

  var listIDd = parseInt(listIDd)
  var list = _.where(store.lists, {id: listIDd})[0]
  list.destroy()
}
