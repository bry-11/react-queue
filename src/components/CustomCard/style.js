import styled from 'styled-components'
import { Body, FontSizeTitle, Card, BorderRadius } from '../../assets'

export const PrimaryCardWrapper = styled.div`
    margin: 20px 0;
    // padding: 2%;
    border-color: ${Body.primaryCard.borderColor};
    background-color: ${Body.primaryCard.backgroundColor};
    border-radius: ${Body.primaryCard.borderRadius};
`

export const SecondaryCardWrapper = styled.div`
    margin: 20px 0;

    border: solid 0.5px ${Body.secondaryCard.borderColor};
    background-color: ${Body.secondaryCard.backgroundColor};
    border-radius: ${Body.secondaryCard.borderRadius};
`

export const InformationCardWrapper = styled.div`
    margin: 20px 0;
    border: solid 1px ${Body.informationCard.borderColor};
    background-color: ${Body.informationCard.backgroundColor};
    color: ${Body.informationCard.color};
    padding: 11px 30px;
    border-radius: ${Body.informationCard.borderRadius};
    span {
        font-weight: bold;
    }
`

export const ActionCardWrapper = styled.div`
    margin: 20px 0;
    width: 100%;
    border-radius: ${BorderRadius};
    align-items: center;
    border: solid 1px
        ${(props) => (props.active ? Card.active.borderColor : Card.inactive.borderColor)};
    background-color: ${(props) =>
        props.active ? Card.active.backgroundColor : Card.inactive.backgroundColor};
    .icon-container {
        margin: auto 0 auto 20px;
        i {
            color: ${(props) => (props.active ? Card.active.icon.color : Card.inactive.icon.color)};
            background-color: ${(props) =>
                props.active
                    ? Card.active.icon.backgroundColor
                    : Card.inactive.icon.backgroundColor};
        }
    }
    .title-container {
        display: flex;
        h1 {
            font-weight: normal;
            font-size: ${FontSizeTitle};
            color: ${(props) => (props.active ? Card.active.color : Card.inactive.color)};
            margin: 1.5rem 30px;
        }
        .separator {
            width: 1px;
            height: 30px;
            margin: 22px;
            background-color: ${(props) =>
                props.active ? Card.separator.active.color : Card.separator.inactive.color};
            background-color: ${Card.separator.color};
        }
    }
    .btn-container {
        display: flex;
        align-items: center;
        width: 100%;
        flex: 1;
        justify-content: flex-end;
        justify-content: ${(props) => (props.centerAlign ? 'center' : 'flex-end')};

        button {
            width: 240px;
            max-width: 100%;
            margin: auto;
            margin: auto 20px;
        }
    }
`
