import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
  
      </Router>
    );
}

export default App;
