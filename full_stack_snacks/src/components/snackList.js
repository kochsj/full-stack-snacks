import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    
    <>
        {/* {console.log('props: ', props)} */}
        <ul>
            {props.snacks.map(snack => <ListItem key={snack.id} snack={snack}/>)}
        </ul>
    </>
)

function ListItem(props){
    return (
    <li>
        <Link to={`/${props.snack.id}`}>
            <p>{props.snack.name}</p>
        </Link>
    </li>)
}