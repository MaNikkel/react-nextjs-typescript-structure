import React, { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { styles } from './Home.styles'

const HomeStyled = styled.main`
  ${styles}
`

const Home: React.FC = () => {
  useEffect(() => console.log('test'), [])
  const home = useSelector(state => state.home)
  return (
    <HomeStyled>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>{home.name}</h1>
    </HomeStyled>
  )
}

export default Home
