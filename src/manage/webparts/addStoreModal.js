import React from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button,Grid, Segment,Container, Checkbox, Icon, Table,Input, Dropdown, Menu, Form} from 'semantic-ui-react';
import FormGroup from 'semantic-ui-react/dist/commonjs/collections/Form/FormGroup';
import {Link,Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';



class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          user: ""
        }
        this.handleSubmit =this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
      }
      async handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        
        formData.append("storename", this.state.storename);
        formData.append("owner", this.props.user._id);
        formData.append("streetAddress", this.state.streetAddress);
        formData.append("suburb", this.state.suburb);
        formData.append("city", this.state.city);
        formData.append("province",this.state.province);
        formData.append("phoneNumber", this.state.phoneNumber);
        formData.append("email", this.state.email);
        formData.append("image", this.state.image);
        formData.append("closing", this.state.closing);
        formData.append("open", this.state.open);
      
        
       let response = await fetch('/api/add-store', {
          method: 'POST',
          credentials: "include",        
          body: formData
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
         <Button basic color ="red" onClick={this.toggle} floated='left'  size='small'> <Icon name='add circle' />Add Store</Button><br/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Store</ModalHeader>
            <Form  onSubmit={this.handleSubmit} encType="multipart/form-data">
              <ModalBody>
               <Form.Field>
                 <input type="text"  placeholder="Store name" onChange={(e)=>{this.setState({storename: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Street Address' onChange={(e)=>{this.setState({streetAddress: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Surburb' onChange={(e)=>{this.setState({suburb: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='city' onChange={(e)=>{this.setState({city: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <input type="text"  placeholder='Province' onChange={(e)=>{this.setState({province: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="tel"  placeholder='Telephone' onChange={(e)=>{this.setState({phoneNumber: e.target.value})}} />
               </Form.Field>
               <Form.Field>
                 <input type="email"  placeholder='Email' onChange={(e)=>{this.setState({email: e.target.value})}}/>
               </Form.Field>
               <Form.Field>
                 <label>Closing Time</label> 
                 <input type="time" placeholder='Closing Time' onChange={(e)=>{this.setState({closing: e.target.value})}}/>
               </Form.Field>
               <Form.Field> 
                  <label>Opening Time</label> 
                 <input type="time" placeholder='Opening Time' onChange={(e)=>{this.setState({open: e.target.value})}}/>
               </Form.Field>
               <Form.Field> 
                  <label>Image</label> 
                 <input type="file" onChange={(e)=>{this.setState({image: e.target.files[0]})}}/>
               </Form.Field>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" basic color="red" basic onClick={this.toggle}>Add Store</Button>
              </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}
function matchStateToProps(state){
  return {
    user: state.auth
  }
}

export default withRouter(connect(matchStateToProps)(AddStore));


