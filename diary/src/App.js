import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/register'
import Home from './components/Home'
import LoggedIn from './components/LoggedIn'
import { useRouteMatch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Diary</a>
      <ul className="navbar-nav ml-auto">
      <li className="nav-item "> 
      <Link to="/login" className='nav-link'>Login
      </Link>
      </li>
      <li className="nav-item "> 
      <Link to='/register' className='nav-link'>Register
      </Link>
      </li>
      </ul>
      </nav>
      </header>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/register' component={Register} exact/>
      <Route path='/:loggedIN' component={LoggedIn} match = {useRouteMatch("/loggedIn")}/>
      </Switch>
    </div>
  );
}
export default App;
