function newItem(){

  //1. Adding a new item to the list of items: 
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  

  if(inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }//end if/else on blank input

  
 //2. Crossing out an item from the list of items:

  function crossOut() {
  		li.toggleClass("strike");
   	}
    
  li.on("dblclick", function crossOut () {
    li.toggleClass("strike");
  }); //end on click listener

 //3(i). Adding the delete button "X": 

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  $(crossOutButton).append(document.createTextNode("X"));
  li.append(crossOutButton);
  
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClassList.add('delete')
  }
 // 4. Reordering the items: 
   $('#list').sortable();

}//END newItem function
