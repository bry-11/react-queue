import React from 'react'
import PropTypes from 'prop-types'
import { TooltipBox, TooltipCard, TooltipText } from '../style'

const Tooltip = ({ message, children }) => {
    return (
        <TooltipCard>
            <TooltipText>{children}</TooltipText>
            <TooltipBox>{message}</TooltipBox>
        </TooltipCard>
    )
}

Tooltip.propTypes = {
    message: PropTypes.string,
    icon: '',
}

Tooltip.defaultProps = {
    message: '',
    icon: '',
}

export default Tooltip
