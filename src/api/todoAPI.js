const endpoint = "https://jsonplaceholder.typicode.com/todos";

export async function todo(endpoint, { body, ...customConfig }  = {}) {
  const headers = { "Content-type": "application/json; charset=UTF-8", }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    }
  }
  if (body) { config.body = JSON.stringify(body) }

  let data
  try {
    const response = await window.fetch(endpoint, config)
    data = await response.json()
    if (response.ok) return data
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? message : data)
  }
}

export const getTodos = () =>
  fetch(endpoint).then((res) => res.json());

export const addTodo = (newTodo) =>
  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());

export const removeTodo = (id) =>
  fetch([endpoint, id].join("/"), {
    method: "DELETE",
  }).then((res) => res.json());
