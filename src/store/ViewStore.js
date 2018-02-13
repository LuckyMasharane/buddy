import React from 'react';
import { Segment, Breadcrumb,Grid, Divider, Icon,Tab} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import StoreProduct from './Storeproduct';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: '',  
      products: [] 
    }
  }

  render() {

    const panes = [
        { menuItem: 'Store Details & Location', render: () => <Tab.Pane attached={false}>
        {this.state.store.province}
        <Divider></Divider>
        {this.state.store.streetadress}
        <Divider hidden></Divider>
        {this.state.store.suburb}
        <Divider hidden></Divider>
        {this.state.store.city}
        <Divider></Divider>
        
        </Tab.Pane> },
        { menuItem: 'Store Deals', render: () => <Tab.Pane attached={false}>
            <StoreProduct storeId = {this.state.store._id}/>
        </Tab.Pane> },
        
      ]

    const {filtID} = this.props.match.params.filter;
    const {store} = this.state
    return (
        <Segment color='red'>
            <Breadcrumb size='huge'>
                <Breadcrumb.Section as={Link} to='/'>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section as={Link} to='/stores'>Stores</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section active>{store.storename}</Breadcrumb.Section>
            </Breadcrumb>
            <Divider hidden></Divider>
            <Grid columns={2}>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment color='red'
                        >
                            <h1>
                                <Icon name="shop" />
                                {store.storename}
                            </h1>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                     
                        <Tab
                            menu={{ color : 'red', inverted: true, attached: false, tabular: false }}
                            panes={panes}
                        />
                      
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Segment>
    )
  }

  async _getStores(){
    let response = await fetch('http://130.211.50.71:89/api/store/'+this.props.match.params.filter);
    let result1 = await response.json();

    this.setState({
      store: result1.data
    })
  }

  componentDidMount(){
    this._getStores();
 
  }
}