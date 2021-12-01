import { InformationCircleIcon } from '@heroicons/react/solid'

export interface TYPE_ALERT {
  variant: 'success' | 'info'
  text: string | React.ReactElement
}

const Alert = ({ variant, text }:TYPE_ALERT) => {
  const alert = {
    success: {
      textColor: 'text-green-700',
      bgColor: 'bg-green-300',
      border: 'border-l-4 border-green-700',
    },
    info: {
      textColor: 'text-sky-700',
      bgColor: 'bg-sky-300',
      icon: InformationCircleIcon,
      border: 'border-l-4 border-sky-700',
    },
  }[variant]
  return (
    <div className={`w-full ${alert.bgColor} ${alert.textColor} ${alert.border} p-4 mb-5`}>
      <span className='flex items-center text-sm'>
        <InformationCircleIcon className={`h-5 w-5 ${alert.textColor} min-w-min`} />
        {typeof text === 'string' ? (
          <p className='ml-1'>{text}</p>
        ) : text}
      </span>
    </div>
  )
}

export default Alert
