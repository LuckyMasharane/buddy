import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap';
import { Segment, Button, Divider,Grid, Image } from 'semantic-ui-react';
import Products from '../product/Product1';
import Stores from '../store/Store1';
import Carousel1 from '../products carousel/ProductsCarousel';
import LandingScroll from '../products carousel/Dash';
import SubMenu from './SubMenu';
import Category from './Category';


class Home extends Component{
     constructor(props) {
    super(props);
  
  }

  componentWillMount(){
   
  }
   
    render(){
  
     return (
       <Container>
         <Row>
           <Col md="3">
              
                <Category />
              
          </Col>
           <Col md="9">
            <Segment>
              <LandingScroll />
              <Divider hidden></Divider>
              <Divider horizontal>All Discounts around you</Divider>
              <Products/>
              <Divider hidden></Divider>
              <Divider horizontal>Stores Around</Divider>
              <Divider hidden></Divider>
              <Stores/>
              <Divider hidden></Divider>
            </Segment>
           </Col>
         </Row>
      </Container>
     
    );
    }
    
}



export default connect(null,actions)(Home);