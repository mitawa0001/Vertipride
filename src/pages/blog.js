import React from 'react'
import Blogs from '../blog/blogs'
import { Container } from 'react-bootstrap'
function blog() {
  return (
    <>
      <Container>
        <h2>this is blog page</h2>
        <Blogs />
      </Container>

    </>

  )
}

export default blog