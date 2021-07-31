import styled from 'styled-components'
import { Button } from '../../assets'

const ButtonComponent = styled.button`
    background: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: ${Button.borderRadius};
    font-size: 1em;
    padding: 0.25em 1em;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-weight: ${Button.fontWeight};
    justify-content: center;
    border: 2px solid ${(props) => props.borderColor};
    :hover {
        background: ${(props) => props.hoverBackground};
        color: ${(props) => props.hoverColor};
        border: 2px solid ${(props) => props.hoverBorder};
        text-decoration: none;
    }
    :active {
        background: ${(props) => props.activeBackground};
        color: ${(props) => props.activeColor};
        border: 2px solid ${(props) => props.activeBorder};
    }
    :disabled {
        background: ${(props) => props.disableBackground};
        color: ${(props) => props.disableColor};
        border: 2px solid ${(props) => props.disableBorder};
    }

    i {
        font-size: 1.3em;
        vertical-align: middle;
    }
`

export default ButtonComponent
