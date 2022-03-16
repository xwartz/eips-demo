import { toast } from 'react-toastify'

const config = {
  position: toast.POSITION.TOP_CENTER,
  hideProgressBar: true,
}

const simpleToast = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
  toast[type](message, config)
}

export default simpleToast
