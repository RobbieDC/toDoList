var tasks = [];

populateList = function(toDoList, listElement) {
  if(tasks.length == 0) {

  } else {
    var listItem = createLi( tasks[tasks.length-1] );
    listElement.appendChild( listItem );
  }
};

var handleButtonClick = function() {
  var input = document.querySelector( "input" );
  tasks.push(input.value);
  var toDoList = document.querySelector('#to-do-list');
  var ul = document.querySelector("ul");
  populateList(toDoList, ul);
  localStorage.setItem( "toDoList", JSON.stringify(tasks) );
};

var createUl = function() {
  var ul = document.createElement("ul");
  ul.classList.add( "to-do" );
  return ul;
};

var createLi = function( text ) {
  var li = document.createElement("li");
  li.innerText = text;
  return li;
};

app = function() {
  var button = document.querySelector( "button" );
  button.onclick = handleButtonClick;
  var toDoList = document.querySelector('#to-do-list');
  var listElement = createUl();
  console.log(listElement)
  populateList(toDoList, listElement);
  toDoList.appendChild( listElement );
};

window.onload = app;
