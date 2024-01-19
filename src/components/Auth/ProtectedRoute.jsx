import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../reducers/state'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const {currentUser} = useSelector(selectUser)

  return currentUser?<Outlet/> :  <Navigate to={"/login"} />
}

export default ProtectedRoute