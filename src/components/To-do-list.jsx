import React from "react";
import { List, Grid, Container } from 'semantic-ui-react'

function TodoList({ id, item, onCheck }) {
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Container textAlign='center'>
                    <List divided relaxed>
                        <List.Item onClick={() => { onCheck(id) }}>
                            <List.Icon name='chevron right' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>
                                    {item}
                                </List.Header>
                                {/* <List.Description as='a'>Updated 10 mins ago</List.Description> */}
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </Grid.Column>
        </Grid>
    )
}
export default TodoList;