import {
  InformationCircleIcon, CheckCircleIcon, ExclamationCircleIcon, XCircleIcon,
} from '@heroicons/react/solid'

export interface ALERT_PROPS {
  variant: 'success' | 'info' | 'warning' | 'danger'
  text: string | React.ReactElement
}

const Alert = ({ variant, text }: ALERT_PROPS) => {
  const AlertList = {
    success: {
      textColor: 'text-green-700',
      bgColor: 'bg-green-300',
      border: 'border-l-4 border-green-700',
      Icon: CheckCircleIcon,
    },
    info: {
      textColor: 'text-sky-700',
      bgColor: 'bg-sky-300',
      border: 'border-l-4 border-sky-700',
      Icon: InformationCircleIcon,
    },
    warning: {
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-300',
      border: 'border-l-4 border-amber-700',
      Icon: ExclamationCircleIcon,
    },
    danger: {
      textColor: 'text-red-700',
      bgColor: 'bg-red-300',
      border: 'border-l-4 border-red-700',
      Icon: XCircleIcon,
    },
  }[variant]
  return (
    <div className={`w-full ${AlertList.bgColor} ${AlertList.textColor} ${AlertList.border} p-4 mb-5`}>
      <span className='flex items-center text-sm'>
        <AlertList.Icon className={`h-5 w-5 mr-1 ${AlertList.textColor} min-w-min`} />
        {typeof text === 'string' ? (
          <p>{text}</p>
        ) : text}
      </span>
    </div>
  )
}

export default Alert
