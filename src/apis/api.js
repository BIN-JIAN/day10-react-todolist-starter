import axios from "axios";

const instance = axios.create({
  baseURL: 'https://68c78c945d8d9f5147322314.mockapi.io/api/',
});

export const getTodos = async () => {
  const response = await instance.get('/todos')
  return response
}

export const addTodo = async(todo) => {
  const response = await instance.post('/todos',todo)
  return response
}

export const deleteTodo = async(id) => {
  const response = await instance.delete(`/todos/${id}`)
  return response
}
export const updateTodo = async(id, updatedTodo) => {
  const response = await instance.put(`/todos/${id}`, updatedTodo)
  return response
}