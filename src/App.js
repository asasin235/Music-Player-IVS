import "./App.css";

import CreateRoom from './pages/CreateRoom/CreateRoom'
import JoinRoom from './pages/JoinRoom/JoinRoom'
import Dashboard from './pages/dashboard/dashboard'
import HomePage from "./pages/HomePage/homePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/createRoom'>
          <CreateRoom />
        </Route>
        <Route exact path='/joinRoom'>
          <JoinRoom />
        </Route>
        <Route exact path ='/loginPage'>
          <LoginPage/>
          </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
