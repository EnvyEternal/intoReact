import React from "react";

const Hello = props => {
    const {name, surname} = props
    return <div>Hello, {name} {surname}</div>
}

export default Hello;