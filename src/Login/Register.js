import React, {Component} from 'react';
import { Container,Button, Form, Image, Icon } from 'semantic-ui-react';
import img from '../images/discount buddy.png';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid';
import {Link, Route} from 'react-router-dom';
 
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
class Register extends Component {
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
        "firstname":this.state.firstname,
        "lastname":this.state.lastname,
        "email": this.state.email,
        "password": this.state.password,
        "admin":true
      }
      console.log(obj);
      fetch('http://api.rookies.co.za/auth/signup', {
          method: 'POST',
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

        this.props.history.push('/');
  
        });
    }
  render(){
    return(
        <Container text >
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={img} size='small' centered/><br/>
            
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <input placeholder='First Name' type="text" onChange={(e)=>{this.setState({firstname: e.target.value})}} required />
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Last Name' type ="text" onChange={(e)=>{this.setState({lastname: e.target.value})}} required/>
                                </Form.Field>
                                <Form.Select fluid options={options} placeholder='Gender' />

                                <Form.Field>
                                    <input placeholder='Email' type ="email" onChange={(e)=>{this.setState({email: e.target.value})}} required/>
                                </Form.Field>

                                <Form.Field>
                                    <input placeholder='Password' type="password" onChange={(e)=>{this.setState({password: e.target.value})}} required/>
                                </Form.Field>
                        
                                <Button fluid  type='submit'><Icon name='user'/>Register</Button><br/>
                                <Link to = "/login">Do you have an acount? Login</Link>
                            </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           
        </Container>
    )
  }
}

export default Register;