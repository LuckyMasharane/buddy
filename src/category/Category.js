
import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb, Card, Icon,Image, Input, Segment, Divider ,Message} from 'semantic-ui-react'
import Moment from 'moment'
import {connect} from 'react-redux'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

class Category extends Component{
    constructor(props) {
      super(props);
      this.state = {
        products : [],
      };
    
  }


    render() {
      console.log("No maan",this.props.match.params.filter)
      const { products } = this.state
      return (
          <div>
            <Breadcrumb size='huge'>
                <Breadcrumb.Section as={Link} to='/'>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section >Shopping</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section active>
                    
                        Category
                    
                </Breadcrumb.Section>
            </Breadcrumb>
        <Segment color='red' className='container'> 

            <Divider hidden></Divider>
        <Divider hidden></Divider>
          <Card.Group itemsPerRow={4}>
           {
                  (()=>{
                      if(this.state.products.length > 0){
                       
                        return(
                        products.map(product=>{
                            if(product.category._id == this.props.match.params.filter)
                       
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
             
                })
                  )
                  }
                else{
                        <Message
                        icon='inbox'
                        header='No Products or Deals Available'
                        
                      />
                    }})()
              }
        </Card.Group>
    </Segment>
    </div>
      );
    }
    componentDidMount()
    {
       
    }

  }
  
  function matchStateToProps(state)
  {
    products: state.products;
  
  }

  export default Category;