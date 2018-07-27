const api = "http://localhost:8080/api"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json;charset=UTF-8"
}

export const getAllBook = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())

export const getBook = (book_id) =>
    fetch(`${api}/books/book/${book_id}`, { headers })
      .then(res => res.json())

export const addBook = (book) =>
    fetch(`${api}/books/book`, {
      method: "POST",
      headers:headers,
      body: JSON.stringify(book),
    }).then(res => res.json())

export const deleteBook = (book_id) =>
    fetch(`${api}/books/book/${book_id}`, {
      method: "DELETE",
      headers:headers
    }).then(res => res.json())

export const updateBook = (book) =>
    fetch(`${api}/books/book/${book.book_id}`, {
      method: "PUT",
      headers:headers,
      body: JSON.stringify(book),
    }).then(res => res.json())