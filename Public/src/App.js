import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/productSlice ';
import LoginPage from './components/LoginPage';
import AdminPage from './components/AdminPage';
import NormalUserPage from './components/NormalUserPage';
import ProductDetail from './components/ProductDetail';
import productsData from './assets/products.json';
import usersData from './utils/users.json';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  const handleLogin = (email, password) => {
    const foundUser = usersData.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage onLogin={handleLogin} />
          </Route>
          <Route path="/admin">
            {user?.role === 'admin' ? <AdminPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/user">
            {user?.role === 'user' ? <NormalUserPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/product/:id">
            <ProductDetail user={user} />
          </Route>
          <Route path="/">
            <Redirect to={user ? (user.role === 'admin' ? '/admin' : '/user') : '/login'} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;