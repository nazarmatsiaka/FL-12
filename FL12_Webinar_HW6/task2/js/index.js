const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

$searchInput = $('#search-input');

// const todos = [
//   {
//     text: "Buy milk",
//     done: false
//   },
//   {
//     text: "Play with dog",
//     done: true
//   }
// ];

const todos = JSON.parse(localStorage.getItem('todos'))|| [];
redirect();

function redirect(str = null) {
  $list.empty();
  $(todos).each((i, item) => {
    if(!str || item.text.indexOf(str) !== -1) {      
      $('.list').append(createItem(item));
    }
  });
}

function createItem(obj) {
  $item = `<li class='item'>
    <span class="${obj.done? 'item-text done': 'item-text'}">${obj.text}</span>
    <button class='item-remove'>Remove</button>
  </li>`;
  return $item;
}

$add.on('click', (e) => {
  e.preventDefault();
  if($input.val()) {
    $obj = {
      text: $input.val(),
      done: false
    }

    todos.push($obj);
    $('.list').append(createItem($obj));
    $input.val('');
    $().saveList();
  } else {
    alert('Enter text');
  }
});

$list.on('click', '.item-remove', function() {
  $index = $list.children().index($(this).parent());
  todos.splice($index, 1);

  $(this).parent().remove();
  $().saveList();
});

$list.on('click', '.item-text', function() {
  if(!$(this).hasClass('done')) {
    $index = $list.children().index($(this).parent());
    todos[$index] = {...todos[$index], done: true};

    $(this).addClass('done');
    $().saveList();
  }
});

$searchInput.on('input', function() {
  redirect($(this).val());
});

(function ($) {
  $.fn.saveList = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
})(jQuery);