'use strict'



//grab the node for the delete button
  const deleteButton = document.getElementById('delete')
  console.log(deleteButton)
  //attach event handler click handler.
  deleteButton.addEventListener('click', () => {
    console.log('button clicked')
    //redirect to home Page
    window.location.href = '/'

  })
  
