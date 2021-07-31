import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { Wrapper, StyledError, StyledLabel, StyledTextArea, StyledText } from '../style'

const TextArea = ({ label, error, placeholder, name, control, ...props }) => {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
    })

    return (
        <Wrapper hasError={`${error && true}`}>
            <StyledLabel>
                <StyledText>{label}</StyledText>
                <StyledTextArea
                    placeholder={placeholder}
                    inputRef={ref}
                    {...inputProps}
                    {...props}
                />
            </StyledLabel>
            {error && <StyledError>{error}</StyledError>}
        </Wrapper>
    )
}

TextArea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
}

TextArea.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text',
    error: '',
}

export default TextArea
