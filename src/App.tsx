import CreateTodo from "./components/CreateTodo/CreateTodo";
import {useEffect, useState} from "react";
import {ITodoItem} from "./types";
import {clearLS, getFromLS, setToLS} from "./utils";
import {LOCALSTORAGE_KEYS_ENUM} from "./enums";
import TodoItem from "./components/TodoItem/TodoItem";
import {getDirty} from "./utils/getDirty";

const values = {
  Foo: '123',
  Bar: [222, 333],
  Baz: {
    Foo1: '789',
    Bar1: '0011',
    Baz1: {
      Foo2: '2233',
      Bar2: 4455
    }
  }
}

const initialValues = {
  Foo: '123',
  Bar: [111, 444],
  Baz: {
    Foo1: '7891',
    Bar1: '0011',
    Baz1: {
      Foo2: '2233',
      Bar2: 44551
    }
  }
}

const mockFirst = {
  values: {
    Foo: '123',
  },
  initialValues: {
    Foo: 'qwer'
  }
}

const mockSecond = {
  values: {
    Foo: '123',
    Bar: [222, 333],
  },
  initialValues: {
    Foo: '123',
    Bar: [111, 444],
  }
}

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([])

  useEffect(() => {
    getDirty(mockSecond.values, mockSecond.initialValues)
    const todosFromLS = getFromLS(LOCALSTORAGE_KEYS_ENUM.TODO)
    setTodos(todosFromLS)
  }, [])

  const onCreateTodo = (task: ITodoItem) => {
    const prevTasks: ITodoItem[] = getFromLS(LOCALSTORAGE_KEYS_ENUM.TODO)
    setTodos(prev => [...prev, task])
    setToLS(LOCALSTORAGE_KEYS_ENUM.TODO, [...prevTasks, task])
  }

  const onCompleted = (taskId: string | number, isComplete: boolean) => {
    if (!taskId) return

    const editedTodos: ITodoItem[] = todos.map((item ) => {
      if(item.id === taskId) {
        item.completed = isComplete
      }

      return item
    })

    setTodos(editedTodos)
    setToLS(LOCALSTORAGE_KEYS_ENUM.TODO, [...editedTodos])
  }

  const onRemove = (taskId: string | number) => {
    if (!taskId) return

    const updatedTodos = todos.filter(({ id }) => id !== taskId)

    setTodos(updatedTodos)
    setToLS(LOCALSTORAGE_KEYS_ENUM.TODO, [...updatedTodos])
  }

  return (
    <div className="max-w-screen-lg flex flex-col mx-auto min-h-screen">
      <CreateTodo onCreateTodo={onCreateTodo} />
      {!!todos.length && <ul className="mt-[60px] flex items-center flex-wrap gap-5">
        {todos?.map((todo: ITodoItem) =>
          <TodoItem key={todo.id} todo={todo} onCompleted={onCompleted} onRemove={onRemove} />)
        }
      </ul>}
    </div>
  )
}

export default App
