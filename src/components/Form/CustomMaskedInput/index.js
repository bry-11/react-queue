import React from 'react'

import { Controller } from 'react-hook-form'
import MaskedInput from 'react-input-mask'
import { StyledError, StyledInput, StyledLabel, Wrapper } from '../style'

const CustomMaskedInput = ({
    label,
    error,
    name,
    control,
    mask,
    maskPlaceholder = '_',
    ...props
}) => {
    const Input = React.memo((props) => {
        const { name, inputRef, value, ...inputProps } = props
        return <StyledInput value={value} name={name} ref={inputRef} {...inputProps} />
    })

    return (
        <Wrapper hasError={error}>
            <StyledLabel>{label}</StyledLabel>
            <Controller
                name={name}
                control={control}
                as={
                    <MaskedInput
                        name={props.name}
                        value={props.value}
                        mask={mask}
                        maskPlaceholder={maskPlaceholder}
                        alwaysShowMask
                        onChange={(e) => {
                            e.persist()
                            props.onChange(e.target.value)
                        }}
                    >
                        <Input />
                    </MaskedInput>
                }
            />
            {error && <StyledError>{error}</StyledError>}
        </Wrapper>
    )
}

export default CustomMaskedInput
