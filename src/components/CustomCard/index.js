import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../Icon'
import { Card } from '../../assets'
import {
    SecondaryCardWrapper,
    PrimaryCardWrapper,
    InformationCardWrapper,
    ActionCardWrapper,
} from './style'

export const PrimaryCard = ({ children, ...props }) => (
    <PrimaryCardWrapper {...props}>{children}</PrimaryCardWrapper>
)

export const SecondaryCard = ({ children, ...props }) => (
    <SecondaryCardWrapper {...props}>{children}</SecondaryCardWrapper>
)

export const InformationCard = ({ children, ...props }) => (
    <InformationCardWrapper {...props}>{children}</InformationCardWrapper>
)

export const ActionCard = ({
    active,
    children,
    title,
    icon,
    hasSeparator,
    centerAlign,
    ...props
}) => (
    <ActionCardWrapper {...props} className="row" active={active} centerAlign={centerAlign}>
        <div className="title-container">
            {Card.hasIcon && (
                <div className="icon-container">
                    <Icon size="32px" icon={icon} />
                </div>
            )}
            <h1>{title}</h1>
            {hasSeparator && <div className="separator" />}
        </div>
        <div className="btn-container">{children}</div>
    </ActionCardWrapper>
)

ActionCard.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    hasSeparator: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.string,
    centerAlign: PropTypes.bool,
}

ActionCard.defaultProps = {
    children: '',
    active: false,
    hasSeparator: false,
    centerAlign: false,
    title: '',
    icon: '',
}
