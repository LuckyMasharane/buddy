import React, {Component} from 'react';
import { Button, Header, Icon, Modal} from 'semantic-ui-react';
import {Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class DeleteStore extends Component{
    render(){
        return (
            <Modal trigger={<Button color='red'><Icon name='delete' />Delete</Button>} basic size='tiny'>
                <Header icon='archive' content='Delete Store' />
                <Modal.Content>
                    <p>Are you sure you want to delete the store?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' inverted>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default DeleteStore;