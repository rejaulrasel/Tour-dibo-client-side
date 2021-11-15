import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './pages/AboutUs/AboutUs';
import AddService from './pages/AddService/AddService';

import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import MyOrder from './pages/MyOrder/MyOrder';
import Order from './pages/Order/Order';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
