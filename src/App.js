import React, { useState } from 'react';
import TodoList from "./components/To-do-list";
import {
    Header,
    Input,
    Button,
    Icon,
    Grid,
    Container
} from 'semantic-ui-react'


function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });

        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <div className="todolist">
            <Grid centered columns={2}>
                <Grid.Column>
                    <Container textAlign='center'>
                        <Header as='h1'>To-Do List</Header>
                        <Input
                            icon='tags'
                            type="text"
                            value={input}
                            onChange={(event) => { setInput(event.target.value) }}
                            iconPosition='left'
                            placeholder='Enter your to-do list'
                        />
                        <Button animated='vertical' onClick={addItem}>
                            <Button.Content hidden>Add</Button.Content>
                            <Button.Content visible>
                                <Icon name='plus' />
                            </Button.Content>
                        </Button>
                    </Container>
                </Grid.Column>
            </Grid>
            {/* <div className="heading">
                <Header as='h1' textAlign='center'>To-Do List</Header>
            </div>
          */}
            {/* <input
                type="text"
                value={input}
                onChange={(event) => { setInput(event.target.value) }}
            /> */}

            {/* <button onClick={addItem}>Add</button> */}

            <div className="items">
                <ul>
                    {items.map((item, index) => (
                        <TodoList
                            key={index}
                            id={index}
                            item={item}
                            onCheck={removeItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;