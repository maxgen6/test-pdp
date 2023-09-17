import {ChangeEvent, HTMLInputTypeAttribute} from "react";

type InputPropsTypes = {
  id: string
  value: string
  label?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, id, placeholder, label, type = 'text', onChange }: InputPropsTypes) => {

  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label htmlFor={id} className="px-1 text-black text-sm absolute top-0 left-[5px] -translate-y-1/2 bg-white">{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-testid="input-test-id"
        className="border px-4 py-2 rounded focus:outline-none focus-visible:outline-none"
      />
    </div>
  )
}

export default Input