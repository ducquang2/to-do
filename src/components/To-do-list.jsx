import React from "react";
import { List, Grid, Container, Button } from 'semantic-ui-react'

function TodoList({ id, item, onCheck }) {
    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }
    return (
        <List divided relaxed>
            <List.Item onClick={() => { onCheck(id) }}>
                <List.Icon name='chevron right' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>
                        {item}
                    </List.Header>
                    {/* <List.Description as='a'>Updated 10 mins ago</List.Description> */}
                    <Button onClick={removeItem}>Delete</Button>
                </List.Content>
            </List.Item>
        </List>
    )
}
export default TodoList;