angular.module('starter.controllers', ['api.todoes'])

.controller('AppCtrl', ['toDoList', '$scope', '$ionicModal', '$timeout', function(tdl, $scope, $ionicModal, $timeout) {

  $scope.toDoList = tdl.all;

  $scope.newToDo = {
    task: undefined,
    time: undefined,
    category: undefined
  };

  $scope.doneList = tdl.doneList;

  $ionicModal.fromTemplateUrl('templates/create.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeCreateTask = function() {
    $scope.modal.hide();
  };

  $scope.openCreateTask = function() {
    $scope.modal.show();
  };

  $scope.createTask = function() {
    console.log('Creating a todo');

    tdl.createTask($scope.newToDo);

    $timeout(function() {
      $scope.closeCreateTask();
    }, 1000);
  };
}])

.controller('ToDoListCtrl', ['toDoList',"$scope", "$http", function(tdl, $scope, $http) {

  $scope.categories = tdl.categories;

  $scope.markAsDone = function(toDo){
    tdl.markAsDone(toDo);
  };

  $scope.remove = function(toDo){
    tdl.remove(toDo);
  };

  $scope.filterByCategory = function(category){
    console.log(category);
    $scope.toDoList = tdl.all;
    $scope.toDoList = tdl.filterByCategory(category);
  };

}])

