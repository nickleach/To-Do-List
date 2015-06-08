// (function(){
//  'use strict';
//Constuctor
  var firstHalf = '<li class="undone"><div class= "item"><label><input type="checkbox">' ;
  var secondHalf = '</label><span class="fa fa-minus-square"></span</div></li>';
  var firstHalfClosed = '<li class="undone"><div class= "item"><label><input type="checkbox" checked>';
  var Todo = function(options){
    var args = options || {};

    this.task = options.task;
    this.status = 'Open';

  };
 // PROTOTYPES!
  Todo.prototype.isThisAPrototype = true;
  var storageBin = [];
  $.fn.clearCompleted = function(){
    $('.complete').empty();
  storageBin =  _.filter(storageBin, { status: "Open" });
  };
//Set up submit
//on submit create a new instance

$('#addTask').on('submit', function(event){
  event.preventDefault();
  var taskText = $('#taskText').val();
  var taskInstance = new Todo({task: taskText});
  storageBin.push(taskInstance);
  $('#tasks').append(firstHalf+ taskText + secondHalf);
  this.reset();
  $('footer').removeClass('hidden');
  count();
});
//Reset Button
$('.fa-undo').on('click', function(event){
  event.preventDefault();
  $('#tasks').html('');

  $('.complete').html('');
   storageBin = [];
  $('footer').addClass('hidden');

});
// Toggle item

// Mark Item Complete

$('.tasks').on('click', 'label', function(event){
  event.preventDefault();
  var tTask= $(this).text();
  $('.complete').append(firstHalfClosed+ tTask + secondHalf);
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Closed';
  $(this).closest('.undone').remove();
  $('h6').removeClass('hidden');
  count();
});

//Move Back to Uncomplete
$('.complete').on('click', 'label', function(event){
  event.preventDefault();
  var tTask= $(this).text();
  $('.tasks').append(firstHalf + tTask + secondHalf);
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Open';
  $(this).closest('.undone').remove();
  count();

});
//Remove task
$('ul').on("click", '.fa-minus-square', function(event){
   event.preventDefault();
   var tTask= $(this).closest('li').text();
   storageBin = _.without(storageBin, _.find(storageBin, { task: tTask }));
  $(this).closest('.undone').remove();
  count();
});
// Show/Hide completed
$('h6').on('click', function(event){
  event.preventDefault();
  $('.hide').html('');
  $('.complete').toggleClass('hidden');
    // $this.toggleClass('SeeMore2');
    if($('.complete').hasClass('hidden')){
        $('.show').text('Show Completed');
        $('.show').addClass('fa-eye');
        $('.show').removeClass('fa-eye-slash');
    } else {
        $('.show').text('Hide Completed');
        $('.show').addClass('fa-eye-slash');
        $('.show').removeClass('fa-eye');
    }
});
// Clear Completed Button
$('.clear').on('click', function(){
  $(this).clearCompleted();
  $('h6').addClass('hidden');
  $('.clear').addClass('hidden');
});

//Counter at the bottom
function count(){
  var total = 0;
  var empty = 0;
  storageBin.forEach(function(item){
    if(item.status === 'Open'){
      return total++;
    }else if (item.status ==='Closed'){
      return empty++;
    }
  });
  if( total === 0){
    $('h5').addClass('hidden');
  }else if(total > 0){
  $('h5').removeClass('hidden');
  $('#count').html(total);
  }if (empty === 0){
   $('h6').addClass('hidden');
   $('.clear').addClass('hidden');
  }else if (empty > 0){
    $('h6').removeClass('hidden');
    $('.clear').removeClass('hidden');
  }
}
console.log('Check it out yo... NO ERRORS');
// }());
