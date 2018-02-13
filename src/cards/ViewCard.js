import React,{ Component } from 'react'
import { Grid, Image, Container, Item, Icon, Form, TextArea, Rating, Button, Divider} from 'semantic-ui-react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
// import FontIcon from 'material-ui/FontIcon';

import ProductCard from './ProductCard'
import { connect } from "react-redux";
import Products from '../products carousel/ProductsCarousel'
import {Link, withRouter} from 'react-router-dom'
import Moment from 'moment'
import pic from '../images/images/01.jpg';

// import {blue300,indigo900,orange200,deepOrange300,pink400,purple500,} from 'material-ui/styles/colors';

const base = 'http://api.rookies.co.za/api'

class ViewProduct extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            product: {},
            store:[],
            category:[],
            rating: 0,
            message: "",
            collapse: false,
            rev:[],
            reviewer: []
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this._getProduct = this._getProduct.bind(this);
        this._getReview = this._getReview.bind(this);
    
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

    handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });

    handleSubmit(e) {
        e.preventDefault();
        let obj = {
          "user": this.props.user._id,
          "product": this.state.product._id,
          "message": this.state.message,
          "rating":this.state.rating
     
        }
        // console.log(obj);
        fetch('http://api.rookies.co.za/api/add-review', {
            method: 'POST',
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            }
            ,
            body: JSON.stringify(obj)
          })
          .then((data)=> {
            return data.json()
          }).then((body)=>{
            // console.log(body);
          this.setState({
              message: "",
              rating: 0,
              maxRating: 5
          })
          
          });
      }
      
     

    render(){

        const{store,product,category,reviewer,rev} = this.state;
        const{ reviews } = this.props;
      
        return(
            <div >
                <Container>
                    
                  <Grid>
                    <Grid.Column width={10}>
                    <Image src={"https://storage.googleapis.com/discountbuddy_products/" + product.image} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Item>
                         <Item.Content>
                            <Item.Header as='h2'>{product.name}</Item.Header>
                            <Item.Description as='h4' style={{color:"red"}}>
                                R{product.promo_price}
                            </Item.Description>
                            <Item.Description as='h6' style={{textDecoration:'line-through'}}>
                                was R{product.price}
                            </Item.Description >
                            <Item.Description as='h6' >
                                 Store : {store.storename} 
                            </Item.Description>

                         </Item.Content>
                     </Item>
                     <Divider hidden></Divider>
                     <Item>
                         <Item.Content>
                            <Item.Header as='h4'>About {product.name}</Item.Header>
                            <Item.Description as='h6' >
                                {product.description}
                            </Item.Description>
                            <Item.Description style={{color:"red"}} as='h6' >
                               Valid till: {Moment(product.promo_expiry_date).format('DD MMM YYYY')}
                            </Item.Description>
                            <Item.Description as='h6' >
                               Fall under <Link to={'/category/'+category._id}>{category.name}</Link> category
                            </Item.Description>

                         </Item.Content>
                     </Item>
                     <div>
                        <Button color="blue" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Review</Button>
                        <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                    
                
                               {
                                        (()=>{
                                            if(rev.length > 0){
                                                console.log(reviews)
                                                return(
                                                
                                                    rev.map(review=>{
                                                    {
                                                        if(this.props.match.params.filter === review.product._id)
                                                        return(
                                                            <div key={review._id}>
                                                                <Image src={'http://storage.googleapis.com/discountbuddy_users/'+review.user.picture}  avatar />
                                                                    <span>{review.user.displayName}</span> <Rating icon='star' disabled='true' rating={review.rating} maxRating={5} />
                                                                <h6> {review.message}</h6>
                                                                <p>Posted: {Moment(review.createdAt).fromNow()}</p>
                                                                <hr/>
                                                            </div>
                                                    )
                                                }})
                                        )
                                        }
                                        })()
                                    }
                                      
                            </CardBody>
                        </Card>
                        </Collapse>
                     </div>

                    </Grid.Column>
                </Grid>
                <Grid>
                    {this.props.user?                    
                    <Grid.Column width={10}>
                    
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <TextArea value={this.state.message} rows={2} onChange={(e)=>{this.setState({message: e.target.value})}} placeholder='What do you think about this product?' />
                            </Form.Field>
                            <Rating icon='star' maxRating={5} onRate={this.handleRate} rating={this.state.rating} onChange={(e)=>{this.setState({rating: e.target.value})}}/><br/>
                            <Button basic color='red' type='submit'>Submit</Button>   
                        </Form>                       
                    </Grid.Column>            
                   
                    :null}
                    <Grid.Column width={6}>
                        <Button color='red' type='submit'>11 Km away</Button>
                    </Grid.Column>

                    <Divider horizontal>Products in same category</Divider>
                    <Grid.Column width={16}>
                        <Products categoryId={category._id}/>
                    </Grid.Column>

                </Grid>
                </Container>
            </div>
        )
    }

    // componenetWillReceiveProps(){
    //     this._getProduct();
    // }

    // componentDidUpdate(){
    //     this._getProduct();
    // }
    
    async _getProduct(){
    
        let response = await fetch(base +'/product/'+this.props.match.params.filter);
        let result = await response.json();
       
            this.setState({
                product: result,
                store: result.store,
                category: result.category
              });
      }

      async _getReview(){
        let response = await fetch(base +'/review/'+this.props.match.params.filter);
        let result = await response.json();

        this.setState({
          rev: result,
          reviewer: result.product
        }
      );
      }
      
      componentDidMount(){
        this._getProduct();
        this._getReview();
      }
}

function matchStateToProps(state)
{
    return{
        user: state.auth,
        products: state.products,
 
    }
}

export default withRouter(connect(matchStateToProps)(ViewProduct));