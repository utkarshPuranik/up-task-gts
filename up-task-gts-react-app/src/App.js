// // import logo from './logo.svg';
// import './App.css';
import Department from './components/department'
import Employee from './components/employee'
import Home from './components/home'
import { store } from './actions/store'
import { Provider } from 'react-redux'
import { ToastProvider } from "react-toast-notifications";

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
import { Container, Button, Menu, MenuItem, Paper } from '@material-ui/core'

export default function App() {
  return (
    <Router>
      <div>
        <Paper elevation={5}>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/departments">Departments</Link></Button>
          <Button color="inherit"><Link to="/employees">Employees</Link></Button>
        </Paper>
        <Provider store={store}>
          <ToastProvider autoDismiss={true}>
            <Container maxWidth="lg">
              
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
            </Container>
          </ToastProvider>
        </Provider>
      </div>
    </Router>
  );
}



// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

