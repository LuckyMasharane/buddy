import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import img from '../images/discount buddy.png';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';


class Login extends Component {
    constructor(props){
        super(props);
  
        this.state = {
          users: []
  
        }
  
        this.handleSubmit =this.handleSubmit.bind(this);
      }
  
    handleSubmit(e) {
      e.preventDefault();
      let obj = {
        "email": this.state.email,
        "password": this.state.password
      }
      console.log(obj);
      fetch('http://api.rookies.co.za/auth/local', {
          method: 'POST',
          credentials: "include",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          }
          ,
          body: JSON.stringify(obj)
        })
        .then((data)=> {
          return data.json()
        }).then((body)=>{
         
        this.props.setUser(body);
        this.props.history.push('/');
  
        });
    }
  render(){
    return(
        <Container text>
            <Grid centered>
              <Grid.Row>
                <Grid.Column width ={8}>
                  <Image src={img} size='small' centered/><br/>
                  <Form  onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input placeholder='Email'type = 'email' onChange={(e)=>{this.setState({email: e.target.value})}}  required/>
                    </Form.Field>

                    <Form.Field>
                        <input placeholder='Password' type = 'password' onChange={(e)=>{this.setState({password: e.target.value})}} required />
                    </Form.Field>

                    <Button fluid  type='submit'><Icon name='user' />Login</Button><br/>
                    <Button fluid  as="a" href="/auth/facebook" color = 'facebook' type='submit'><Icon  name='facebook f' />Login with Facebook</Button><br/>
                    <Button  fluid color = 'google plus' as="a" href="/auth/google" type='submit'><Icon  name='google plus' />Login with Google </Button><br/>
                    <a href = "/register">Do you have an acount? Register</a>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
    )
  }
}

export default connect(null,actions)(Login);