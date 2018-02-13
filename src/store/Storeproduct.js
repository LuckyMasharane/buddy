import React,{Component} from 'react';
import {  Card, Icon,Image, Input, Segment, Divider, Message } from 'semantic-ui-react'
import Moment from 'moment'

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
          products: [],

        }
   
      }

    render(){
      const { classes } = this.props
      const { products } = this.state
       console.log('storeID',this.props.storeId)
        return (
            <Segment color='red' className='container'> 
            <Divider hidden></Divider>
              <Card.Group itemsPerRow={4}>
               {
                      (()=>{
                          if(this.state.products.length > 0){
                           
                            return(
                            products.map(product=>{
                            if(product.store._id === this.props.storeId)
                            {
                              return(
                                <Card key={product._id} color='red'>
                                <Image src={product.image } circular fluid centered style={{height: 150, width: 'auto'}} />
                                <Card.Content>
                                  <Card.Header>
                                    {product.productname}
                                  </Card.Header>
                                  <Card.Meta>
                                    <span className='price'>
                                    Store :{product.store.storename}
                                    </span>
                                  </Card.Meta>
                                  <Card.Description >
                                    R{product.promo_price}
                                  </Card.Description>
                                  <Card.Description >
                                       Valid until: {Moment(product.promo_expiry_date).format('D MMM YYYY')}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                  <a style={{textDecoration:'line-through'}}>
                                    <Icon name='payment' />
                                    R{product.price}
                                  </a>
                                </Card.Content>
                              </Card>
                            )

                          }
                        else{
                            <Message
                            icon='inbox'
                            header='No Products or Deals Available'
                            
                          />
                        }
                    })
                      )
                      }
                      })()
                  }
            </Card.Group>
        </Segment>
        )

        }

        async _getProduct(){
            let response = await fetch('http://130.211.50.71:89/api/product');
            let result = await response.json();

            this.setState({
              products: result
            }, ()=>{console.log(this.state.products)}
          );
          }


          componentDidMount(){
            this._getProduct();
          }
    }

export default Product;
