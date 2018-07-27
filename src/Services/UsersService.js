const api = "http://localhost:8080/api/users"

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json;charset=UTF-8"
}

export const getAllUsers = () =>
  fetch(`${api}`, { headers })
    .then(res => res.json())
export const getUser = (user_id) =>
    fetch(`${api}/user/${user_id}`, { headers })
      .then(res => res.json())
export const addUser = (book) =>
    fetch(`${api}/user`, {
      method: "POST",
      headers:headers,
      body: JSON.stringify(book),
    }).then(res => res.json());
export const deleteUser = (user_id) =>
    fetch(`${api}/user/${user_id}`, {
      method: "DELETE",
      headers:headers
    }).then(res => res.json());

export const updateUser = (user) =>
    fetch(`${api}/user/${user.user_id}`, {
      method: "PUT",
      headers:headers,
      body: JSON.stringify(user),
    }).then(res => res.json())