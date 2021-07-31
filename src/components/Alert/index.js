import React from 'react'
import { Wrapper, StyledIcon } from './style'

const Alert = ({ icon, text, type }) => {
    return (
        <Wrapper type={type}>
            <StyledIcon className={`icon-${icon}`} />
            {text}
        </Wrapper>
    )
}

export default Alert
