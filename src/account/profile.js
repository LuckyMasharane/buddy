import React, {Component} from 'react';
import {Container, Card, Icon, Image, Button, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link,Router, withRouter} from 'react-router-dom';
import img from '../images/discount buddy.png';

class Profile extends Component{
    render(){
        return (
            <Container text>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={img} size='small' centered/><br/>
                            <Card>
                                <Image src={this.props.user.picture} size="large"  />
                                <Card.Content>
                                <Card.Header>
                                    {this.props.user.displayName}
                                </Card.Header>
                                <Card.Meta>
                                    <span className='date'>
                                    Joined in 2015
                                    </span>
                                </Card.Meta>
                                    <Card.Description>
                                    {this.props.user.displayName} is a musician 
                                    </Card.Description>
                                </Card.Content>

                            </Card>
                            <Link to={"/edit-profile/" + this.props.user._id}><Button basic color ="red"><Icon name= "edit"/>Edit Profile</Button></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}
function matchStateToProps(state){
    return {
      user: state.auth
    }
  }
  
  export default connect(matchStateToProps)(withRouter(Profile));
