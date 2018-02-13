import React,{Component} from 'react'
import Slider from 'react-slick';
import {Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class SimpleSlider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            products:[]
        }
    }
    render () {
      
        const {products,CatId} = this.props
       
       
        return (
          <div>
            
          {
              (()=>{
                if(products.length > 0){
                  console.log('id',this.props.CatId)
                  return(
                    
                  products.map(product=>{
                  {
                    if(product.category._id === CatId)
                    return(
                        <li>
                           {product.name}
                        </li>
                  )
                }})
            )
            }
            })()
          }
            
          </div>
        );
      }
}
function matchStateToProps(state){
  return{
    products: state.products
  }
}

export default connect(matchStateToProps)(SimpleSlider);