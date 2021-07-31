import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import { useController } from 'react-hook-form'
import { WrapperMask, StyledLabel, StyledError } from '../style'

const MaskInputForm = ({
    label,
    error,
    // data,
    type,
    placeholder,
    mask,
    name,
    control,
    // invalid,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
    } = useController({
        name,
        control,
    })

    return (
        <WrapperMask hasError={`${error && true}`}>
            {label.toString() && <StyledLabel>{label}</StyledLabel>}
            <InputMask
                type={type}
                mask={mask}
                placeholder={placeholder}
                inputRef={ref}
                {...inputProps}
                {...props}
            />
            {error && <StyledError>{error}</StyledError>}
        </WrapperMask>
    )
}

MaskInputForm.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    mask: PropTypes.string,
}

MaskInputForm.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text',
    error: false,
    mask: '',
}

export default MaskInputForm
