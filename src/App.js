
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import AddaNewOffer from './Pages/AddNewOffers/AddNewOffer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import OfferDetails from './Component/Offering/OfferDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Footer from './Component/Footer/Footer';



function App() {
  return (
  <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/myBooking">
            <MyBooking></MyBooking>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageAllBooking></ManageAllBooking>
          </PrivateRoute>
          <PrivateRoute path="/offer/:id">
            <OfferDetails></OfferDetails>
          </PrivateRoute>
          <PrivateRoute path="/addOffer">
            <AddaNewOffer></AddaNewOffer>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
   
  );
}

export default App;
