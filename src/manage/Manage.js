import React, {Component} from 'react';
import {Grid, Image, Menu, Dropdown, Icon} from 'semantic-ui-react';
import {Container, Row, Col} from'reactstrap';
import {Link, Route} from 'react-router-dom';
import DashboardPart from './webparts/DashboardPart';
import ProductPart from './webparts/ProductPart';
import StorePart from './webparts/StorePart';
import {connect} from 'react-redux';
import EditStore from './webparts/EditStore';

class Manage extends Component{

    render(){
    
        return (
                <Container>
                    <Row>
                            <Col md="3">
                                <Menu secondary vertical>
                                    <Menu.Item>
                                        <Image src={this.props.user.picture} size="small" />
                                    </Menu.Item>
                                    <Link to="/manage/"><Menu.Item link={true}><Icon name="dashboard" /> Dashboard</Menu.Item></Link>
                                    <Link to={"/manage/store/"+ this.props.user._id}><Menu.Item link={true}><Icon name="cart" /> My Stores</Menu.Item></Link>
                                   
                                </Menu>
                            </Col>
                        <Col md="9">
                            <Route path="/manage/" exact component={DashboardPart} />
                            <Route path="/manage/store/:filter?" component={StorePart} />
                            <Route path="/manage/product/:filter?" component={ProductPart} />
                            <Route path="/manage/edit-store/:filter" component={EditStore} />
                        </Col>
                    </Row>
                </Container>
        )
    }
}
function matchStateToProps(state){
    return {
        user: state.auth
    }
}
export default connect(matchStateToProps)(Manage);