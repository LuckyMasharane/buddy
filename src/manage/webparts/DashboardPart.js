import React, {Component} from 'react';
import {Container, Grid, Table, Segment} from 'semantic-ui-react';
import { Bar } from 'react-chartjs-2';

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class DashboardPart extends Component {
  render() {
    return (
        <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8}>
                            <Segment>
                                <Bar data={bar}options={{maintainAspectRatio: true }}/>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column computer={8}>
                            <Segment>
                                <Bar data={bar} options={{ maintainAspectRatio: true}}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                

                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Registration Date</Table.HeaderCell>
                            <Table.HeaderCell>E-mail address</Table.HeaderCell>
                            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie Harington</Table.Cell>
                            <Table.Cell>January 11, 2014</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
      </Container>
    )
  }
}

export default DashboardPart;
