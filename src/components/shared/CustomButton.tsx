import { MouseEventHandler } from 'react'

export interface ICustomButton {
  otherClasses: string
  text: string
  onClickFunction: MouseEventHandler<HTMLButtonElement> | undefined
}

export const CustomButton: React.FC<ICustomButton> = ({
  otherClasses,
  text,
  onClickFunction,
}) => (
  <>
    <button
      className={`${otherClasses} transition-all ease-in-out duration-400 border rounded-[20px]`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  </>
)
