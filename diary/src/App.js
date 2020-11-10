import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/register'
import Home from './components/Home'
import LoggedIn from './components/LoggedIn'
import { useRouteMatch } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {registerStateChange, logOut} from './store/features/userSlice'

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="navbar-brand" >Diary</span>
      <ul className="navbar-nav ml-auto">

      <li className="nav-item "> 
      <Link to='/' className='nav-link'>Home
      </Link>
      </li>
      
      {
        useSelector((state) => {
          return state.myReducer.logIn ? 
          <li className="nav-item " onClick = {() => dispatch(logOut())}> 
          <Link to='/logout' className='nav-link'>LogOut</Link>
          </li>  
          :
          <li> 
          <Link to="/login" className='nav-link'> LogIn
          </Link>
          </li>
        })
      }
      
      <li className="nav-item " 
      onClick={() => dispatch(registerStateChange(false))} > 
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
      <Route path='/:loggedIN' component={LoggedIn} 
      match = {useRouteMatch("/loggedIn")} history = {history} />
      </Switch>
    </div>
  );
}
export default App;
