'use strict'



//grab the node for the delete button

  const deleteButton = document.getElementById('delete')
  console.log(deleteButton)
  deleteButton.addEventListener('click', function() {
    console.log('button clicked')
  })




//attach event handler click handler.
//fire off function when button clicked, to send book id to database
