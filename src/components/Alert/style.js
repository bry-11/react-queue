import styled from 'styled-components'
import { Alert } from '../../assets'

export const StyledIcon = styled.i`
    font-size: 2rem;
`
export const Wrapper = styled.div`
    background-color: ${(props) =>
        props.type === 'success'
            ? Alert.backgroundSuccess
            : props.type === 'error'
            ? Alert.backgroundError
            : Alert.backgroundWarning};

    color: ${(props) =>
        props.type === 'success'
            ? Alert.colorSuccess
            : props.type === 'error'
            ? Alert.colorError
            : Alert.colorWarning};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    width: 100%;

    box-shadow: 0 0 16px 6px rgba(59, 83, 99, 0.04);
    border: solid 0.3px
        ${(props) =>
            props.type === 'success'
                ? Alert.iconColorSucess
                : props.type === 'error'
                ? Alert.iconColorError
                : Alert.iconColorWarning};

    ${StyledIcon} {
        color: ${(props) =>
            props.type === 'success'
                ? Alert.iconColorSucess
                : props.type === 'error'
                ? Alert.iconColorError
                : Alert.iconColorWarning};
    }
`
