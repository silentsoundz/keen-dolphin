const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database.js')
const server = express()
const pug = require('pug')
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')));
server.set('view engine', 'pug')

server.get('/', (request, response) => {
  db.getBooks(request.query)
    .then((books) => {
    response.render('index.pug', {books})
  })
})

server.get('/details', (request, response) => {
  db.getBook(2)
    .then((book) => {
    response.render('book-details.pug', {book})
  })
})

server.get('/edit', (request, response) => {
  db.getBook(2)
    .then((book) => {
      response.render('book-edit.pug', {book})
    })
})

server.use(bodyParser.json())

server.get('/ping', (request, response, next) => {
  response.send('pong')
})

server.post('/api/test/reset-db', (request, response, next) =>{
  db.resetDb().then(() => {
    response.status(200).end()
  })
})

server.post('/api/books', (request, response, next) => {
  if ( request.body.hasOwnProperty("title") ) {
    db.createWholeBook(request.body).then(book => {
      response.status(201).json(book).end
    })
  } else {
    response.status(400).json({
      error: {message: 'title cannot be blank'}
    })
  }
})

server.get('/api/books', (request, response) => {
  db.getBooks(request.query)
    .then((books) => {
      response.status(200).json(books)
    })
    .catch(error => {
      console.error(error)
      response.status(500).json({error})
    })
})

server.get('/api/books', (request, response) => {
  let page = ( parseInt (request.query.page)) || 1
  const id = request.params.id
  const {title} = request.query
  const {amount} = request.params.id
  db.getBooks(page).then((books, page) =>
    response.status(200).json(books))
})


server.get( '/api/books/:id', ( request, response ) => {
  db.getBook( request.params.id )
    .then( book => response.json(book))
    .catch( error => response.status( 404 ).json() )
})

// server.post( '/api/books/:id', ( request, response ) => {
//   response.json({ error: false })
//   // What are the things we need to do?
//     // Get input - title, author, year, id
//     // Update book id with title and year
//     // Then update book authors with author
//       // delete everything in book_authors with this book id
//       // ensure that the authors exist in the authors
//       // get all the ids now for the authors
//       // insert the book id/author ids into book_authors
//     // Then fetch the book again to return to client
// })

server.post('/api/books/:id/delete', (request, response) => {
  db.deleteBook( request.params.id )
    .then( () => response.status(200).json())
})

server.get('/api/authors', ( request, response ) => {
  db.getAuthors( request.query )
    .then( result => response.json( result ))
})

server.get( '/api/genres', ( request, response ) => {
  db.getGenres()
    .then( result => response.json( result ))
})

server.set('port', process.env.PORT || '3000')

if (process.env.NODE_ENV !== 'test'){
  server.listen(server.get('port'))
}


module.exports = server
