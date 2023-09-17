import {ChangeEvent, useEffect, useState} from "react";
import {ITodoItem} from "../../types";

const TodoItem = (
  { todo, onCompleted, onRemove }:
  {
    todo: ITodoItem,
    onCompleted: (id: string | number, isComplete: boolean) => void
    onRemove: (id: string | number) => void
  }
) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    setIsComplete(todo.completed)
  }, [])

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setIsComplete(e.target.checked)
    onCompleted(todo.id, e.target.checked)
  }

  const handleRemoveTodo = (id: string | number) => () => onRemove(id)

  return (
    <li className="border px-5 py-8 max-w-[200px]">
      <p>Title: {todo.title}</p>
      <div>
        <input
          id={todo.id.toString()}
          type="checkbox"
          data-testid="input-item-id"
          checked={isComplete}
          onChange={handleChecked}
          className="mr-1"
        />
        <label htmlFor={todo.id.toString()}>Completed</label>
      </div>

      <span
        className="block font-bold mt-10 cursor-pointer text-center"
        onClick={handleRemoveTodo(todo.id)}
      >remove</span>
    </li>
  )
}

export default TodoItem