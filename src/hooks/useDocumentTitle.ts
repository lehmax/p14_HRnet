import { useEffect } from 'react'

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title + ' | HRnet'
  }, [title])
}

export default useDocumentTitle
