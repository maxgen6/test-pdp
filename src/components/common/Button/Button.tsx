import clsx from "clsx";

type ButtonPropsType = {
  title: string
  onClick: () => void
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean
}

const Button = ({ title, onClick, type, disabled }: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
      clsx(
        'text-white bg-sky-700 px-4 py-2 rounded cursor-pointer hover:bg-sky-900 duration-150 ease-in',
        disabled && 'cursor-not-allowed opacity-60'
      )
      }
    >{title}</button>
  )
}

export default Button
