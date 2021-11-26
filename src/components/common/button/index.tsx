/* eslint-disable react/button-has-type */
import { ReactElement } from 'react'
import clsx from 'clsx'

export interface TYPE_BUTTON {
  type?: 'button' | 'submit'
  label?: string
  onClick?: () => void
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  fluid?: boolean
  size?: 'sm' | 'md'
  variant?: 'primary-solid' | 'primary-outlined' | 'danger-solid' | 'danger-outlined' | 'submit-solid' | 'submit-outlined'
}

const Button = (props:TYPE_BUTTON) => {
  const {
    type = 'button',
    label = '',
    onClick,
    leftIcon = null,
    rightIcon = null,
    fluid = false,
    size = 'md',
    variant = 'primary-solid',
  } = props

  const buttonVariant = {
    'primary-solid': 'bg-sky-500 text-white hover:bg-opacity-70',
    'primary-outlined': 'border border-sky-500 bg-transparent text-sky-500 hover:bg-gray-200 dark:hover:bg-gray-700',
    'danger-solid': 'bg-red-500 text-white hover:bg-opacity-70',
    'danger-outlined': 'border border-red-500 bg-transparent text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700',
    'submit-solid': 'bg-emerald-500 text-white hover:bg-opacity-70',
    'submit-outlined': 'border border-emerald-500 bg-transparent text-emerald-500 hover:bg-gray-200 dark:hover:bg-gray-700',
  }[variant]

  return (
    <button
      className={clsx(
        buttonVariant,
        size === 'sm'
          ? 'py-1.5 px-3 text-sm'
          : 'py-2 px-3',
        fluid && 'w-full',
        'flex items-center justify-center rounded transition-all duration-300',
      )}
      type={type}
      onClick={onClick}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

export default Button
