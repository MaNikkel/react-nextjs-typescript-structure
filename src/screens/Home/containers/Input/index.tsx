import React from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../../../../store/ducks/Home/actions'

const Heading: React.FC = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(setName(e.target.value))
  }
  return <input onChange={e => handleSubmit(e)} placeholder="type to change!" />
}

export default Heading
