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
  var theLi = $(this).parent('li');


// var a = new Todo({task: taskText});

//Set up submit
//on submit create a new instance

$('#addTask').on('submit', function(event){
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskInstance = new Todo({task: taskText});
  storageBin.push(taskInstance);
  $('#tasks').append('<li class="undone"><div class= "item"><label><input type="checkbox">' + taskText +'</label><span class="fa fa-minus-square"></span></div></li>');
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

$('.tasks').on('click', 'label', function(event){
  event.preventDefault();
  $(this).addClass('complete');
  var tTask= $(this).text();
  $('.complete').append('<li class="undone"><div class= "item"><label><input type="checkbox" checked>' + tTask +'</label><span class="fa fa-minus-square"></span</div></li>');
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Closed';
  $(this).closest('.undone').remove();
});
$('.complete').on('click', 'label', function(event){
  event.preventDefault();
  $(this).removeClass('complete');
  var tTask= $(this).text();
  $('.tasks').append('<li class="undone"><div class= "item"><label><input type="checkbox">' + tTask +'</label><span class="fa fa-minus-square"></span</div></li>');
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Open';
  $(this).closest('.undone').remove();

});

$('ul').on("click", 'span', function(event){
   event.preventDefault();
   var tTask= $(this).closest('li').text();
   storageBin = _.without(storageBin, _.find(storageBin, { task: tTask }));
  $(this).closest('.undone').remove();
});

// }());
