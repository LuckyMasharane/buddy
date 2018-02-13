import React,{Component} from 'react';
 import { Grid, Image, Header,Icon,Button, Card, Dimmer, Loader } from 'semantic-ui-react';
import Slider from 'react-slick';
import slider from 'react-slick/lib/slider';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {calDistance} from '../utils/geoDistance';

const cardStyle= {
  height:290
}

const imgStyle= {
  height: 200,
  
}

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: false
        }
      }
      next() {
        this.slider.slickNext()
      }
      previous() {
        this.slider.slickPrev()
      }
    render(){
      var settings = {
        dots:false,
        infinite:true,
        slidesToShow:4,
        SlidesToSctroll:1,
        autoplay:false
      };
        return (
                  <div>
                <Slider ref={c => this.slider = c } {...settings}>
                      
                        { 
                            (()=>{
                            if(this.props.geoProducts.length > 0){
                                  return(
                                    
                            this.props.geoProducts.map(item=>{
                    
                                return(
                                
                                  <Link to={"/product/" + item._id}>
                                    <Card>
                                      
                                    <Image style={{height: 150}} src={"https://storage.googleapis.com/discountbuddy_products/" + item.image} alt="Card image cap" />
                                    
                                     <Card.Content>
                                      <Card.Header>{(item.name).toUpperCase()}</Card.Header>
                                      <Card.Description>R{item.promo_price}</Card.Description>
                                      <Card.Description>was R{item.price}</Card.Description>
                                      </Card.Content>
                                      <Card.Content extra>
                                        <Header as="h5" color="red">{calDistance(this.props.coords,item.location)} KM from your location</Header>
                                      </Card.Content>
                                    </Card>
                                    </Link>
                                    
                                      
                                )
                            })
                                )
                          }else{
                              return(
                                <Dimmer active>
                                  <Loader>Loading Products</Loader>
                                </Dimmer>
                              )
                          }
                          })()
                        }
                 </Slider>
                 <div style={{textAlign: 'center', paddingTop: 10}}>
                  <Button icon basic onClick={this.previous.bind(this)}><Icon name="chevron left" /></Button>
                  <Button icon basic onClick={this.next.bind(this)}><Icon name="chevron right" /></Button>
                </div>
              </div>
                
        )}
        
    }

 function matchStateToProps(state)
 {
    return{
      auth: state.auth,
      products: state.products,
      geoProducts: state.geoProducts,
      coords: state.coords
    }
 } 

export default  connect(matchStateToProps)(Product);