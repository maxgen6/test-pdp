import {ChangeEvent, useState} from "react";
import uuid4 from "uuid4";

import { Input, Button } from '../common'
import {ITodoItem} from "../../types";
import {getFromLS, setToLS} from "../../utils";
import {LOCALSTORAGE_KEYS_ENUM} from "../../enums";

const CreateTodo = ({ onCreateTodo }: { onCreateTodo: (task: ITodoItem) => void }) => {
  const [todoText, setTodoText] = useState<string>('')
  const handleInputTodo = (e: ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)

  const handleCreateTodo = () => {
    const task: ITodoItem = {
      completed: false,
      title: todoText,
      id: uuid4(),
      createdAt: new Date()
    }

    onCreateTodo(task)
    setTodoText('')
  }

  return (
    <div className="py-12 flex items-center justify-center gap-1">
      <Input
        id="create"
        onChange={handleInputTodo}
        value={todoText}
        label="Todo title"
        placeholder="Input here..."
      />
      <Button title="Create" onClick={handleCreateTodo} />
    </div>
  )
}

export default CreateTodo