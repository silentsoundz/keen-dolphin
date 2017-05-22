'use strict'

const thisBook = document.getElementsByClassName('book')

for(let i =0; i < thisBook.length; i++) {
  let bookId = thisBook[i].lastChild.lastChild.value

  thisBook[i].addEventListener('click', () => {
    window.location = `http://localhost:3000/details/${bookId}`
  })
}
