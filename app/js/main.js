// (function(){

  var Todo = function(options){
  var args = options || {};

  this.task = options.task;
  this.status = 'Open';

};
var storageBin = [];

// var a = new Todo({task: taskText});
//Set up submit
//on submit create a new instance
$('#addTask').on('submit', function(event){
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskInstance = new Todo({task: taskText});
  storageBin.push(taskInstance);
  $('#tasks').append('<li>' + taskText + '</li>');
});

// toggle item
$('#tasks').on('click', 'li' , function(){
  console.log('funny guy');
});
// }());
