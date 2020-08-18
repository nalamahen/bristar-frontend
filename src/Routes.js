import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AddCategory from './components/admin/AddCategory';
import AddProduct from './components/admin/AddProduct';
import AdminDashboard from './components/user/AdminDashboard';
import AdminRoute from './auth/AdminRoute';
import Cart from './components/core/Cart';
import Contact from './components/core/Contact';
import Dashboard from './components/user/UserDashboard';
import Home from './components/core/Home';
import ManageProducts from './components/admin/ManageProducts';
import Orders from './components/admin/Orders';
import Order from './components/core/Order';
import Shop from './components/core/Shop';
import PrivateRoute from './auth/PrivateRoute';
import Product from './components/core/Product';
import Profile from './components/user/Profile';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import UpdateProduct from './components/admin/UpdateProduct';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        {/* 
        
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        */}

        <Route path="/shop/category/:categoryName" exact component={Shop} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
