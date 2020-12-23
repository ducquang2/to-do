import React from "react";
import { List, Button } from 'semantic-ui-react'

function TodoList({ id, item, onCheck }) {

    return (
        <List divided relaxed>
            <List.Item onClick={() => { onCheck(id) }}>
                <List.Icon name='chevron right' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>
                        {item}
                    </List.Header>
                    {/* <List.Description as='a'>Updated 10 mins ago</List.Description> */}
                    <Button>Delete</Button>
                </List.Content>
            </List.Item>
        </List>
    )
}
export default TodoList;