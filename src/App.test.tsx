import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import App from "./App";

describe('App component', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('should render App component', () => {
    render(<App />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  });

  it('add task work correctly', () => {
    render(<App />)
    const testText = 'test todo'

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, testText)
    expect(input).toHaveAttribute('value', testText)

    userEvent.click(button)
    expect(input).toHaveAttribute('value', '')
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole('list')).toBeInTheDocument()
  });

  it('should removing work correctly', () => {
    render(<App />)
    const testText = 'test todo'

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, testText)
    expect(input).toHaveAttribute('value', testText)

    userEvent.click(button)
    expect(input).toHaveAttribute('value', '')
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole('list')).toBeInTheDocument()

    userEvent.click(screen.getByText(/remove/i))
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  });

  it('should set tasks completed work correctly', () => {
    render(<App />)

    const testText = 'test todo'

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    userEvent.type(input, testText)
    expect(input).toHaveAttribute('value', testText)

    userEvent.click(button)
    expect(input).toHaveAttribute('value', '')
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole('list')).toBeInTheDocument()

    userEvent.click(screen.getByLabelText('Completed'))
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeChecked()
  });
})