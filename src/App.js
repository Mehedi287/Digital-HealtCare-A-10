
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';

import Menu from './components/navbar/Menu';
import Home from './components/home/Home';
import Services from './components/services/Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Details from './components/details/Details';
import Doctores from './components/doctors/Doctores';
import NotFound from './components/notFound/NotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
