import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/font.css'
import '../assets/css/global.css'
import 'react-block-ui/style.css'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    overflow-x: hidden;
`

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const PublicLayout = ({ children }) => (
    <div id="page-wrap" className="wrapper">
        <Container className="col-12">
            <StyledContainer className="container-fluid">{children}</StyledContainer>
        </Container>
    </div>
)

PublicLayout.propTypes = {
    blocking: PropTypes.bool,
    showPasswordInfo: PropTypes.bool,
}

PublicLayout.defaultProps = {
    blocking: false,
    showPasswordInfo: false,
}

export default PublicLayout
