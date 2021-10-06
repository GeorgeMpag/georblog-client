import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Signup from './Signup';
import Login from './Login';
//import useToken from './useToken';
import ProfilePage from './Profilepage';



function App() {
  //const [token, setToken] = useState(null);
  
  if ( sessionStorage.getItem('user')===null){
    return (
     
    <Router>
      <Redirect to="/"/>
      {/* <Login setToken={ setToken }/> */}
      <Switch>
        
        <Route exact  path='/' >
          <Login />
        </Route>
      
        <Route  path="/signup"  >
              <Signup  />
        </Route>
      </Switch>
    </Router>
    
    )}

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>  
          <Route path="/create">
            <Create />
          </Route>  
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>  
          <Route path="/userProfile">
            <ProfilePage/>
          </Route>

          {/* <Route  path='/login' >
           <Login setToken={ setToken }/>
          </Route> */}
          {/* <Route path="/profile">
            <ProfilePage />
          </Route>   */}
          <Route path="*">
            <NotFound />
          </Route>  
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
