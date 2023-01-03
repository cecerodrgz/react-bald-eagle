import React from "react";
import { useEffect } from "react";

export function InputWithLabel(props) {
    const inputRef = React.useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <>
            <label htmlFor="Title">{props.children}</label>
             <input
             type="text"
             ref={inputRef}
             value={props.todoTitle}
             name="title"
             id="todoTitle"
             onChange={props.handleTitleChange}
            />
        </>
    )
};