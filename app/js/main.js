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
  // $('#tasks').append('<li>' + taskText + '</li>');
  $('#tasks').html(template.example({value:storageBin}));
  this.reset();
});
//Reset Button
$('.fa-undo').on('click', function(event){
  event.preventDefault();
  $('#tasks').html('');
  storageBin = [];

});
// toggle item

$('#tasks').on('click', 'li', function(){
  event.preventDefault();

  //grab the list item I clicked on
  //mark that item as completed
  $(this).addClass('complete');
  var tTask= $(this).text();
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Closed';
  console.log(taskToEdit);
});

// }());
