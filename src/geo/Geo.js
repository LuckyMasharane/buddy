import React, { Component } from 'react';
import { Form, Grid,Button ,Card, Icon, Message} from 'semantic-ui-react'


class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      store: [],
      distance: ''
    };
 
  }

  render() {
    const { distance,store } = this.state
    console.log("Distance",this.state.distance)
    return (
      <div style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Grid columns={1}>
          <Grid.Column as={Form }>
            
              <Form>
                  <Form.Field>
                      <label>Enter Distance</label>
                      <input type="number" onChange={this.updateDistance.bind(this)} value={distance}/>
                  </Form.Field>

                  {
                        (()=>{
                            if(store.length > 0){
                                return(
                            store.map(item=>{
                                return(
                                    <Card
                                    image= {item}
                                    header={item.storename}
                                    meta={item.streetadress + <br/> + item.suburb + <br/> + item.province}
                                    description={item.city}
                                    
                                  />
                                )
                           })

                        )
                        }
                       
                        })()
                   }
                    
              </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }



 async updateDistance(event){
    //console.log(event.target.value);
    this.setState({distance: event.target.value})

    let response = await fetch('http://130.211.50.71:89/api/within/?lat='
    +this.state.latitude+'&lng='+this.state.longitude+'&'+this.state.distance);
    let result = await response.json();

    this.setState({
      store: result
    }, ()=>{console.log("yellow",this.state.store)}
  );
  }



  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);

  }

    componentDidMount() {

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
     
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );
    
  }

}

export default Geolocation;
