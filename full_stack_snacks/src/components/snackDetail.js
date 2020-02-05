import React from 'react'
import { Link } from "react-router-dom"
import SnackForm from './snackForm';

export default props => (
    <>
        <Link to={`/`}>Home</Link>
        <p>ID: {props.snack.id}</p>
        <p>SNACK: {props.snack.name}</p>
        <p>DESCRIPTION: {props.snack.desc}</p>
        <button onClick={props.deleteHandler} value={props.snack.id}>delete</button>
        <SnackForm idNum={props.snack.id} name={props.snack.name} desc={props.snack.desc} doneHandler={props.doneHandler}/>
    </>
)
