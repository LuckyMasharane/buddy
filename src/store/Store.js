import React,{Component} from 'react';
import {Divider, Segment, Header, Grid,Icon} from 'semantic-ui-react'
//import ViewStore from './ViewStore';
import Geo from '../geo/Geo'

const square = { width: 175, height: 175 }

class Store extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          stores: []
        }
      }
    render(){
        
        return (
            <Segment>


                <Grid.Row position="centre" stretched>
                    <Grid.Column>
                        <Segment color='red'>
                            <h1>
                                <Icon name="shop" />
                                <Geo/>
                            </h1>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                     
        
                    </Grid.Column>

                </Grid.Row>

            <Segment className='container' >
                <Segment>
                    <h1>All Stores</h1>
                </Segment>
                <Grid >
                { 
                     (()=>{
                    if(this.state.stores.length > 0){
                           return(
                    this.state.stores.map(item=>{
                       
                        return(
                            
                            <Segment color='red' circular style={square} href={"/store/"+item._id}>
                                <Header as='h2'>
                                    {item.storename}
                                    <Header.Subheader>
                                    {item.city}
                                    </Header.Subheader>
                                </Header>
                            </Segment>
                        )
                    })
                        )
                  }
                  })()
                }
                </Grid>

            </Segment>
            </Segment>
        )

        }
        
        async _getStores(){
            let response = await fetch('http://api.rookies.co.za/api/store');
            let result1 = await response.json();
        
            this.setState({
              stores: result1.data
            });
          }
        
          componentDidMount(){
            this._getStores();
          }
    }

export default Store;