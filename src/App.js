import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import {initialState, todoReducer} from "./reducers/TodoReducer";
import {useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {DefaultLayOut} from "./layout/DefaultLayOut";

import TodoDetailPage from "./pages/TodoDetailPage";
import DonePage from "./pages/DonePage";
import ErrorPage from "./pages/ErrorPage";
import AboutUsPage from "./pages/AboutUsPage";
import TodoList from "./components/TodoList";

const routes = [
  {
    path: '/',
    element: <DefaultLayOut/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h1>Home page</h1>,
      },
      {
        path: 'todos',
        element: <TodoList/>
      },
      {
        path: 'todos/:id',
        element: <TodoDetailPage/>
      },
      {
        path: 'done',
        element: <DonePage/>
      },
      {
        path: 'about',
        element: <AboutUsPage/>
      }
    ]
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
