(function(){

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
// toggle item

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

$('ul').on("click", '.fa-minus-square', function(event){
   event.preventDefault();
   var tTask= $(this).closest('li').text();
   storageBin = _.without(storageBin, _.find(storageBin, { task: tTask }));
  $(this).closest('.undone').remove();
  count();
});
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
function count(){
  var total = 0;
  storageBin.forEach(function(item){
    if(item.status === 'Open'){
      return total++;
    }
  });
  if( total === 0){
    $('h5').addClass('hidden');
  }else if(total > 0){
  $('h5').removeClass('hidden');
  $('#count').html(total);
}
}
console.log('Check it out yo... NO ERRORS');
}());
