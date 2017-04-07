'use strict'



//grab the node for the delete button

// const deleteButton = document.getElementById('delete')
// // console.log(deleteButton)
// deleteButton.addEventListener('click', function() {
//   // console.log('button clicked')
//   const bookID = document.getElementById('book-id').value
//   // console.log('bookID', bookID)
//   fetch(`/api/books/${bookID}/delete`,
//         {method: 'POST',
//          mode: 'cors'})
//          .then(response => {
//            window.location = '/'
//          })
// })

const thisBook = document.getElementsByClassName('book')
for(var i =0; i< thisBook.length; i++) {
thisBook[i].addEventListener('click', () => {
    const bookID = document.getElementById('book-id').value
        window.location = `/details/${bookID}`
      })
  }




//attach event handler click handler.
//fire off function when button clicked, to send book id to database
