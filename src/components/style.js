import styled from 'styled-components'
import { Body, FontSizeLabel, FontSizeText } from '../assets'

export const CustomLabel = styled.label`
    background: ${Body.label.background};
    color: ${Body.label.color};
    font-size: ${FontSizeText};
    width: 100%;
    margin-top: 10px;
`
export const CustomError = styled.span`
    color: ${Body.error.color};
    background: ${Body.error.background};
    font-size: ${FontSizeLabel};
`
