import React from "react";

const ToDo = props => {
    const handleClick = e => {
        props.toggleCompleted(props.data.id);
    }
    return (
        <div
            onClick={handleClick}
            className={`todo${props.data.completed ? "completed" : ""}`}>

            <h2 style={props.data.completed ? { textDecoration: "line-through" } : { textDecoration: "inherit" }}>{props.data.task}</h2>



        </div>
    )
}

export default ToDo;