import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { styles } from './Home.styles'
import Heading from './containers/Heading'
import Input from './containers/Input'
import Button from './containers/Button'

const HomeStyled = styled.main`
  ${styles}
`

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <Head>
        <title>Homepage</title>
      </Head>
      <Heading />
      <Input />
      <Button />
    </HomeStyled>
  )
}

export default Home
