import React,{Component} from 'react'
import {connect} from 'react-redux';
import StoreProducts from './StoreProducts';
import {Search,Grid, Header,Segment} from 'semantic-ui-react';
import Category from './Category';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    CardBody,
    Card,
    Container,
    Row,
    Col
  } from 'reactstrap';
  

const cardHeight={
    height:50
}

const cardWidth={
    width:50
}
class SingleStore extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            store: '',
        
        }
    }    
    render(){
        const {store} = this.state.store;
        const {filtID} = this.props.match.params.filter;
        console.log('single',filtID)

        return(
            <Container> 
                <Row>
                    <Col md="3">
                        <Category/>
                    </Col>
                    <Col md="9">
                    <Segment>
                        <Header>{this.state.store.storename}</Header>
                     </Segment>
                    <StoreProducts storeId={this.props.match.params.filter} />
                 
                 </Col>
                 </Row>
            </Container>
        )
    }
    async _getStores(){
        let response = await fetch('/api/store/'+this.props.match.params.filter);
        let result1 = await response.json();
    
        this.setState({
          store: result1.data
        },()=>console.log('store is coming back',this.state.store))
      }
    
      componentDidMount(){
        this._getStores();
     
      }
}


export default  SingleStore;

