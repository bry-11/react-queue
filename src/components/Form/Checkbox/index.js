import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, StyledError, StyledLabel, StyledInput, StyledText } from '../style'

const Checkbox = ({ label, error, type, name, register, color }) => {
    return (
        <Wrapper hasError={`${error && true}`}>
            <StyledLabel isReverse={type === 'checkbox' || type === 'radio'}>
                <StyledInput type={type} ref={register} name={name} />
                <StyledText color={color}>{label}</StyledText>
            </StyledLabel>
            {error && <StyledError>{error}</StyledError>}
        </Wrapper>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio']),
    name: PropTypes.string,
    error: PropTypes.string,
}

Checkbox.defaultProps = {
    label: '',
    name: '',
    type: 'text',
    error: '',
}

export default Checkbox
