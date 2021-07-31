import React from 'react'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { Wrapper, StyledError, StyledLabel, StyledInput, StyledText, TooltipIcon } from '../style'
import Tooltip from '../Tooltip'

const Input = ({
    label,
    error,
    placeholder,
    type,
    name,
    control,
    showTooltip,
    message,
    icon,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
    })

    return (
        <Wrapper hasError={`${error && true}`}>
            <StyledLabel>
                <StyledText>
                    {showTooltip && (
                        <Tooltip message={message}>
                            <TooltipIcon className={`icon-${icon}`} />
                        </Tooltip>
                    )}
                    {label}
                </StyledText>

                <StyledInput
                    type={type}
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

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
    placeholder: PropTypes.string,
    error: PropTypes.string,
}

Input.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text',
    error: '',
}

export default Input
