import React from 'react';


const Button = (props) => {
    return (
        <button type="button" style={{ background: "red", color: "white", fontSize: "2rem" }}
            onClick={props.handleDelete}
        >
            delete me
        </button>
    )
}

export default Button;