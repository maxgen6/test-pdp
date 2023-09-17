import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import TodoItem from "./TodoItem";
import {ITodoItem} from "../../types";

const onRemove = jest.fn()
const onCompleted = jest.fn()
const mockTask: ITodoItem = {
  title: 'Test TODO',
  id: 1,
  completed: false,
  createdAt: new Date()
}

describe('TodoItem component', () => {
  it('should render item component', () =>  {
    render(<TodoItem todo={mockTask} onCompleted={onCompleted} onRemove={onRemove} />)

    expect(screen.getByText(/test todo/i)).toBeInTheDocument()
    expect(screen.queryByRole('checkbox')).not.toBeChecked()
  });

  it('should checkbox is correctly working', () => {
    render(<TodoItem todo={mockTask} onCompleted={onCompleted} onRemove={onRemove} />)

    userEvent.click(screen.getByTestId('input-item-id'))
    expect(onCompleted).toHaveBeenCalled()
    expect(screen.queryByRole('checkbox')).toBeChecked()

    userEvent.click(screen.getByTestId('input-item-id'))
    expect(onCompleted).toHaveBeenCalled()
    expect(screen.queryByRole('checkbox')).not.toBeChecked()
  });

  it('should removing works correctly', async () => {
    render(<TodoItem todo={mockTask} onCompleted={onCompleted} onRemove={onRemove} />)

    userEvent.click(screen.getByText(/remove/i))
    expect(onRemove).toHaveBeenCalled()
  });
})