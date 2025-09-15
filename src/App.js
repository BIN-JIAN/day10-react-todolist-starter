import './App.css';
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider
} from "react-router";
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";

function DefaultLayout() {
  return <>
    <header>
      <nav>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/todos'}>Todo List</NavLink> </li>
          <li><NavLink to={'/about'}>About</NavLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>xxx</h1>
      <Outlet></Outlet>
    </main>
    <footer>footer copyright</footer>
  </>;
}

const routes = [
  {
    path: '/',
    element: <DefaultLayout/>,
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
