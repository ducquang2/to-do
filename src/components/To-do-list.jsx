import React from "react";

function TodoList({ id, item, onCheck }) {
    return (
        <>
            <li onClick={() => { onCheck(id) }}>
                {item}
            </li>
        </>
    )
}
export default TodoList;