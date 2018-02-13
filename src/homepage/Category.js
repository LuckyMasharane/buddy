import React, { Component } from 'react'
import { Menu, Search ,Popup,Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



 class Category extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            myId : ''
        }
        this.handleHover = this.handleHover.bind(this)
    }

    handleHover(e){
        console.log('catch',this.state.myId)
        this.state({myId: e.target.value},()=>(console.log('catch',this.state.myId)))
    }
  render() {
    const {products} = this.props
    return (
      <Menu vertical fluid>
          
        <Menu.Item>
          <Header as="h4">Filter Search</Header>
        </Menu.Item>
        <Menu.Item>
            <Menu.Header>Search By Keywords</Menu.Header>
            <Search
            
          />
        </Menu.Item>
        <Menu.Item>
            <Menu.Header>Search By Category</Menu.Header>
        </Menu.Item>
        {
                (()=>{
                    if(this.props.categories.length > 0){
                        return(
                                                    
                            this.props.categories.map(item=>{
                                              
                                 return(
                                     <Popup key={item._id} value={this.state.myId} onHover={this.handleHover}  trigger={ 
                                     <Link to={"/category/"+item._id} className="linkItem" >
                                        <Menu.Item link={true} key={item._id} name={item.name} /> 
                                     </Link>
                                     }
                                     flowing hoverable position='right center'>

                                        Products under {item.name}
                                       
                                       {
                                        (()=>{
                                            if(products.length > 0){
                                                return(
                                                
                                                    products.map(product=>{
                                                    {
                                                        if(product.category._id === item._id)
                                                        return(
                                                            <div>
                                                            <Link key={product._id} to ={"/product/"+ product._id}> {product.name} </Link>
                                                            
                                                            </div>
                                                    )
                                                }})
                                        )
                                        }
                                        })()
                                    }
                                      
                                        
                                      </Popup>
                                        
                                )
                            })
                        )
                    }
                })()
              }
    
      </Menu>
    )
  }
}

function matchStateToProps(state){
    return{
       // auth: this.auth,
       products: state.products,
        categories: state.categories

    }
}

export default connect(matchStateToProps)(Category);