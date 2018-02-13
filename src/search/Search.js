import React,{Component} from 'react';
import {Container, Form, FormGroup, Input, Button} from 'reactstrap';


class Search extends Component {
   constructor(props){
     super(props);
     this.state = {
       searchText: null
     }
     this.handleSearch = this.handleSearch.bind(this);
   }
    render(){
        return (
            <Container>
              <Form inline>
                <FormGroup>
                   <Input  placeholder="Search Text" onChange={(e)=>{this.setState({searchText: e.target.value})}}  />
                </FormGroup>
                 <FormGroup>
                 <Button onClick={this.handleSearch}>Search</Button>
                </FormGroup>
              </Form>
            </Container>
        )
    }

    handleSearch(){
      this.props.handleSearch(this.state.searchText);
    }
    }

export default Search;
