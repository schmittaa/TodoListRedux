import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux';

function ListTodo() {
    const {todos, FilterTodo, DoneTodo} = useSelector(state=>state);
    return (
        <div>
            {
            !FilterTodo ?
            <> {todos.map(todo =><Task key={todo.id} todo={todo}/>)}  </>

            : DoneTodo ? 
            <>{todos.filter(todo=> todo.etat ).map(todo =><Task key={todo.id} todo={todo}/>)}</>

            : <>{todos.filter(todo=> !todo.etat ).map(todo =><Task key={todo.id} todo={todo}/>)}</>
            }
        </div>
    )
}
export default ListTodo