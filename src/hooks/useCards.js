import React from 'react'
import { createClass } from '../config'
import { useAuth } from '../providers/useAuth'

export const useStudent = () => {
  
  const [isLoading , setLoading] = React.useState(false)

  const { teachers } = useAuth()



  const post = React.useCallback(data => {
    setLoading(true)

    createClass(data , teachers?.id)
    .finally(() => setLoading(false))
  }, [teachers?.id])
  
    return{
      isLoading,
      actions: {
        post ,
      }
    }

}



