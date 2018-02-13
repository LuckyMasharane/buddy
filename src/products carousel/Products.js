import React,{Component} from 'react'
import Slider from 'react-slick';
import {Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

const cardStyle = {
    height:250
  }
  
class SimpleSlider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            products:['http://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_SE/Rose_Gold/desktop/1.jpg','https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/OPPOA57BK_.jpg','https://cdn.shopify.com/s/files/1/0889/6726/products/potjie-pots-size-3-potjie-pot-cauldron-8-quarts-pure-cast-iron-outdoor-cookware-1_grande.jpg?v=1449257180','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTz3Ubk30mr1NWpXHkeAvrZmItULBHwowkmytlfek3F18ysdp','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuyHWXsbdhDCi290P344vAwxnNCc8TgAASzVOYn663DKPOxMJ','https://media.wired.com/photos/59e95152a00183307dad427c/master/w_1200,c_limit/BackBeatPRO2_TA.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5AICzPF8vXd0BBolbGY95Vu2wrBUBbZEAK5yu4uobSgUUBZgWg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44YM5gJdgpjEr23vF7d9XT9K44CKAwkkcSSDoL1xH_uIf4U-vGg']
        }
    }
    render () {
        var settings = {
            dots: true,
            prevArrow: <Button icon circular basic><Icon size="large" name="angle arrow left" /></Button>,
            nextArrow: <Button icon circular basic><Icon size="large" name="angle arrow right" /></Button>,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
          <Slider {...settings}>
          {
              (()=>{
                if(this.state.products.length > 0){
                  return(
                  this.state.products.map(product=>{
                  {
                    return(
                        <Link to="/product"><div><img style={cardStyle}src={product}/></div></Link>
                  )

                }})
            )
            }
            })()
          }
            
          </Slider>
        );
      }
}

export default SimpleSlider;