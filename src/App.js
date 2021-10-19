
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar/Menu';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Details from './components/details/Details';
import Doctores from './components/doctors/Doctores';
import NotFound from './components/notFound/NotFound';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import AuthProvider, { AuthContext } from './Context/AuthProvider';
import SignUp from './components/singUp/SignUp';
import PrivetRoute from './components/PrivetRote/PrivetRoute';
import Events from './components/events/Events';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menu></Menu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/singup">
              <SignUp></SignUp>
            </Route>
            <PrivetRoute path="/details/:serviceId">
              <Details></Details>
            </PrivetRoute>
            <Route path="/doctor">
              <Doctores></Doctores>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
