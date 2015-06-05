// (function(){

  var Todo = function(options){
    var args = options || {};

    this.task = options.task;
    this.status = 'Open';

  };
  // var Completed = function(options){
  //   var com = options || {};

  //   this.task = options.task;
  //   // this.status = 'Closed';
  // }


  var storageBin = [];
  var completedTask = [];


// var a = new Todo({task: taskText});

//Set up submit
//on submit create a new instance

$('#addTask').on('submit', function(event){
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskInstance = new Todo({task: taskText});
  storageBin.push(taskInstance);
  $('#tasks').append('<li><input type="checkbox">' + taskText + '<span class= "fa fa-minus-square"</span></li>');
  // $('#tasks').html(template.example({value:storageBin}));
  this.reset();
});
//Reset Button
$('.fa-undo').on('click', function(event){
  event.preventDefault();
  $('#tasks').html('');

  $('.complete').html('');
   storageBin = [];

});
// toggle item

$('.tasks').on('click', 'li', function(){
  event.preventDefault();
  $(this).addClass('complete');
  var tTask= $(this).text();
  $('.complete').append('<li><input type="checkbox">'+ tTask + '<span class= "fa fa-minus-square"</span></li>');
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Closed';
  $(this).remove();

});
$('.complete').on('click', 'li', function(){
  event.preventDefault();
  $(this).removeClass('complete');
  var tTask= $(this).text();
  $('.tasks').append('<li><input type="checkbox">'+ tTask + '<span class= "fa fa-minus-square"</span></li>');
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Open';
  $(this).remove();

});
$('.fa-minus-square').on('click', 'li',function(){
  var tTask= $(this).text().remove();
  var taskToEdit = _.find(storageBin, { task: tTask });


});
// }());
