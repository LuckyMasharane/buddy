import React, { Component } from 'react'
import { Form, Grid,Button } from 'semantic-ui-react'
import Geo from './Geo'

export default class Distance extends Component {
  state = { duration: 5, visible: true }

  
  render() {
    const { duration, visible } = this.state

    return (
    <div>

            <Form>
                <Form.Field>
                    <label>Enter Distance</label>
                    <input type="number"  onChange={this.handleChange}/>
                </Form.Field>
                                
                <Button type='submit'>Submit</Button>
            </Form>

      <Grid columns={1}>
        <Grid.Column as={Form }>
          
            <Form>
                <Form.Field>
                    <label>Enter Distance</label>
                    <input type="number"  onChange={this.handleChange}/>
                </Form.Field>
                                
                <Button type='submit'>Submit</Button>
            </Form>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}