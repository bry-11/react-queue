import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import media from '../styles/media'

const Container = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    ${media.md`
    padding-top: 60px;
  `};
`

const NotFound = () => {
    const URL = 'https://rauljimenez.es/wp-content/404.jpg'
    return (
        <Layout>
            <Container className="container">
                <img alt="404" src={URL} />
            </Container>
        </Layout>
    )
}

export default NotFound
