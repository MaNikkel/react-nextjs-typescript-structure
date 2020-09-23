import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../../../components/Loading'

const Heading: React.FC = () => {
  const home = useSelector(state => state.home)
  if (home.loading) {
    return (
      <h1>
        <Loading />
      </h1>
    )
  }
  return <h1>{home.name}</h1>
}

export default Heading
