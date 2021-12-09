/* eslint-disable import/prefer-default-export */
import {
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid'
import { ReactElement } from 'react'
import clsx from 'clsx'
// import Popover from 'components/common/popover'

type FORM_FIELD_WRAPPER_PROPS = {
  name: string
  label: string
  children: ReactElement
  bordered: boolean
  errorMessage?: string
  className?: string
  disabled?: boolean
}

const FormFieldWrapper = (props: FORM_FIELD_WRAPPER_PROPS) => {
  const {
    name,
    label = '',
    children = null,
    bordered = false,
    errorMessage,
    className,
    disabled,
    // showInfo,
  } = props
  // eslint-disable-next-line no-console
  // console.log('📝', props)
  return (
    <div
      className={clsx('py-2 font-titillium text-general relative', className)}
    >
      <label className='font-semibold flex items-center' htmlFor={name}>
        {label}
        {/* {showInfo && (
          <Popover>
            <InformationCircleIcon className='ml-1 w-4 h-4' />
          </Popover>
        )} */}
      </label>
      <div
        className={clsx(
          bordered && 'border-input focus-within:border-input-focus',
          'w-full my-1 font-nunito rounded transition-all duration-300',
          disabled && 'dark:bg-gray-600 bg-gray-300',
        )}
      >
        {children}
      </div>
      {errorMessage && (
        <div className='flex items-center text-red-500 dark:text-red-600'>
          <ExclamationCircleIcon className='w-4 h-4' />
          <span className='ml-1 text-sm' role='alert'>
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  )
}

export default FormFieldWrapper

// FormFieldWrapper.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   children: PropTypes.node,
//   bordered: PropTypes.bool,
//   errorMessage: PropTypes.string,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   showInfo: PropTypes.bool,
// }

// FormFieldWrapper.defaultProps = {
//   children: null,
//   bordered: false,
//   label: '',
// }
