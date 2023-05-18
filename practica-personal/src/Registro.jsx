import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from 'firebase/auth'
import { useForm } from './hooks/useForm'
import { registerAuth } from './store/slices/auth/Thunks'
import { onAuthStateChanged } from 'firebase/auth'
import { logout, register } from './store/slices/auth/AuthSlice'

export const Registro = () => {

  const dispatch = useDispatch()

  const { email, password, onInputChange, formState } = useForm({
    email: 'jucalora17@gmail.com',
    password: '123456'
  })

  const onSubmit = ( event ) =>{
    event.preventDefault()
    console.log(formState)
    dispatch( registerAuth( email, password ) )
  }

  useEffect(() => {
    onAuthStateChanged( auth, async(user) => {
      if( !user ) return dispatch( logout() );

      dispatch(register( {email: user.email} ))
    })
  }, [])

  return (
    <div>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={(event) => onSubmit(event)}>

        <input type="email" name="email" onChange={(event) => onInputChange(event)} value={email}/>

        <input type="password" name="password" onChange={(event) => onInputChange(event)} value={password}/>

        <button type="submit">Registro</button> 

      </form>
    </div>
  )
}
