
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button, CardGroup, Container, Row, Col} from 'reactstrap';
 import { Grid, Image, Header,Icon } from 'semantic-ui-react';
 import {Link} from 'react-router-dom';


 const cardStyle= {
  height:290,
  width:250
}

const imgStyle= {
  height: 200,
  
}

class StoreProducts extends Component{

    constructor(props)
    {
        super(props)
        this.state = {

        }
    }    
    render(){
        return(
            <Container> 
              <Row>
               
                {
                (()=>{
                    if(this.props.products.length > 0){
                        return(        
                            this.props.products.map(item=>{
                            if(item.store._id === this.props.storeId)
                                return(
                                    <Col md="4" style={{marginBottom: 5}}>
                                    <Card>
                                    <Link to ={"/product/"+item._id}> <CardImg style={imgStyle} src={"https://storage.googleapis.com/discountbuddy_products/" + item.image} 
                                    top width="100%" alt="Card image cap" link="true"/></Link>
                                <CardBody>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle style={{color:"red"}} >R{item.promo_price} </CardSubtitle>
                                    <CardSubtitle style={{color:"Grey", textDecoration:'line-through'}}>  was R{item.price}</CardSubtitle>
                                    <p style={{fontSize:"0.75rem"}}>{item.description}</p>
                                    </CardBody>
                                    </Card>
                                  </Col>
                                )
                            })
                            )
                        }
                    })()
                }
              </Row>
            </Container>
        )
    }

}


function matchStateToProps(state){
    return {
        products : state.products
    }
}

export default connect(matchStateToProps) (StoreProducts);







