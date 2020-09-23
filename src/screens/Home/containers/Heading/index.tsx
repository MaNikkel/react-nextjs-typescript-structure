import React from 'react'
import { useSelector } from 'react-redux'

const Heading: React.FC = () => {
  const home = useSelector(state => state.home)
  return <h1>{home.name}</h1>
}

export default Heading
