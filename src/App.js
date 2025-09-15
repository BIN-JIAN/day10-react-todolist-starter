import './App.css';
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider
} from "react-router";
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/TodoReducer";
import {useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {DefaultLayOut} from "./layout/DefaultLayOut";



const routes = [
  {
    path: '/',
    element: <DefaultLayOut/>,
    children: [{
      index: true,
      element: <h1>Home page</h1>,
    },
      {
        path: 'todos',
        element: <TodoList/>
      },
      {
        path: 'about',
        element: <h1>About page</h1>

      }]
  }
]
const router = createBrowserRouter(routes);

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
      <div className="App">
        <TodoContext.Provider value={{state, dispatch}}>
          <RouterProvider router={router}></RouterProvider>
        </TodoContext.Provider>
      </div>

  );
}

export default App;
