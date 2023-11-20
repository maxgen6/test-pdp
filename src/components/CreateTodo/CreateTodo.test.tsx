import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import CreateTodo from "./CreateTodo";

const onCreateTodo = jest.fn()
jest.spyOn(localStorage, 'setItem')

describe('CreateTodo component', () => {
  // beforeEach(() => {
  //   Object.defineProperty(window, "localStorage", {
  //     value: {
  //       getItem: jest.fn(() => null),
  //       setItem: jest.fn(() => null),
  //     },
  //     writable: true,
  //   });
  // });

  it('should render CreateTodo component correctly', function () {
    render(<CreateTodo onCreateTodo={onCreateTodo} />)

    expect(screen.queryByRole('textbox')).toBeInTheDocument()
  });

  it('typing in input works', () => {
    render(<CreateTodo onCreateTodo={onCreateTodo} />)
    const testTodoTitle = 'test'

    expect(screen.queryByRole('textbox')).toBeInTheDocument()

    userEvent.type(screen.getByRole('textbox'), testTodoTitle)
    expect(screen.queryByDisplayValue(testTodoTitle)).toBeInTheDocument()
  })

  it('add todos works correctly',  () => {
    render(<CreateTodo onCreateTodo={onCreateTodo} />)
    const testTodoTitle = 'test'

    const button = screen.getByRole('button')
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    userEvent.type(input, testTodoTitle)
    expect(screen.queryByDisplayValue(testTodoTitle)).toBeInTheDocument()

    userEvent.click(button)
    expect(onCreateTodo).toHaveBeenCalled()
    expect(screen.queryByDisplayValue(testTodoTitle)).not.toBeInTheDocument()
  });
})