import styled from 'styled-components'
import { Login, Icon } from '../../assets'

export const CustomIcon = styled.i`
    color: ${Icon.color};
    background-color: ${Icon.backgroundColor};
    font-size: ${(props) => props.size};
    border-radius: ${Icon.borderRadius};
    border: solid 1px ${Icon.borderColor};
`

export const CircleIconWrapper = styled.div`
    .on {
        margin: auto;
        border: solid 1px ${Login.logo.on.backgroundColor};
        background-color: ${Login.backgroundColor};
        border-radius: 50%;
        width: 90px;
        padding: 4px;
        height: 90px;
        div {
            background-color: ${Login.logo.on.backgroundColor};
            width: 80px;
            border-radius: 50%;
            height: 80px;
            border: solid 1px ${Login.logo.on.border};
            padding: 10px;
            i {
                color: ${Login.logo.on.color};
                font-size: 40px;
            }
        }
    }
    .off {
        margin: auto;
        border: solid 1px ${Login.logo.off.backgroundColor};
        background-color: ${Login.backgroundColor};
        border-radius: 50%;
        width: 90px;
        padding: 4px;
        height: 90px;
        div {
            background-color: ${Login.logo.off.backgroundColor};
            width: 80px;
            border-radius: 50%;
            height: 80px;
            padding: 10px;
            i {
                color: ${Login.logo.off.color};
                font-size: 40px;
            }
        }
    }
`
