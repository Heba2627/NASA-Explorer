/*import {useState} from 'react';
import {useReducer} from 'react';
const actions={
    TOGGLE:"TOGGLE",
    SELECT:"SELECT"
}
const reducer=(state,action)=>
    {
        switch(action.type)
        {
            case "TOGGLE":
                return {...state,isOpen:!state.isOpen};
            case "SELECT":
                return {...state,selected:action.payload,isOpen:false};
            default:
                return state;
        }
    }

export default function DropList({items, reducer=reducer})
{

    const [state,dispatch]=useReducer(reducer,{isOpen:false,selected:null});
    
    function toggle()
    {
        dispatch({type:"TOGGLE"});

    }

    function select(item)
    {
        dispatch({type:"SELECT",payload:item});
    }

    return(
        <div>
            <button onClick={toggle}>Select an Item</button>
            {state.isOpen && (
                <ul>
                    {items.map((item) => (
                        <li key={item} onClick={() => select(item)}>{item}</li>
                    ))}
                </ul>
            )}
            {state.selected && <p> Selected={state.selected} </p>}
        </div>

    );
}

function customReducer(state,action)
{
    switch(action.type)
    {
        case "TOGGLE":
            return {...state,isOpen:!state.isOpen};
        case "SELECT":
            return {...state,selected:action.payload};
        default:
            return state;
    }
}
    */