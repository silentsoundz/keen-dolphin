const pgp = require('pg-promise')()
const database = pgp({ database:'bookworm'})
const SQL = require( './sql_strings' )


const resetDb = () => {
  return Promise.all([
    pgpdb.query('truncate table books restart identity'),
    pgpdb.query('truncate table authors restart identity'),
    pgpdb.query('truncate table genres restart identity'),
    pgpdb.query('truncate table book_authors restart identity'),
    pgpdb.query('truncate table book_genres restart identity')
  ])
}


const deleteBook = (id) => {
  return pgpdb.query('DELETE from books where id = ${id}; DELETE from book_authors where book_id = ${id};DELETE from book_genres where book_id = ${id};')
}

// const updateBook = (id, title, year) => {
//   return pgpdb.query('UPDATE books SET title = $1,year = $2 WHERE id = $3 ;', [title, year, id])

// const resetDb = () => {
//   return Promise.all([
//     database.query('truncate table books restart identity'),
//     database.query('truncate table authors restart identity'),
//     database.query('truncate table genres restart identity'),
//     database.query('truncate table book_authors restart identity'),
//     database.query('truncate table book_genres restart identity')
//   ])

// }

// const deleteBook = (id) => {
//   return database.query('DELETE from books where id = ${id}; DELETE from book_authors where book_id = ${id};DELETE from book_genres where book_id = ${id};')
// }
//
// // const updateBook = (id, title, year) => {
// //   return database.query('UPDATE books SET title = $1,year = $2 WHERE id = $3 ;', [title, year, id])
// // }
//
// // const createBook = (title, year) => {
// //   return database.query('insert into books( title, year ) values($1, $2) returning id', [title, year]).then(result => result[0].id)
// // }
// //
// // const createAuthor = author => {
// //   return database.query('insert into authors( name ) values( $1 ) returning id', [author]).then(result => result[0].id)
// // }
// //
// // const createGenre = genre => {
// //   return database.query('insert into genres( name ) values( $1 ) returning id', [genre]).then(result => result[0].id)
// // }
//
//
// const getGenres = () => {
//   return database.any( "SELECT DISTINCT genres.name FROM genres ORDER BY name ASC LIMIT 10" )
// }
//
// // const joinBookAuthor = (bookId, authorId) => {
// //   return database.query('insert into book_authors( book_id, author_id ) values( $1, $2 )', [ bookId, authorId ])
// // }
// //
// // const joinBookGenre = (bookId, genreId) => {
// //   return database.query('insert into book_genres( book_id, genre_id) values( $1, $2 )', [ bookId, genreId])
// // }
//
// // const createWholeBook = book => {
// //   return Promise.all([
// //     createBook(book.title, book.year),
// //     createAuthor(book.author),
// //     Promise.all(
// //       book.genres.sort().map(genre => {
// //         return createGenre(genre)
// //       })
// //     )
// //   ]).then(results => {
// //     const bookId = results[0]
// //     const authorId = results[1]
// //     const genreIds = results[2]
// //
// //     joinBookAuthor(bookId, authorId)
// //
// //     genreIds.forEach(genreId => {
// //       joinBookGenre(bookId, genreId)
// //     })
// //
// //     book.id = bookId
// //
// //     return book
// //   })
// // }
//
//
// const BOOKS_QUERY =
//   `SELECT books.*,
//     (SELECT authors.name FROM authors, book_authors WHERE book_authors.book_id=books.id AND book_authors.author_id=authors.id LIMIT 10) AS author,
//     array(SELECT genres.name FROM genres, book_genres WHERE book_genres.book_id=books.id AND book_genres.genre_id=genres.id ORDER BY genres.name ASC) AS genres
//   FROM books`
//
const getBook = () => {
  return database.any(`SELECT books.*,
    (SELECT authors.name FROM authors, book_authors WHERE book_authors.book_id=books.id AND book_authors.author_id=authors.id LIMIT 1) AS author,
    array(SELECT genres.name FROM genres, book_genres WHERE book_genres.book_id=books.id AND book_genres.genre_id=genres.id ORDER BY genres.name ASC) AS genres
  FROM books`)
}

// const getBooks = ({ title, author, year, genre}) => {
//   database.query(`SELECT books.id FROM books LIMIT 10`)
//   }
//
//   if( title !== undefined ) {
//   clauses.push( `books.title ILIKE '%\$${++index}^%' ` )
//   params.push( title )
//   }
//
//   if( author !== undefined ) {
//     clauses.push( `(SELECT authors.name FROM authors, book_authors WHERE book_authors.book_id=books.id AND book_authors.author_id=authors.id LIMIT 1)  ILIKE '%\$${++index}^%' ` )
//     params.push( author )
//   }
//
//   if ( year != undefined ) {
//     clauses.push( `books.year=\$${++index}` )
//     params.push( year )
//   }
//
//   query = `${BOOKS_QUERY} ${clauses.length > 0 ? `WHERE ${clauses.join( ' AND ')}` : ''} ORDER BY title LIMIT 50 OFFSET $1`
//
//   return database.query( query, params )
//   }
//
//   const getAuthors = ({ page, author}) => {
//     const page = parseInt(page || 1)
//     const offset = ( page -1) * 10
//     return database.query(`SELECT  authors.name, authors.id FROM authors LIMIT 10 OFFSET $1` , [offset])
//   }
//
// const searchByAuthor = id => {
//   return database.query(`
//     SELECT DISTINCT books.*
//     FROM books
//     LEFT JOIN book_authors
//     ON books.id=book_authors.book_id
//     LEFT JOIN authors
//     ON authors.id=book_authors.author_id
//     LEFT JOIN book_genres
//     ON books.id=book_genres.book_id
//     LEFT JOIN genres
//     ON genres.id=book_genres.genre_id
//     WHERE authors.id=$1
//     `)
// }
//
// const searchByTitle = id => {
//   return database.query(`
//     SELECT *
//     FROM books
//     WHERE books.title Like '%\${title^}%'
//   `)
// }

module.exports = {getBook}
