(function() {
  'use strict';

angular.module('api.todoes',[])
.factory('toDoList', function() {
  
  var toDoList = [
    { 
      task: "planchar",
      time: "10:00 AM"
    },
    { 
      task: "Almorzar bien",
      time: "10:30 AM"
    }
  ];

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

  return {
    all: toDoList,
    doneList: doneList,
    createTask: createTask,
    markAsDone: markAsDone,
    remove: remove
  };
});
})();