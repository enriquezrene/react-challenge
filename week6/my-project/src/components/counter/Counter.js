import React from 'react';

// const Counter = ({value, onIncrement, onDecrement}) => {
//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={onIncrement}>+ INCREMENT</button>
//             <button onClick={onDecrement}>- DECREMENT</button>
//         </div>
//     );
// }

const Counter = (props) => {
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.onIncrement}>+ INCREMENT</button>
            <button onClick={props.onDecrement}>- DECREMENT</button>
        </div>
    );
}

export default Counter;