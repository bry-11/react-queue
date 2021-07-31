import styled from 'styled-components'
import { FontSizeLabel, Form, Input, Table, Card, Icon, Tooltip } from '../../assets'

export const InnerForm = styled.form`
    width: 50rem;
    max-width: 100%;
    margin: auto;
    padding: 1rem;

    display: ${(props) => (props.current ? 'block' : 'none')};
`

export const StyledError = styled.span`
    color: ${Form.error.color};
    background: ${Form.error.background};
    font-size: ${FontSizeLabel};
`

export const StyledInput = styled.input`
    border-radius: 5px;
    padding: 10px 1rem;
    color: ${Form.input.color};
    width: 100%;
    &::placeholder {
        color: ${Form.input.placeholder};
    }

    &:focus {
        outline-color: ${Form.input.color};
    }

    &:disabled {
        background: ${Form.input.disabledColor};
    }
`

export const StyledTextArea = styled.textarea`
    border-radius: 5px;
    padding: 10px 1rem;
    color: ${Form.input.color};
    border-color: ${Form.input.borderColor};
    width: 100%;
    &::placeholder {
        color: ${Form.input.placeholder};
    }

    &:focus {
        outline-color: ${Form.input.color};
    }

    &:disabled {
        background: ${Form.input.disabledColor};
    }
`

export const StyledText = styled.div`
    color: ${(props) => props.color ?? 'inherit'};
    width: 100%;
    display: inline-flex;
`

export const StyledLabel = styled.label`
    background: ${Form.label.background};
    font-size: 14px;
    width: 100%;
    margin-bottom: 0;

    display: flex;
    flex-direction: ${(props) => (props.isReverse ? 'row' : 'column')};
    align-items: ${(props) => (props.isReverse ? 'center' : 'start')};
    cursor: ${(props) => (props.isReverse ? 'pointer' : 'normal')};

    ${StyledInput} {
        width: ${(props) => (props.isReverse ? '1.8rem' : '100%')};
        margin-right: ${(props) => (props.isReverse ? '1rem' : '0')};
        height: ${(props) => (props.isReverse ? '1.2rem' : 'auto')};
    }

    ${StyledText} {
        margin-bottom: ${(props) => (props.isReverse ? '0' : '2px')};
    }
`

export const Wrapper = styled.div`
    background: ${Input.background};
    margin: 1rem 0;
    ${StyledInput} {
        border: solid 1px
            ${(props) => (props.hasError ? `${Form.error.color}` : `${Form.input.borderColor}`)};
    }

    ${StyledLabel} {
        color: ${(props) => (props.hasError ? `${Form.error.color}` : `${Form.label.color}`)};
    }

    &:focus-within {
        ${StyledLabel} {
            color: ${Form.label.focus};
        }
    }
`

export const StyledTextarea = styled.textarea`
    width: 100%;
    height: 81px
    margin: 4px 0 0;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px ${Table.action.border};
    background-color: ${Card.inactive.backgroundColor};
`

export const WrapperMask = styled.div`
    background: ${Input.background};
    margin: 1rem 0;
    &:focus-within {
        ${StyledLabel} {
            color: ${Form.label.focus};
        }
    }

    label {
        background: ${Form.label.background};
        font-size: 14px;
        width: 100%;
        margin-bottom: 2px;
        color: ${(props) =>
            props.hasError !== 'false' ? `${Form.error.color}` : `${Form.label.color}`};
    }

    input {
        width: 100%;
        border-radius: 5px;
        padding: 10px 1rem;
        color: ${Form.input.color};
        border: solid 1px
            ${(props) =>
                props.hasError !== 'false' ? `${Form.error.color}` : `${Form.input.borderColor}`};

        &::placeholder {
            color: ${Form.input.placeholder};
        }

        &:focus {
            outline-color: ${Form.input.color};
        }
    }
`

//Tooltip
export const TooltipIcon = styled.i`
    color: ${Icon.color};
    font-size: 11px;
    border-radius: ${Icon.borderRadius};
    border: solid 1px ${Icon.borderColor};
`

export const TooltipText = styled.div`
    cursor: pointer;
`

export const TooltipBox = styled.div`
    position: absolute;
    left: 30px;
    visibility: hidden;
    color: transparent;
    background-color: transparent;
    padding: 5px 5px;
    border-radius: 4px;
    width: 500px;
    &:before {
        content: '';
        width: 0;
        height: 0;
        left: 40px;
        position: absolute;
    }
`

export const TooltipCard = styled.div`
    width: 25px;
    position: relative;
    & ${TooltipText}:hover + ${TooltipBox} {
        visibility: visible;
        font-size: ${Tooltip.fontSize};
        color: ${Tooltip.color};
        background-color: ${Tooltip.background};
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        padding: 8px 8px;
        width: 500px;
    }
`
