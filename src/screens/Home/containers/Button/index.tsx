import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameRequest } from '../../../../store/ducks/Home/actions'

const Heading: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setNameRequest())
  }
  return <button onClick={handleClick}>Click</button>
}

export default Heading
