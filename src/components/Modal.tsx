import { X } from 'lucide-react'
import * as RAC from 'react-aria-components'

interface ModalProps extends RAC.ModalOverlayProps {
  children: React.ReactNode
  type?: 'default' | 'success'
}

const ModalColors = {
  default: 'bg-white text-black',
  success: 'bg-green-50 text-green-800',
}

export const Modal = ({ type = 'default', children, ...props }: ModalProps) => {
  return (
    <RAC.ModalOverlay
      {...props}
      className="fixed inset-0 z-10 flex items-center justify-center min-h-full overflow-y-auto bg-black/25 backdrop-blur"
    >
      <RAC.Modal
        className={`w-full max-w-md overflow-hidden text-left align-middle ${ModalColors[type]} shadow-xl rounded-2xl`}
        isDismissable
      >
        <RAC.Dialog role="alertdialog" className="relative p-8 outline-none">
          {({ close }) => (
            <>
              <CloseButton onPress={close} />
              {children}
            </>
          )}
        </RAC.Dialog>
      </RAC.Modal>
    </RAC.ModalOverlay>
  )
}

const CloseButton = (props: RAC.ButtonProps) => {
  return (
    <RAC.Button
      className="absolute p-2 text-gray-800 bg-white rounded-full top-2 right-2"
      {...props}
    >
      <span className="sr-only">Close</span>
      <X aria-hidden={true} />
    </RAC.Button>
  )
}
