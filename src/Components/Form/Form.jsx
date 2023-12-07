/* eslint-disable react/jsx-key */
import { useReducer } from "react"
import ListItems from './../ListItems/ListItems';
import './../../app.css'
const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TASK':
            if (payload === '') {
                alert('Add Something please!');
                return state; // Return the current state without modifying it further
            } else {
                return {
                    ...state,
                    tasks: [...state.tasks, { payload, id: Math.random() * 10002 }],
                };
            }

        case 'GET_INPUT':
            return {
                ...state,
                input: payload,
            };

        case 'DELETE_ITEM': {
            const filteredItem = state.tasks.filter((item) => item.id !== payload);
            return {
                tasks: filteredItem,
            };
        }

        default:
            return state; // Return the current state for unknown actions
    }
};


export default function Form() {
    const initaialValue = {
        tasks: [],
        input: '', // Set initial input value to an empty string
    }

    const [state, dispatch] = useReducer(reducer, initaialValue )

    const submitHandelar = (e) => {
        e.preventDefault();
        if (state.input.trim() !== '') {
            dispatch({type: 'ADD_TASK', payload: state.input});
            dispatch({type: 'GET_INPUT', payload: ''}); // Reset input value
        } else {
            alert('Add Something please!');
        }
    }

    return (
        <div>
            <form className="todoFormClass" action="" onSubmit={submitHandelar}>
                <input 
                className="todoFormInputClass"
                    type="text"  
                    placeholder="Add your task"
                    value={state.input}
                    onChange={(e) => dispatch({type: 'GET_INPUT', payload: e.target.value})}
                />
                <button className="btn todoAddBtn" type="submit">Add Task</button>
            </form>
            
            <div className="todo-list-area ">
            <ul >
                {state.tasks.map((task) => <ListItems key={task.id} dispatch={dispatch} task={task} />)}
            </ul>
            </div>
        </div>
    );
}
