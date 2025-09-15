import './App.css';
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider
} from "react-router";

function DefaultLayout() {
  return<>
    <header>
      <nav>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li>Todo List</li>
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

const routes=[
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [{
      index: true,         // 修改为 index: true，而不是 path: '/'
      element: <h1>Home page</h1>,
    },{
      path:'about',
      element: <h1>About page</h1>
    } ]
  }
]
const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
