import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;

  img {
    display: inline-block;
    border-radius: 50%;
  }
`

const Image = () => (
  <Div>
    <img alt="me" src={'https://www.github.com/babzcraig.png'} />
  </Div>
)

export default Image
