import React, {Component} from 'react';
import {Grid, Segment,Button, Checkbox, Icon, Table,Input, Dropdown,Image, Menu,Card} from 'semantic-ui-react';
import AddMultipleModal from './AddMultipleModal';
import AddProductModel from "./AddProductModel";
import {Row, Col, Container} from 'reactstrap';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]


class ProductPart extends Component{
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
    render(){
        return (
          <Container>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3'>
                       <AddProductModel></AddProductModel>

                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Table.Row>
                      <Table.HeaderCell colSpan='3'>
                        <AddMultipleModal></AddMultipleModal>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Grid.Column>
                  <Grid.Column>
                     <Dropdown icon="angle down"  placeholder='Select Category' search selection  />
                  </Grid.Column>
                  <Grid.Column>
                      <Input icon='search' placeholder='Search Category...' />
                  </Grid.Column>
                </Grid.Row>
                <Row>
                {
                  (()=>{
                    if(this.state.products.length > 0){
                      
                      return(
                        this.state.products.map(product=>{
                          
                            return(
               
                              <Col md="3">
                                    <Card>
                                        <Image src={"https://storage.googleapis.com/discountbuddy_products/" + product.image} size="large"  />
                                        <Card.Content>
                                        <Card.Header>
                                            {product.name}
                                        </Card.Header>
                                        <Card.Description>Price: {product.promo_price}</Card.Description>
                                        <Card.Description>Promo Price: {product.price}</Card.Description>
                                            <Card.Description>
                                            {product.description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button circular icon color='green'><Icon name="edit" /></Button>
                                            <Button circular icon color='red'><Icon name="trash" /></Button>
                                        </Card.Content>
                                    </Card>
                              </Col>
                                          )
                                        })
                                      )}
                                  })()
                          }
                </Row>
          
              </Grid>
            </Container>

        )
    }
    async _getProduct(){
      let response = await fetch('/api/my-product/' + this.props.match.params.filter, {credentials: "include"});
      let result = await response.json();
      console.log('data coming back',result)
      this.setState({
        products: result
      }, ()=>{console.log('data coming back',this.state.products)}
    );
    }
    
    componentDidMount(){
      this._getProduct();
    }
  
    }
  
  
  function matchStateToProps(state)
  {
     return{
      user: state.auth,
      products: state.products,
     }
  }
  
  export default  connect(matchStateToProps)(ProductPart);
  
