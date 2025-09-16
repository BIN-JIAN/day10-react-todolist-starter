import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://68c78c945d8d9f5147322314.mockapi.io/api/',
  baseURL: 'http://localhost:8080',

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

// instance.interceptors.request.use(
//     (config) => {
//       // request configuration
//       console.log("request success", config)
//       config.metadata = {
//         startTime: Date.now()
//       }
//       return config;
//     },
//     (error) => {
//       // handle request error
//       return Promise.reject(error);
//     }
// );
//
// instance.interceptors.response.use(
//     (response) => {
//       // handle response
//       console.log("response success", response)
//       console.log('Api duration is' + (Date.now() - response.config.metadata.startTime) +'ms')
//       return response;
//     },
//     (error) => {
//       // handle response error
//       const {status, data} = error.response;
//       if (status === 401) {
//         alert(`response Error ${status} ${data}`)
//         console.log(error.response)
//         // do something
//       }
//       else if (status === 404) {
//         alert(`response Error ${status} ${data}`)
//         // console.log(error.response)
//         // do something else
//       }
//       return Promise.reject(error);
//     }
// );