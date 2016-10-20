(function() {
  'use strict';

angular.module('api.todoes',[])
.factory('toDoList', function() {
  
  var toDoList = [
    { 
      task: "planchar",
      time: "10:00 AM",
      category: "cosas de casa"
    },
    { 
      task: "Almorzar bien",
      time: "10:30 AM",
      category: "personal"
    }
  ];

  var categories = ['all','personal','cosas de casa'];

  var doneList = [];

  var createTask = function(task){
    toDoList.push(task);
  };

  var markAsDone = function(toDo){
    remove(toDo);
    doneList.push(toDo);
  };

  var remove = function(toDo){
    var taskIndex = toDoList.indexOf(toDo);
    toDoList.splice(taskIndex, 1);
  };

  var filterByCategory = function(category){
    if (category === 'all') {
      return toDoList;
    }else{
      return toDoList.filter(function(toDo){ return toDo.category === category });
    }
  }

  return {
    all: toDoList,
    categories: categories,
    doneList: doneList,
    createTask: createTask,
    markAsDone: markAsDone,
    remove: remove,
    filterByCategory: filterByCategory
  };
});
})();