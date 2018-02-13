import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup} from 'reactstrap';
import {Grid,Button, Segment,Container, Checkbox, Icon, Table, Dropdown, Menu} from 'semantic-ui-react';


class AddMultipleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <div>
        <Button basic color ="red" onClick={this.toggle} floated='left' size='small'> <Icon name='add circle' />Add Multiple</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Multiple Products</ModalHeader>
          <ModalBody>
           <FormGroup>
               <Input type="file" name="file" id="AddFile" />
           </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button basic color="red" onClick={this.toggle}>Save</Button>
            <Button basic color="red" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMultipleModal;