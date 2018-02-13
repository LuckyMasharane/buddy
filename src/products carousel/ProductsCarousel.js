import React,{Component} from 'react'
import Slider from 'react-slick';
import {Button, Icon} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const cardStyle = {
    height:250
  }
  
  function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'inline', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'circle', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }

class SimpleSlider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            products:[]
        }
    }
    next() {
      this.slider.slickNext()
    }
    previous() {
      this.slider.slickPrev()
    }
    render () {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
           
        };
        
        const {products,categoryId} = this.props
       
        return (
          <div>

          <Slider ref={c => this.slider = c } {...settings}>
          {
              (()=>{
                if(products.length > 0){
                 
                  return(
                    
                  products.map(product=>{
                  {
                    if(product.category._id === categoryId)
                    return(
                        <div key={product._id}>
                           <Link replace to={
                             {
                              pathname: '/product/' + product._id,
                              search: '',
                              hash: '',
                              state: { fromDashboard: true }
                            }
                           }><img style={cardStyle}src={"https://storage.googleapis.com/discountbuddy_products/"+ product.image} />
                           </Link>
                        </div>
                  )

                }})
            )
            }
            })()
          }
            
          </Slider>
            <div style={{textAlign: 'center', paddingTop: 10}}>
            <Button icon basic color="red" onClick={this.previous.bind(this)}><Icon name="angle left" /></Button>
            <Button icon basic color="green" onClick={this.next.bind(this)}><Icon name="angle right" /></Button>
            </div>
        </div>
        );
      }
}
function matchStateToProps(state){
  return{
    products: state.products
  }
}

export default withRouter(connect(matchStateToProps)(SimpleSlider));