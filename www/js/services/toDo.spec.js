describe('Todo factory', function() {
  var toDoFactory;

  beforeEach(module('api.todoes'));

  beforeEach(inject(function(toDoList) {
    toDoFactory = toDoList;
  }));

  it('should exist', function() {
    expect(toDoFactory).toBeDefined();
  });

  it('should create a task', function() {
  	newTask = { 
      task: "desayunar",
      time: "08:00 AM",
      category: "personal"
    };

    expect(toDoFactory.all.length).toBe(2);

    toDoFactory.createTask(newTask);

    expect(toDoFactory.all.length).toBe(3);

  });

  it('should remove a task', function(){
  	taskToRemove = { 
      task: "planchar",
      time: "10:00 AM",
      category: "cosas de casa"
    };

    expect(toDoFactory.all.length).toBe(2);

    toDoFactory.remove(taskToRemove);

    expect(toDoFactory.all.length).toBe(1);

  });

  it('should remove a task', function(){
  	taskDone = { 
      task: "planchar",
      time: "10:00 AM",
      category: "cosas de casa"
    };

    expect(toDoFactory.all.length).toBe(2);
    expect(toDoFactory.doneList.length).toBe(0);

    toDoFactory.markAsDone(taskDone);

    expect(toDoFactory.all.length).toBe(1);
    expect(toDoFactory.doneList.length).toBe(1);

  });

  it('should filter by category', function(){
  	category = "cosas de casa";

  	filteredToDoes = toDoFactory.filterByCategory(category);
  	
  	expect(filteredToDoes.length).toBe(1);
  });
});

