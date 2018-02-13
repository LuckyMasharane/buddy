import React, {Component} from 'react';
import {Button, Checkbox, Form, Container, Grid, Image} from 'semantic-ui-react';
import img from '../images/discount buddy.png';
import {Link, Route, Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


class SettingPart extends Component{
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
        "FirstName":this.state.firstName,
        "lastName":this.state.lastName,
        "email": this.state.email,
        "password": this.state.password,
        "Image":this.state.Image
      }
      console.log(obj);
      fetch('http://api.rookies.co.za/api/user/update-profile', {
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
          console.log(body);
        this.props.history.push('/profile');
  
        });
    }
    render(){
        return (
            <Container>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={6}>
                        <Image src={img} size='small' centered/><br/>
                        <Form  onSubmit={this.handleSubmit}  encType="multipart/form-data">
                            <Form.Field>
                                <input placeholder='First Name' type = 'text' onChange={(e)=>{this.setState({email: e.target.value})}}/>
                            </Form.Field>
                            <Form.Field>
                                <input placeholder='Last Name' type = 'text' onChange={(e)=>{this.setState({email: e.target.value})}} />
                            </Form.Field>
                            <Form.Field>
                                <input placeholder='email' type = 'email' onChange={(e)=>{this.setState({email: e.target.value})}} />
                            </Form.Field>
                            <Form.Field>
                                <input placeholder='Password' type = 'password' onChange={(e)=>{this.setState({email: e.target.value})}} />
                            </Form.Field>
                            <Button fluid type='submit'>Update Profile</Button>
                        </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        )
    }
}

export default SettingPart;