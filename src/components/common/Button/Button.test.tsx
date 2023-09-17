import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import Button from "./Button";

const testTitle = 'Test'
const testOnClick = jest.fn()

describe('Button component', () => {
  it('should render Button component', () => {
    render(<Button title={testTitle} onClick={testOnClick} /> )

    expect(screen.getByText(testTitle, { selector: 'button' })).toBeInTheDocument()
  });

  it('should render Button component with type', () => {
    render(<Button title={testTitle} onClick={testOnClick} type="submit" />)

    expect(screen.getByText(testTitle, { selector: 'button' })).toHaveAttribute('type', 'submit')
  });

  it('should calls onClick fn correctly', () => {
    render(<Button title={testTitle} onClick={testOnClick} />)

    userEvent.click(screen.getByText(testTitle, { selector: 'button' }))
    expect(testOnClick).toHaveBeenCalled()
  });

  it('should render Button with disabled', () => {
    render(<Button title={testTitle} onClick={testOnClick} disabled={true} />)

    expect(screen.getByText(testTitle, { selector: 'button' })).toHaveClass('cursor-not-allowed', 'opacity-60')
  });

  it('should hover work correctly', () => {
    render(<Button title={testTitle} onClick={testOnClick} />)

    userEvent.hover(screen.getByText(testTitle, { selector: 'button' }))
    expect(screen.getByText(testTitle, { selector: 'button' })).toHaveClass('hover:bg-sky-900')

  })
})