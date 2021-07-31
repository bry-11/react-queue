import React from 'react'
import PropTypes from 'prop-types'

import { CustomIcon, CircleIconWrapper } from './style'

export const Icon = ({ icon, ...props }) => <CustomIcon className={`icon-${icon}`} {...props} />

Icon.propTypes = {
    icon: PropTypes.oneOf([
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
        'tool_tip-33',
    ]),
}

Icon.defaultProps = {
    icon: 'comercio',
}

export const CircleIcon = ({ status, icon }) => (
    <CircleIconWrapper>
        <div className={status}>
            <div>
                <i className={icon} />
            </div>
        </div>
    </CircleIconWrapper>
)
