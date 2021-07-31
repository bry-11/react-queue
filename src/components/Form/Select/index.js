import React from 'react'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
import { Controller } from 'react-hook-form'

import { StyledLabel, StyledError, Wrapper } from '../style'

const Select = ({ label, options, error, name, control, disabled, ...props }) => (
    <Wrapper hasError={`${error && true}`}>
        <StyledLabel>{label}</StyledLabel>
        <Controller
            name={name}
            control={control}
            options={options}
            as={
                <ReactSelect
                    openMenuOnFocus={true}
                    {...props}
                    isDisabled={!options.length || disabled}
                />
            }
        />
        {error && <StyledError>{error}</StyledError>}
    </Wrapper>
)

Select.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.oneOfType([
        PropTypes.shape({
            value: PropTypes.string,
            error: PropTypes.string,
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                error: PropTypes.string,
            })
        ),
    ]),
}

Select.defaultProps = {
    options: [],
    label: '',
    error: '',
}

export default Select
