import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Category from './category/Category';
import Product from './product/Product1';
import Store from './store/Store';
import ViewStore from './store/ViewStore';
import HomePage from './homepage/HomePage';
import Products from './products carousel/Products';
import ViewProduct from './cards/ViewCard';
import Login from './Login/Login';
import ProductCard from './cards/ProductCard';
import profile from './account/profile';
import edit from './account/edit-profile';
import Manage from './manage/Manage';
import Geo from './geo/Geo';
import Registration from './Login/Register'
import './App.css';
import Store1 from './store/Store1';
import storesss from './store/StoreView';
import {connect} from 'react-redux';
import * as actions from './redux/actions';
import ProductList from './store/ProductList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: [],
    
    }
    
  }

  render() {
    const {categories} = this.state
   
    return (
   
        <BrowserRouter>
          <div>
            <Header categories={this.state.categories} />
            <div style={{paddingTop:90}}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/category/:filter?" component = {Category}/>
            <Route path="/products" component = {Product}/>
            <Route path="/stores" component = {Store}/>
            <Route path="/manage" component={Manage} />
            <Route path="/store/:filter?" component = {ViewStore}/>
            <Route path="/login" component = {Login}/>
            <Route path="/register" component = {Registration}/>
            <Route path="/profile" component ={profile} />
            <Route path="/edit-profile" component ={edit} />
            <Route path="/store1" component = {Store1}/>
            <Route path="/singlestore/:filter?" component = {storesss}/>
            <Route path="/product/:filter" component = {ViewProduct}/>
            <Route path="/geo" component = {Geo}/>
            <Route path="/ProductList/:filter?" component={ProductList}/>
            </div>
          </div>
        </BrowserRouter>
    
    );
  }

  componentDidMount(){
    this.props.fetchUser();
    this.props.fetchProductWithin();
    this.props.fetchStore();
    this.props.fetchProduct();
    this.props.fetchCategory();
    this.props.fetchReview();
    this.props.getDistance();
  }

}


export default connect(null, actions)(App);
