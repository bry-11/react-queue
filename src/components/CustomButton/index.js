import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from './style'
import { Button } from '../../assets'

const CustomButton = ({
    children,
    onClick,
    type,
    size,
    icon,
    hasIcon,
    iconPosition,
    buttonType,
    block,
    category,
    ...props
}) => {
    const [style, setStyle] = useState({})
    useEffect(() => {
        switch (buttonType) {
            case 'secondary':
                switch (category) {
                    case 'active': {
                        const { activeColor } = Button.secondary
                        setStyle({
                            ...activeColor,
                            hoverBackground: activeColor.hover.backgroundColor,
                            hoverColor: activeColor.hover.color,
                            hoverBorder: activeColor.hover.borderColor,
                            activeBackground: activeColor.active.backgroundColor,
                            activeColor: activeColor.active.color,
                            activeBorder: activeColor.active.borderColor,
                        })
                        break
                    }
                    case 'success': {
                        const { successColor } = Button.secondary
                        setStyle({
                            ...successColor,
                            hoverBackground: successColor.hover.backgroundColor,
                            hoverColor: successColor.hover.color,
                            hoverBorder: successColor.hover.borderColor,
                            activeBackground: successColor.active.backgroundColor,
                            activeColor: successColor.active.color,
                            activeBorder: successColor.active.borderColor,
                            disableBackground: successColor.disable.backgroundColor,
                            disableColor: successColor.disable.color,
                            disableBorder: successColor.disable.borderColor,
                        })
                        break
                    }
                    case 'danger': {
                        const { dangerColor } = Button.secondary
                        setStyle({
                            ...dangerColor,
                            hoverBackground: dangerColor.hover.backgroundColor,
                            hoverColor: dangerColor.hover.color,
                            hoverBorder: dangerColor.hover.borderColor,
                            activeBackground: dangerColor.active.backgroundColor,
                            activeColor: dangerColor.active.color,
                            activeBorder: dangerColor.active.borderColor,
                            disableBackground: dangerColor.disable.backgroundColor,
                            disableColor: dangerColor.disable.color,
                            disableBorder: dangerColor.disable.borderColor,
                        })
                        break
                    }
                    default: {
                        const { defaultColor } = Button.secondary
                        setStyle({
                            ...defaultColor,
                            hoverBackground: defaultColor.hover.backgroundColor,
                            hoverColor: defaultColor.hover.color,
                            hoverBorder: defaultColor.hover.borderColor,
                            activeBackground: defaultColor.active.backgroundColor,
                            activeColor: defaultColor.active.color,
                            activeBorder: defaultColor.active.borderColor,
                            disableBackground: defaultColor.disable.backgroundColor,
                            disableColor: defaultColor.disable.color,
                            disableBorder: defaultColor.disable.borderColor,
                        })
                        break
                    }
                }
                break
            case 'tertiary':
                switch (category) {
                    case 'active': {
                        const { activeColor } = Button.tertiary
                        setStyle({
                            ...activeColor,
                            hoverBackground: activeColor.hover.backgroundColor,
                            hoverColor: activeColor.hover.color,
                            hoverBorder: activeColor.hover.borderColor,
                            activeBackground: activeColor.active.backgroundColor,
                            activeColor: activeColor.active.color,
                            activeBorder: activeColor.active.borderColor,
                            disableBackground: activeColor.disable.backgroundColor,
                            disableColor: activeColor.disable.color,
                            disableBorder: activeColor.disable.borderColor,
                        })
                        break
                    }
                    case 'success': {
                        const { successColor } = Button.tertiary
                        setStyle({
                            ...successColor,
                            hoverBackground: successColor.hover.backgroundColor,
                            hoverColor: successColor.hover.color,
                            hoverBorder: successColor.hover.borderColor,
                            activeBackground: successColor.active.backgroundColor,
                            activeColor: successColor.active.color,
                            activeBorder: successColor.active.borderColor,
                            backgroundColor: successColor.backgroundColor,
                            disableBackground: successColor.disable.backgroundColor,
                            disableColor: successColor.disable.color,
                            disableBorder: successColor.disable.borderColor,
                        })
                        break
                    }
                    case 'danger': {
                        const { dangerColor } = Button.tertiary
                        setStyle({
                            ...dangerColor,
                            hoverBackground: dangerColor.hover.backgroundColor,
                            hoverColor: dangerColor.hover.color,
                            hoverBorder: dangerColor.hover.borderColor,
                            activeBackground: dangerColor.active.backgroundColor,
                            activeColor: dangerColor.active.color,
                            activeBorder: dangerColor.active.borderColor,
                            disableBackground: dangerColor.disable.backgroundColor,
                            disableColor: dangerColor.disable.color,
                            disableBorder: dangerColor.disable.borderColor,
                        })
                        break
                    }
                    default: {
                        const { defaultColor } = Button.tertiary
                        setStyle({
                            ...defaultColor,
                            hoverBackground: defaultColor.hover.backgroundColor,
                            hoverColor: defaultColor.hover.color,
                            hoverBorder: defaultColor.hover.borderColor,
                            activeBackground: defaultColor.active.backgroundColor,
                            activeColor: defaultColor.active.color,
                            activeBorder: defaultColor.active.borderColor,
                            disableBackground: defaultColor.disable.backgroundColor,
                            disableColor: defaultColor.disable.color,
                            disableBorder: defaultColor.disable.borderColor,
                        })
                        break
                    }
                }
                break
            default:
                switch (category) {
                    case 'active': {
                        const { activeColor } = Button.primary
                        setStyle({
                            ...activeColor,
                            hoverBackground: activeColor.hover.backgroundColor,
                            hoverColor: activeColor.hover.color,
                            hoverBorder: activeColor.hover.borderColor,
                            activeBackground: activeColor.active.backgroundColor,
                            activeColor: activeColor.active.color,
                            activeBorder: activeColor.active.borderColor,
                            disableBackground: activeColor.disable.backgroundColor,
                            disableColor: activeColor.disable.color,
                            disableBorder: activeColor.disable.borderColor,
                        })
                        break
                    }
                    case 'success': {
                        const { successColor } = Button.primary
                        setStyle({
                            ...successColor,
                            hoverBackground: successColor.hover.backgroundColor,
                            hoverColor: successColor.hover.color,
                            hoverBorder: successColor.hover.borderColor,
                            activeBackground: successColor.active.backgroundColor,
                            activeColor: successColor.active.color,
                            activeBorder: successColor.active.borderColor,
                            disableBackground: successColor.disable.backgroundColor,
                            disableColor: successColor.disable.color,
                            disableBorder: successColor.disable.borderColor,
                        })
                        break
                    }
                    case 'danger': {
                        const { dangerColor } = Button.primary
                        setStyle({
                            ...dangerColor,
                            hoverBackground: dangerColor.hover.backgroundColor,
                            hoverColor: dangerColor.hover.color,
                            hoverBorder: dangerColor.hover.borderColor,
                            activeBackground: dangerColor.active.backgroundColor,
                            activeColor: dangerColor.active.color,
                            activeBorder: dangerColor.active.borderColor,
                            disableBackground: dangerColor.disable.backgroundColor,
                            disableColor: dangerColor.disable.color,
                            disableBorder: dangerColor.disable.borderColor,
                        })
                        break
                    }
                    default: {
                        const { defaultColor } = Button.primary
                        setStyle({
                            ...defaultColor,
                            hoverBackground: defaultColor.hover.backgroundColor,
                            hoverColor: defaultColor.hover.color,
                            hoverBorder: defaultColor.hover.borderColor,
                            activeBackground: defaultColor.active.backgroundColor,
                            activeColor: defaultColor.active.color,
                            activeBorder: defaultColor.active.borderColor,
                            disableBackground: defaultColor.disable.backgroundColor,
                            disableColor: defaultColor.disable.color,
                            disableBorder: defaultColor.disable.borderColor,
                        })
                        break
                    }
                }
                break
        }
    }, [children, icon, block, category, buttonType])

    return (
        <ButtonComponent
            {...style}
            disabled={block}
            className={`btn btn-${size}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {hasIcon && icon && iconPosition === 'left' && <i className={`icon-${icon}`} />}
            {children}
            {hasIcon && icon && iconPosition === 'right' && <i className={`icon-${icon}`} />}
        </ButtonComponent>
    )
}
CustomButton.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    icon: PropTypes.oneOf([
        '',
        'abajo',
        'admin',
        'advertencia',
        'arrear',
        'arriba',
        'borrar',
        'buscar',
        'calendario',
        'cancelar',
        'check',
        'cliente',
        'conciliadores',
        'derecha',
        'descargar',
        'agregar',
        'direccion',
        'editar',
        'enviar',
        'establecimiento',
        'excel',
        'genererar_c',
        'imagen',
        'info',
        'izquierda',
        'mas_info',
        'opcion',
        'pagos',
        'politicas',
        'prefactura',
        'vendedores',
        'excel2',
        'error',
        'comercio',
    ]),
    category: PropTypes.oneOf(['default', 'active', 'success', 'danger']),
    block: PropTypes.bool,
    hasIcon: PropTypes.bool,
    onClick: PropTypes.func,
    iconPosition: PropTypes.oneOf(['left', 'right']),
}

CustomButton.defaultProps = {
    size: 'lg',
    type: 'button',
    category: 'default',
    icon: '',
    buttonType: 'primary',
    block: false,
    hasIcon: Button.hasIcon,
    iconPosition: 'left',
    onClick: () => {},
}

export default CustomButton
