import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { ToastNotification } from '../../assets'
import sizes from '../../styles/media'

export const ToastContainerT = styled(ToastContainer)`
    .Toastify__toast--error {
        background: ${ToastNotification.error.backgroundColor};
        color: ${ToastNotification.error.color};
        border: solid 0.3px ${ToastNotification.error.border};
        border-radius: 10px;
        padding: 10px 20px;
        font-weight: 600;
    }

    .Toastify__toast--info {
        background: ${ToastNotification.info.backgroundColor};
        color: ${ToastNotification.info.color};
        border: solid 0.3px ${ToastNotification.info.border};
        border-radius: 10px;
        padding: 10px 20px;
        font-weight: 600;
    }

    .Toastify__toast--success {
        background: ${ToastNotification.success.backgroundColor};
        color: ${ToastNotification.success.color};
        border: solid 0.3px ${ToastNotification.success.border};
        border-radius: 10px;
        padding: 10px 20px;
        font-weight: 600;
    }

    .Toastify__close-button {
        color: ${ToastNotification.closeButtonColor};
        font-size: 30px;
        font-variant: all-small-caps;
        line-height: 1;
        opacity: 1;
        font-weight: 100;
    }

    &.Toastify__toast-container {
        width: 400px;
    }

    .Toastify__toast {
        min-height: 60px;
    }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    cursor: pointer;
    padding: 0;
`

export const ToastContainerBox = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    text-align: center;
    max-height: 60px;
    border: 1.5px solid ${(props) => props.color};
    border-radius: 0.7em;
    background-color: ${(props) => props.color};
    background: red;

    .toast-icon-container {
        background: ${(props) => props.color};
        color: ${(props) => props.color};
        height: 100%;
        width: 72px;
        margin: 0;
        padding: 0px;
    }
`

export const ToastText = styled.p`
    display: flex;
    align-items: left;
    justify-content: left;
    text-align: left;
    font-size: 14px;
    margin: auto;
    padding: 0px;
    width: 100%;
    color: #ffffff;
    @media ${sizes.xs} {
    }
    @media ${sizes.md} {
    }
`

export const TextContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    border-left: 1px solid #ffffff;
    margin: 5px;
    padding-left: 10px;
`
