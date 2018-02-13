import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Grid,  Button, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form,Select} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      product:[],
      stores: []
    }
    this.handleSubmit =this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    let obj = new FormData();
    
    obj.append("productname", this.state.productname);
    obj.append("description", this.state.description);
    obj.append("price", this.state.price);
    obj.append("promo_price", this.state.promo_price);
    obj.append("promo_expiry_date", this.state.promo_expiry_date);
    obj.append("size", this.state.size);
    obj.append("weight", this.state.weight);
    obj.append("size_measurement", this.state.size_measurement);
    obj.append("weight_measurement", this.state.weight_measurement);
    obj.append("sku", this.state.sku);
    obj.append("stock", this.state.stock);
    obj.append("image", this.state.image);
    obj.append("store", this.state.store);
    obj.append("category", this.state.category);
    obj.append("owner", this.props.user._id);

    let response = await fetch('/api/product', {
        method: 'POST',        
        credentials: "include",        
        body: obj
      });

      let result = await response.json();    
      if(result){
        this.setState({
          modal: false
        });
        this.props.history.push('/manage');
      }
    }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { form } = this.state;
    return (
      <div>
        <Button basic color ="red" onClick={this.toggle} floated='right'  size='small'> <Icon name='add circle' />Add Products</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Products</ModalHeader>
            <Form onSubmit={this.handleSubmit}>
              <ModalBody>
                <Form.Field>
                  <label for="store">Store</label>
                  <select placeholder="test"  id="store" name="store"  onChange={(e)=>{this.setState({store: e.target.value})}} >
                    <option>Select Store</option>
                    { (()=>{
                        if(this.state.stores.length > 0){
                            return(
                        this.state.stores.map((store)=>{
                          
                            return(
                                <option id="store" name="store" value={store._id}>{store.storename}</option>
                                )
                              
                            })
                        )
                        }
                        })()
                    } 
                  </select>
                 
              </Form.Field>
              
               <Form.Field>
                  <label for="category">Category</label>
                  <select type="select"  id="category" name="category"  onChange={(e)=>{this.setState({category: e.target.value})}}>
                  <option>Select Category</option>
                    { (()=>{
                        if(this.props.categories.length > 0){
                            return(
                        this.props.categories.map((categories)=>{
                            return(
                                <option id="category" name="category" value={categories._id}>{categories.name}</option>
                                )
                            })
                        )
                        }
                        })()
                    }
                  </select>
               </Form.Field>
               
                <Form.Field>
                  <label>Product Name:</label>
                  <input type="text" id="productname" name="productname" onChange={(e)=>{this.setState({productname: e.target.value})}} placeholder='Product name' />
                </Form.Field>
                <Form.Field>                 <label>Description:</label>
                  <input type="text" id="description" name="description" onChange={(e)=>{this.setState({description: e.target.value})}} placeholder='Description' />
                </Form.Field>
                <Form.Field>
                  <label>Price:</label>
                  <input type="number" id="price"  name="price" onChange={(e)=>{this.setState({price: e.target.value})}} placeholder='Price' />
                </Form.Field>
                <Form.Field>
                  <label>Promo Price:</label>
                  <input type="number" id="promo_price" name="promo_price" onChange={(e)=>{this.setState({promo_price: e.target.value})}} placeholder='Promo Price' />
                </Form.Field>
                <Form.Field>
                  <label>Promo Expiry Date:</label>
                  <input type="date" id="promo_expiry_date" name="promo_expiry_date" onChange={(e)=>{this.setState({promo_expiry_date: e.target.value})}}  placeholder='Promo Expiry Date' />
                </Form.Field>
                <Form.Field>
                  <label>Size:</label>
                  <input type="number" id="size"  name="size" onChange={(e)=>{this.setState({size: e.target.value})}} placeholder='size' />
                </Form.Field>
                <Form.Field>
                  <label>Weight:</label>
                  <input type="number" id="weight" name="weight" onChange={(e)=>{this.setState({weight: e.target.value})}} placeholder='Promo weight' />
                </Form.Field>
                <Form.Field>
                  <label>Size Measurement:</label>
                  <input id="size_measurement"  name="size_measurement" onChange={(e)=>{this.setState({size_measurement: e.target.value})}} placeholder='size measurement' />
                </Form.Field>
                <Form.Field>
                  <label>Weight Measurement:</label>
                  <input id="weight_measurement" name="weight_measurement" onChange={(e)=>{this.setState({weight_measurement: e.target.value})}} placeholder='weight measurement' />
                </Form.Field>
                <Form.Field>
                  <label>SKU:</label>
                  <input type="text" id="sku" name="sku" onChange={(e)=>{this.setState({sku: e.target.value})}} placeholder='sku' />
                </Form.Field>
                <Form.Field>
                  <label>Picture:</label>
                  <input type="file" id="image" name="image" onChange={(e)=>{this.setState({image: e.target.files[0]}); console.log("image in state", e.target.files[0])}} placeholder='picture' />
                </Form.Field>

              </ModalBody>
              <ModalFooter>
                <Button type="submit" basic color="red" onSubmit={this.handleSubmit} onClick={ ()=>{()=> console.log("image in state", this.state.image); this.toggle}}>Add Product</Button>
                <Button type="submit" basic color="red" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
  async _getStore(){
    let response = await fetch('/api/mystore', {credentials: "include"});
    let result = await response.json();

    this.setState({
      stores: result
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
    stores: state.stores,
    products: state.products,
    user: state.auth,
    categories: state.categories
   }
}

export default  withRouter(connect(matchStateToProps)(AddProduct));
