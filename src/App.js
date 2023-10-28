import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>

              <Route path="/Create">
                <Create/>
              </Route>           
              
              <Route path="/Blog-details/:id">
                <BlogDetails/>
              </Route>
              
              <Route path="*">
                <NotFound/>
              </Route>

            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
