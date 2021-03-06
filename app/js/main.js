(function(){
 'use strict';
//Constuctor
  var Todo = function(options){
    var args = options || {};

    this.task = options.task;
    this.status = 'Open';

  };

  var storageBin = [];
  var completedTask = [];
  var theLi = $(this).parent('li');


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
  $(this).addClass('complete');
  var tTask= $(this).text();
  $('.complete').append('<li class="undone"><div class= "item"><label><input type="checkbox" checked>' + tTask +'</label><span class="fa fa-minus-square"></span</div></li>');
  var taskToEdit = _.find(storageBin, { task: tTask });
  taskToEdit.status = 'Closed';
  $(this).closest('.undone').remove();
  $('h6').removeClass('hidden');
  count();
});

//Move Back to Uncomplete
$('.complete').on('click', 'label', function(event){
  event.preventDefault();
  $(this).removeClass('complete');
  var tTask= $(this).text();
  $('.tasks').append('<li class="undone"><div class= "item"><label><input type="checkbox">' + tTask +'</label><span class="fa fa-minus-square"></span</div></li>');
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
$('i').on('click', function(event){
  event.preventDefault();
  $('span').html('');
  $('.complete').toggleClass('hidden');
    // $this.toggleClass('SeeMore2');
    if($('.complete').hasClass('hidden')){
        $('i').text('Show Completed');
        $('i').addClass('fa-eye');
        $('i').removeClass('fa-eye-slash');
    } else {
        $('i').text('Hide Completed');
        $('i').addClass('fa-eye-slash');
        $('i').removeClass('fa-eye');
    }
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
  }else if (empty > 0){
    $('h6').removeClass('hidden');
  }
}
console.log('Check it out yo... NO ERRORS');
}());
