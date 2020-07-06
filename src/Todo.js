import React from 'react'




export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div className="todos">
            <label className="checkboxtext">
                <input className="checkbox" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}
            </label>
        </div>
    )
}
