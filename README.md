# keen-dolphin
simple book store

![29464aa3c5800484f4577ca0c53f8953](https://cloud.githubusercontent.com/assets/17223371/24419406/da9155d0-13a3-11e7-9e1d-f785a58643e2.jpg)

## Context

Many of the seemingly fancy apps on the web have functionality that can be reduced to just 4 simple operations: Create, Read, Update, and Delete (or CRUD for short). At their core, they are really just ways to perform these operations on some resource.

- Writing a new tweet on Twitter? That's a _create_ operation.
- Searching for photos tagged with `#kittenmittens` on Instagram? That's a _read_ operation.
- Editing your profile information on LinkedIn? That's an _update_ operation.
- Removing that 2am rant-post from Facebook? That's a _delete_ operation.

Like the steel frame of a skyscraper, _CRUD_ is the skeleton around which web applications are built: it's not very sexy, but you have to know how to do it.

In this goal, we will be applying the CRUD pattern to the real-world system of a bookstore.

## Specifications

- [x] Books have a title, author, and genre
- [ ] Users can...
  - [ ] Add books into the bookstore system via an admin page (_create_)
  - [x] See a list of books on the home page (_read_)
  - [ ] Edit a book's title, author, or genre (_update_)
  - [x] Delete a book from the bookstore (_delete_)
  - [ ] Search for books by title OR by author OR by genre (_read_)
  - [x] View book details on a book detail page (_read_)
- [ ] Lists of books are always paginated in groups of 10
- [ ] Book detail view is linked to from the listing and search pages
- [ ] Search results are presented in a new page
- [ ] Appropriate HTTP verbs are used for CRUD actions
  - [x] `GET` requests are only used for _read_ actions
  - [ ] `POST` requests are only used for _create_ actions
  - [ ] `PUT` or `PATCH` requests are only used for _update_ actions
  - [x] `DELETE` requests are only used for _delete_ actions
- [x] All views are rendered on the server using server-side templates written with [Pug][] or [EJS][]
- [x] Web server can be started with the command `npm start`
- [x] Test suite can be run with the command `npm test`
- [x] All code submissions are peer reviewed via GitHub PR by at least one other member of the team
- [x] Master is always in a stable state (tests passing, site functions)
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

### Stretch

- [ ] App is deployed and live on the web (consider using Heroku)
- [x] All source code is written with ES6
- [ ] Users have their own account and can sign up and log in/out
- [ ] Users have one of three roles: `admin`, `clerk`, `reader`
  - [ ] Users with role `reader` can only view and search for books
  - [ ] Users with role `clerk` can edit books in addition to viewing/searching
  - [ ] Users with role `admin` can perform all actions (create, read, update, delete) with books
- [ ] Books have a price, cover image, publisher, and ISBN number

## Quality Rubric

- Code is well formatted without any linting errors [25 points]
- Variables, functions, CSS classes, etc. are meaningfully named\* [50 points]
- Functions are small and serve a single purpose [50 points]
- Code is well organized into a meaningful file structure [50 points]
- Code is reasonably tested with a test suite [50 points]
- Interface is user friendly [25 points]

\* _meaningfully named_ = no comments exist in code to explain functionality - the names serve that function.

## Resources

Guides and tutorials

- [Getting started](https://expressjs.com/en/starter/installing.html) and [Guide](https://expressjs.com/en/guide/routing.html) sections of Express.js site
- [Building a Node.js REST API with Express](https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6#.qlp1sijze)
- [Designing a RESTful API With Node and Postgres](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/)
- [PostgreSQL and NodeJS](http://mherman.org/blog/2015/02/12/postgresql-and-nodejs/)
- [Building a Simple CRUD Application with Express and MongoDB](https://zellwk.com/blog/crud-express-mongodb/) - uses MongoDB instead of PostgreSQL, but the rest of it is still useful

Tools and libraries

- SQL modeling designer: http://ondras.zarovi.cz/sql/demo/
- [Express][] as a lightweight web server framework
- [PostgreSQL][] for data persistence
- [Pug][] or [EJS][] for server-side templating
- [Bootstrap][] or [Pure.css][pure-css] for styling the UI

[express]: http://expressjs.com/
[postgresql]: https://www.postgresql.org/
[pug]: https://pugjs.org/
[ejs]: http://www.embeddedjs.com/
[bootstrap]: http://getbootstrap.com/
[pure-css]: https://purecss.io/

