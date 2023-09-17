import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import Input from "./Input";

const testId = 'TestID'
const testValue = 'test'

const onChange = jest.fn()

describe('Input component', () => {
  it('should render Input component', () => {
    render(<Input id="" value="" onChange={onChange} placeholder="test" />)

    expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument()
  });

  it('should render without type', () => {
    render(<Input id="" value="" onChange={onChange} />)

    expect(screen.getByTestId('input-test-id')).toHaveAttribute('type', 'text')
  })

  it('should onChange works', () => {
    render(<Input id="" value="" onChange={onChange} />)

    userEvent.type(screen.getByRole('textbox'), testValue)
    expect(onChange).toHaveBeenCalledTimes(testValue.length)
  });

  it('should works with id and value', function () {
    render(<Input id={testId} value={testValue} onChange={onChange} />)

    expect(screen.getByRole('textbox')).toHaveAttribute('id', testId)
    expect(screen.getByRole('textbox')).toHaveAttribute('value', testValue)
  });

  it('should works with label', () => {
    render(<Input id={testId} label="test" value={testValue} onChange={onChange} />)

    expect(screen.getByLabelText('test')).toBeInTheDocument()
  });
})