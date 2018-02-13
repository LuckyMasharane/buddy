import React,{Component} from 'react'
import { Card, Icon, Message } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)



class ViewSearch extends Component{
    constructor(props)
    {
        super(props)
        
    }

    render(){
       const products = this.props.searchedResult
       
        return(
            <div>
                
                {
                        (()=>{
                            if(products.length > 0){
                                return(
                            products.map(product=>{
                                return(
                                    <Card
                                    image= {product.image}
                                    header={product.productname}
                                    meta='Friend'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                    extra={extra}
                                  />
                                )
                           })

                        )
                        }
                        else
                        {
                            return(
                                <Message color='black'>Product is no available, Search For another product</Message>
                            )
                        }
                        })()
                   }
            </div>
        )
    }
} 

export default ViewSearch
