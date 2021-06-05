// // import logo from './logo.svg';
// import './App.css';
import Department from './components/department'
import Employee from './components/employee'
import { store } from './actions/store'
import { Provider } from 'react-redux'

// function App() {
//   return (
//     <Provider store={store}>
//       {/* <h1>IBM GTS Task</h1>
//       <ul>
//         <li>
//           <a href="#" onClick="">Departments</a>
//         </li>
//         <li>
//           <a href="#">Employees</a>
//         </li>
//       </ul>
      
      
//       <div id="container"></div> */}
//     <div>
//       <header>
//         This is my website!
//       </header>

//       <main>
//         {this.props.children}
//       </main>

//       <footer>
//         Your copyright message
//       </footer>
//     </div>
      
//     </Provider>
    
//   );
// }

// export default App;
//========================================================================================
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Provider store={store}>
          <Switch>
            <Route path="/departments">
              <Department />
            </Route>
            <Route path="/employees">
              <Employee />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

