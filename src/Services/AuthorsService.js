const api = "http://localhost:8080/api/authors"

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json;charset=UTF-8"
}

export const getAllAuthors = () =>
  fetch(`${api}`, { headers })
    .then(res => res.json())
export const getAuthor = (author_id) =>
    fetch(`${api}/author/${author_id}`, { headers })
      .then(res => res.json())
export const addAuthor = (book) =>
    fetch(`${api}/author`, {
      method: "POST",
      headers:headers,
      body: JSON.stringify(book),
    }).then(res => res.json());
export const deleteAuthor = (author_id) =>
    fetch(`${api}/author/${author_id}`, {
      method: "DELETE",
      headers:headers
    }).then(res => res.json());

export const updateAuthor = (author) =>
    fetch(`${api}/author/${author.author_id}`, {
      method: "PUT",
      headers:headers,
      body: JSON.stringify(author),
    }).then(res => res.json())