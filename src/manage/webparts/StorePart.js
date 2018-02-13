import React,{Component} from 'react';
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react';
//import { Link } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import {Link, Route} from 'react-router-dom';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Backdrop from 'material-ui/Modal/Backdrop';
import AddStore from './addStoreModal';
import DeleteStoreModal from './deleteStore';
import EditStore from './EditStore';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class StorePart extends Component{
  constructor(props){
    super(props)
    this.state = {
      stores: []
    }
  }
  render(){
    return(
      <Container>

        <AddStore />
        <br/>
        <Table >
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell >Store</Table.HeaderCell>
              <Table.HeaderCell>Suburb</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          {
            (()=>{
              if(this.state.stores.length > 0){
                return(
                  this.state.stores.map(store=>{
                    
                      return(
                        <Table.Row>
                            <Table.Cell >{store.storename}</Table.Cell>
                            <Table.Cell >{store.suburb}</Table.Cell>
                            <Table.Cell >{store.city}</Table.Cell>
                            <Table.Cell>
                              <Link to={"/manage/product/" + store._id}><Button icon color="red"><Icon name='add circle' />Go to Products</Button></Link>
                              <Link to={"/manage/edit-store/" + store._id}><Button icon color="red" ><Icon name='edit' />Edit</Button></Link>
                              <DeleteStoreModal/>
                            </Table.Cell>
                        </Table.Row>
                          )
                        })
                      )}
                  })()
          }
        </Table>
      </Container>
    )
  }
    async _getStore(){
      let response = await fetch('http://api.rookies.co.za/api/mystore/'+ this.props.match.params.filter, {credentials: "include"});
      let result = await response.json();
      console.log("My store:",result);
      this.setState({
        stores: result.data
      }
    );
    }
    
    componentDidMount(){
      this._getStore();
    }

  }


function matchStateToProps(state)
{
   return{
    user: state.auth,
    products: state.products,

   }
}

export default  connect(matchStateToProps)(StorePart);


